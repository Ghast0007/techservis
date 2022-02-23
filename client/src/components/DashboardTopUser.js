import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';

function DashboardTop() {
    
    const [user, setUser] = useState({});

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
  //   console.log(response.data)
  setUser(response.data.user[0])
    });
   
  }, []);


    return (
    <div className="DashboardTop">
       
       <div className="leftside">
       
       < RingVolumeIcon />   Skontaktuj się z nami:
           <a href="/kontakt">  +48 506 527 441  </a>
          
        

       </div>
       <div className="leftside2">
       < AlternateEmailIcon />  Napisz do nas: 
         
           <a href="/kontakt"> techservis@gmail.com  </a>
          
        

       </div>
       <div className="rightside">
       <h1>Witaj {user.login}</h1>
        
       </div>

       <div className="rightside2">
        
       <Button id="wyloguj" size="small" href="/wyloguj">Wyloguj</Button>
       <Button id="status" size="small" href="/status">Satus zamówień</Button>
     
       </div>
       
    </div>
    );
}

export default DashboardTop;