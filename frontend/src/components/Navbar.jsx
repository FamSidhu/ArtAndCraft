import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-full shadow-md">
      <nav className="navbar-container bg-black text-white w-full flex justify-between items-center px-10 py-4">
        {/* Brand */}
        <div className="nav-logo text-2xl font-serif font-bold">
          Art <span className="font-sans">&</span> Crafts
        </div>

        {/* Navigation Links */}
        <ul className="nav-links flex space-x-6 text-lg font-light ml-30">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="link">
            <Link to="/artists">Artists</Link>
          </li>
          <li className="link">
            <Link to="/crafters">Crafters</Link>
          </li>
          <li className="link">
            <Link to="/crafts">Crafts</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-icons flex space-x-4 text-xl relative">
          <Link to="/search" className="hover:text-primary">
            <i className="ri-search-line"></i>
          </Link>
          <button className="hover:text-primary relative">
            <i className="ri-shopping-bag-line"></i>
            <sup className="cart-count">0</sup>
          </button>
          <Link to="/login" className="hover:text-primary">
            <i className="ri-user-line"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
