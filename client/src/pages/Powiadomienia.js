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

  const handlzaplacono = (id_zamowienia) => {

    Axios.post("http://localhost:3001/api/czy_zaplacone", {
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
          {
            listazamowien.map(
              ({opis, url, kategoria, user_img, id_zamowienia, data, user_id, czy_zrealizowane, czy_zaplacone, login, imie, nazwisko, mail, telefon }) => (
                <div className="wyswietl2">
                  <div>
                    <div className="dane1">
                    <h3>Id użytkownika: {user_id} </h3>
                    <h3>Imię: {imie}</h3>
                    <h3>E-mail: {mail}</h3>
                    </div>
                    <div className="dane3">
                    <h3>Czy zrealizowane: {czy_zrealizowane == 1 ? (<p id="c" >Zrealizowano</p>) : (<p id="d" >Nie zrealizowano</p>)}</h3>
                    <h3>Czy zapłacone: {czy_zaplacone == 1 ? (<p id="c" >Zapłacono</p>) : (<p id="d" >Nie zapłacono</p>)}</h3>
                    </div>
                    <div className="dane2">
                    <h3>Login: {login}</h3>
                    <h3>Nazwisko: {nazwisko}</h3>
                    <h3>Telefon: {telefon}</h3>
                    </div>
                    <div className="dane4">
                    <h3>Opis: {opis}</h3>
                    <h3>Grafika: {url} <div className="zdjecie">
                    <img src={"/images/" + user_img} alt="brak zdjęcia problemu" width={800}/>
                  </div></h3>
                    <h3>Kategoria: {kategoria}</h3>
                    <h3 id="data">Data: {data}  </h3>
                    
                    </div>
                   
                   
                    <button id ="a" onClick={() => handlezrealizowano(id_zamowienia)}>Zrealizuj</button>
                    <button id ="e" onClick={() => handlzaplacono(id_zamowienia)}>Zapłacono</button>
                    <button id ="b" onClick={() => handleusun(id_zamowienia)}>Usuń zamówienie</button>
                    
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

export default Powiadomienia;