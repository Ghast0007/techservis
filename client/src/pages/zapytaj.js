import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import React , {useCallback, useState } from "react";
import {useDropzone} from 'react-dropzone'
import Axios from "axios";

 function Zapytaj() {

  const onDrop = useCallback(acceptedFiles => {
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [pytanie, setPytanie] = useState("");
  const [plik, setPlik] = useState("");


  const zapytanie = () => {
    
    Axios.post("http://localhost:3001/api/zapytaj", {
      imie: imie,
      nazwisko: nazwisko,
      tel: tel,
      mail: mail,
      pytanie: pytanie,
      plik: plik,

    }).then(()=> {
      alert("succesful insert");
    });
  };
  
    return (
    <div className="zamowpage">
        
        <div className="formularz2">
          <div> </div>
       
           <h5 id="polecenie"> Wypełnij formularz, aby wysłać zapytanie</h5>
           
   
           <div className="wiersz1">
         
        <TextField id="imie" 
        label="Imię *" 
        variant="filled" 
        onChange={(e)=> {
          setImie(e.target.value);
          }}/> <b ></b>
     
     
         <TextField id="nazwisko" 
         label="Nazwisko *" 
         variant="filled" 
         onChange={(e)=> {
          setNazwisko(e.target.value);
          }}/>
      
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
      <div className="wiersz4">

      <TextField
          id="opis"
          label="Zadaj pytanie *"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
          onChange={(e)=> {
            setPytanie(e.target.value);
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
       <a id='instrukcja2'> *- pola wymagane</a>
   
       
       <div className='zapytaj'>
       
        <a id='instrukcja9'>Po wypełnienu formularza, zapytaj nas klikając poniższy przycisk...<p/>
         <Button id="pierwszy"  href="/uslugi/zamow/zapytane" onClick={zapytanie} > Zapytaj </Button> </a>
       
         </div>

            </div>
          
    </div>
    );
}

export default Zapytaj;