"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Ser() {
  const slides = [
    { src: "/imgs/sea-air_.avif", text: "Relaible shipping processess.. " },
    { src: "/imgs/fire.webp", text: "Yur good Stay Safe At all costs Secure " },
    { src: "/imgs/transport.avif", text: "Alternate Options for faster delivery" },
  ];

  const textslide = [
    "Door-to-Door Delivery: Hassle-free shipping for every need. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribusconnect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus connect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus",
    
    "Real-Time Tracking: Know where your shipment is, every step of the way.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribusconnect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribusconnect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus ",
    
    "Customized Logistics Solutions: Tailored, for your business. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribu connect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribuss",
    
    "Global Reach, Local Expertise: We connect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribusconnect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribusconnect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribusconnect markets worldwide. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ut illo sint nobis voluptas doloribus"
  ]
  
  const [text, setText] = useState(0)

  useEffect(()=>{
    const timing = setInterval(() => {
      setText((prev)=> (prev + 1) % textslide.length);
    }, 5000);
    return () => clearInterval(timing);

  }, [textslide.length])

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Image */}
      <img
        src={slides[current].src}
        alt={`Slide ${current}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay for text and buttons */}
    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
  <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
    {slides[current].text}
  </h2>
  <motion.h4
    key={current}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ ease: "easeInOut", duration: 0.8 }}
    className="text-white mt-2 text-lg md:text-xl drop-shadow-md"
  >
    {textslide[current % textslide.length]}
  </motion.h4>
</div>

      {/* <div className="flex gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white text-black px-4 py-2 rounded"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white text-black px-4 py-2 rounded"
          >
            Next
          </button>
        </div> */}
    </div>
  );
}
