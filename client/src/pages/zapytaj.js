import "../App.css";
import React  from "react";
import Mail_send from "../images/mail_send.png"


 function Zapytaj() {

  
    return (

      

    <div className="zamowpage">
         <div className="formularz">
           
             <div className="pytanie">
        <form action="mailto:ghast0007@gmail.com" method="post" enctype="text/plain">
      
        <label for="name" >
          <input type="text" name="name" id="name" placeholder="Imię ..." />
        </label>
    
        <label for="email">
          <input type="text" name="tel" id="email" placeholder="Telefon ..." />
        </label>
     
        
        <textarea id ="text" name="comments" rows="12" cols="35" ></textarea>
    
     
        <input id="but1" type="submit" name="submit" value="Wyślij" />
        <input id="but2" type="reset" name="reset" value="Wyczyść formularz" />
      
    </form>
    </div>
    <div className="pytanie2">
     <div className="text1"> Wyślij nam wiadomość mailem, a my postaramy się na nią odpowiedzieć w jak najkrótszym czasie.
      </div>
      <div className="image">
      <img  alt="1" src={Mail_send} width={450}></img>
        </div>
      </div>
    </div>
       
    </div>
    );
}

export default Zapytaj;