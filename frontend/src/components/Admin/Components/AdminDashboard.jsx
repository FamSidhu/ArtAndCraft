import React, { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Sidebar from "./Sidebar";

// Dummy Components to Avoid Reference Error
const Dashboard = () => <div>Dashboard Content</div>;
const Products = () => <div>Products Content</div>;
const Portfolio = () => <div>Portfolio Content</div>;
const Orders = () => <div>Orders Content</div>;
const Feedback = () => <div>Feedback Content</div>;
const Settings = () => <div>Settings Content</div>;
const AddProductModal = ({ isOpen, onClose }) =>
  isOpen ? <div>Product Modal</div> : null;
const AddPortfolioModal = ({ isOpen, onClose }) =>
  isOpen ? <div>Portfolio Modal</div> : null;

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddPortfolioModal, setShowAddPortfolioModal] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="bg-white">
      <MobileNavigation
        activePage={activePage}
        onPageChange={handlePageChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex min-h-screen pt-0 md:pt-0">
        <Sidebar
          activePage={activePage}
          onPageChange={handlePageChange}
          visible={sidebarVisible}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex-1 pt-16 md:pt-0 transition-all duration-300">
          <header className="hidden md:block bg-white text-black bord py-4 px-6 shadow-md">
            <div className="flex justify-between items-center mt-16">
              <div className="flex items-center space-x-4">
                <button onClick={toggleSidebar}>
                  <i className="fas fa-bars text-xl"></i>
                </button>
                <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button>
                    <i className="fas fa-bell text-xl"></i>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
                <div className="relative">
                  <button>
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
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </header>

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
};

export default AdminDashboard;
