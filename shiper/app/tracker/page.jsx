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

  // Dynamically import L and create icon after window exists
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

  // Fetch location & path from backend
  const fetchLocation = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/track/${id}`);
      const data = await res.json();
      if (data.success) {
        setLocation(data.location);
        setPath(data.path || []);
        setError("");
      } else {
        setError(data.message || "Invalid Tracking ID");
      }
    } catch (err) {
      setError("Error fetching location");
    }
  };

  // Poll every 3s
  useEffect(() => {
    if (!trackingId) return;
    fetchLocation(trackingId);
    const interval = setInterval(() => fetchLocation(trackingId), 3000);
    return () => clearInterval(interval);
  }, [trackingId]);

  return (
    <div className="mt-[6rem] text-black flex flex-col items-center p-6 space-y-4">
      <h1 className="text-2xl font-bold">📍 Shipment Tracker</h1>

      {/* Tracking ID Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID"
          className="border px-3 py-2 rounded w-64"
        />
        <button
          onClick={() => fetchLocation(trackingId)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Track
        </button>
        <Link href="/"><u>Exit</u></Link>
      </div>

      {/* Error message */}
      {error && <p className="text-red-600">{error}</p>}

      {/* Map */}
      {location && packageIcon && (
        <div className="w-full h-[60vh] max-w-4xl mt-4">
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Polyline path */}
            {path.length > 0 && (
              <Polyline
                positions={path.map(p => [p.lat, p.lng])}
                pathOptions={{ color: "blue", weight: 4, opacity: 0.6 }}
              />
            )}

            {/* Marker */}
            <Marker
              ref={markerRef}
              position={[location.lat, location.lng]}
              icon={packageIcon}
            >
              <Popup>📦 Your package is here</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}
