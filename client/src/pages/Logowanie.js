import '../App.css';
import React, { useState} from "react";
import Axios from "axios";




function Login() {

  const [login, setloginLOG] = useState("");
  const [haslo, sethasloLOG] = useState("");

  const [loginStatus, setloginStatus] = useState("");

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
  return (
    <div className="App">
     
   

    <div className="form">
    <h1> Zaloguj się </h1>
      <input type="text" name="login" placeholder="E-mail ..." onChange={(e)=> {
        setloginLOG(e.target.value);
      }}/>
      
      <input type="password" name="haslo" placeholder="Hasło ..." onChange={(e)=> {
        sethasloLOG(e.target.value);
      }}/>

      <button onClick={zaloguj}>Zaloguj</button>

      <a href="/">Strona główna</a>
    <p/>
    <a href="/register">Zarejestruj się</a>
    </div>

   

    <h1>{ loginStatus }</h1>



    </div>
  );
}

export default Login ;