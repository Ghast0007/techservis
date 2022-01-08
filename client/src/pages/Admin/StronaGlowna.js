import React from "react";
import '../App.css';
import { Carousel } from "react-bootstrap";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const StronaGlowna = () => {
    return (
        <div className="slider">
        <Carousel variant="dark" interval="4000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Pierwszy slajd"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Drugi slajd"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Trzeci slajd"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="informacja">
  <h2>Witaj, aby w pełni korzystać z naszych usług załóż konto lub zaloguj się do naszego serwisu.</h2>
     <p id="info">
     <h1 id="info2">Dlaczego warto korzystać z naszych usług?</h1>
     Zakres naszych usług jest bardzo szeroki. 
     Na dobrą sprawę niewiele jest urządzeń elektrycznych, 
     których nie naprawiamy. Jednak co istotne - 
     każdą grupą urządzeń zajmuje się wyspecjalizowany dział. 
     <p>Naprawiamy komputery, laptopy, peryferia komputerowe i wiele innych.</p>
     </p>
</div>
<div className="informacja2">
  <p id="info3">
    Wyślij nam swój sprzęt kurierem i zapłać za usługę przelewem lub kurierowi przy odbiorze,
    bez wychodzenia z domu !
  </p>
</div>
</div>

    )
}

export default StronaGlowna;