import React from "react";
import "../App.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

 function Zamow() {
    return (
    <div className="zamowpage">
        
        <div className="formularz">
        <div className="instrukcja">
            Witaj
            </div>
   
           <div className="wiersz1">
         
        <TextField id="imie" 
        label="Imię" 
        variant="filled" />
     
     
         <TextField id="nazwisko" 
         label="Nazwisko" 
         variant="filled" />
      
       </div> 
       
       <div className="wiersz2">
       
         <TextField id="mail" 
         label="E-mail" 
         variant="filled" />
      
      
        <TextField id="tel" 
        label="Nr. Tel." 
        variant="filled" />
     
      </div>
      <div className="wiersz3">

      <TextField
          id="opis"
          label="Opis problemu"
          multiline
          rows={6}
          defaultValue=""
          variant="filled"
        />
        </div>
       
        

            </div>
          
    </div>
    );
}

export default Zamow;