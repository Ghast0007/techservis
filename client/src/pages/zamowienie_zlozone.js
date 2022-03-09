import Button from '@mui/material/Button';
import "../App.css";

import React from 'react'


 function Zamowienie_zlozone() {

    return (
    <div className="zamowpage">
        
        <div className="formularz">
         
       
           <h5 id="instrukcja3"> Zamówienie zostało złożone</h5>

           <h5 id="instrukcja4"> Wyślij sprzęt do naprawy na poniższy adres:</h5>

           <h5 id="instrukcja5"> Kwiatowa 12 C <p/>
           Płock 09-400</h5>
           
          
           <h5 id="instrukcja7"> Skontaktujemy się z państwem telefonicznie lub mailowo aby poinformować o kwocie naprawy oraz sposobie płatności (nr. konta w zakładce"Kontakt" w przypadku wybrania płatności przelewem).</h5>

           <h5 id="instrukcja8"> Dziękujemy za korzystanie z naszych usług ;)</h5>
       
      
           <Button id="powrot2"  href="/"  > Powrót </Button> 

            </div>
          
    </div>
    );
}

export default Zamowienie_zlozone;