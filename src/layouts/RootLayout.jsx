import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
