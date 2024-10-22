import React, { useState, useEffect } from "react";
import axios from "axios";
const ViewBus = () => {
  const [buses, setBuses] = useState([]);
  return (
    <>
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
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewBus;
