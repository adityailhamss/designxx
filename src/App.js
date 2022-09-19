import "./App.css";
import LandingPage from "./component/LandingPage";
import Portfolio from "./component/Portfolio";
import Demo from "./component/Demo";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";
import VideoDemo from "./component/VideoDemo";
import CalendarPopup from "./component/CalendarPopup";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HowItWork from "./component/HowItWork";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const [showMyModal, setShowMyModal] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/stepthree" element={<StepThree />} />
        <Route path="/howitworks" element={<HowItWork />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
