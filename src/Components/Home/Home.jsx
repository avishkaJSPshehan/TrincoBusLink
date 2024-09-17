import React,{useEffect} from "react";
import "./home.css";
import video from "../../Assets/home_video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])



  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Search Your Journey</span>
          <h1 data-aos="fade-up" className="homeTitle">Online Seat Reservation</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">

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
            <span>FIND A BUS</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
            
        </div>
      </div>
    </section>
  );
};

export default Home;
