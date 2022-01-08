import React, { useEffect, useState } from "react";
import './App.css';
import Axios from "axios";
import Rejestracja from "./pages/Rejestracja.js";
import StronaGlowna from "./pages/StronaGlowna.js";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import DashboardTop from "./components/DashboardTop.js";
import OFirmie from "./pages/OFirmie.js";
import Footer from "./components/footer";
import Cennik from "./pages/Cennik";
import DashboardTopAdmin from "./components/DashboardTopAdmin.js";
import DashboardTopUser from "./components/DashboardTopUser.js";
import Usługi from "./pages/Uslugi.js";
import UsługiNiezalogowany from "./pages/UslugiNiezalogowany";

function App() {

  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].rola);
      }
    });
  }, []);

  return ( 
  <div className ="App">

   

   {role == "admin" && <DashboardTopAdmin />}
   {role == "user" && <DashboardTopUser />}
   {role == "" && <DashboardTop />}
   <Dashboard/>
   
   
   

   
    <Routes>   
          
          <Route path="/" element={<StronaGlowna />}/>  
          <Route path="/register" element={<Rejestracja/>}/> 
          <Route path="/ofirmie" element={<OFirmie />}/> 
          <Route path="/cennik" element={<Cennik />}/>
          <Route path="/uslugi" element={<Usługi />}/>
          <Route path="/uslugi" element={<UsługiNiezalogowany />}/>
     
    </Routes>
    <Footer/>
    </div>
   
  );
}

export default App ;