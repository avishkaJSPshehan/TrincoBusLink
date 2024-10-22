import React, { useEffect, useState } from "react";
import "./BusSearch.css";
import busImage from "../../Assets/bus_1.jpg"; // Default image
import { Link } from "react-router-dom";

const BusSearch = ({ departure, arrival, busData, travelDate }) => {
  // const [buses, setBuses] = useState([]); // State to store bus details
  // const [loading, setLoading] = useState(true); // Loading state
  // const [error, setError] = useState(null); // Error state

  // useEffect(() => {
  //   // Fetch bus details from backend API
  //   const fetchBusData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3001/", {
  //         method: "POST", // Change to POST
  //         headers: {
  //           "Content-Type": "application/json", // Ensure that the content type is set
  //         },
  //         body: JSON.stringify({
  //           departure: "ANURADHAPURA", // Replace with your actual departure value
  //           arrival: "COLOMBO", // Replace with your actual arrival value
  //           travelDate: "2024-10-15", // Optionally add the travelDate if needed
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch bus data");
  //       }

  //       const data = await response.json();
  //       setBuses(data); // Set the bus data in the state
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBusData(); // Call the fetch function when the component loads
  // }, []); // Empty dependency array to ensure the fetch is done once on component load

  // if (loading) {
  //   return <div>Loading bus details...</div>; // Display loading message while fetching data
  // }

  // if (error) {
  //   return <div>Error: {error}</div>; // Display error message if any issues occur
  // }

  return (
    <div className="bus-search-container">
      {/* Header Section */}
      <div className="bus-header">
        <span>{departure}</span>
        <span className="arrow">→</span>
        <span>{arrival}</span>
        <span>{travelDate}</span>
      </div>
      {/* Bus Card Section */}
      {busData.map((bus) => (
        <div key={bus.id} className="bus-card">
          <div className="bus-details">
            <div className="bus-image">
              <img src={busImage} alt="Bus" />{" "}
              {/* You can update image dynamically if available */}
            </div>
            <div className="bus-info">
              <div className="route-info-search">
                <span className="departure">{bus.departure}</span>
                <span className="arrow">→</span>
                <span className="arrival">{bus.arrival}</span>
              </div>
              <div className="time-info">
                <span>Departure: {bus.departureTime}</span>
                <span>Arrival: {bus.arrivalTime}</span>
                <span>Duration: {bus.duration}</span>
              </div>
              <div className="bus-details-info">
                <span>Bus Type: {bus.busType}</span>
                <span>Model: {bus.model}</span>
                <span>Bus Schedule ID: {bus.scheduleId}</span>
                <span>Depot Name: {bus.depotName}</span>
              </div>
            </div>
          </div>

          <div className="price-info">
            <span className="price">Rs.{bus.price}.00</span>
            <span >Available Seats: {bus.availableSeats}</span>

            <Link to={"/book-seat"} className="book-btn">
              Book Seat
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusSearch;
