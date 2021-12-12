import React from "react";
import "../App.css";
import {DashboardData} from "./DashboardData";

function Dashboard() {
    return (
    <div className="Dashboard">
        <ul className="DashboardList">
        {DashboardData.map((val, key)=>{
            return (
            <li key={key}
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
             onClick={()=>{
                window.location.pathname = val.link;
                }}> 
        
        <div id="icon">{val.icon}</div>{" "}
        <div id="title">{val.title}</div> 
        </li>
            );
        })}
    </ul>
    </div>
    );
}

export default Dashboard;