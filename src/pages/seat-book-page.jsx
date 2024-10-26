import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BusDetails from "../Components/Book Seat/BusDetails";
import SeatChart from "../Components/Book Seat/SeatChart";
import FareBreakdown from "../Components/Book Seat/FareBreakdown";
import axios from "axios";

const BookSeat = () => {
  const params = new URLSearchParams(window.location.search);
  const busId = params.get("id");
  const date = params.get("date");

  const [bus, setBus] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3001/bus?id=${busId}`);
      const bus = await res.data;
      setBus(bus);
    })();
  }, []);
  return (
    <div>
      <Navbar />
      {bus && <BusDetails bus={bus} date={date} />}
      <SeatChart />
      <FareBreakdown />
      <Footer />
    </div>
  );
};

export default BookSeat;
