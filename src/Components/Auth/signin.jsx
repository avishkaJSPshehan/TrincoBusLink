import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", { email, password })
      .then((result) => {
        if (result.data.message === "success") {
          const user = result.data.user;
          sessionStorage.setItem("username", user.name);
          sessionStorage.setItem("role", user.role);
          sessionStorage.setItem("userId", user._id);

          if (user.role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/");
          }
        } else if (result.data.message === "error") {
          setErrorMessage(result.data.error); // Set error message if login fails
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
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <button type="submit" className="auth-btn">
            Login
          </button>

          <div className="nav-buttons">
            <button className="auth-btn">
              <Link to={"/signup"}>Don't have an account? SignIn</Link>
            </button>
          </div>

          <p className="forgot-password">Forgot password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
