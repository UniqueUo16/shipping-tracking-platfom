import Image from "next/image";

export default function Careers() {
  const positions = [
    { title: "Marine Operations Manager", location: "New York, USA", type: "Full-time" },
    { title: "Port Logistics Coordinator", location: "Rotterdam, Netherlands", type: "Full-time" },
    { title: "Fleet Maintenance Engineer", location: "Singapore", type: "Contract" },
    { title: "Shipping & Documentation Specialist", location: "London, UK", type: "Full-time" },
  ];

  const perks = [
    "Competitive Salary & Benefits",
    "Global Travel Opportunities",
    "Flexible Work Arrangements",
    "Professional Growth & Training",
    "Team-Oriented, Inclusive Culture",
  ];

  const testimonials = [
    {
      quote: "Working here has broadened my global logistics expertise immensely!",
      author: "Jane Smith, Operations Lead",
    },
    {
      quote: "A company that truly values its employees and invests in their growth.",
      author: "Ali Khan, Fleet Manager",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center text-white">
        <Image
          src="/hero-ship.jpg"
          alt="Careers at Marine Logistics"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/80"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join Our Marine Logistics Team
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore exciting opportunities in global shipping, fleet management, and port operations.
          </p>
          <a
            href="#positions"
            className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            View Open Positions
          </a>
        </div>
      </section>

    

      {/* Company Perks */}
      
      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Employees Say</h2>
          <div className="space-y-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <p className="italic text-gray-700 mb-2">"{t.quote}"</p>
                <p className="font-semibold text-gray-900">- {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="py-20 bg-blue-200 text-blue-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Learn More... from Our Team?</h2>
        <p className="mb-6">Message us.</p>
        <a
          href="mailto:careers@company.com"
          className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
        >
         via Email
        </a>
      </section>
    </div>
  );
}
