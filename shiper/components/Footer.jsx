"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/news" className="hover:text-white">News</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/freight" className="hover:text-white">Air Freight</a></li>
            <li><a href="/shipping" className="hover:text-white">Ocean Shipping</a></li>
            <li><a href="/logistics" className="hover:text-white">Logistics</a></li>
            <li><a href="/tracking" className="hover:text-white">Shipment Tracking</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/terms" className="hover:text-white">Shipping Terms</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/cookies" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} SHIP<span className="text-[#e24242]">fast</span>. All rights reserved.</p>

          {/* Social icons */}
          <div className="flex gap-5">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
