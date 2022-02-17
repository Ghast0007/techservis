import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";



 function Powiadomienia() {


  const [listazamowien, setListaZamowien] = useState([]);

 
  useEffect(() => {
    Axios.get("http://localhost:3001/api/zamowienia_lista").then((response) => {
      setListaZamowien(response.data);
      console.log(response.data)
    });
  }, []);

 

    return (
    <div className="zamowienia">
        <div className="zamowienia2">
        
      <div className="employees">
      {listazamowien.map(({opis, url, kategoria, user_id}) => (

<div className="employee">
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