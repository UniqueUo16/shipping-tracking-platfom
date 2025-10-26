"use client";
import { Mail, Clock, Phone, MapPin } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"]
})

export default function Contact() {
  return (
    <section className={`${montserrat.className} min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4`}>
      <div className="bg-white  rounded-2xl p-8 max-w-lg w-full border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
          Fast <span className="text-[#e24242]">Ship</span>
        </h2>

        <div className="space-y-6 text-blue-700 font-bold">
          {/* Branch Hours */}
          <div className="flex items-start gap-4">
            <Clock className="text-[#e24242]" />
            <div>
              <h3 className="font-medium text-gray-800">Branch Hours</h3>
              <p>Monday – Sunday, 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Customer Service */}
          <div className="flex items-start gap-4">
            <Mail className="text-[#e24242]" />
            <div>
              <h3 className="font-medium text-gray-800">Customer Service</h3>
              <p>example.info@gmail.com</p>
              <p>support@shiplogix.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="text-[#e24242]" />
            <div>
              <h3 className="font-medium text-gray-800">Call Us</h3>
              <p>+1 (234) 567-8901</p>
              <p>+44 7894 654321</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="text-[#e24242]" />
            <div>
              <h3 className="font-medium text-gray-800">Our Office</h3>
              <p>123 Global Trade Avenue</p>
              <p>New York, NY, USA</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:example.info@gmail.com"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-[#c93737] transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
