"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const packageIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/emoji/48/000000/package-emoji.png",
  iconSize: [32, 32],
});

export default function TrackerMap() {
  const [position, setPosition] = useState([37.7749, -122.4194]); // Start point

  // Fake movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(([lat, lng]) => [lat + 0.001, lng + 0.001]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-[400px] w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position} icon={packageIcon}>
        <Popup>Your package is here!</Popup>
      </Marker>
    </MapContainer>
  );
}
