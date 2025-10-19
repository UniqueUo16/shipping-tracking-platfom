"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Network, SendIcon } from "lucide-react";
import Floater from "../../../components/Floater"

export default function Pricing() {
  return (
    <div className="bg-black ">
      <div className="p-4  sm:p-8 max-w-7xl mx-auto  bg-[#131212]">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center shadow-md rounded-2xl p-6 md:p-8 gap-6">
          <Image
            src="/imgs/couple.webp"
            alt="Pricing illustration"
            width={500}
            height={300}
            className="w-full  md:w-1/2 h-auto object-cover"
          />
          <motion.div
            className="flex flex-col md:ml-6 mt-4 md:mt-0 w-full md:w-1/2"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Pricing</span>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Our Plans</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Choose a plan that fits your needs. Upgrade anytime and enjoy free perks included in premium tiers.
            </p> <br />
            <span className="rounded-sm p-2 sm:w-[12vw] flex justify-center text-black bg-white sm:p-2">Continue</span>
          </motion.div>
        </div>

        <div className="sm:mt-12 px-6 sm:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-center sm:text-left">
                Simplify your bookings with Shipfast Freight
              </h2>
              <p className="mt-4 text-gray-300 text-center sm:text-left leading-relaxed">
                Take advantage of getting instant prices on your shipment, browse through
                an easy-to-navigate booking interface and even track your goods. <br />
                <br />
                Let us guide you through the first steps of your digital journey and help
                you choose the best service to match your needs. <br />
                <br />
                Our own-controlled freight network and strict SOPs ensure fewer touchpoints,
                smoother handling, and built-in flexibility to avoid disruptions.
              </p>
              <button className="mt-6 rounded-sm px-6 py-3 bg-white text-black shadow-md hover:bg-gray-100 self-center sm:self-start">
                Navigate Our Price
              </button>
            </div>

            <motion.form
              className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col text-black"
              animate={{  y: [0, -10, 0] }} // combines your float animation
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
            >
              {/* Your form inputs here */}

              <span className="flex justify-between items-center text-xl font-semibold mb-4">
                Send us a message <Network className="animate-spin text-gray-600" />
              </span>

              <label className="mb-1 text-sm font-medium">Enter Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-2 mb-4 rounded border"
              />

              <label className="mb-1 text-sm font-medium">Enter Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 mb-4 rounded border"
              />

              <label className="mb-1 text-sm font-medium">Enter Message</label>
              <textarea
                placeholder="Enter Message (Optional)"
                className="w-full p-3 mb-4 rounded border"
                rows={4}
              />

              <button
                type="submit"
                className="rounded-sm p-3 flex justify-center items-center gap-2 text-white bg-black hover:bg-gray-900"
              >
                Send <SendIcon size={18} />
              </button>
            </motion.form>
          </div>
        </div>

      </div>
      <Floater />
    </div>
  );
}
