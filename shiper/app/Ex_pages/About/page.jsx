"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      title: "Safe & Reliable Shipping",
      text: "We ensure your cargo reaches safely and on time. Our team uses state-of-the-art logistics management to handle every shipment with care, minimizing risk and maximizing efficiency.",
      image: "/imgs/sea-air_.avif",
      readmore: "Read more",
    },
    {
      title: "Global Air Cargo",
      text: "Fast and secure air freight solutions connecting businesses worldwide. We prioritize reliability, speed, and safety, providing seamless delivery across continents.",
      image: "/imgs/special-cargo.avif",
      readmore: "Read more",
    },
    {
      title: "Secure Packaging",
      text: "Our packaging meets industry standards, ensuring protection during transit. From fragile items to heavy cargo, we make sure everything arrives intact.",
      image: "/imgs/air-cargo_.avif",
      readmore: "Read more",
    },
  ];

  return (
    <div className="mt-28">
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About SHIPfast</h1>
            <p className="leading-relaxed mb-6">
              SHIPfast is your trusted logistics partner, providing safe, reliable, and efficient shipping solutions worldwide. We combine technology, expertise, and personalized service to deliver excellence in every shipment.
            </p>
            <p className="leading-relaxed">
              Whether it's air, sea, or land, we ensure your goods arrive securely and on time, giving you peace of mind and helping your business thrive.
            </p>
          </div>
          <div className="flex-1 relative h-64 md:h-80 w-full">
            <Image
              src="/imgs/maersk-air-cargo.avif"
              alt="Air Cargo"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-3">{service.text}</p>
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                  {service.readmore}
                </span>
              </motion.div>

              {/* Image */}
              <motion.div
                className="flex-1 min-w-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-md shadow-md object-cover"
                  priority
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
