"use client";

export default function Policies() {
  const policies = [
    {
      title: "Privacy Policy",
      text: "SHIPfast respects your privacy. We collect only essential information to process shipments and improve services. Your data is never sold or shared without consent.",
    },
    {
      title: "Terms & Conditions",
      text: "By using SHIPfast, you agree to our terms and conditions, including shipment obligations, payment terms, and liability limitations. Please review carefully before using our services.",
    },
    {
      title: "Compliance & Licensing",
      text: "We operate under all relevant international shipping and logistics regulations. Our licenses and certifications ensure secure and compliant handling of all shipments.",
    },
    {
      title: "Refund & Cancellation Policy",
      text: "Shipment cancellations or refunds are handled according to our service-specific terms. Please contact support for assistance with any issues.",
    },
  ];

  return (
    <div className="mt-28 bg-gray-900 rounded-lg text-black max-w-6xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Policies & Compliance</h1>
      <p className="text-gray-700 text-center mb-12">
        At SHIPfast, we prioritize transparency, compliance, and customer trust. Below are our key policies and procedures.
      </p>

      {policies.map((policy, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3">{policy.title}</h2>
          <p className="text-gray-700 leading-relaxed">{policy.text}</p>
        </div>
      ))}
    </div>
  );
}
