import '../App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";


function Register() {

  
  const [loginREG, setloginREG] = useState("");
  const [hasloREG, sethasloREG] = useState("");

  const [login, setloginLOG] = useState("");
  const [haslo, sethasloLOG] = useState("");

  const [loginStatus, setloginStatus] = useState("");


  Axios.defaults.withCredentials = true;

  const zarejestruj = () => {

    Axios.post("http://localhost:3001/api/insert", {
      login: loginREG,
      haslo: hasloREG,
    }).then(()=> {
      alert("succesful insert");
    });
  };

  const zaloguj = () => {

    Axios.post("http://localhost:3001/api/login", {
      login: login,
      haslo: haslo,
    }).then((response)=> {
      if (response.data.message) {
        setloginStatus(response.data.message);
      }else
      {
        setloginStatus(response.data[0].login);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn == true) {
        setloginStatus(response.data.user[0].login);
      }
    });
  }, []);
  
  return (
    <div className="RegisterPage">
    
    <div className="form">
    <h1> Zarejestruj się </h1>
      <input 
      type="email" 
      name="email" 
      placeholder="E-mail ..." 
      onChange={(e)=> {
      setloginREG(e.target.value);
      }}/>
      <input 
      type="password" 
      name="password" 
      placeholder="Hasło ..."  
      onChange={(e)=> {
      sethasloREG(e.target.value);
      }}/>
      <input 
      type="password" 
      name="password2"  
      placeholder="Powtórz hasło ..."   />
      
      <button onClick={zarejestruj}>Zarejestruj</button>

     
</div>

<div className="Logowanie">
     
   

     <div className="form">
     <h1> Zaloguj się </h1>
       <input 
       type="text" 
       name="login" 
       placeholder="E-mail ..." 
       onChange={(e)=> {
         setloginLOG(e.target.value);
       }}/>
       
       <input 
       type="password" 
       name="haslo" 
       placeholder="Hasło ..." 
       onChange={(e)=> {
         sethasloLOG(e.target.value);
       }}/>
 
       <button onClick={zaloguj}>Zaloguj</button>
 
      
     
     </div>
 
    
 
     <h1>{ loginStatus }</h1>
 
 
 
     </div>

    </div>
  );
}

export default Register ;