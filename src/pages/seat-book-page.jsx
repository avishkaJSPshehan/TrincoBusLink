import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BusDetails from "../Components/Book Seat/BusDetails";
import SeatChart from "../Components/Book Seat/SeatChart";
import FareBreakdown from "../Components/Book Seat/FareBreakdown";
import axios from "axios";
import SeatSelect from "../Components/Book Seat/SeatSelect";
import { useNavigate } from "react-router-dom";

const BookSeat = () => {
  const params = new URLSearchParams(window.location.search);
  const busId = params.get("id");
  const date = params.get("date");

  const navigate = useNavigate();

  const [bus, setBus] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3001/bus?id=${busId}`);
      const bus = await res.data;
      setBus(bus);
    })();
  }, []);

  const handleProceed = async (selecteSeats) => {
    if (!selecteSeats[0]) return;
    const res = await axios.post("http://localhost:3001/bus/book", {
      busId: busId,
      date: date,
      userId: "test_user",
      seats: selecteSeats,
    });

    console.log(res.data);
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      {bus && <BusDetails bus={bus} date={date} />}
      {/* <SeatChart /> */}
      <SeatSelect busId={busId} date={date} handleProceed={handleProceed} />
      <FareBreakdown />
      <Footer />
    </div>
  );
};

export default BookSeat;
