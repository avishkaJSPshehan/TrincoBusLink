import { useEffect, useState } from "react";
import axios from "axios";
import AddBus from "./addBus";
import "./AdminDashboard.css";
import ViewBus from "./viewBus";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [busToUpdate, setBusToUpdate] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/bus/delete/${id}`);
      navigate(0);
    } catch (error) {
      console.error("Error deleting bus:", error);
    }
  };

  const handleUpdate = (bus) => {
    console.log(bus);
    setBusToUpdate(bus);
  };
  return (
    <div className="admin-dashboard">
      <h1 className="page-title">Admin Dashboard</h1>
      <AddBus
        key={busToUpdate ? busToUpdate._id : "1"}
        busToUpdate={busToUpdate}
        setBusToUpdate={setBusToUpdate}
      />
      <ViewBus handleDelete={handleDelete} handleUpdate={handleUpdate} />
      <div className="dashboard-container"></div>
    </div>
  );
};

export default AdminDashboard;
