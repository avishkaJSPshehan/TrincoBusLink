import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import SignInPage from "./pages/signin-page";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
