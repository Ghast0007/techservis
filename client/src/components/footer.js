import React from "react";
import "../App.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
    <div className="footer">
       <div className="lewa">
       Skontaktuj się na FB: 
       <a href="https://www.facebook.com/damian.dobrzynski.752"><FacebookIcon/></a>
       <p/>
       Instagram: <a href=" "><InstagramIcon/></a>
       <p/>
       Nasz Discord:
      <a href="https://discord.gg/ACnB5Q6P" > https://discord.gg/TechServis</a>
       </div>

       <div className="prawa">
           Telefon: +48 506 527 441
           <p/>
           E-mail: techservis@gmail.com
           <p/>
           Adres: Kwiatowa 12c, Płock

       </div>

       <div className="dol">
       Copyright by TechServis Dobrzyński 2022, Wszelkie prawa zastrzeżone
       </div>
       
    </div>
    );
}

export default Footer;