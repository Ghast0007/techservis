import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";



 function Powiadomienia() {

  const [user, setUser] = useState({});
  const [listazamowien, setListaZamowien] = useState([]);

 
  useEffect(() => {
    Axios.get("http://localhost:3001/api/zamowienia_lista").then((response) => {
      setListaZamowien(response.data);
      console.log(response.data)
    });
  }, []);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
  //   console.log(response.data)
  setUser(response.data.user[0])
    });
   
  }, []);

    return (
    <div className="zamowienia">
        <div className="zamowienia2">
        <h1>Witaj {user.login}</h1>
      <div className="wyswietl1">
      {listazamowien.map(({opis, url, kategoria, user_id, imie}) => (

<div className="wyswietl2">
  <div>
    <h3>user_id: {user_id}</h3>
    <h3>opis: {opis}</h3>
    <h3>url: {url}</h3>
    <h3>kategoria: {kategoria}</h3>
   
  </div>

</div>

))}

       
      </div>
        </div>
        
    </div>
    );
}

export default Powiadomienia;