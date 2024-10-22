import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import LogInPage from "./pages/login-page";
import FindABus from "./pages/find-a-bus-page";
import BookSeat from "./pages/seat-book-page";
import AdminDashboardPage from "./pages/admin-dashboard";
import SignUpPage from "./pages/signup-page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/find-a-bus" element={<FindABus />} />
          <Route path="/book-seat" element={<BookSeat />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
