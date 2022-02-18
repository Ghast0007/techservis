import React , { useEffect, useState } from "react";
import "../App.css";
import Axios from "axios";
import StronaGlowna from "../pages/StronaGlowna";


function Wyloguj() {

    

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/logout").then((response) => {
  //   console.log(response.data)
  
    });
   
  }, []);

    return (
    <div className="StronaGlowna">
       <StronaGlowna />
    </div>
    );
}

export default Wyloguj;