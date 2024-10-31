import React, { useState } from "react";
import "./SeatChart.css";
import Steering from "../../Assets/steering.jpg";

const SeatChart = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }

    console.log(selectedSeats)
  };

  const renderSeat = (seatNumber, className = "") => {
    return (
      <div
        key={seatNumber}
        className={`seat ${className} ${
          selectedSeats.includes(seatNumber) ? "selected" : ""
        }`}
        onClick={() => handleSeatClick(seatNumber)}
      >
        {seatNumber}
      </div>
    );
  };

  return (
    <div className="seat-chart-container">
      <div className="legend">
        <span className="available">Available Seats</span>
        <span className="processing">Processing Seats</span>
        <span className="booked">Booked Seats</span>
        <span className="selected">Selected Seats</span>
      </div>

      {/* Bus Seat Layout */}
      <div className="bus-layout">
        {/* Driver's Seat */}
        <div className="driver">
          <img src={Steering} alt="Driver" />
        </div>

        {/* Rows layout */}
        <div className="bus-rows">
          {/* Row 1 to 3 - Left side */}
          <div className="row">
            {renderSeat(5)}
            {renderSeat(10)}
            {renderSeat(15)}
            {renderSeat(20)}
            {renderSeat(25)}
            {renderSeat(30)}
            {renderSeat(35)}
            {renderSeat(40)}
            {renderSeat(45)}
            {renderSeat(48)}
            {renderSeat(51)}
          </div>

          <div className="row">
            {renderSeat(4)}
            {renderSeat(9)}
            {renderSeat(14)}
            {renderSeat(19)}
            {renderSeat(24)}
            {renderSeat(29)}
            {renderSeat(34)}
            {renderSeat(39)}
            {renderSeat(44)}
            {renderSeat(47)}
            {renderSeat(50)}
          </div>

          <div className="row">
            {renderSeat(3)}
            {renderSeat(8)}
            {renderSeat(13)}
            {renderSeat(18)}
            {renderSeat(23)}
            {renderSeat(28)}
            {renderSeat(33)}
            {renderSeat(38)}
            {renderSeat(43)}
            {renderSeat(46)}
            {renderSeat(49)}
          </div>

          <br />
          {/* Row 4 to 5 - Right side */}
          <div className="row">
            {renderSeat(2)}
            {renderSeat(7)}
            {renderSeat(12)}
            {renderSeat(17)}
            {renderSeat(22)}
            {renderSeat(27)}
            {renderSeat(32)}
            {renderSeat(37)}
            {renderSeat(42)}
            {renderSeat()}
            {renderSeat(48)}
          </div>

          <div className="row">
            {renderSeat(1)}
            {renderSeat(6)}
            {renderSeat(11)}
            {renderSeat(16)}
            {renderSeat(21)}
            {renderSeat(26)}
            {renderSeat(31)}
            {renderSeat(36)}
            {renderSeat(41)}
            {renderSeat()}
            {renderSeat(49)}
          </div>
        </div>
      </div>

      <button className="proceed-btn">Proceed</button>
    </div>
  );
};

export default SeatChart;
