import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/Search";
import CartSidebar from "../pages/Customer/CartSidebar.jsx";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [search, setSearch] = useSearch();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [keyword, setKeyword] = useState("");

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/v1/product/search/${keyword}`);
      const data = await res.json();
      setSearch({ ...search, results: data });
      navigate("/search");
      setShowSearchInput(false); // hide bar after submit
    } catch (err) {
      console.error("Search error", err);
    }
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

        {/* Icons */}
        <div className="nav-icons flex space-x-4 text-xl relative items-center">
          {/* Search input field */}
          {showSearchInput && (
            <form onSubmit={handleSearchSubmit} className="mr-2">
              <input
                type="text"
                placeholder="Search..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="px-2 py-1 text-black rounded focus:outline-none"
                autoFocus
              />
            </form>
          )}

          {/* Search Icon */}
          <button onClick={toggleSearchInput} className="hover:text-gray-400">
            <i className="ri-search-line"></i>
          </button>

          {/* Cart Icon */}
          <button onClick={toggleCart} className="hover:text-gray-400 relative">
            <i className="ri-shopping-bag-line"></i>
            <sup className="cart-count">{cartItems.length}</sup>
          </button>

          {/* Login Icon */}
          <Link to="/login" className="hover:text-gray-400">
            <i className="ri-user-line"></i>
          </Link>
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
    </header>
  );
};

export default Navbar;
