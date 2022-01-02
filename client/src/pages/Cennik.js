import React from "react";
import { Table } from "react-bootstrap";

function Cennik() {
    return (

        <div className="cennik">
            <div className="nad_tabela">
               <h3 id ="tytul" >Tutaj sprawdzisz ceny naszych usług </h3>
            </div>
   
        <Table striped bordered hover variant="light" className="tabela">
        <thead>
          <tr>
            <th>nr.</th>
            <th>Usługa</th>
            <th>Jednostka</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Diagnoza usterki</td>
            <td>szt.</td>
            <td>0zł (w przypadku decyzji naprawy)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Naprawa usterki komputera/laptopa</td>
            <td>każda rozpoczęta godzina</td>
            <td>150zł</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wymiana podzespołów</td>
            <td>szt.</td>
            <td>100zł</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Naprawa peryferii komputera</td>
            <td>szt.</td>
            <td>150zł-500zł</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Montaż komputera</td>
            <td>szt.</td>
            <td>150zł-300zł</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Instalacja oprogramowania/systemu/naprawa systemu</td>
            <td>każda rozpoczęta godzina</td>
            <td>100zł</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Usuwanie wirusów</td>
            <td>szt.</td>
            <td>50zł</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Czyszczenie komputera/laptopa</td>
            <td>szt.</td>
            <td>60zł-100zł</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Porada telefoniczna</td>
            <td>10 min.</td>
            <td>20zł</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Wymiana matrycy</td>
            <td>szt.</td>
            <td>150zł-300zł</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Aktualizacja BIOSu</td>
            <td>szt.</td>
            <td>50zł-100zł</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Porada online (chat)</td>
            <td>-</td>
            <td>0zł</td>
          </tr>
         
        </tbody>
      </Table>
      </div>
    );
}

export default Cennik;