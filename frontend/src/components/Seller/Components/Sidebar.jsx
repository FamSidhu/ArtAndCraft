import React from "react";

const Sidebar = ({ activePage, onPageChange, visible }) => {
  return (
    <div
      id="sidebar"
      className={`${
        visible ? "hidden md:block" : "hidden"
      } bg-black text-white w-64 overflow-y-auto transition-all duration-300 ease-in-out z-40`}
    >
      <div className="p-6">
        {/* <h2 className="text-2xl font-bold mb-6">ArtisanHub</h2> */}
        <div className="space-y-4 mt-12">
          <a
            href="#"
            className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
              activePage === "dashboard"
                ? "bg-gray-800 border-l-4 border-gray-500"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange("dashboard");
            }}
          >
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
              activePage === "products"
                ? "bg-gray-800 border-l-4 border-gray-500"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange("products");
            }}
          >
            <i className="fas fa-palette"></i>
            <span>Products</span>
          </a>
          <a
            href="#"
            className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
              activePage === "portfolio"
                ? "bg-gray-800 border-l-4 border-gray-500"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange("portfolio");
            }}
          >
            <i className="fas fa-images"></i>
            <span>Portfolio</span>
          </a>
          <a
            href="#"
            className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
              activePage === "orders"
                ? "bg-gray-800 border-l-4 border-gray-500"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange("orders");
            }}
          >
            <i className="fas fa-shopping-bag"></i>
            <span>Orders</span>
          </a>
          <a
            href="#"
            className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
              activePage === "feedback"
                ? "bg-gray-800 border-l-4 border-gray-500"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange("feedback");
            }}
          >
            <i className="fas fa-star"></i>
            <span>Feedback</span>
          </a>
          <a
            href="#"
            className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
              activePage === "settings"
                ? "bg-gray-800 border-l-4 border-gray-500"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange("settings");
            }}
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
