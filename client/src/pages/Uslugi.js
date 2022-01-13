import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../App.css";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";

function Uslugi() {
    return (
    <div className="uslugi">
       <div className='cardleft'>
      
      <Card id="a" >
      <CardMedia
        component="img"
        height="140"
        src={card1}
        alt="card1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Zamów usługę
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Zgłoś nam swój problem ze sprzętem wypełniając formularz, a my się nim zajmiemy najszybciej jak tylko potrafimy ;).  
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={"/uslugi/zamow"}>Zamów</Button>
       
      </CardActions>
    </Card>
  
    </div>

      
    <div className='cardright'>

      <Card id="b" >
      <CardMedia
        component="img"
        height="140"
        src={card2}
        alt="card2"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Zapytaj
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Masz do nas pytanie ? Śmiało, bezpłatnie możesz zadać nam pytanie, na które szukasz odpowiedzi ;D
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"href={"/uslugi/zapytaj"}>Zapytaj</Button>
       
      </CardActions>
    </Card>

    </div>
     
    
    </div>
);
}

export default Uslugi;