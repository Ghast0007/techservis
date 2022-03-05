import '../App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import logged from "../images/logged.png"


 function Zalogowano() {

  

    const [user, setUser] = useState({});

    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get("http://localhost:3001/api/login").then((response) => {
    
    setUser(response.data.user[0])
      });
     
    }, []);
  
  return (
    <div className="RegisterPage">
    
   

    <div className="form2">
    <h1 id='a'>Pomyślnie zalogowano na konto {user.login}</h1>
    <img id="b" alt="1" src={logged} width={450}></img>
    </div>
    

     </div>

    
  );
}

export default  Zalogowano;