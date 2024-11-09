import React, { useState, useEffect } from "react";
import axios from "axios";
import { cities } from "../../constants/cities";
import { useNavigate } from "react-router-dom";
const AddBus = ({ busToUpdate, setBusToUpdate }) => {
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    busType: "",
    model: "",
    busNo: "",
    depotName: "",
    price: "",
    availableSeats: "",
  });

  useEffect(() => {
    console.log("updating");
    if (busToUpdate) {
      setFormData(busToUpdate);
    } else {
      setFormData({
        departure: "",
        arrival: "",
        departureTime: "",
        arrivalTime: "",
        duration: "",
        busType: "",
        model: "",
        busNo: "",
        depotName: "",
        price: "",
        availableSeats: "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData._id) {
        // Update existing bus
        await axios.put(
          `http://localhost:3001/bus/update/${formData._id}`,
          formData
        );
        navigate(0);
      } else {
        // Create new bus
        await axios.post("http://localhost:3001/bus", formData);
        navigate(0);
      }

      setFormData({
        departure: "",
        arrival: "",
        departureTime: "",
        arrivalTime: "",
        duration: "",
        busType: "",
        model: "",
        busNo: "",
        depotName: "",
        price: "",
        availableSeats: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClear = () => {
    setFormData({
      departure: "",
      arrival: "",
      departureTime: "",
      arrivalTime: "",
      duration: "",
      busType: "",
      model: "",
      busNo: "",
      depotName: "",
      price: "",
      availableSeats: "",
    });
    setBusToUpdate(null);
  };

  return (
    <>
      <div className="crud-form modern-card">
        <h2 className="form-title">Bus Management</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label htmlFor="departure">Departure</label>
            <select
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
              required
            >
              <option>Departure</option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="arrival">Arrival</label>
            <select
              type="text"
              name="arrival"
              value={formData.arrival}
              onChange={handleInputChange}
              required
            >
              <option>Arrival</option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
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
            {/* <input
              type="text"
              name="busType"
              value={formData.busType}
              onChange={handleInputChange}
              placeholder="Bus Type"
              required
            /> */}
            <select>
              <option >---</option>
              <option value="SLTB">SLTB</option>
              <option value="PVT">Private</option>
            </select>
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
            <label htmlFor="busNo">Bus No.</label>
            <input
              type="text"
              name="Bus No."
              value={formData.busNo}
              onChange={handleInputChange}
              // required
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
          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <input
              disabled
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleInputChange}
              placeholder="Owner"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {formData._id ? "Update Bus" : "Add Bus"}
          </button>
          <button type="reset" className="submit-btn" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBus;
