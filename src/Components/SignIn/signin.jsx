import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signin',{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-toggle">
          <button
            className={`auth-toggle-btn ${activeForm === 'login' ? 'active' : ''}`}
            onClick={() => setActiveForm('login')}
          >
            Login
          </button>
          <button
            className={`auth-toggle-btn ${activeForm === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveForm('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeForm === 'login' ? (
          <form className="auth-form">
            <h2 className="auth-title">Welcome Back!</h2>
            <div className="auth-input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="auth-input-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="auth-btn">Login</button>
            <p className="auth-footer-text">Forgot password?</p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2 className="auth-title">Join Us!</h2>
            <div className="auth-input-group">
              <input type="text" placeholder="Full Name" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="auth-input-group">
              <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="auth-input-group">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="auth-input-group">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="auth-btn">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
