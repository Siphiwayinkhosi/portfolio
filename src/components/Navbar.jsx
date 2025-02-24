import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa"; // Import icons
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text"
        >
          Siphiwayinkhosi Mahlalela
        </motion.div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter
              size={24}
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook
              size={24}
              className="hover:text-blue-600 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={24}
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube
              size={24}
              className="hover:text-red-600 transition-transform transform hover:scale-110"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-orange-500"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-75 backdrop-blur-md absolute top-full left-0 w-full p-4 flex flex-col space-y-4 z-40">
          {/* Navigation Links */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-lg font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-lg font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-lg font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-orange-500 transition text-lg font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter
                size={24}
                className="hover:text-blue-400 transition-transform transform hover:scale-110"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={24}
                className="hover:text-blue-600 transition-transform transform hover:scale-110"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={24}
                className="hover:text-pink-500 transition-transform transform hover:scale-110"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                size={24}
                className="hover:text-red-600 transition-transform transform hover:scale-110"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;    