import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import React , {useCallback,  useEffect, useState } from "react";
import Axios from "axios";

function Zamow() {
  const [user, setUser] = useState({});
  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
  });
  const [kategoria, setKategoria] = useState("");
  const [opis, setOpis] = useState("");
  

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });
  }

  const [isSuccess, setSuccess] = useState(null);

 
  const submit = async () => {
    if (kategoria == "" || opis == "" || userInfo.file =="" ) {
      alert("Wypełnij wszystkie pola !")
      
    }
    else {
    const formdata = new FormData() 
    formdata.append('photo', userInfo.file);
    formdata.append('opis', opis);
    formdata.append('kategoria', kategoria);
    formdata.append('user_id', user.Id);

    
    Axios.post("http://localhost:3001/imageupload", formdata,
    { headers: { "Content-Type": "multipart/form-data" } })
    .then(res => { // then print response status
      console.warn(res);
      if(res.data.success === 1){
        setSuccess("Image upload successfully")
       
      }
      window.location.href = '/uslugi/zamow/zamowione';
    })
    
  }
  }

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      // console.log(response.data)
      setUser(response.data.user[0])
    }); 
  }, []);

  

  return (
    <div className="zamowpage">
        <div className="formularz">
          <h5 id="instrukcja"> Wypełnij formularz, aby wysłać zamówienie</h5>
          <div className="wiersz3">
            <label for="categorySelect">Wybierz kategorię *</label>
            <br/>
            <select
              id="categorySelect"
              required
              defaultValue="Komputery"
              onChange={(e)=> {
                setKategoria(e.target.value);
              }}
              
            >
              <option value="Komputery" selected>Komputery</option>
              <option value="Laptopy">Laptopy</option>
              <option value="Peryferia">Peryferia</option>
              <option value="Inne">Inne</option>
            </select>
          </div>
          <div className='wiersz4'>
            <TextField
              required
              id="opis"
              label="Opis problemu"
              multiline
              rows={6}
              defaultValue=""
              variant="filled"
              onChange={(e)=> {
                setOpis(e.target.value);
              }}
            />
          </div>

          <div className='wiersz5'>
            <label for="imageUpload">Załącz zdjęcie usterki lub urządzenia do naprawy *</label>
            <input required id="imageUpload" type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
          </div>

          <p id='instrukcja2'>* - pola wymagane</p>

          <div className="prawa_zamowienie">
            <p>Po wypełnienu formularza, złóż zamówienie klikając poniższy przycisk...</p>
            <Button id="pierwszy"  onClick={submit}>Złóż zamówienie</Button>
            <br/>
            Jeśli masz do nas jakieś pytanie, możesz je zadać klikając poniższy przycisk...
            <Button id="drugi" href="/uslugi/zapytaj"   > Zapytaj </Button>
            <br/>
            Realizacja usługi może trwać od 3 do 10 dni roboczych, potem sprzęt zostanie wysłany do nadawcy.
          </div>
        </div>
      </div>
    );
}

export default Zamow;