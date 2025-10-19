"use client";

import { useState } from "react";
import { ChevronDown, NetworkIcon, SendIcon } from "lucide-react";

const faqs = [
  {
    question: "How do I book a shipment?",
    answer:
      "You can book directly through our online platform by entering your shipment details, choosing your preferred service, and confirming your booking instantly.",
  },
  {
    question: "What documents are required for international shipping?",
    answer:
      "Typically you’ll need a commercial invoice, packing list, and in some cases a certificate of origin. Our experts will guide you step by step.",
  },
  {
    question: "How can I track my cargo?",
    answer:
      "Once your booking is confirmed, you’ll receive a tracking number. You can track your shipment in real-time directly on our platform.",
  },
  {
    question: "Do you offer insurance for shipments?",
    answer:
      "Yes, we provide flexible insurance options to protect your cargo against loss, theft, or damage during transit.",
  },
  {
    question: "What are your transit times?",
    answer:
      "Transit times vary depending on the route and service level. Express shipments can take 1–3 days, while standard options may take longer.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-16 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>

    </section>
  );
}
