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
import DashboardNiezalogowany from "./components/DashboardNiezalogowany";
import DashboardAdmin from "./components/DashboardAdmin";
import Powiadomienia from "./pages/Powiadomienia";
import Kontakt from "./pages/Kontakt";
import Zamow from "./pages/zamow";
import Wyloguj from "./components/Wyloguj.js";
import KontaktNiezalogowany from "./pages/KontaktNiezalogowany";
import Zamowione from "./pages/zamowienie_zlozone";
import Zapytane from "./pages/zapytane";
import Zapytaj from "./pages/zapytaj";
import Status from "./pages/Status";

function App() {

  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].rola);
      }
    });
    console.log("123")
    console.log(role)
  }, []);

  return ( 
  <div className ="App">

   {role === "admin" && <DashboardTopAdmin />}
   {role === "admin" && <DashboardAdmin/>}
   {role === "user" && <DashboardTopUser />}
   {role === "user" && <Dashboard />}
   {role === "" && <DashboardTop />}
   {role === "" && <DashboardNiezalogowany />}
   
    <Routes>   

          {role === "admin" &&  <Route path="/uslugi"  element={<Powiadomienia />}/>}
          {role === "admin" &&  <Route path="/kontakt"  element={<Kontakt />}/>}
          <Route path="/" element={<StronaGlowna />}/> 
          <Route path="/wyloguj" element={<Wyloguj />}/>  
          {role === "user" && <Route path="/kontakt" element={<Kontakt />}/> }
          <Route path="/register" element={<Rejestracja/>}/> 
          <Route path="/ofirmie" element={<OFirmie />}/> 
          <Route path="/cennik" element={<Cennik />}/>
          {role === "" &&  <Route path="/uslugi" element={<UsługiNiezalogowany />}/> }
          {role === "" &&  <Route path="/kontakt" element={<KontaktNiezalogowany />}/> }
          {role === "user" &&  <Route path="/uslugi"  element={<Usługi />}/>}
          {role === "user" &&  <Route path="/status"  element={<Status />}/>}
          {role === "user" &&  <Route path="/uslugi/zamow"  element={<Zamow />}/>}
          {role === "user" &&  <Route path="/uslugi/zapytaj"  element={<Zapytaj />}/>}
          {role === "user" &&  <Route path="/uslugi/zamow/zamowione"  element={<Zamowione />}/>}
          {role === "user" &&  <Route path="/uslugi/zamow/zapytane"  element={<Zapytane />}/>}
          
    </Routes>
    <Footer/>
    </div>
   
  );
}

export default App ;