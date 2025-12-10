"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ReceiptPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    async function fetchBooking() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/track/${id}`
      );
      const data = await res.json();
      if (data.success) setBooking(data.booking);
    }
    if (id) fetchBooking();
  }, [id]);

  if (!booking)
    return <p className="mt-[7rem] text-center text-sm sm:text-base">Loading receipt...</p>;

  return (
    <div className="mt-[7rem] px-4 sm:px-6 flex justify-center">
      <div className="bg-gray-100 text-black shadow-xl rounded-xl p-5 sm:p-8 w-full max-w-2xl">

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          📦 Shipment Receipt
        </h1>
        <h1 className="font-mono font-bold text-center mb-6">
          Please copy your tracker id , and proceed to the next stage
        </h1>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base">
          <p className="sm:col-span-2">
            <strong>Tracking ID:</strong> {booking.trackingId}
          </p>

          <p className="sm:col-span-2">
            <strong>Customer:</strong> {booking.customer.name} ({booking.customer.email}, {booking.customer.phone})
          </p>

          <p className="sm:col-span-2">
            <strong>Pickup Address:</strong> {booking.shipment.pickupAddress}
          </p>

          <p className="sm:col-span-2">
            <strong>Delivery Address:</strong> {booking.shipment.deliveryAddress}
          </p>

          <p>
            <strong>Weight:</strong> {booking.shipment.weight} kg
          </p>

          <p>
            <strong>Service:</strong> {booking.service.type}
          </p>

          <p>
            <strong>Deadline:</strong> {booking.service.deadline} at {booking.service.time}
          </p>

          <p>
            <strong>Status:</strong> <span className="capitalize">{booking.status}</span>
          </p>

          <p className="sm:col-span-2">
            <strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            🖨️ Print Receipt
          </button>

          <div className="text-center text-sm flex flex-col gap-1">
            <Link href="/tracker" className="text-blue-700 hover:underline">
              Track Shipping
            </Link>
            <Link href="/secure/user/udashboard" className="text-blue-700 hover:underline">
              See All Bookings
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
