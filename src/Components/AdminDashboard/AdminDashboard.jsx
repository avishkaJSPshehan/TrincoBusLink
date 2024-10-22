import { useEffect, useState } from "react";
import AddBus from "./addBus";
import "./AdminDashboard.css";
import ViewBus from "./viewBus";

const AdminDashboard = () => {
  const [busToUpdate, setBusToUpdate] = useState(null);

  const handleDelete = (id) => {};

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
