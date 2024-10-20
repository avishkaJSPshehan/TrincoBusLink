import React from "react";
import "./BusDetails.css";
import busImage from "../../Assets/bus_1.jpg";

const BusDetails = () => {
  return (
    <div className="bus-details-container">
      <div className="route-header">
        <h2>Stops @ Anuradhapura</h2>
        <div className="price-info">
          <span>Rs. 981.50</span>
          <span>Available Seats: 46</span>
        </div>
      </div>
      <div className="bus-summary">
        <div className="bus-image">
          <img src={busImage} alt="Bus" />
        </div>
        <div className="route-info">
          <div className="route">
            <span>Departure: Horowpothana</span>
            <span className="arrow">→</span>
            <span>Arrival: Colombo</span>
          </div>
          <div className="timing">
            <span>Date: 2024-10-20</span>
            <span>Time: 18:15</span>
          </div>
          <div className="duration">
            <span>Duration: 06:00 Hours</span>
          </div>
          <div className="bus-info">
            <span>Bus Type: Normal</span>
            <span>Model: Ashok Leyland</span>
            <span>Bus Schedule ID: HP15-1815-HC</span>
            <span>Depot Name: Horowpothana</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
