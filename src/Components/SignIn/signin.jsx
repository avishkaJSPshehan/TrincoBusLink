import React, { useState } from 'react';
import './signin.css';

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login');

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
          <form className="auth-form">
            <h2 className="auth-title">Join Us!</h2>
            <div className="auth-input-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="auth-input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="auth-input-group">
              <input type="password" placeholder="Password" required />
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
