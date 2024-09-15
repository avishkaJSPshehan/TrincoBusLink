import React from "react";
import "./home.css";
import video from "../../Assets/home_video.mp4";
import { GrLocation } from "react-icons/gr";

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
          <div className="destinationInput">
            <label htmlFor="city">Where Are You Now:</label>
            <div className="input flex">
              <input type="text" placeholder="From..." />
              <GrLocation className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
