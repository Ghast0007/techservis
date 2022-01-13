import React from "react";
import "../App.css";
import tel from "../images/tel.png"
import mail from "../images/mail.png"
import Discord from "../images/Discord.png"
import Button from '@mui/material/Button';

 function Kontakt() {
    return (
    <div className="kontaktpage">
        <div className="naglowek">
            <h1 id="a">Zawsze w kontakcie</h1>
        </div>
        <div className="contener">
            
        <img id="a" alt="1" src={tel} width={150}></img> +48 506 527 441 <p/>
        
        <div className="button1">
        <img id="b" alt="1" src={mail} width={150}></img>
         <Button id="pierwszy" href="https://mail.google.com/"> techservis@gmail.com</Button>  <p/>
         </div>
        
        <div className="button2">
        <img id="c" alt="1" src={Discord} width={150}></img>
        <Button id="drugi" href="https://discord.gg/ACnB5Q6P">Discord: /discord/TechServis</Button>  <p/>
        </div>
        
        </div>
        <div className="contenerprawy">
            <h1 >Chcesz zadać nam pytanie ?<p/>
            Napisz do nas.</h1><p/>
            <h10 id="wymagania">Wymagane logowanie</h10>
            <div className="button3">
            <Button  id="trzeci" href="/register">Wyślij wiadomość</Button>
            <div className="kreska"></div>
            <div className="podkreska">
            <h4>Godziny pracy:<p/> (pon - pt) 
            (9:00 - 17:00)</h4>
            Nr konta do płatności:<p/>
            <h3>94 2453 4566 0000 4563 2341 3454</h3> <p/>
            Adres do wysyłki sprzętu:<p/>
            <h3>Kwiatowa 12c, <p/>
            Płock 09-400, TechServis</h3>
            </div>
            </div>
           
        </div>
   
    </div>
    );
}

export default Kontakt;