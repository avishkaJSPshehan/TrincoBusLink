import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");
    if (!username || role !== "admin") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <AdminDashboard />
    </div>
  );
};

export default AdminDashboardPage;
