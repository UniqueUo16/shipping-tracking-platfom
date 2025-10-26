const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const authRoutes = require("./routes/auth.js")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoutes);




// ==== FILE DATABASE =============================================================
const DB_FILE = path.join(__dirname, "bookings.json");
function loadBookings() {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
}
function saveBookings(bookings) {
  fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
}

mongoose.connect(process.env.MongoDB_URI)
.then(() => console.log("✅ MongoDb connected"))
.catch((err) => console.log(err));



//======================================================================================
// ==== EMAIL TRANSPORT ====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ==== SHIPMENTS STORE ====
let shipments = {};

// ==== HELPER: GENERATE PDF RECEIPT ====
function generateReceipt(booking) {
  const receiptDir = path.join(__dirname, "receipts");
  if (!fs.existsSync(receiptDir)) fs.mkdirSync(receiptDir);

  const pdfPath = path.join(receiptDir, `receipt_${booking.trackingId}.pdf`);
  const doc = new PDFDocument({ margin: 50 });

  doc.pipe(fs.createWriteStream(pdfPath));

  // ===== Header =====
  doc.fontSize(22).text("FastShip Logistics", { align: "center" });
  doc.moveDown(0.5);
  doc.fontSize(16).text("📦 Shipment Receipt", { align: "center" });
  doc.moveDown(2);
  
  // ===== Booking Details =====
  doc.fontSize(12).text(`Tracking ID: ${booking.trackingId}`);
  doc.text(`Name: ${booking.customer.name}`);
  doc.text(`Email: ${booking.customer.email}`);
  doc.text(`Phone: ${booking.customer.phone}`);
  doc.moveDown(1);

  doc.text(`Pickup Address: ${booking.shipment.pickupAddress}`);
  doc.text(`Delivery Address: ${booking.shipment.deliveryAddress}`);
  doc.text(`Weight: ${booking.shipment.weight} kg`);
  doc.moveDown(1);

  doc.text(`Service Type: ${booking.service.type}`);
  doc.text(`Deadline: ${booking.service.deadline} at ${booking.service.time}`);
  doc.text(`Payment Status: ${booking.service.paymentStatus}`);
  doc.text(`Status: ${booking.status}`);
  doc.text(`Created At: ${new Date(booking.createdAt).toLocaleString()}`);

  // ===== Footer =====
  doc.moveDown(2);
  doc.fontSize(10).text("Thank you for shipping with FastShip Logistics.", {
    align: "center",
  });

  doc.end();
  return pdfPath;
}
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});


// ==== BOOKING ROUTE ====
app.post("/api/bookings", (req, res) => {
  const {
    name, email, phone,
    pickupAddress, deliveryAddress,
    weight, serviceType, deadline, time,
    pickupCoords, deliveryCoords,
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
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);
  saveBookings(bookings);

  // === CREATE FAKE PATH ===
  if (pickupCoords && deliveryCoords) {
    shipments[trackingId] = {
      path: [
        { lat: pickupCoords[0], lng: pickupCoords[1] },
        {
          lat: (pickupCoords[0] + deliveryCoords[0]) / 2,
          lng: (pickupCoords[1] + deliveryCoords[1]) / 2,
        },
        { lat: deliveryCoords[0], lng: deliveryCoords[1] }
      ],
      index: 0,
    };
  }

  // === GENERATE RECEIPT PDF ===
  const pdfPath = generateReceipt(newBooking);

  // === SEND EMAIL WITH RECEIPT ===
  const mailOptions = {
    from: `"FastShip Logistics" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "📦 Booking Confirmed - Receipt Attached",
    text: `Hi ${name},\n\nYour shipment has been booked!\nTracking ID: ${trackingId}\n\nThanks for choosing FastShip Logistics.`,
    attachments: [
      {
        filename: `receipt_${trackingId}.pdf`,
        path: pdfPath,
      },
    ],
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.error("❌ Email error:", err);
    } else {
      console.log(`📧 Receipt sent to ${email}`);
    }
  });

  res.json({ success: true, trackingId, booking: newBooking, message: "Booking saved!" });
});

// ==== TRACKING ROUTE ====
app.get("/api/bookings/track/:trackingId", (req, res) => {
  const { trackingId } = req.params;
  const bookings = loadBookings();
  const booking = bookings.find((b) => b.trackingId === trackingId);
  if (!booking) return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, booking });
});

// ==== SIMULATE SHIPMENT MOVEMENT ====
setInterval(() => {
  Object.keys(shipments).forEach((id) => {
    const s = shipments[id];
    if (s.index < s.path.length - 1) {
      s.index++;
    }
  });
}, 5000); // move every 5s

// ==== GET CURRENT SHIPMENT LOCATION ====
app.get("/api/track/:trackingId", (req, res) => {
  const { trackingId } = req.params;

  // If shipment already in memory, return it
  if (shipments[trackingId]) {
    const s = shipments[trackingId];
    const currentPoint = s.path[s.index];
    return res.json({
      success: true,
      location: currentPoint,
      path: s.path,
      progress: s.index + 1,
      total: s.path.length,
    });
  }

  // Otherwise, rebuild from stored booking
  const bookings = loadBookings();
  const booking = bookings.find((b) => b.trackingId === trackingId);
  if (!booking) {
    return res.status(404).json({ success: false, message: "Tracking ID not found" });
  }

  // Fallback: generate a static path (pickup → delivery)
  if (booking.shipment && booking.shipment.pickupAddress && booking.shipment.deliveryAddress) {
    const pickup = booking.pickupCoords || [0, 0];
    const delivery = booking.deliveryCoords || [0, 0];

    shipments[trackingId] = {
      path: [
        { lat: pickup[0], lng: pickup[1] },
        { lat: (pickup[0] + delivery[0]) / 2, lng: (pickup[1] + delivery[1]) / 2 },
        { lat: delivery[0], lng: delivery[1] },
      ],
      index: 0,
    };

    const s = shipments[trackingId];
    const currentPoint = s.path[s.index];
    return res.json({
      success: true,
      location: currentPoint,
      path: s.path,
      progress: s.index + 1,
      total: s.path.length,
    });
  }

  return res.status(404).json({ success: false, message: "No coordinates available" });
});

// ==== GET ALL BOOKINGS ====
app.get("/api/bookings", (req, res) => {
  try {
    const bookings = loadBookings(); // read from bookings.json
    res.json(bookings);
  } catch (error) {
    console.error("❌ Error loading bookings:", error);
    res.status(500).json({ message: "Failed to load bookings" });
  }
});


// ==== DELETE BOOKING ====
app.delete("/api/bookings/:id", (req, res) => {
  try {
    const { id } = req.params;
    const bookings = loadBookings();
    const updated = bookings.filter((b) => b.id != id);

    if (updated.length === bookings.length)
      return res.status(404).json({ message: "Booking not found" });

    saveBookings(updated);
    res.json({ success: true, message: "Booking deleted" });
  } catch (error) {
    console.error("❌ Error deleting booking:", error);
    res.status(500).json({ message: "Server error deleting booking" });
  }
});


app.listen(5000, () => console.log("🌐 Server running at http://localhost:5000"));
