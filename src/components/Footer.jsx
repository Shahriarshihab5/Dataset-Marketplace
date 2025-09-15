import React from "react";
import { FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 shadow-lg p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact Info */}
        <div className="text-white text-center md:text-left space-y-1">
          <p className="font-semibold">Contact Us</p>
          <p className="text-sm">Email: ahmed15-5729@diu.edu.bd</p>
          <p className="text-sm">Phone: +8801737712021</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="mailto:info@datasetmarketplace.com" className="text-white hover:text-yellow-200 transition">
            <FaEnvelope size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white hover:text-yellow-200 transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" className="text-white hover:text-yellow-200 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-white hover:text-yellow-200 transition">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-4 text-center text-white/80 text-sm">
        © 2025 Dataset Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
