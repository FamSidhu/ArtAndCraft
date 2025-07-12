import React from "react";
// import Navbar from "../Navbar";
// import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 py-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
