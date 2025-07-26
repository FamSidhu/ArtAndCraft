import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { gsap } from "gsap";

// Import components
import MobileNavigation from "./MobileNavigation";
import Sidebar from "./Sidebar";
import AddProductModal from "./modals/AddProductModal";
import AddPortfolioModal from "./modals/AddPortfolioModal";
import Dashboard from "../../../pages/SellerPages/Dashboard";
import Products from "../../../pages/SellerPages/Products";
import Portfolio from "../../../pages/SellerPages/Portfolio";
import Orders from "../../../pages/SellerPages/Orders";
import Feedback from "../../../pages/SellerPages/Feedback";
import Settings from "../../../pages/SellerPages/Settings";

function SellerDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddPortfolioModal, setShowAddPortfolioModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    setMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="bg-white">
      {/* Mobile Navigation */}
      <MobileNavigation
        activePage={activePage}
        onPageChange={handlePageChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Desktop Layout */}
      <div className="flex min-h-screen pt-0 md:pt-0">
        {/* Sidebar */}
        <Sidebar
          activePage={activePage}
          onPageChange={handlePageChange}
          visible={sidebarVisible}
          toggleSidebar={toggleSidebar}
        />

        {/* Main Content */}
        <div
          className={`flex-1 ${
            sidebarVisible ? "ml-0 " : "ml-0"
          } pt-16 md:pt-0 transition-all duration-300`}
        >
          {/* Top Navigation for Desktop */}
          <header className="hidden md:block bg-white text-black bord py-4 px-6 shadow-md">
            <div className="flex justify-between items-center mt-16">
              <div className="flex items-center space-x-4">
                <button onClick={toggleSidebar} className="focus:outline-none">
                  <i className="fas fa-bars text-xl"></i>
                </button>
                <h1 className="text-xl font-semibold">Seller Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button className="focus:outline-none">
                    <i className="fas fa-bell text-xl"></i>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
                <div className="relative">
                  <button className="focus:outline-none">
                    <i className="fas fa-envelope text-xl"></i>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      5
                    </span>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    className="w-8 h-8 rounded-full object-cover"
                    alt="Profile"
                  />
                  <span>Clara</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content Container */}
          <main className="p-6">
            {activePage === "dashboard" && <Dashboard />}
            {activePage === "products" && (
              <Products onAddProduct={() => setShowAddProductModal(true)} />
            )}
            {activePage === "portfolio" && (
              <Portfolio
                onAddPortfolio={() => setShowAddPortfolioModal(true)}
              />
            )}
            {activePage === "orders" && <Orders />}
            {activePage === "feedback" && <Feedback />}
            {activePage === "settings" && <Settings />}
          </main>
        </div>
      </div>

      {/* Modals */}
      <AddProductModal
        isOpen={showAddProductModal}
        onClose={() => setShowAddProductModal(false)}
      />

      <AddPortfolioModal
        isOpen={showAddPortfolioModal}
        onClose={() => setShowAddPortfolioModal(false)}
      />
    </div>
  );
}

export default SellerDashboard;
