import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user", {
        name,
        email,
        password,
        role: "user",
      })
      .then((result) => {
        if (result.status === 200) {
          sessionStorage.setItem("username", name);
          sessionStorage.setItem("role", "user");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form" onSubmit={handleSignUpSubmit}>
          <div className="auth-input-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="auth-input-group">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-input-group">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="auth-input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <div className="nav-buttons">
          <button className="auth-btn">
            <Link to={"/login"}>Already have an account? Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
