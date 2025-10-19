const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateReceipt(booking) {
  const receiptsDir = path.join(__dirname, "../receipts");
  if (!fs.existsSync(receiptsDir)) fs.mkdirSync(receiptsDir);

  const filePath = path.join(receiptsDir, `${booking.trackingId}.pdf`);
  const doc = new PDFDocument({ margin: 50 });

  doc.pipe(fs.createWriteStream(filePath));

  // Load Fonts
  const fontRegular = path.join(__dirname, "../fonts/Montserrat-Regular.ttf");
  const fontBold = path.join(__dirname, "../fonts/Montserrat-Bold.ttf");

  doc.registerFont("Montserrat", fontRegular);
  doc.registerFont("Montserrat-Bold", fontBold);

  // Header
  doc.font("Montserrat-Bold").fontSize(20).text("FastShip Logistics", { align: "left" });
  doc.moveDown(0.5);
  doc.font("Montserrat").fontSize(12).text("📦 Shipment Receipt", { align: "left" });
  doc.moveDown();

  // Booking Info
  doc.font("Montserrat").fontSize(12).text(`Tracking ID: ${booking.trackingId}`);
  doc.text(`Customer: ${booking.customer.name}`);
  doc.text(`Email: ${booking.customer.email}`);
  doc.text(`Phone: ${booking.customer.phone}`);
  doc.moveDown();

  // Shipment Info
  doc.text(`Pickup: ${booking.shipment.pickupAddress}`);
  doc.text(`Delivery: ${booking.shipment.deliveryAddress}`);
  doc.text(`Weight: ${booking.shipment.weight} kg`);
  doc.text(`Service: ${booking.service.type}`);
  doc.moveDown();

  // Status
  doc.text(`Deadline: ${booking.service.deadline} at ${booking.service.time}`);
  doc.text(`Status: ${booking.status}`);
  doc.text(`Created: ${new Date(booking.createdAt).toLocaleString()}`);

  // Footer
  doc.moveDown(2);
  doc.font("Montserrat").fontSize(10).text("Thank you for choosing FastShip Logistics.", {
    align: "center",
  });

  doc.end();
  return filePath;
}

module.exports = generateReceipt;
