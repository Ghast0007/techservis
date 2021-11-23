import './App.css';
import React, { useState} from "react";
import Axios from 'axios';

function App() {

  const [loginREG, setloginREG] = useState("");
  const [hasloREG, sethasloREG] = useState("");

  const [login, setloginLOG] = useState("");
  const [haslo, sethasloLOG] = useState("");

  const [loginStatus, setloginStatus] = useState("");


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
  return (
    <div className="App">
     
    <h1> Zarejestruj się </h1>

    <div className="form">
      
      <input type="email" name="login" placeholder="E-mail ..." onChange={(e)=> {
        setloginREG(e.target.value);
      }}/>
      
      <input type="text" name="haslo" placeholder="Hasło ..." onChange={(e)=> {
        sethasloREG(e.target.value);
      }}/>

      <button onClick={zarejestruj}>Zarejestruj</button>

    </div>

    <h1> Zaloguj się </h1>

    <div className="form">
      
      <input type="text" name="login" placeholder="E-mail ..." onChange={(e)=> {
        setloginLOG(e.target.value);
      }}/>
      
      <input type="text" name="haslo" placeholder="Hasło ..." onChange={(e)=> {
        sethasloLOG(e.target.value);
      }}/>

      <button onClick={zaloguj}>Zaloguj</button>

    </div>

    <h1>{ loginStatus }</h1>

    </div>
  );
}

export default App;
