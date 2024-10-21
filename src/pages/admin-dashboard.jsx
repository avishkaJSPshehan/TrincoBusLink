import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BusSearch from "../Components/Find A Bus/findabus";
import Footer from "../Components/Footer/Footer";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";

const adminDashboard = () => {
  return (
    <div>
      <Navbar />
      <AdminDashboard />
    </div>
  );
};

export default adminDashboard;
