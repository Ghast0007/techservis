import * as React from 'react';
import Button from '@mui/material/Button';
import "../App.css";


function Uslugi() {
    return (
    <div className="uslugi">
        <div className="okienko">
            <div className="informacja">
                <h4>Aby korzystac z naszych usług, zaloguj się 
                lub załóż konto , jeśli jeszcze go nie posiadasz !</h4>
                <div className="buttons">
                <Button id="a"
                variant="contained"
                href={"/register"}
                disableElevation>
                  Zaloguj / Zarejestruj
                </Button>
                <Button id="b"
                variant="contained" 
                disableElevation
                href={"/"}
    
 
                >
                  Nie, dziękuję
                </Button>
                </div>
            </div>


        </div>
  
    
    </div>
);
}

export default Uslugi;