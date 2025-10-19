"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ReceiptPage() {
  const { id } = useParams(); // trackingId
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    async function fetchBooking() {
      const res = await fetch(`http://localhost:5000/api/bookings/track/${id}`);
      const data = await res.json();
      if (data.success) setBooking(data.booking);
    }
    if (id) fetchBooking();
  }, [id]);

  if (!booking) return <p className="mt-[7rem] text-center">Loading receipt...</p>;

  return (
    <div className="mt-[7rem] flex justify-center items-center p-6">
      <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">📦 Shipment Receipt</h1>

        <div className="space-y-2">
          <p><strong>Tracking ID:</strong> {booking.trackingId}</p>
          <p><strong>Customer:</strong> {booking.customer.name} ({booking.customer.email}, {booking.customer.phone})</p>
          <p><strong>Pickup Address:</strong> {booking.shipment.pickupAddress}</p>
          <p><strong>Delivery Address:</strong> {booking.shipment.deliveryAddress}</p>
          <p><strong>Weight:</strong> {booking.shipment.weight} kg</p>
          <p><strong>Service:</strong> {booking.service.type}</p>
          <p><strong>Deadline:</strong> {booking.service.deadline} at {booking.service.time}</p>
          <p><strong>Status:</strong> {booking.status}</p>
          <p><strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            🖨️ Print Receipt
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2  text-gray-600 rounded "
          >
           <u> <Link href="/tracker">Track Shipping</Link> </u>
          </button>
        </div>
      </div>
    </div>
  );
}
