const nodemailer = require("nodemailer");

async function sendReceiptEmail(to, subject, text, attachmentPath) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use Outlook, SendGrid, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"FastShip Logistics" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    attachments: [
      {
        filename: "shipment-receipt.pdf",
        path: attachmentPath,
      },
    ],
  });
}

module.exports = sendReceiptEmail;
