"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import Leaflet components (SSR safe)
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then(mod => mod.Polyline), { ssr: false });

import "leaflet/dist/leaflet.css";

export default function TrackerPage() {
  const [trackingId, setTrackingId] = useState("");
  const [location, setLocation] = useState(null);
  const [path, setPath] = useState([]);
  const [error, setError] = useState("");

  const markerRef = useRef(null);
  const [packageIcon, setPackageIcon] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      setPackageIcon(
        new L.Icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/1554/1554591.png",
          iconSize: [35, 35],
        })
      );
    }
  }, []);

  const fetchLocation = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/track/${id}`);
      const data = await res.json();
      if (data.success) {
        setLocation(data.location);
        setPath(data.path || []);
        setError("");
      } else {
        setError(data.message || "Invalid Tracking ID");
      }
    } catch {
      setError("Error fetching location");
    }
  };

  useEffect(() => {
    if (!trackingId) return;
    fetchLocation(trackingId);
    const interval = setInterval(() => fetchLocation(trackingId), 3000);
    return () => clearInterval(interval);
  }, [trackingId]);

  return (
    <div className="mt-[6rem] p-4 text-black flex flex-col items-center space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">📍 Shipment Tracker</h1>

      {/* Tracking ID Input */}
      <div className="w-full max-w-md flex flex-col sm:flex-row sm:items-center gap-2">
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID"
          className="border rounded px-3 py-2 w-full sm:flex-1"
        />
        <button
          onClick={() => fetchLocation(trackingId)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Track
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm text-center sm:text-base">
        <Link href="/" className="underline text-blue-600">Exit</Link>
        <Link href="/secure/user/udashboard" className="underline text-blue-600">See All Bookings</Link>
      </div>

      {/* Error message */}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Map */}
      {location && packageIcon && (
        <div className="w-full max-w-4xl h-[60vh] mt-4 rounded overflow-hidden shadow-md">
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {path.length > 0 && (
              <Polyline
                positions={path.map(p => [p.lat, p.lng])}
                pathOptions={{ color: "blue", weight: 4, opacity: 0.6 }}
              />
            )}
            <Marker ref={markerRef} position={[location.lat, location.lng]} icon={packageIcon}>
              <Popup>📦 Your package is here</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}
