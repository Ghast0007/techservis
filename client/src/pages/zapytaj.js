
import "../App.css";

import React  from "react";


import Axios from "axios";

 function Zapytaj() {

  
    return (

      

    <div className="zamowpage">
         <div className="formularz">
             <div className="formularz_odstep">
        <form action="mailto:ghast0007@gmail.com" method="post" enctype="text/plain">
      <div className="imie">
        <label for="name" >
          <input type="text" name="name" id="name" placeholder="Imie ..." />
        </label>
      </div>
      <div>
        <label for="email">
          <input type="text" name="email" id="email" placeholder="E-mail ..." />
        </label>
      </div>
      <div>
        <label></label>
        <br />
        <textarea name="comments" rows="12" cols="35" >Uwagi</textarea>
      </div>
      <div>
        <input type="submit" name="submit" value="Send" />
        <input type="reset" name="reset" value="Clear Form" />
      </div>
    </form>
    </div>
    </div>
       
    </div>
    );
}

export default Zapytaj;