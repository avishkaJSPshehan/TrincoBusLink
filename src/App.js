import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import SignInPage from "./pages/signin-page";
import LogInPage from "./pages/login-page";
import FindABus from "./pages/find-a-bus-page";
import BookSeat from "./pages/seat-book-page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/find-a-bus" element={<FindABus />} />
          <Route path="/book-seat" element={<BookSeat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
