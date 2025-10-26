"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montrasset = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Services() {
  const services = [
    {
      title: "Safe & Reliable Shipping",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus nulla maiores impedit veniam similique asperiores alias perspiciatis labore quisquam, a, suscipit tempora excepturi accusamus explicabo temporibus neque obcaecati consequatur! Eveniet aut quia odit ipsam quaerat. Quia earum quam nemo, quisquam ducimus eveniet pariatur praesentiumLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus repudiandae illum aut omnis voluptates.",
      image: "/imgs/sea-air_.avif",
      readmore: "Read more",
    },
    {
      title: "Global Air Cargo",
      text: "Fast and secure air freight solutions connecting businesses worldwide with efficiency and care.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus nulla maiores impedit veniam similique asperiores alias perspiciatis labore quisquam, a, suscipit tempora excepturi accusamus explicabo temporibus neque obcaecati consequatur! Eveniet aut quia odit ipsam quaerat. Quia earum quam nemo, quisquam ducimus eveniet pariatur praesentiumLorem ipsum dolor sit amet consectetur",
      image: "/imgs/special-cargo.avif",
      readmore: "Read more",
    },
    {
      title: "Secure Packaging",
      text: "We provide industry-standard packaging services to ensure your goods reach safely, no matter Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus nulla maiores impedit veniam similique asperiores alias perspiciatis labore quisquam, a, suscipit tempora excepturi accusamus explicabo temporibus neque obcaecati consequatur! Eveniet aut quia odit ipsam quaerat. Quia earum quam nemo, quisquam ducimus eveniet pariatur praesentiumLorem ipsum dolor sit amet consectetur the distance.",
      image: "/imgs/air-cargo_.avif",
      readmore: "Read more",
    },
  ];

  return (
    <section className="bg-gray-100  px-6 space-y-6 overflow-hidden">
         {/* Tagline */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-900 font-medium text-sm sm:text-base tracking-wide mt-8">
  {/* Tagline 1 */}
  <div className="flex items-center gap-2">
    <span></span>
    <Image
      src="/imgs/mark1.gif"
      alt="mark1"
      height={30}
      width={30}
      className="object-contain"
    />
  </div>

  {/* Tagline 2 */}
  <div className="flex items-center gap-2">
    <span></span>
    <Image
      src="/imgs/mark3.gif"
      alt="mark2"
      height={30}
      width={30}
      className="object-contain"
    />
  </div>

  {/* Tagline 3 */}
  <div className="flex items-center gap-2">
    <span></span>
    <Image
      src="/imgs/mark2.gif"
      alt="mark3"
      height={30}
      width={30}
      className="object-contain"
    />
  </div>
</div>

      {/* ------------------- WHAT WE DO ------------------- */}
      <span
        className="text-2xl text-black flex justify-center font-sans"
        style={{ fontVariant: "small-caps" }}
      >
        What we do
      </span>

      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <motion.div className="flex-1 min-w-0">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                {service.title}
              </motion.h2>
              <motion.span
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
              >
                {service.text}
                <div className="text-black mt-3 active:text-blue-400">
                  <u>{service.readmore}</u>
                </div>
              </motion.span>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
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

      {/* ------------------- FREIGHT FORWARDING ------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/imgs/professionalicon.png"
              height={250}
              width={250}
              alt="Freight Page"
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center">
            <h1
              className="text-3xl font-bold text-gray-900 font-sans mb-4"
              style={{ fontVariant: "small-caps" }}
            >
              Freight Forwarding
            </h1>
            <p className="text-gray-800 text-base mb-4 font-mono">
              At ShipFast Logistics, our Freight Forwarding solutions are built
              on reliability, efficiency, and global reach.
            </p>
            <p
              className={`${montrasset.className} text-gray-700 text-[0.95rem] leading-relaxed`}
            >
              We manage the entire process of moving your goods—from point of
              origin to final destination—with precision and transparency. Our
              partnerships with carriers and our vast network of agents ensure
              timely, cost-effective delivery via air, sea, and land. We handle
              everything: shipment booking, documentation, cargo insurance,
              customs compliance, and tracking.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-16 text-center">
          <h1 className="text-2xl text-gray-900 font-semibold mb-8">
            Our Freight Forwarding Services
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            <motion.div
              className="flex flex-col items-center text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/imgs/imp2exp.png"
                height={120}
                width={120}
                alt="Import Export"
                className="object-contain mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-900">
                Import/Export Documentation & Customs Support
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/imgs/time.gif"
                height={120}
                width={120}
                alt="Fast Delivery"
                className="object-contain mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-900">
                On-Time Delivery Management
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/imgs/seccure.png"
                height={120}
                width={120}
                alt="Secure Shipping"
                className="object-contain mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-900">
                Secure & Reliable Transport Solutions
              </h2>
            </motion.div>
          </div>

          <p className="text-gray-800 font-medium mt-10 font-serif">
            We simplify global shipping so your business can focus on growth,
            not logistics.
          </p>

          <Link
            href="/Expages/Freight_Fowarding"
            className="text-blue-700 border-b mt-4 inline-block"
          >
            See more details
          </Link>
        </div>
      </div>

      {/* ------------------- WAREHOUSING ------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/imgs/warehouse.gif"
            height={250}
            width={250}
            alt="Warehouse"
            className="object-contain"
          />
        </div>
        <div>
          <h1
            className="text-3xl font-bold text-gray-900 font-sans mb-4"
            style={{ fontVariant: "small-caps" }}
          >
            Warehousing & Distribution
          </h1>
          <p className="text-gray-800 text-base mb-4 font-mono">
            Our warehousing and distribution services provide safe, efficient,
            and scalable storage for your goods.
          </p>
          <div className="space-y-2 text-gray-700 font-sans">
            <p>- Inventory management and order fulfillment</p>
            <p>- Cross-docking and pick-and-pack services</p>
            <p>- Temperature-controlled and specialized storage</p>
            <p>- Barcode and RFID tracking for full visibility</p>
            <p>- National and regional distribution</p>
          </div>
          <Link
            href="/Ex_pages/Warehousing&dis"
            className="text-blue-700 border-b mt-6 inline-block"
          >
            See more details
          </Link>
        </div>
      </div>

      {/* ------------------- CUSTOMS CLEARANCE ------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h1
          className="text-3xl font-bold text-gray-900 font-sans text-center mb-8"
          style={{ fontVariant: "small-caps" }}
        >
          Customs Clearance
        </h1>

        <p
          className={`${montrasset.className} text-gray-800 text-[0.95rem] text-center max-w-4xl mx-auto leading-relaxed mb-16`}
        >
          At ShipFast Logistics, our licensed customs brokers simplify the
          complex world of import and export regulations. We ensure full
          compliance with international trade laws — enabling your goods to move
          across borders without delays or penalties. From documentation and
          tariff classification to duty calculation and port release, our
          experts manage the entire clearance process with precision.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {[
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg cursor-pointer"
            >
              <Image
                src={item.img}
                height={100}
                width={100}
                alt={item.title}
                className="object-contain mb-3"
              />
              <h1
                className="text-lg font-semibold text-blue-900 font-sans mb-2"
                style={{ fontVariant: "small-caps" }}
              >
                {item.title}
              </h1>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col justify-center items-center text-black py-12 text-center mt-14"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-3">
            Need Expert Customs Assistance?
          </h2>
          <p className="max-w-xl text-gray-700 mb-5">
            Our experienced customs team ensures your shipments are cleared on
            time — with full legal compliance and cost efficiency.
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
    </section>
  );
}
