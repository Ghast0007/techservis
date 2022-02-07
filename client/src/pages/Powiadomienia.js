import { useState } from "react";
import Axios from "axios";
import "../App.css";

import React from 'react'


 function Powiadomienia() {


  const [listazamowien, setListaZamowien] = useState([]);

 
  const zamowienia = () => {
    Axios.get("http://localhost:3001/api/wyswietl").then((response) => {
      setListaZamowien(response.data);
    });
  };

 

    return (
    <div className="zamowienia">
        <div className="zamowienia2">
        
      <div className="employees">
        <button onClick={zamowienia}>Show</button>

        {listazamowien.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>imie: {val.imie}</h3>
                <h3>nazwisko: {val.nazwisko}</h3>
                <h3>mail: {val.mail}</h3>
                <h3>telefon: {val.telefon}</h3>
                <h3>kategoria: {val.kategoria}</h3>
                <h3>opis: {val.opis}</h3>
                <h3>plik: {val.plik}</h3>
              </div>
              
            </div>
          );
        })}
      </div>
        </div>
        
    </div>
    );
}

export default Powiadomienia;