"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  BellRingIcon,
  HomeIcon,
  Truck,
  Handshake,
  PhoneCall,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  // Fetch user info
  useEffect(() => {
    if (pathname === "/login") {
      setLoadingUser(false);
      return;
    }
    async function fetchUser() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();
        setUser(data.user || null);
      } catch {
        setUser(null);
      } finally {
        setLoadingUser(false);
      }
    }
    fetchUser();
  }, [pathname]);

  // Logout
  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    router.push("/login");
  };

  // Hide navbar on scroll
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideNav(currentScroll > lastScroll && currentScroll > 50);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (loadingUser) return null;

  return (
    <nav
      className={`${montserrat.className} fixed top-0 left-0 w-full bg-blue-800 text-gray-100 z-[999] shadow-md transition-transform duration-300 ${
        hideNav ? "-translate-y-full" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-gray-100">
          SHIP<span className="text-[#e24242]">fast</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-[0.95rem] font-medium">
          <li>
            <Link href="/" className="hover:text-[#e24242] flex items-center gap-1">
              Home <HomeIcon size={16} />
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-[#e24242]"
            >
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <ul className="absolute mt-2 bg-white shadow-md rounded-md py-2 w-48 border border-gray-100">
                {[
                  ["Freight Forwarding", "/services/freight"],
                  ["Warehousing & Distribution", "/services/warehousing"],
                  ["Customs Clearance", "/services/customs"],
                  ["Last-Mile Delivery", "/services/lastmile"],
                  ["Marine Logistics", "/services/marine"],
                ].map(([name, href]) => (
                  <li key={name}>
                    <Link href={href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#e24242]">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/Ex_pages/Pricing/#contactus"
              className="hover:text-[#e24242] flex items-center gap-1"
            >
              Contact <PhoneCall size={16} />
            </Link>
          </li>
        </ul>

        {/* User Section */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm font-medium text-gray-100">
                👋 Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-sm text-blue-600 font-medium hover:underline">
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md text-gray-100 hover:text-[#e24242]"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[900]" onClick={() => setOpen(false)} />
          <div
            className={`absolute top-0 right-0 w-[80vw] max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-in-out p-6 overflow-y-auto z-[1000] ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-[#1e293b] tracking-wide">SHIPLOGIX GLOBAL</span>
              <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-black">
                <X size={24} />
              </button>
            </div>

            {/* Sidebar Links */}
            <nav className="flex flex-col gap-3 font-medium text-gray-800">
              <Link href="/" className="py-2 hover:text-[#e24242] flex items-center gap-2 border-b border-gray-300">
                <HomeIcon /> Home
              </Link>

              <div className="flex flex-col">
                <span
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="cursor-pointer hover:text-[#e24242] border-b border-gray-300 flex justify-between py-2 items-center"
                >
                  <div className="flex items-center gap-2">
                    <Truck className="text-[#e24242]" /> Our Services
                  </div>
                  <ChevronDown size={16} className={`${servicesOpen ? "rotate-180" : ""} transition-transform`} />
                </span>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col gap-2 mt-2">
                    <Link href="/Ex_pages/Freight_Fowarding" className="hover:text-[#e24242]">Freight Forwarding</Link>
                    <Link href="/Ex_pages/Warehousing&dis" className="hover:text-[#e24242]">Warehousing & Distribution</Link>
                    <Link href="/Ex_pages/Customs_Clearance" className="hover:text-[#e24242]">Customs Clearance</Link>
                    <Link href="/Ex_pages/Marine_Logistics" className="hover:text-[#e24242]">Marine Logistics</Link>
                  </div>
                )}
              </div>

              <Link href="/tracker" className="py-2 hover:text-[#e24242] flex justify-between items-center border-b border-gray-300">
                Track Shipment
              </Link>

              <div className="flex flex-col">
                <span
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="cursor-pointer hover:text-[#e24242] border-b border-gray-300 flex justify-between py-2 items-center"
                >
                  <div className="flex items-center gap-2">
                    <Handshake className="text-[#e24242]" /> Company
                  </div>
                  <ChevronDown size={16} className={`${companyOpen ? "rotate-180" : ""} transition-transform`} />
                </span>
                {companyOpen && (
                  <div className="ml-4 flex flex-col gap-2 mt-2">
                    <Link href="/Ex_pages/About" className="hover:text-[#e24242]">About Us</Link>
                    <Link href="/Ex_pages/policy" className="hover:text-[#e24242]">Compliance & Licenses</Link>
                  </div>
                )}
              </div>

              <Link href="/Ex_pages/Pricing/#contactus" className="py-2 hover:text-[#e24242] flex justify-between items-center border-b border-gray-300">
                Contact Us
              </Link>

              {user && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition mt-4"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
