import React from "react";
import serwis1 from "../images/serwis1.jpg"
import serwis3 from "../images/serwis3.jpg"
import serwis4 from "../images/serwis4.jpg"
import serwis5 from "../images/serwis5.jpg"
import serwis6 from "../images/serwis6.jpg"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


 function OFirmie() {
   return(
    <div className="ofirmie">
        <div className="naglowek">
          O naszej firmie

        </div>
        <div className="lewa_strona">
        <h2><b>Dlaczego my?</b></h2>
        <p/>
        
        <h4 id="a">
        
        <li>Jesteśmy serwisem komputerowym 
        posiadającym wieloletnie doświadczenie.</li>
        <p/>
        <li>Zapewniamy profesjonalną obsługę.</li>
        <p/>
        <li>Zajmujemy się naprawą komputerów na najwyższym poziomie!</li>
        <p/>
        <li>Naprawimy każdy komputer, który do nas dostarczysz.</li>
          
        </h4>
        <p/>
        <h4 id="b">
        Nie jesteśmy klasycznym serwisem komputerowym.
        Jesteśmy jedną z największych firm serwisowych działających w Polsce,
        prawdopodobnie niewiele takich istnieje w Europie.
        Świadczymy usługi naprawy urządzeń elektronicznych w tym
        - zarówno tych stacjonarnych, jak również przenośnych, naprzykład laptopów. Nie wszystkie serwisy komputerowe
        posiadają tak bogate wyposażenie i doświadczenie.
        </h4>
        <p/>

        <h2 id="c">
        <h2><b>Co oferujemy ?</b></h2>
        
        <CheckCircleIcon/> Darmowa diagnoza wstępna !
        <p/>
        <CheckCircleIcon/> Solidność i doświadczenie
        <p/>
        <CheckCircleIcon/> Odbiór i doręcznie sprzętu przez kuriera.
        <p/>
        <CheckCircleIcon/> Bezpieczeństwo i poufność danych.
        <p/>
        <CheckCircleIcon/> Szybkość wykonania przez nas usługi.
        <p/>
        <CheckCircleIcon/> Gwarancja na każdą naprawę.
        <p/>
        <CheckCircleIcon/> Dokumentacja każdej naprawy.
        <p/>
        <CheckCircleIcon/> Przystępne ceny.
        <p/>
        <CheckCircleIcon/> Miła obsługa.
        <p/>
        <CheckCircleIcon/> Szeroki zakres usług.
        <p/>
        </h2>

        
        </div>
        <div className="prawa_strona">
       <img id="a" alt="1" src={serwis1} width={600}></img>
       <img id="b" alt="3" src={serwis3} width={600}></img>
       <img id="c" alt="4" src={serwis4} width={600}></img>
       <img id="d" alt="5" src={serwis5} width={600}></img>
       <img id="e" alt="6" src={serwis6} width={600}></img>
        </div>

    </div>
   

   )
}

export default OFirmie;