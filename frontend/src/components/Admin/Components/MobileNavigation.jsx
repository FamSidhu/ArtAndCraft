// import React from "react";

const MobileNavigation = ({
  activePage,
  onPageChange,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const links = [
    { name: "dashboard", label: "Dashboard" },
    { name: "ManageUsers", label: "Manage Users" },
    { name: "profile", label: "Manage Profile" },
    { name: "products", label: "Manage Products" },
    { name: "orders", label: "Orders" },
    { name: "feedback", label: "Feedback" },
    { name: "settings", label: "Settings" },
  ];

  return (
    <nav className="md:hidden bg-black text-white p-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Admin</div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus:outline-none"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      <div className={`${mobileMenuOpen ? "block" : "hidden"} mt-4 space-y-2`}>
        {links.map((link) => (
          <a
            key={link.name}
            href="#"
            className={`nav-item block py-2 px-4 hover:bg-gray-800 rounded ${
              activePage === link.name ? "bg-gray-800" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(link.name);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
