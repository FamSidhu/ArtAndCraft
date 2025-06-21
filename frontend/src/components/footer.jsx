import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-bold mb-4">
              Art <span className="font-sans">&</span> Crafts
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover beautiful handmade crafts, connect with talented artists,
              and explore the world of creativity. Supporting local creators
              since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/crafts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Crafts
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope-open-text text-blue-400"></i>
                <a
                  href="mailto:fatimasidhuit@gmail.com"
                  className="text-gray-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fatimasidhuit@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-brands fa-instagram text-pink-400"></i>
                <a
                  href="https://www.instagram.com/dreamgirl3442021?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  className="text-gray-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Art&Crafts
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-brands fa-twitter text-blue-400"></i>
                <a
                  href="https://twitter.com/AqsaShahzadi484?t=BA_f8xqqpmOEq_w33x4sQA&s=08"
                  className="text-gray-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Art&Crafts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Art & Crafts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
