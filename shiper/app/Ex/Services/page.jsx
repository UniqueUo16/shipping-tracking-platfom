"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {service.text}
                <div className="text-black mt-3 active:text-blue-400"><u>{service.readmore}</u></div>
              </motion.p>
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
    </section>
  );
}
