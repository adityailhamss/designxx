import './App.css';
import LandingPage from './component/LandingPage';
import Portfolio from './component/Portfolio';
import Demo from './component/Demo';
import StepTwo from './component/StepTwo';
import StepThree from './component/StepThree';
<<<<<<< HEAD
import VideoDemo from './component/VideoDemo';
import CalendarPopup from './component/CalendarPopup';
import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
=======
import Order from './component/Order';
import Paket from './component/Paket';
>>>>>>> 5274ea7e9a933b868437199b5b666e8a1ad5a280

function App() {
  const [showMyModal, setShowMyModal] = useState(false)
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/steptwo" element={<StepTwo/>}/>
        <Route path="/stepthree" element={<StepThree/>}/>
      </Routes>
    </Router>
=======

      <LandingPage />
      
      
>>>>>>> 5274ea7e9a933b868437199b5b666e8a1ad5a280

  );
}

export default App;
