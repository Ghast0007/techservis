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

      <a href="/login">Zaloguj się</a>
</div>

   

    </div>
  );
}

export default Register ;