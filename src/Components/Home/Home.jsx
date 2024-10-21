import React, { useEffect, useState } from "react";
import "./home.css";
import video from "../../Assets/home_video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";
import FindABus from "../../pages/find-a-bus-page";
import BusSearch from "../Find A Bus/findabus";

const Home = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const navigate = useNavigate();
  const [busData, setBusData] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleFindBus = () => {
    // Create the data object
    const formData = {
      departure,
      arrival,
      travelDate,
    };

    // Send the data to the backend using POST
    axios
      .post("http://localhost:3001/", formData)
      .then((response) => {
        console.log("Success:", response.data);
        setBusData(response.data);
        console.log("Bus Data", busData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Search Your Journey
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Online Seat Reservation
            </h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            <div className="fromInput">
              <label htmlFor="from">Where Are You Now:</label>
              <div className="input flex">
                <input
                  type="text"
                  placeholder="From..."
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)} // Update state
                  required
                />
                <GrLocation className="icon" />
              </div>
            </div>

            <div className="destinationInput">
              <label htmlFor="to">Where You Want to Go:</label>
              <div className="input flex">
                <input
                  type="text"
                  placeholder="To..."
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)} // Update state
                  required
                />
                <GrLocation className="icon" />
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Travel Date:</label>
              <div className="input flex">
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)} // Update state
                />
              </div>
            </div>

            <div className="searchOptions flex" onClick={handleFindBus}>
              <HiFilter className="icon" />
              <span>FIND A BUS</span>
            </div>
          </div>

          <div className="homeFooterIcons flex">{/* Footer Icons */}</div>
        </div>
      </section>
      <section>
        {busData && (
          <BusSearch
            busData={busData}
            arrival={arrival}
            departure={departure}
            travelDate={travelDate}
          />
        )}
      </section>
    </>
  );
};

export default Home;
