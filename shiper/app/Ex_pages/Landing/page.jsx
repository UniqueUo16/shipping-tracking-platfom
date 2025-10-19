"use client";

import { Typewriter } from "react-simple-typewriter";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Landing() {
  return (
    <div
      className={`${montserrat.className} relative h-[70vh] w-full overflow-hidden sm:mt-12`}
    >
      {/* Background image */}
      <Image
        src="/imgs/maersk-air-cargo.avif"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 sm:px-16">
        <h1 className="sm:text-6xl text-4xl font-bold tracking-wide leading-tight drop-shadow-lg">
          Ship Your Goods With Us
        </h1>

        <span className="mt-4 sm:text-2xl text-lg font-medium text-gray-200 tracking-wider">
          <Typewriter
            words={[
              "Fast & Secure Shipping",
              "Transform Your Market Reach",
              "Join Us Today",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <button className="px-6 py-3 bg-[#00A0D0] hover:bg-[#008bb8] text-white rounded-md shadow-md font-semibold transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-[#00A0D0] text-white rounded-md shadow-md font-semibold transition">
            Track Shipment
          </button>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-sm sm:text-base font-medium text-gray-300 tracking-wide">
          Reliable ✅ Fast ✅ Secure
        </div>
      </div>
    </div>
  );
}
