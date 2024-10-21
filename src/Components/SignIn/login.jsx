import React, { useState } from "react";
import "./signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message == "success") {
          sessionStorage.setItem("username", result.data.username);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleLoginSubmit}>
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
          <button type="submit" className="auth-btn">
            Login
          </button>

          <div className="nav-buttons">
            <button className="auth-btn">
              <Link to={"/signin"}>Don't have an account? SignIn</Link>
            </button>
          </div>

          <p className="forgot-password">Forgot password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
