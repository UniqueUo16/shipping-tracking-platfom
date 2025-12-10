const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const authRoutes = require("./routes/auth.js");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/* ===================== MIDDLEWARE ===================== */
app.use(cors({
  origin: [
    "https://shipfastlogistics.vercel.app",
    "http://localhost:3000"
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

/* ===================== DATABASE (JSON) ===================== */
const DB_FILE = path.join(__dirname, "bookings.json");

function loadBookings() {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
}

function saveBookings(bookings) {
  fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
}

/* ===================== MONGO ===================== */
mongoose.connect(process.env.MongoDB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

/* ===================== EMAIL ===================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify SMTP once on startup
transporter.verify()
  .then(() => console.log("✅ SMTP Ready"))
  .catch((err) => console.error("❌ SMTP Error:", err));

/* ===================== SHIPMENTS MEMORY ===================== */
let shipments = {};

/* ===================== PDF RECEIPT ===================== */
function generateReceipt(booking) {
  return new Promise((resolve, reject) => {

    const receiptDir = path.join(__dirname, "receipts");
    if (!fs.existsSync(receiptDir)) fs.mkdirSync(receiptDir);

    const pdfPath = path.join(receiptDir, `receipt_${booking.trackingId}.pdf`);
    const doc = new PDFDocument({ margin: 50 });

    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    // HEADER
    doc.fontSize(22).text("FastShip Logistics", { align: "center" });
    doc.moveDown();
    doc.fontSize(16).text("📦 Shipment Receipt", { align: "center" });
    doc.moveDown(2);

    // DETAILS
    doc.fontSize(12);
    doc.text(`Tracking ID: ${booking.trackingId}`);
    doc.text(`Name: ${booking.customer.name}`);
    doc.text(`Email: ${booking.customer.email}`);
    doc.text(`Phone: ${booking.customer.phone}`);
    doc.moveDown();

    doc.text(`Pickup: ${booking.shipment.pickupAddress}`);
    doc.text(`Delivery: ${booking.shipment.deliveryAddress}`);
    doc.text(`Weight: ${booking.shipment.weight} kg`);
    doc.moveDown();

    doc.text(`Service: ${booking.service.type}`);
    doc.text(`Deadline: ${booking.service.deadline} at ${booking.service.time}`);
    doc.text(`Payment: ${booking.service.paymentStatus}`);
    doc.text(`Status: ${booking.status}`);
    doc.text(`Created: ${new Date(booking.createdAt).toLocaleString()}`);

    doc.moveDown(2);
    doc.fontSize(10).text("Thank you for shipping with FastShip Logistics!", { align: "center" });

    doc.end();

    stream.on("finish", () => resolve(pdfPath));
    stream.on("error", reject);
  });
}

/* ===================== ROUTE LOGGER ===================== */
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

/* ===================== BOOKING ROUTE ===================== */
app.post("/api/bookings", async (req, res) => {

  const {
    name, email, phone,
    pickupAddress, deliveryAddress,
    weight, serviceType, deadline, time,
    pickupCoords, deliveryCoords
  } = req.body;

  const bookings = loadBookings();
  const trackingId = Math.random().toString(36).substring(2, 10).toUpperCase();

  const newBooking = {
    id: Date.now(),
    trackingId,
    customer: { name, email, phone },
    shipment: { pickupAddress, deliveryAddress, weight },
    service: { type: serviceType, deadline, time, paymentStatus: "Pending" },
    status: "Booked",
    createdAt: new Date().toISOString()
  };

  bookings.push(newBooking);
  saveBookings(bookings);

  // FAKE PATH
  if (pickupCoords && deliveryCoords) {
    shipments[trackingId] = {
      path: [
        { lat: pickupCoords[0], lng: pickupCoords[1] },
        {
          lat: (pickupCoords[0] + deliveryCoords[0]) / 2,
          lng: (pickupCoords[1] + deliveryCoords[1]) / 2
        },
        { lat: deliveryCoords[0], lng: deliveryCoords[1] }
      ],
      index: 0
    };
  }

  try {
    // CREATE PDF
    const pdfPath = await generateReceipt(newBooking);

    // SEND EMAIL
    await transporter.sendMail({
      from: `"FastShip Logistics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "📦 Booking Confirmed — Receipt Attached",
      text: `Hi ${name},

Your shipment has been booked!

Tracking ID: ${trackingId}

Thank you for choosing FastShip Logistics.`,
      attachments: [
        {
          filename: `receipt_${trackingId}.pdf`,
          path: pdfPath
        }
      ]
    });

    console.log(`✅ EMAIL SENT TO ${email}`);

  } catch (err) {
    console.error("❌ EMAIL FAILED:", err);
  }

  res.json({
    success: true,
    trackingId,
    booking: newBooking
  });
});

/* ===================== TRACKING ===================== */
app.get("/api/bookings/track/:trackingId", (req, res) => {
  const { trackingId } = req.params;
  const bookings = loadBookings();
  const booking = bookings.find(b => b.trackingId === trackingId);

  if (!booking) return res.status(404).json({ success: false });

  res.json({ success: true, booking });
});

/* ===================== MOVEMENT SIMULATION ===================== */
setInterval(() => {
  Object.values(shipments).forEach(s => {
    if (s.index < s.path.length - 1) s.index++;
  });
}, 5000);

/* ===================== LOCATION ===================== */
app.get("/api/track/:trackingId", (req, res) => {

  const s = shipments[req.params.trackingId];
  if (!s) return res.status(404).json({ success: false });

  const point = s.path[s.index];

  res.json({
    success: true,
    location: point,
    path: s.path,
    progress: s.index + 1,
    total: s.path.length
  });

});

/* ===================== BOOKINGS ===================== */
app.get("/api/bookings", (req, res) => {
  res.json(loadBookings());
});

app.delete("/api/bookings/:id", (req, res) => {

  const bookings = loadBookings();
  saveBookings(bookings.filter(b => b.id != req.params.id));

  res.json({ success: true });

});

/* ===================== SERVER ===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🌐 Server running on port ${PORT}`)
);
