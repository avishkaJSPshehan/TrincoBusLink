import React from "react";
import "./home.css";
import video from "../../Assets/home_video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Search Your Journey</span>
          <h1 className="homeTitle">Online Seat Reservation</h1>
        </div>

        <div className="cardDiv grid">

          <div className="fromInput">
            <label htmlFor="city">Where Are You Now:</label>
            <div className="input flex">
              <input type="text" placeholder="From..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="city">Where You Want to Go:</label>
            <div className="input flex">
              <input type="text" placeholder="To..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Travel Date:</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
            
        </div>
      </div>
    </section>
  );
};

export default Home;
