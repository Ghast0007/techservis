import React from "react";
import "../App.css";
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';

function DashboardTop() {
    return (
    <div className="DashboardTop">
       
       <div className="leftside">
       
       < RingVolumeIcon />   Skontaktuj się z nami:
           <a href="tel:506-527-4410p123">  +48 506 527 441  </a>
          
        

       </div>
       <div className="leftside2">
       < AlternateEmailIcon />  Napisz do nas: 
         
           <a href="/kontakt"> techservis@gmail.com  </a>
          
        

       </div>
       <div className="rightside">
         

       </div>

       <div className="rightside2">
       <Button id="zaloguj" size="small" href="/register">Zaloguj / Zarejestruj</Button>

       </div>
       
    </div>
    );
}

export default DashboardTop;