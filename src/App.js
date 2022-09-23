import "./App.css";
import LandingPage from "./component/LandingPage";
import TestLandingPage from "./component/TestLandingPage";
import Portfolio from "./component/Portfolio";
import Demo from "./component/Demo";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";
import VideoDemo from "./component/VideoDemo";
import CalendarPopup from "./component/CalendarPopup";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HowItWork from "./component/HowItWork";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Paket from "./component/Paket";
import Order from "./component/Order";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TestLandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/stepthree" element={<StepThree />} />
        <Route path="/howitworks" element={<HowItWork />} />
        <Route path="/calendarpopup" element={<CalendarPopup />} />
        <Route path="/videodemo" element={<VideoDemo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
