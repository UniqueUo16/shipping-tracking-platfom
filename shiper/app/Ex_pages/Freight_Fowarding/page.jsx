"use client"
import { Montserrat } from "next/font/google";
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const  montrasset= Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "700"]
})

export default function Freight() {
    return (
        <div className="w-full">
            <Image
                src="/imgs/sea-air_.avif"
                height={100}
                width={400}
                alt="Freight Page"
                className="w-full sm:h-90"
            />

            <div className="absolute mt-[-7rem] ml-2 sm:ml-5 font-mono text-3xl sm:text-5xl font-bold ">
                <Typewriter
                    words={[
                        "Freight Fowarding",
                        "Fast & Secure",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />

            </div>
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
                 <p className={`${montrasset.className} text-gray-900 text-[0.9rem] flex text-start`}
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

  <motion.div
      className="flex flex-col justify-center border-gra-200 items-center m-6 rounded-2xl p-5 bg-white cursor-pointer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <Image
        src="/imgs/pro2.png"
        height={100}
        width={100}
        alt="Freight Page"
        className="h-24 w-24 object-contain"
      />
      <h1
        className="text-2xl text-center font-semibold text-gray-900 font-sans mt-3"
        style={{ fontVariant: "small-caps" }}
      >
        Air & Ocean Freight <br />(FCL & LCL)
      </h1>
    </motion.div>



 </div>

     <motion.div className="flex-col flex justify-center items-center pt-6"
      initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}v
     >
                <Image
                    src="/imgs/d2d.png"
                    height={100}
                    width={100}
                    alt="Freight Page"
                    className="sm:h-90"
                />
                <h1 className="text-2xl text-center font-semibold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Air & Ocean freight </h1>

 </motion.div>
     <motion.div className="flex-col flex justify-center items-center pt-17"
      initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}v
     >
                <Image
                    src="/imgs/join.png"
                    height={100}
                    width={100}
                    alt="Freight Page"
                    className="sm:h-90"
                />
                <h1 className="text-2xl text-center font-semibold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Shipment Consolidation <br /> & Deconsolidation</h1>
 </motion.div>
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
                <h1 className="text-2xl text-center font-semibold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Import/Export<br /> Documentaion and customs support</h1>
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
                <h1 className="text-2xl text-center font-semibold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Import/Export<br /> Documentaion and customs support</h1>
 </motion.div>
 </div>

  <p className="text-gray-900 flex text-center m-2 font-mono">At ShipFast Logistics , Our Frieght Fowarding solutions are built on reliability, efficiency, and Global reach. <br />
                 </p>
          <p className="text-gray-900 flex text-center font-serif font-semibold m-3">We simplify Global shipping so your business can focus on growth, not logistics<br />
                 </p>

        </div>
    )
}