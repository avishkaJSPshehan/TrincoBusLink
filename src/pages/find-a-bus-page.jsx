import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BusSearch from "../Components/Find A Bus/findabus";
import Footer from "../Components/Footer/Footer";


const FindABus = () => {
  return (
    <div>
      <Navbar />
      <BusSearch />
      <Footer />
    </div>
  );
};

export default FindABus;