"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  MessageCircleIcon,
  PhoneCall,
  SearchIcon,
  X,
  ChevronDown,
  Truck,
  BoxIcon,
  Handshake,
  BellRingIcon,
} from "lucide-react";
import { HomeIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillNotification } from "react-icons/ai";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [wrk, setWrk] = useState(false);
  const [ser, setSer] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const pathname = usePathname();

  // Fetch user info (if logged in)
useEffect(() => {
  if (pathname !== "/login") {
    fetch("http://localhost:5000/api/auth/me", { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.user) setUser(data.user);
        else setUser(null);
      })
      .catch(() => setUser(null));
  }
}, [pathname]);


// Navbar.jsx
const handleLogout = async () => {
  await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
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

  return (
    <nav
      className={`${montserrat.className} fixed top-0 left-0 w-full bg-blue-800 text-gray-100 z-[999] shadow-md transition-transform duration-300 ${
        hideNav ? "-translate-y-full" : ""
      }`}
    >
      {/* Top bar */}
      <div className="max-w-7xl  mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Brand + Message Icon */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide text-gray-100"
          >
            SHIP<span className="text-[#e24242]">fast</span>
          </Link>
          <Link href="/secure/user/udashboard" className="relative p-2 rounded-full bg-gray-200 transition">
            <BellRingIcon className="text-[#1e1c6e]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] text-white bg-red-600 rounded-full">
              
            </span>
            
          </Link>
          
        </div>

           {/* User section */}
        <div className="md:hidden md:flex items-center gap-3 flex">
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
            <Link
              href="/login"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          )}
        </div>

     

        {/* Desktop menu */}
        <section className="">
        <ul className="hidden  md:flex items-center gap-8 text-[0.95rem] font-medium">
          <li>
            <Link href="/" className="hover:text-[#e24242]">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-[#e24242] flex items-center gap-1"
            >
              About <BoxIcon size={16} />
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
              <ul className="absolute mt-6 bg-white shadow-md rounded-md mt-2 py-2 w-48 border border-gray-100">
                <li>
                 
                  
              <div className="ml-4 m-3 flex flex-col gap-2 text-sm text-gray-700">
                <Link href="/services/freight" className="hover:text-[#e24242] m-2 hover:bg-gray-200 ">
                  Freight Forwarding
                </Link>
                <Link href="/services/warehousing" className="hover:text-[#e24242] m-2">
                  Warehousing & Distribution
                </Link>
                <Link href="/services/customs" className="hover:text-[#e24242] m-2 ">
                  Customs Clearance
                </Link>
                <Link href="/services/lastmile" className="hover:text-[#e24242] m-2">
                  Last-Mile Delivery
                </Link>
                <Link href="/services/marine" className="hover:text-[#e24242] m-2">
                  Marine Logistics
                </Link>
              </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#e24242] flex items-center gap-1"
            >
              Contact <PhoneCall size={16} />
            </Link>
          </li>
          <br/>
  <div className="absolute mt-23">
            <li>
            <Link
              href="/contact"
              className="hover:text-[#e24242] flex items-center gap-1"
            >
              Contact <PhoneCall size={16} />
            </Link>
          </li>
          </div>
        </ul>
        </section>
          {/* User section */}
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
            <Link
              href="/login"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
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

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[900]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 w-[80vw] max-w-sm bg-white shadow-2xl text-[0.95rem] transform transition-transform duration-500 ease-in-out p-6 overflow-y-auto z-[1000] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-[#1e293b] tracking-wide">
            SHIPLOGIX GLOBAL
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-3 font-medium text-gray-800">
          {/* HOME */}
          <Link
            href="/"
            className="flex justify-center items-center hover:text-[#e24242] border-b-2 border-[#e24242]/30 py-2"
          >
            <HomeIcon />
          </Link>

          {/* SERVICES Dropdown */}
          <div className="flex flex-col">
            <span
              onClick={() => setSer(!ser)}
              className="cursor-pointer hover:text-[#e24242] border-b border-gray-300 flex justify-between py-2 items-center"
            >
              <div className="flex items-center gap-2">
                <Truck className="text-[#e24242]" />
                Our Services
              </div>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  ser ? "rotate-180" : ""
                }`}
              />
            </span>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                ser ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700">
                <Link href="/Ex_pages/Freight_Fowarding" className="hover:text-[#e24242]">
                  Freight Forwarding
                </Link>
                <Link href="/Ex_pages/Warehousing&dis" className="hover:text-[#e24242]">
                  Warehousing & Distribution
                </Link>
                <Link href="/Ex_pages/Customs_Clearance" className="hover:text-[#e24242]">
                  Customs Clearance
                </Link>
               
                <Link href="/Ex_pages/Marine_Logistics" className="hover:text-[#e24242]">
                  Marine Logistics
                </Link>
              </div>
            </div>
          </div>

          {/* TRACK SHIPMENT */}
          <Link
            href="/tracker"
            className="hover:text-[#e24242] border-b border-gray-300 flex justify-between py-2 items-center"
          >
            Track Shipment <SearchIcon />
          </Link>

          {/* COMPANY Dropdown */}
          <div className="flex flex-col">
            <span
              onClick={() => setWrk(!wrk)}
              className="cursor-pointer hover:text-[#e24242] border-b border-gray-300 flex justify-between py-2 items-center"
            >
              <div className="flex items-center gap-2">
                <Handshake className="text-[#e24242]" />
                Company
              </div>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  wrk ? "rotate-180" : ""
                }`}
              />
            </span>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                wrk ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700">
                <Link href="/Ex_pages/About" className="hover:text-[#e24242]">
                  About Us
                </Link>
                <Link href="/Ex_pages/policy" className="hover:text-[#e24242]">
                  Compliance & Licenses
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="hover:text-[#e24242] border-b border-gray-300 flex justify-between py-2 items-center"
          >
            Contact Us <PhoneCall />
          </Link>

          {/* BLOGS / NEWS */}
          <div className="mt-6 border-t pt-4 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/handshake.gif"
                alt="news1"
                height={80}
                width={120}
                className="rounded-sm"
              />
              <span className="text-sm font-medium">
                Expanding Global Freight Network
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/warehouse.jpg"
                alt="news2"
                height={80}
                width={120}
                className="rounded-sm"
              />
              <span className="text-sm font-medium">
                Smart Warehousing — 2025 Innovations
              </span>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-6 text-xs text-gray-500 border-t pt-4 text-center">
            <p>© 2025 ShipLogix Global Ltd.</p>
            <p>Licensed Freight & Maritime Operator</p>
          </div>
        </nav>
      </div>
    </nav>
  );
}
