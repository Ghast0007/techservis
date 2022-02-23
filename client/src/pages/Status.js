import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";



 function Status() {

  const [user, setUser] = useState({});
  const [listazamowien, setListaZamowien] = useState([]);
  

 
 
  useEffect(() => {
    Axios.get("http://localhost:3001/api/status").then((response) => {
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
    <h3>Id zamówienia: {id_zamowienia}</h3>
    <h3>opis: {opis}</h3>
    <h3> {czy_zrealizowane == 1 ? (<p id="c" >Zrealizowano</p>) : (<p id="d" >Nie zrealizowano</p>)}</h3>

  </div>

</div>

))}

       
      </div>
        </div>
        
    </div>
    );
}

export default Status;