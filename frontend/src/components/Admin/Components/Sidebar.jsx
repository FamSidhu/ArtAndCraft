// import React from "react";

const Sidebar = ({ activePage, onPageChange, visible }) => {
  return (
    <div
      id="sidebar"
      className={`${
        visible ? "hidden md:block" : "hidden"
      } bg-black text-white w-64 overflow-y-auto transition-all duration-300 ease-in-out z-40`}
    >
      <div className="p-6">
        <div className="space-y-4 mt-12">
          {[
            {
              name: "dashboard",
              label: "Dashboard",
              icon: "fas fa-tachometer-alt",
            },
            {
              name: "ManageUsers",
              label: "Manage Users",
              icon: "fas fa-palette",
            },
            { name: "profile", label: "Manage Profile", icon: "fas fa-user" },
            { name: "products", label: "Manage Products", icon: "fas fa-box" },
            { name: "orders", label: "Orders", icon: "fas fa-shopping-bag" },
            { name: "feedback", label: "Feedback", icon: "fas fa-star" },
            { name: "settings", label: "Settings", icon: "fas fa-cog" },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`nav-item flex items-center space-x-3 p-3 rounded hover:bg-gray-800 ${
                activePage === item.name
                  ? "bg-gray-800 border-l-4 border-gray-500"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(item.name);
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
