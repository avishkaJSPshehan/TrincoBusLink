import AddBus from "./addBus";
import "./AdminDashboard.css";
import ViewBus from "./viewBus";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="page-title">Admin Dashboard</h1>
      <AddBus />
      <ViewBus />
      <div className="dashboard-container"></div>
    </div>
  );
};

export default AdminDashboard;
