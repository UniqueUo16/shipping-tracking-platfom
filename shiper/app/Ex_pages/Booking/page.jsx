"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Booking() {
    const router = useRouter();
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

    // Convert address to coordinates using OpenStreetMap Nominatim API
    const fetchCoordinates = async (address) => {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                address
            )}`
        );
        const data = await res.json();
        if (!data || data.length === 0) return null;
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get coordinates
        const pickupCoords = await fetchCoordinates(form.pickupAddress);
        const deliveryCoords = await fetchCoordinates(form.deliveryAddress);

        if (!pickupCoords || !deliveryCoords) {
            alert("Invalid address. Please check pickup and delivery addresses.");
            return;
        }

        const bookingData = { ...form, pickupCoords, deliveryCoords };

        const res = await fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData),
        });

        const data = await res.json();
        alert(`✅ Saved! Tracking ID: ${data.trackingId}`);
        router.push(`/receipt/${data.trackingId}`);  // instead of tracker

    };

    return (
        <div
            className="mt-[7rem] flex justify-center items-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/imgs/air-cargo_.avif')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
            }}
        >
            <form
                onSubmit={handleSubmit}
                className="p-6 w-full sm:w-[40vw] text-white bg-black/65 space-y-4 rounded-lg"
            >
                <h2 className="text-2xl font-bold mb-4">📦 Book a Shipment</h2>

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border p-2 w-full rounded"
                />

                <input
                    type="text"
                    name="pickupAddress"
                    value={form.pickupAddress}
                    onChange={handleChange}
                    placeholder="Pickup Address, Make Sure to Enter Real working address to aviod problems"
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="text"
                    name="deliveryAddress"
                    value={form.deliveryAddress}
                    onChange={handleChange}
                    placeholder="Delivery Address ,Make Sure to Enter Real working address to aviod problems"
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    placeholder="Package Weight (kg)"
                    className="border p-2 w-full rounded"
                />

                <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    className="border p-2 w-full rounded text-gray-500"
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
                    className="border p-2 w-full rounded bg-gray-700"
                />

                <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="border p-2 w-full rounded bg-gray-700"
                />

                <button
                    type="submit"
                    className="w-full bg-gray-700 active:bg-white text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition"
                >
                    Send <SendIcon size={18} />
                </button>
            </form>
        </div>
    );
}
