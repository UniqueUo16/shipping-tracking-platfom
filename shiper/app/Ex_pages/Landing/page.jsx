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
  className={`${montserrat.className} relative h-[70vh] w-full overflow-hidden pt-16 sm:pt-20`}
>

      {/* Background image */}
      <Image
        src="/imgs/sea-air_.avif"
        alt="Hero background"
        fill
        className="object-cover bg-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 sm:px-16">
        <h1 className="sm:text-6xl  text-4xl font-bold tracking-wide leading-tight drop-shadow-lg">
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
        <div className="flex gap-4 mt-10">
         <a href="/Ex_pages/Booking" className="px-6 py-3 bg-blue-700 hover:bg-[#008bb8] text-white rounded-md shadow-md font-semibold transition">
            Get Started
          </a>
          <a href="/tracker" className="px-6 py-3 border border-white hover:bg-white hover:text-[#00A0D0] text-white rounded-md shadow-md font-semibold transition">
            Track Shipment
          </a>
        </div>

 <div className="flex text-white  flex-wrap justify-start items-start  gap-6  font-medium text-sm sm:text-base tracking-wide mt-8">
  {/* Tagline 1 */}
  <div className="flex items-center gap-2">
    <span>Reliable</span>
    <Image
      src="/imgs/mark1.gif"
      alt="mark1"
      height={30}
      width={30}
      className="object-contain rounded-full"
    />
  </div>

  {/* Tagline 2 */}
  <div className="flex items-center gap-2">
    <span>Secure</span>
    <Image
      src="/imgs/mark3.gif"
      alt="mark2"
      height={30}
      width={30}
      className="object-contain rounded-full"
    />
  </div>

  {/* Tagline 3 */}
  <div className="flex items-center gap-2">
    <span>Fast</span>
    <Image
      src="/imgs/mark2.gif"
      alt="mark3"
      height={30}
      width={30}
      className="object-contain rounded-full"
    />
  </div>
</div>

      </div>
     
    </div>
  );
}
