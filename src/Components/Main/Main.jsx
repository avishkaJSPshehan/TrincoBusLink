import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div className="about-section">
      <div className="container">
        <h2 className="about-heading">Welcome to TricoBusLink</h2>
        <p className="about-text">
          TricoBusLink is your trusted companion for booking bus seats effortlessly. Whether you are commuting daily or planning a long-distance trip, our seamless platform lets you book and manage your seats with ease.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Easy Booking</h3>
            <p>Quick and intuitive seat booking process, designed to save you time.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Seat Availability</h3>
            <p>Get up-to-date seat availability and never miss a ride.</p>
          </div>
          <div className="feature">
            <h3>Secure Payments</h3>
            <p>Multiple secure payment options to ensure a hassle-free experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
