import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [buses, setBuses] = useState([]);
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    busType: "",
    model: "",
    scheduled: "",
    depotName: "",
    price: "",
    availableSeats: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBus = { ...formData, id: Date.now() };
    setBuses([...buses, newBus]);
    setFormData({
      departure: "",
      arrival: "",
      departureTime: "",
      arrivalTime: "",
      duration: "",
      busType: "",
      model: "",
      scheduled: "",
      depotName: "",
      price: "",
      availableSeats: "",
    });
  };

  const handleDelete = (id) => {
    setBuses(buses.filter((bus) => bus.id !== id));
  };

  const handleUpdate = (id) => {
    const busToUpdate = buses.find((bus) => bus.id === id);
    setFormData(busToUpdate);
  };

  return (
    <div className="admin-dashboard">
      <h1 className="page-title">Admin Dashboard</h1>
      <div className="dashboard-container">
        <div className="crud-form modern-card">
          <h2 className="form-title">Bus Management</h2>
          <form onSubmit={handleSubmit} className="form-content">
            <div className="form-group">
              <label htmlFor="departure">Departure</label>
              <input
                type="text"
                name="departure"
                value={formData.departure}
                onChange={handleInputChange}
                placeholder="Departure"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="arrival">Arrival</label>
              <input
                type="text"
                name="arrival"
                value={formData.arrival}
                onChange={handleInputChange}
                placeholder="Arrival"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="departureTime">Departure Time</label>
              <input
                type="time"
                name="departureTime"
                value={formData.departureTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="arrivalTime">Arrival Time</label>
              <input
                type="time"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="Duration"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="busType">Bus Type</label>
              <input
                type="text"
                name="busType"
                value={formData.busType}
                onChange={handleInputChange}
                placeholder="Bus Type"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                placeholder="Model"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="scheduled">Scheduled</label>
              <input
                type="date"
                name="scheduled"
                value={formData.scheduled}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="depotName">Depot Name</label>
              <input
                type="text"
                name="depotName"
                value={formData.depotName}
                onChange={handleInputChange}
                placeholder="Depot Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="availableSeats">Available Seats</label>
              <input
                type="number"
                name="availableSeats"
                value={formData.availableSeats}
                onChange={handleInputChange}
                placeholder="Available Seats"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {formData.id ? "Update Bus" : "Add Bus"}
            </button>
          </form>
        </div>

        <div className="bus-list modern-card">
          <h2 className="table-title">Bus Details</h2>
          <table className="bus-table">
            <thead>
              <tr>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Duration</th>
                <th>Bus Type</th>
                <th>Model</th>
                <th>Scheduled</th>
                <th>Depot Name</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.id}>
                  <td>{bus.departure}</td>
                  <td>{bus.arrival}</td>
                  <td>{bus.departureTime}</td>
                  <td>{bus.arrivalTime}</td>
                  <td>{bus.duration}</td>
                  <td>{bus.busType}</td>
                  <td>{bus.model}</td>
                  <td>{bus.scheduled}</td>
                  <td>{bus.depotName}</td>
                  <td>{bus.price}</td>
                  <td>{bus.availableSeats}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleUpdate(bus.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(bus.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
