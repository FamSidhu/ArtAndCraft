import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/categories", label: "Categories" },
    { to: "/artists", label: "Artists" },
    { to: "/Crafters", label: "Crafters" },
    { to: "/crafts", label: "Crafts" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    // For root path, exact match; for others, startsWith
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed-nav-bar w-full shadow-md">
      <nav className="navbar-container bg-black text-white w-full flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <div className="nav-logo text-2xl font-serif font-bold">
          Art <span className="font-sans">&</span> Crafts
        </div>

        {/* Navigation Links */}
        <ul className="nav-links flex space-x-6 text-lg font-light ml-8">
          {navLinks.map((link) => (
            <li key={link.to} className="link">
              <Link
                to={link.to}
                className={`pb-1 transition-all hover:text-gray-400 ${
                  isActive(link.to)
                    ? "border-b-2 border-gray-400 text-white-400"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icons flex space-x-4 text-xl relative">
          <Link to="/search" className="hover:text-gray-400">
            <i className="ri-search-line"></i>
          </Link>
          <button className="hover:text-gray-400 relative">
            <i className="ri-shopping-bag-line"></i>
            <sup className="cart-count">0</sup>
          </button>
          <Link to="/login" className="hover:text-gray-400">
            <i className="ri-user-line"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
