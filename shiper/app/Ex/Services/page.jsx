"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const  montrasset= Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "700"]
})

export default function Services() {
  const services = [
    {
      title: "Safe & Reliable Shipping",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus nulla maiores impedit veniam similique asperiores alias perspiciatis labore quisquam, a, suscipit tempora excepturi accusamus explicabo temporibus neque obcaecati consequatur! Eveniet aut quia odit ipsam quaerat. Quia earum quam nemo, quisquam ducimus eveniet pariatur praesentiumLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus repudiandae illum aut omnis voluptates.",
      image: "/imgs/sea-air_.avif",
      readmore: "REad more"

    },
    {
      title: "Global Air Cargo",
      text: "Fast and secure air freight solutions connecting businesses worldwide with efficiency and care.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus nulla maiores impedit veniam similique asperiores alias perspiciatis labore quisquam, a, suscipit tempora excepturi accusamus explicabo temporibus neque obcaecati consequatur! Eveniet aut quia odit ipsam quaerat. Quia earum quam nemo, quisquam ducimus eveniet pariatur praesentiumLorem ipsum dolor sit amet consectetur",
      image: "/imgs/special-cargo.avif",
      readmore: "REad more"

    },
    {
      title: "Secure Packaging",
      text: "We provide industry-standard packaging services to ensure your goods reach safely, no matter Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus nulla maiores impedit veniam similique asperiores alias perspiciatis labore quisquam, a, suscipit tempora excepturi accusamus explicabo temporibus neque obcaecati consequatur! Eveniet aut quia odit ipsam quaerat. Quia earum quam nemo, quisquam ducimus eveniet pariatur praesentiumLorem ipsum dolor sit amet consectetur the distance.",
      image: "/imgs/air-cargo_.avif",
      readmore: "REad more"
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 space-y-16 overflow-hidden">
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
                viewport={{ once: false, amount: 0.3 }}
              >
                {service.title}
              </motion.h2>

              <motion.span
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {service.text}
                <div className="text-black mt-3 active:text-blue-400"><u>{service.readmore}</u></div>
              </motion.span>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
>              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full max-w-full h-auto rounded-sm shadow-md object-cover"
                priority
              />
            </motion.div>
            

          </div>
        ))}
      </div>


      {/* ----------------------------------------------------------------------------------- */}
        <div className="flex-col flex justify-center items-center m-3">
                      <Image
                          src="/imgs/professionalicon.png"
                          height={100}
                          width={100}
                          alt="Freight Page"
                          className="sm:h-90 "
                      />
                      <h1 className="text-2xl font-bold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Freight Fowarding</h1>
                      <p className="text-gray-900 flex text-center m-2 font-mono">At ShipFast Logistics , Our Frieght Fowarding solutions are built on reliability, efficiency, and Global reach. <br />
                       </p>
                       <p className={`${montrasset.className} text-gray-900 text-[0.9rem] flex text-center`}
                       >  We manage the entire process of moving your goods- from point of origin to the final destination - with precision and transparency. Our partnerships with carriers and our vast Network of Agents ensures timely, cost-effective delivery via air, sea, and land. We handle everything: shipment booking, documentation, cargo insurnance, customs compliance, and Tracking.
      </p>
                  </div>
      <h1 className="text-2xl  text-gray-900 flex text-center font-sans  m-5">Our Freight Fowarding Services </h1>
       <div className="flex-col">
          <div className="flex">
              <span className="text-4xl font-black text-gray-900">
      
                   <Image
              src="/imgs/seccure.png"
              height={100}
              width={100}
              alt="Freight Page"
              className="h-24 w-24 object-contain"
            />
              </span>
      

           <motion.div className="flex-col flex justify-center items-center pt-17"
            initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}v
           >
                      <Image
                          src="/imgs/imp2exp.png"
                          height={100}
                          width={100}
                          alt="Freight Page"
                          className="sm:h-90"
                      />
                      <h1 className="text-xl text-center font-semibold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Import/Export<br /> Documentaion and customs support</h1>
       </motion.div>
           <motion.div className="flex-col flex justify-center items-center pt-17"
            initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}v
           >
                      <Image
                          src="/imgs/time.gif"
                          height={100}
                          width={100}
                          alt="Freight Page"
                          className="sm:h-90"
                      />
                      <h1 className="text-xl text-center font-semibold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Import/Export<br /> Documentaion and customs support</h1>
       </motion.div>
       </div>
      
       
                <p className="text-gray-900 flex text-center font-serif font-semibold m-6">We simplify Global shipping so your business can focus on growth, not logistics<br />
                       </p>
      
                                    <Link href="/Expages/Freight_Fowarding" className="text-blue-700 border-b ">See more Details</Link>
              </div>
              {/* ---------------------------------------------------------------------------- */}

                <div className="w-full">
                          <Image
                              src="/imgs/warehouse.jpg"
                              height={100}
                              width={100}
                              alt="Freight Page"
                              className="w-full sm:h-90 object-contain"
                          />
              
                          <div className="absolute mt-[-7rem] ml-2 sm:ml-5 font-mono text-3xl sm:text-5xl font-bold ">
                            
              
                          </div>
                          <div className="flex-col flex justify-center items-center m-3">
                              <Image
                                  src="/imgs/warehouse.gif"
                                  height={100}
                                  width={100}
                                  alt="Freight Page"
                                  className="sm:h-90"
                              />
                              <h1 className="text-2xl font-bold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Warehousing & Distributon</h1>
                              <p className="text-gray-900 flex text-center m-2 font-mono">Our warehousing and Distribution services provides safe, efficienct, and Scalable Storage for Your Goods<br />
                               </p>
                              
                          </div>
              <h1 className="text-2xl  text-gray-900 flex text-center font-sans  m-5">Our Freight Fowarding Services </h1>
               <div className="flex-col">
                  <div className="flex">
                      <span className="text-4xl font-black text-gray-900">
              
                           <Image
                      src="/imgs/seccure.png"
                      height={100}
                      width={100}
                      alt="Freight Page"
                      className="h-24 w-24 object-contain"
                    />
                      </span>
                      <div className="flex-col text-gray-900 font-sans">
              
                      <h3>-Inventoory management and Order fullfilment</h3> 
                      <h3>-Cross-docking and Pick-and-pak Servcies</h3> 
                      <h3>-Temperature-controlled and specialized storage</h3> 
                      <h3>-Barcode and RFID tracking for Full visibility</h3> 
                      <h3>-National and regional Distribution</h3> 
                      </div>
              </div>
              
               
              
                      </div>
                                    <Link href="/Ex_pages/Warehousing&dis" className="text-blue-700 border-b ">See more Details</Link>
                      </div>

                      {/* --------------------------------------------------------------------------- */}

                          <div className="w-full relative  text-gray-900">
                            {/* Hero Section */}
                            <div className="relative">
                             
                              <div className="absolute mt-[-7rem] ml-2 sm:ml-5 font-mono text-3xl sm:text-5xl font-bold text-white drop-shadow-md">

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
                              className="flex flex-col justify-center items-center mt-14 text-geay-100 py-10 px-6 text-center"
                              initial={{ opacity: 0, y: 80 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ ease: "easeInOut", duration: 0.8 }}
                            >
                              <h2 className="text-3xl font-bold mb-3">Licensed & Accredited Customs Broker</h2>

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
    </section>
  );
}
