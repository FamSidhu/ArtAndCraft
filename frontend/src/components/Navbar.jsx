import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "../pages/CartSidebar.jsx"; // ✅ adjust path if needed

const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useCart();

  // ✅ Sidebar open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Toggle function
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed-nav-bar w-full shadow-md z-50">
      <nav className="navbar-container bg-black text-white w-full flex justify-between items-center px-10 py-4">
        {/* Logo */}
        <div className="nav-logo text-2xl font-serif font-bold">
          Art <span className="font-sans">&</span> Crafts
        </div>

        {/* Nav Links */}
        <ul className="nav-links flex space-x-6 text-lg font-light ml-8">
          {navLinks.map((link) => (
            <li key={link.to} className="link">
              <Link
                to={link.to}
                className={`pb-1 transition-all hover:text-gray-400 ${
                  isActive(link.to)
                    ? "border-b-2 border-gray-400 text-white"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="nav-icons flex space-x-4 text-xl relative">
          <Link to="/search" className="hover:text-gray-400">
            <i className="ri-search-line"></i>
          </Link>
          <button className="hover:text-gray-400 relative" onClick={toggleCart}>
            <i className="ri-shopping-bag-line"></i>
            <sup className="cart-count">{cartItems.length}</sup>
          </button>
          <Link to="/login" className="hover:text-gray-400">
            <i className="ri-user-line"></i>
          </Link>
        </div>
      </nav>

      {/* ✅ Sidebar shown here */}
      <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
    </header>
  );
};

export default Navbar;
