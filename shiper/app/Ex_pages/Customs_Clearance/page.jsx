"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const montrasset = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Customs_Clearance() {
  return (
    <div className="w-full relative bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/imgs/customs-bg.jpg"
          height={100}
          width={400}
          alt="Customs Clearance"
          className="w-full sm:h-90 object-cover"
        />

        <div className="absolute mt-[-7rem] ml-2 sm:ml-5 font-mono text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
          <Typewriter
            words={[
              "Customs Clearance",
              "Licensed & Compliant",
              "Smooth Border Processing",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex-col flex justify-center items-center m-5">

        <h1
          className="text-2xl font-bold text-gray-900 font-sans mt-3"
          style={{ fontVariant: "small-caps" }}
        >
          Customs Clearance
        </h1>
     
        <p
          className={`${montrasset.className} text-gray-900 text-[0.95rem] flex text-center max-w-4xl`}
        >
           At ShipFast Logistics, our licensed
          customs brokers simplify the complex world of import and export regulations. We
          ensure full compliance with international trade laws — enabling your goods to move
          across borders without delays or penalties.
          From documentation and tariff classification to duty calculation and port release,
          our experts manage the entire clearance process with precision. With direct access
          to customs systems and long-standing partnerships with authorities worldwide, we
          guarantee smooth, transparent, and timely processing for every shipment.
        </p>
      </div>

      {/* Services Section */}
      <h1 className="text-2xl text-gray-900 flex justify-center text-center font-sans mt-10 mb-5">
        Our Customs Clearance Solutions
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {[
          {
            img: "/imgs/documents.png",
            title: "Import & Export Documentation",
            desc: "Preparation and verification of invoices, packing lists, certificates of origin, and permits for fast customs processing.",
          },
          {
            img: "/imgs/tarrif.png",
            title: "Tariff Classification & Duty Management",
            desc: "Accurate HS code classification and transparent duty/tax calculation to ensure full compliance and cost efficiency.",
          },
          {
            img: "/imgs/liscense.gif",
            title: "Customs Compliance Advisory",
            desc: "We guide you through complex trade regulations, ensuring every shipment aligns with international standards.",
          },
          {
            img: "/imgs/inspect.gif",
            title: "Cargo Inspection & Clearance",
            desc: "On-site coordination for customs inspection, document verification, and immediate release of cargo.",
          },
          {
            img: "/imgs/handshake.gif",
            title: "Bonded Warehouse Handling",
            desc: "Secure storage under customs supervision until duties are settled or cargo is re-exported.",
          },
          {
            img: "/imgs/globe.gif",
            title: "Global Agency Network",
            desc: "Seamless clearance coordination across multiple countries through our trusted partner network.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center justify-center text-center w-72 hover:shadow-lg cursor-pointer"
          >
            <Image
              src={item.img}
              height={100}
              width={100}
              alt={item.title}
              className="object-contain mb-3"
        />
            <h1
              className="text-xl font-semibold text-blue-900 font-sans mb-2"
              style={{ fontVariant: "small-caps" }}
            >
              {item.title}
            </h1>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* License & Compliance Section */}
      <motion.div
        className="flex flex-col justify-center items-center mt-14 bg-blue-800 text-white py-10 px-6 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-3">Licensed & Accredited Customs Broker</h2>
        <p className="max-w-2xl text-gray-100 mb-5">
          ShipFast Logistics is a certified and government-licensed customs broker, authorized to
          process import/export documentation and clearance procedures globally.  
          Our compliance team ensures every shipment meets the latest regulatory and trade standards.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          <div className="bg-white/10 p-3 rounded-md">
            <p className="font-semibold">License No: 2345/INTL/CCL</p>
          </div>
          <div className="bg-white/10 p-3 rounded-md">
            <p className="font-semibold">FMC Reg: SHP-FAST-2025</p>
          </div>
          <div className="bg-white/10 p-3 rounded-md">
            <p className="font-semibold">ISO 9001:2024 Certified</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="flex flex-col justify-center items-center  text-black py-12 px-6 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-3">Need Expert Customs Assistance?</h2>
        <p className="max-w-xl text-gray-700 mb-5">
          Our experienced customs team ensures your shipments are cleared on time — with full legal
          compliance and cost efficiency.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#e24242] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          Contact Our Customs Team
        </a>
      </motion.div>
       <div className="mt-6 text-xs text-gray-500 border-t pt-4 text-center">
            <p>© 2025 ShipLogix Global Ltd.</p>
            <p>Licensed Freight & Maritime Operator</p>
          </div>
    </div>
  );
}
