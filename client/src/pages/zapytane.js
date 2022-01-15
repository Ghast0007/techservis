import "../App.css";
import React from 'react'
import Button from '@mui/material/Button';

 function Zapytane() {

  
    return (
    <div className="zamowpage">
        
        <div className="formularz2">
        <h5 id="instrukcja3"> Zapytanie zostało wysłane</h5>
        <h5 id="instrukcja10"> Odpowiedź na pytanie zostanie przesłana na podango w formularzu maila.</h5>
        <h5 id="instrukcja11"> Dziękujemy za korzystanie <p/> z naszych usług ;)</h5>
        <Button id="powrot"  href="/"  > Powrót </Button> 
            </div>
          
    </div>
    );
}

export default Zapytane;