import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import React , {useCallback, useEffect, useState } from "react";
import {useDropzone} from 'react-dropzone'
import Axios from "axios";

 function Zamow() {

  const onDrop = useCallback(acceptedFiles => {
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [opis, setOpis] = useState("");
  const [plik, setPlik] = useState("");


  Axios.defaults.withCredentials = true;


  const zamowienie = () => {
    
    Axios.post("http://localhost:3001/api/zamow", {
      imie: imie,
      nazwisko: nazwisko,
      tel: tel,
      mail: mail,
      opis: opis,
      plik: plik,

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

           <TextField id="imie" 
         label="Imię *" 
         variant="filled"
         onChange={(e)=> {
         setImie(e.target.value);
      }}/>
         
       <b> </b>
     
         <TextField id="nazwisko" 
         label="Nazwisko *" 
         variant="filled"
         onChange={(e)=> {
          setNazwisko(e.target.value);
          }} />
      
       </div> 
       
       <div className="wiersz2">
       
         <TextField id="mail" 
         label="E-mail *" 
         variant="filled" 
         onChange={(e)=> {
          setMail(e.target.value);
          }}/> <b ></b>
      
      
        <TextField id="tel" 
        label="Nr. tel. *" 
        variant="filled" 
        onChange={(e)=> {
          setTel(e.target.value);
          }}/>
     
      </div>
      <div className="wiersz3">

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

        <div className="wiersz4">
          
        <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} 
      onChange={(e)=> {
        setPlik(e.target.value);
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
         <Button id="pierwszy"  href="/uslugi/zamow/zamowione" onClick={zamowienie} > Złóż zamówienie </Button>
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