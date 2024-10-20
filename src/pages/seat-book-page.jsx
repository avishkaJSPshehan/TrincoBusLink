import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BusDetails from "../Components/Book Seat/BusDetails";
import SeatChart from "../Components/Book Seat/SeatChart";
import FareBreakdown from "../Components/Book Seat/FareBreakdown";


const BookSeat = () => {
  return (
    <div>
      <Navbar />
      <BusDetails />
      <SeatChart />
      <FareBreakdown />
      <Footer />
    </div>
  );
};

export default BookSeat;