"use client";

import { useState, useEffect } from "react";
import { SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Booking() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    weight: "",
    serviceType: "Standard",
    deadline: "",
    time: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const fetchCoordinates = async (address) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await res.json();
      if (!data || data.length === 0) return null;
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const pickupCoords = await fetchCoordinates(form.pickupAddress);
      const deliveryCoords = await fetchCoordinates(form.deliveryAddress);

      if (!pickupCoords || !deliveryCoords) {
        alert("Invalid address. Please check pickup and delivery addresses.");
        setSubmitting(false);
        return;
      }

      const bookingData = { ...form, pickupCoords, deliveryCoords };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ include cookie so backend can authenticate
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Booking failed");

      alert(`✅ Saved! Tracking ID: ${data.trackingId}`);
      router.push(`/receipt/${data.trackingId}`);
    } catch (err) {
      alert(`❌ ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

 
  return (
    <div
      className="mt-28 flex justify-center items-start bg-black/50 bg-cover bg-center min-h-screen p-4"
      style={{ backgroundImage: "url('/imgs/air-cargo_.avif')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-6 w-full sm:w-[450px] text-white bg-black/70 space-y-4 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">📦 Book a Shipment</h2>

        {["name", "email", "phone", "pickupAddress", "deliveryAddress", "weight"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : field === "weight" ? "number" : "text"}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={["name", "email", "pickupAddress", "deliveryAddress"].includes(field)}
          />
        ))}

        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="border p-2 w-full rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
          <option value="Same-Day">Same-Day</option>
        </select>

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-2 rounded flex items-center justify-center gap-2 transition ${
            submitting ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {submitting ? "Booking..." : "Send"} <SendIcon size={18} />
        </button>
      </form>
    </div>
  );
}
