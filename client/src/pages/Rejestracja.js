import '../App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import StronaGlowna from './StronaGlowna';
import { Alert } from 'react-bootstrap';

const validateEmail = (email) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
 function Register() {

  

  
  const [loginREG, setloginREG] = useState("");
  const [hasloREG, sethasloREG] = useState("");
  const [imieREG, setimieREG] = useState("");
  const [nazwiskoREG, setnazwiskoREG] = useState("");
  const [mailREG, setmailREG] = useState("");
  const [telefonREG, settelefonREG] = useState("");
  const [powtorzhasloREG, setpowtorzhasloREG] = useState("");

  const [login, setloginLOG] = useState("");
  const [haslo, sethasloLOG] = useState("");

  const [loginStatus, setloginStatus] = useState("");

  const [toggleState, setToggleState] = useState(1);

  

  const toggleTab = (index) => {
    setToggleState(index);
  };

  


  Axios.defaults.withCredentials = true;

  const zarejestruj = () => {
   console.log (mailREG)
if (loginREG == "" || hasloREG == "") {
  alert("Wypełnij wszystkie pola !")
  
}
else {
   
  if (hasloREG != powtorzhasloREG ) {
    alert("Hasła nie są takie same !")
  }
  else{
    if (!validateEmail(mailREG)){
      alert ("E-mail jest nieprawidłowy !")
    }
    else{
  if (hasloREG.length <6) {
    alert ("Hasło jest zbyt krótkie !")
  }
  else{

  
    

    Axios.post("http://localhost:3001/api/insert", {
      login: loginREG,
      haslo: hasloREG,
      imie: imieREG,
      nazwisko: nazwiskoREG,
      mail: mailREG,
      telefon: telefonREG,
    }).then(()=> {
      alert("succesful insert");
    });
  }}}}
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
        window.location.reload();
         
      }
     
    });
  };


 

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        setloginStatus(response.data.user[0].login);
      }
    });
  }, []);
  
  return (
    <div className="RegisterPage">
    
   

    <div className="form">
      <div className="tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}> ZALOGUJ </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}> ZAREJESTRUJ </button>
        </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
      
      <h1>Zaloguj się</h1>
       <input 
       type="text" 
       name="login" 
       placeholder="Login ..." 
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

      <h6><center>Jeśli nie masz jeszcze swojego konta, 
        <p/> zarejestruj się.</center></h6>

       <button onClick={zaloguj}>Zaloguj</button>
      
       
       <h1> { loginStatus }</h1>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h1>Zarejestruj się</h1>
        <input 
      type="text" 
      name="login" 
      placeholder="Login ..." 
      onChange={(e)=> {
      setloginREG(e.target.value);
      }}/>
       <input 
      type="text" 
      name="imie" 
      placeholder="Imię ..." 
      onChange={(e)=> {
      setimieREG(e.target.value);
      }}/>
       <input 
      type="text" 
      name="nazwisko" 
      placeholder="Nazwisko ..." 
      onChange={(e)=> {
      setnazwiskoREG(e.target.value);
      }}/>
       <input 
      type="text" 
      name="mail" 
      placeholder="E-mail ..." 
      onChange={(e)=> {
      setmailREG(e.target.value);
      }}/>
       <input 
      type="text" 
      name="telefon" 
      placeholder="Telefon ..." 
      onChange={(e)=> {
      settelefonREG(e.target.value);
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
      placeholder="Powtórz hasło ..."  
      onChange={(e)=> {
        setpowtorzhasloREG(e.target.value);
        }} />

      <h6>Jeśli masz już konto, zaloguj się.</h6>
      
      <button onClick={zarejestruj}>Zarejestruj</button>
        </div>

        
      </div>
    </div>
    

     </div>

    
  );
}

export default Register;