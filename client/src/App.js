import React from "react";
import './App.css';
import Logowanie from "./pages/Logowanie.js";
import Rejestracja from "./pages/Rejestracja.js";
import StronaGlowna from "./pages/StronaGlowna.js";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import OFirmie from "./pages/OFirmie";


function App() {
  return ( 
  <div className ="App">

   <Dashboard/>

   
    <Routes>   
      
          <Route path="/" element={<StronaGlowna />}/> 
          <Route path="/login" element={<Logowanie />}/> 
          <Route path="/register" element={<Rejestracja/>}/> 
          <Route path="/ofirmie" element={<OFirmie />}/> 
          <Route path="/cennik" element={<Dashboard />}/>
     
    </Routes>
  
    </div>
   
  );
}

export default App ;