import '../App.css';
import React, { useState} from "react";
import Axios from "axios";

function Register() {
  
  const [loginREG, setloginREG] = useState("");
  const [hasloREG, sethasloREG] = useState("");

  const zarejestruj = () => {

    Axios.post("http://localhost:3001/api/insert", {
      login: loginREG,
      haslo: hasloREG,
    }).then(()=> {
      alert("succesful insert");
    });
  };

  
  return (
    <div className="App">
     
    <h1> Zarejestruj się </h1>

    <div className="form">
      
      <input type="email" name="login" placeholder="E-mail ..." onChange={(e)=> {
        setloginREG(e.target.value);
      }}/>
      <input type="password" name="haslo" id="password" placeholder="Hasło ..."  onChange={(e)=> {
        sethasloREG(e.target.value);
      }}/>
      <input type="password" name="haslo2" id="confirm_password" placeholder="Powtórz hasło ..."   />
      
      <button onClick={zarejestruj}>Zarejestruj</button>
      
    </div>

    <a href="/">Strona główna</a>
    <p/>
    <a href="/login">Zaloguj się</a>

    </div>
  );
}

export default Register ;