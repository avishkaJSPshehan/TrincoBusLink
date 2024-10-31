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

  const userId = sessionStorage.getItem("userId");
  if (!userId) return navigate("/login");

  const handleProceed = async (selecteSeats) => {
    if (!selecteSeats[0]) return;
    const data = {
      busId: busId,
      date: date,
      userId: userId,
      seats: selecteSeats,
    };
    const param = btoa(JSON.stringify(data));
    navigate(`/payment?amount=${bus.price}&data=${param}`);
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
