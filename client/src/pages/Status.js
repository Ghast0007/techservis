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
      console.log(response.data)
      setUser(response.data.user[0])
    });
   
  }, []);

  return (
    <div className="status">
      <div className="status2">
        <h1>{user.login} tu sprawdzisz status swoich zamówień</h1>
        <div className="wyswietl1">
          {
            listazamowien
            .filter(zamowienia => zamowienia.user_id === user.Id)
            .map(
              ({ opis, kategoria, id_zamowienia, czy_zrealizowane, czy_zaplacone, data, user_img }) => (
                <div className="wyswietl2">
                  <div className="dane1">
                    <h3>Id zamówienia: {id_zamowienia}</h3>
                    
                    <h3>kategoria: {kategoria}</h3>
                    <h3> {czy_zrealizowane == 1 ? (<p id="c" >Zrealizowano</p>) : (<p id="d" >Nie zrealizowano</p>)}</h3>
                    <h3> {czy_zaplacone == 1 ? (<p id="c" >Zapłacono</p>) : (<p id="d" >Nie zapłacono</p>)}</h3>
                    <h3 id="data">Data: {data}</h3>
                  </div>
                  <div className="dane5">
                    <h3>opis: {opis}</h3> 
                    <div className="zdjecie">
                    <img src={"/images/" + user_img} alt="zdjecie problemu" width={600}/>
                  </div>
                  </div>
                 
                  
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Status;