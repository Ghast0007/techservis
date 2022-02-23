import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";



 function Powiadomienia() {

  const [user, setUser] = useState({});
  const [listazamowien, setListaZamowien] = useState([]);
  const handlezrealizowano = (id_zamowienia) => {

    Axios.post("http://localhost:3001/api/zmien_status", {
      id_zamowienia: id_zamowienia,
      
    }).then((response) => {
     
     
    });
    window.location.reload();
  }

  const handleusun = (id_zamowienia) => {

    Axios.post("http://localhost:3001/api/usun_zamowienie", {
      id_zamowienia: id_zamowienia,
      
    }).then((response) => {
     
     
    });
    window.location.reload();
  }
 
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
      {listazamowien.map(({opis, url, kategoria, id_zamowienia, user_id, czy_zrealizowane}) => (

<div className="wyswietl2">
  <div>
    <h3>user_id: {user_id}</h3>
    <h3>opis: {opis}</h3>
    <h3>url: {url}</h3>
    <h3>kategoria: {kategoria}</h3>
    <h3>czy_zrealizowane: {czy_zrealizowane == 1 ? (<p id="c" >Zrealizowano</p>) : (<p id="d" >Nie zrealizowano</p>)}</h3>

   <button id ="a" onClick={() => handlezrealizowano(id_zamowienia)}>Zrealizuj</button>
   <button id ="b" onClick={() => handleusun(id_zamowienia)}>Usuń zamówienie</button>
  </div>

</div>

))}

       
      </div>
        </div>
        
    </div>
    );
}

export default Powiadomienia;