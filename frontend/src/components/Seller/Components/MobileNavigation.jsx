import React from "react";

const MobileNavigation = ({
  activePage,
  onPageChange,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav className="md:hidden bg-black text-white p-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">SellerHUb</div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus:outline-none"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      <div className={`${mobileMenuOpen ? "block" : "hidden"} mt-4 space-y-2`}>
        <a
          href="#"
          className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange("dashboard");
          }}
        >
          Dashboard
        </a>
        <a
          href="#"
          className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
            activePage === "products" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange("products");
          }}
        >
          Products
        </a>
        <a
          href="#"
          className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
            activePage === "portfolio" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange("portfolio");
          }}
        >
          Portfolio
        </a>
        <a
          href="#"
          className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
            activePage === "orders" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange("orders");
          }}
        >
          Orders
        </a>
        <a
          href="#"
          className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
            activePage === "feedback" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange("feedback");
          }}
        >
          Feedback
        </a>
        <a
          href="#"
          className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
            activePage === "settings" ? "active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange("settings");
          }}
        >
          Settings
        </a>
      </div>
    </nav>
  );
};

export default MobileNavigation;
