import React from "react";
import "./BusDetails.css";
import busImage from "../../Assets/bus_1.jpg";

const BusDetails = ({ bus, date }) => {
  return (
    <div className="bus-details-container">
      <div className="route-header">
        <h2>Stops @ {bus.arrival}</h2>
        <div className="price-info">
          <span>Rs. {bus.price}</span>
          <span>Available Seats: {bus.availableSeats}</span>
        </div>
      </div>
      <div className="bus-summary">
        <div className="bus-image">
          <img src={busImage} alt="Bus" />
        </div>
        <div className="route-info">
          <div className="route">
            <span>Departure: {bus.depature}</span>
            <span className="arrow">→</span>
            <span>Arrival: {bus.arrival}</span>
          </div>
          <div className="timing bus-info">
            <span>Date: {date}</span>
            <span>Time: {bus.departureTime}</span>
          </div>
          <div className="duration">
            <span>Duration: {bus.duration} Hours</span>
          </div>
          <div className="bus-info">
            <span>Bus Type: {bus.busType}</span>
            <span>Model: {bus.model}</span>
            <span>Bus Schedule ID: HP15-1815-HC</span>
            <span>Depot Name: {bus.depotName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
