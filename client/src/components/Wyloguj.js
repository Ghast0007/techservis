import React , { useEffect, useState } from "react";
import "../App.css";
import Axios from "axios";


function Wyloguj() {

    

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/logout").then((response) => {
  //   console.log(response.data)
  
    });
   
  }, []);

    return (
    <div className="cos">
       
    </div>
    );
}

export default Wyloguj;