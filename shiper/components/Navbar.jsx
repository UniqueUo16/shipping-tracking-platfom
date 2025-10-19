"use client";

import { useState, useEffect } from "react";
import {
  BookAlert,
  BookPlus,
  ListCheck,
  Menu,
  MessageCircleIcon,
  PhoneCall,
  SearchIcon,
  X,
  ChevronDown,
  BoxIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [aboutopen , setAboutopen] = useState(false)

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down
        setHideNav(true);
      } else {
        // Scrolling up
        setHideNav(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${montserrat.className} bg-[#f1f1f1] text-gray-800 fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-300 ${
        hideNav ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-label="Main"
    >
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand + Notification */}
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold tracking-wide text-[#1e293b]">
            SHIP<span className="text-[#e24242]">fast</span>
          </a>

          <button className="relative p-2 rounded-full hover:bg-gray-200">
            <MessageCircleIcon className="text-[#1e1c6e]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs text-white bg-red-600 rounded-full">
              1
            </span>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <a href="/" className="hover:border-b-2 hover:border-[#e24242]">
              Home
            </a>
          </li>
          <li>
            <a
              href="/Ex_pages/About"
              className="hover:border-b-2 hover:border-[#e24242] flex items-center gap-1"
            >
              About <BoxIcon size={16} className="animate-spin rotate-x-50"/>
            </a>
          </li>
            <div>
          <li>
            <span
              className=" border-b border-black  flex items-center gap-1"
            >
              Services <ChevronDown size={16}  onClick={()=> setAboutopen(!aboutopen)}/>
            </span>

          </li>
          { aboutopen && (
            <div>
              <ul className="absolute pt-[1rem]">
                <li>Our Aim</li>
              </ul>
            </div>
          )}
          </div>
          <li>
            <a
              href="/Ex_pages/Contactus"
              className="hover:border-b-2 hover:border-[#e24242] flex items-center gap-1"
            >
              Contact Us <PhoneCall size={16} />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md text-gray-700 hover:text-[#4d42e2]"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Second row (mini nav) */}
      <div className="hidden sm:flex px-6 py-2 gap-8 text-sm font-medium border-t border-gray-200">
        <a href="/" className="flex items-center gap-1 hover:text-[#e24242]">
          <SearchIcon size={16} /> Search
        </a>
        <a href="/" className="flex items-center gap-1 hover:text-[#e24242]">
          <ListCheck size={16} /> Prices
        </a>
        <a href="/" className="flex items-center gap-1 hover:text-[#e24242]">
          <BookAlert size={16} /> Schedules
        </a>
        <a href="/" className="flex items-center gap-1 hover:text-[#e24242]">
          <BookPlus size={16} /> Schedule & Book
        </a>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-gray-700 hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-3 font-medium">
          <a href="/" className="hover:text-[#e24242] transition-colors">
            Home
          </a>
          <a
            href="/services"
            className="hover:text-[#e24242] transition-colors flex items-center justify-between"
          >
            <span>Services</span>
            <ChevronDown size={16} className="text-gray-600" />
          </a>
          <a
            href="/about"
            className="hover:text-[#e24242] transition-colors flex items-center justify-between"
          >
            <span>About</span>
            <ChevronDown size={16} className="text-gray-600" />
          </a>
          <a href="/pricing" className="hover:text-[#e24242] transition-colors">
            Pricing
          </a>
          <a href="/contact" className="hover:text-[#e24242] transition-colors">
            Contact
          </a>
        </nav>

        {/* Blog Previews */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/imgs/Network_200.avif"
              alt="blog1"
              height={60}
              width={100}
              className="rounded-sm"
            />
            <span className="text-sm">Blog 1</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/imgs/transport.avif"
              alt="blog2"
              height={60}
              width={100}
              className="rounded-sm"
            />
            <span className="text-sm">Blog 2</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
