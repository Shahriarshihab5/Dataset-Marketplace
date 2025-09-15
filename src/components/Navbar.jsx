import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/30 backdrop-blur-md shadow-md text-gray-800"
          : "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl">Dataset Marketplace</div>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`font-semibold transition-colors duration-200 ${
              scrolled ? "text-gray-800 hover:text-pink-600" : "text-white hover:text-pink-200"
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`font-semibold transition-colors duration-200 ${
              scrolled ? "text-gray-800 hover:text-pink-600" : "text-white hover:text-pink-200"
            }`}
          >
            Dashboard
          </Link>
          {user ? (
            <Link
              to="/profile"
              className={`font-semibold transition-colors duration-200 ${
                scrolled ? "text-gray-800 hover:text-pink-600" : "text-white hover:text-pink-200"
              }`}
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className={`font-semibold transition-colors duration-200 ${
                scrolled ? "text-gray-800 hover:text-pink-600" : "text-white hover:text-pink-200"
              }`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
