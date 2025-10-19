import { ArrowRight, Network } from "lucide-react";
import Image from "next/image";

export default function Supp() {
  return (
    <div className="w-full">
      {/* Numbers / Stats Section */}
      <section className="bg-white w-full py-12 text-center">
        <h2 className="text-2xl sm:text-3xl  text-black mb-6">
          Proof is in the numbers <br />
          Our global air freight services reach every corner of the world.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-black text-xl font-semibold">
          <div>
            <p className="text-4xl font-bold">1,900+</p>
            <p className="mt-2">Air Specialists</p>
          </div>
          <div>
            <p className="text-4xl font-bold">300+</p>
            <p className="mt-2">Global Hubs</p>
          </div>
          <div>
            <p className="text-4xl font-bold">120+</p>
            <p className="mt-2">Countries Covered</p>
          </div>
        </div>
      </section>

      {/* Support Hero Section */}
      <section className="relative h-[50vh] w-full">
        {/* Background Image */}
        <Image
          src="/imgs/subscribe-page-hero.avif"
          alt="Support background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content k*/}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-16">
          <div className="max-w-3xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Need support? Our experts are here to help.
            </h3>
            <p className="text-base sm:text-lg font-light mb-6">
              Find answers to your questions and get in touch with our experts for
              support.
            </p>

            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-lg font-medium">
                Send us a message{" "}
                <Network className="animate-spin text-amber-400" size={20} />
              </span>
              <ArrowRight size={80} className="text-amber-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
