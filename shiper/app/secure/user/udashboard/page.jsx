"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

// Import Montserrat for this component
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this booking?");
    if (!confirm) return;

    await fetch(`http://localhost:5000/api/bookings/${id}`, { method: "DELETE" });
    fetchBookings();
  };

  return (
    <div className={`${montserrat.className} p-6 text-black mt-[5rem] max-w-4xl mx-auto bg-black sm:bg-gray-100`}>
      <h2 className="text-2xl font-bold mb-6 sm:text-black text-gray-100">
        🌐 All Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-gray-500">No bookings found.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{b.name}</h3>
              <p className="text-sm text-gray-500">{b.email}</p>

              <div className="mt-3 space-y-1 text-sm">
                <p>
                  <span className="font-medium">Deadline:</span> {b.deadline}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {b.time}
                </p>
              </div>

              <div className="mt-3">
                <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {b.id}
                </span>
              </div>

              <button
                onClick={() => handleDelete(b.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded m-2"
              >
                ❌ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
