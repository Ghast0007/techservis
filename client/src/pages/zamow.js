import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import React , {useCallback,  useEffect, useState } from "react";
import {useDropzone} from 'react-dropzone'

import Axios from "axios";

 function Zamow() {

  const onDrop = useCallback(acceptedFiles => {
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  
  const [kategoria, setKategoria] = useState("");
  const [opis, setOpis] = useState("");
  const [url, setURL] = useState("");

  const [user, setUser] = useState({});

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
  //   console.log(response.data)
  setUser(response.data.user[0])
    });
   
  }, []);

 


  const zamow = () => {
    console.log(user)
    Axios.post("http://localhost:3001/api/zamow", {
      
      kategoria: kategoria,
      opis: opis,
      url:url,
      user_id: user.Id

    }).then(()=> {
      alert("succesful insert");
       });
        };

    return (
    <div className="zamowpage">
        
        <div className="formularz">
          <div> </div>
       
           <h5 id="instrukcja"> Wypełnij formularz, aby wysłać zamówienie</h5>
           
   
           <div className="wiersz1">

          


     
      </div>
      <div className="wiersz3">
     
      
        <select
          defaultValue="Komputery"
          onChange={(e)=> {
            console.log(e.target.value)
          setKategoria(e.target.value);
          }}
          
        >
          <option value="Komputery" selected>Komputery</option>
          <option value="Laptopy">Laptopy</option>
          <option value="Peryferia">Peryferia</option>
          <option value="Inne">Inne</option>
         
        </select>
        
    
      </div>
<div className='wiersz4'>
      <TextField
          id="opis"
          label="Opis problemu *"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
          onChange={(e)=> {
            setOpis(e.target.value);
            }}
        />
      
      </div>
        <div className="wiersz5">
          
        <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} 
      onChange={(e)=> {
        setURL(e.target.value);
        }}/>
      {
        isDragActive ?
          <p>Upuść plik tutaj ...</p> :
          <p>Kliknij, aby wybrać plik, lub przeciągnij tutaj...</p>
      }
      
     

    </div>
   
        </div>
       
       
        <a id='instrukcja2'>* - pola wymagane </a>
       <div className="prawa_zamowienie">
         Po wypełnienu formularza, złóż zamówienie klikając poniższy przycisk...<p/>
         <Button id="pierwszy"   href="/uslugi/zamow/zamowione" onClick={zamow} > Złóż zamówienie </Button>
        <p/>
         Jeśli masz do nas jakieś pytanie, możesz je zadać klikając poniższy przycisk...
         <Button id="drugi" href="/uslugi/zapytaj"   > Zapytaj </Button>
         <p/>
         Realizacja usługi może trwać od 3 do 10 dni roboczych, potem sprzęt zostanie wysłany do nadawcy.
       </div>
        

            </div>
          
    </div>
    );
}

export default Zamow;