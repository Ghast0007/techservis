import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import React from 'react'


 function Zapytaj() {

  
    return (
    <div className="zamowpage">
        
        <div className="formularz2">
          <div> </div>
       
           <h5 id="polecenie"> Wypełnij formularz, aby wysłać zapytanie</h5>
           
   
           <div className="wiersz1">
         
        <TextField id="imie" 
        label="Imię *" 
        variant="filled" /> <b ></b>
     
     
         <TextField id="nazwisko" 
         label="Nazwisko *" 
         variant="filled" />
      
       </div> 
       
       <div className="wiersz2">
       
         <TextField id="mail" 
         label="E-mail *" 
         variant="filled" /> <b ></b>
      
      
        <TextField id="tel" 
        label="Nr. tel. *" 
        variant="filled" />
     
      </div>
      <div className="wiersz3">

      <TextField
          id="opis"
          label="Zadaj pytanie *"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
        />

        
        </div>

       <a id='instrukcja2'>*- pola wymagane</a>
   
       
       <div className='zapytaj'>
       
        <a id='instrukcja9'>Po wypełnienu formularza, zapytaj nas klikając poniższy przycisk...<p/>
         <Button id="pierwszy"  href="/uslugi/zamow/zapytane"  > Zapytaj </Button> </a>
       
         </div>

            </div>
          
    </div>
    );
}

export default Zapytaj;