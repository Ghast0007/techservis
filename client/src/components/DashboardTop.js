import React from "react";
import "../App.css";
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SearchIcon from '@mui/icons-material/Search';

function DashboardTop() {
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
         

       </div>

       <div className="rightside2">
           <input type="text " placeholder="Wyszukaj..."/>
           <button><SearchIcon/></button>

       </div>
       
    </div>
    );
}

export default DashboardTop;