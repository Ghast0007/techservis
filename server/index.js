const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"techservisdatabase",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "Id",
    secret: "projekt",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);

app.post("/api/zamow", (req, res) => {

  const imie = req.body.imie;
  const nazwisko = req.body.nazwisko;
  const mail = req.body.mail;
  const tel = req.body.tel;
  const opis = req.body.opis;
  const plik = req.body.plik;


 

    db.query(
      "INSERT INTO zamowienia (Imię, Nazwisko, telefon, mail, opis, plik) VALUES (?, ?, ? ,? ,?, ?)",
      [imie, nazwisko, mail, tel, opis, plik],
      (err, result) => {
        console.log(err);
      }
    );
  });


  app.get("/api/wyswietl", (req, res) => {
    db.query("SELECT * FROM zamowienia", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.post("/api/insert", (req, res) => {

    const login = req.body.login;
    const haslo = req.body.haslo;


    bcrypt.hash(haslo, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }
  
      db.query(
        "INSERT INTO logowanie (login, haslo, rola) VALUES (?,?,'user')",
        [login, hash],
        (err, result) => {
          console.log(err);
        }
      );
    });
  });



app.get("/api/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
  

app.post("/api/login", (req, res) => {

    const login = req.body.login;
    const haslo = req.body.haslo;

    db.query(
        "SELECT * FROM logowanie WHERE login = ? ;",
        login,
        (err, result) => {
            if (err){
                res.send({err: err});
            }
            if (result.length > 0) {
              bcrypt.compare(haslo, result[0].haslo, (error, response) =>{
                if (response) {
                  req.session.user = result;
                  console.log(req.session.user);
                  res.send(result);
                } else {
                  res.send({ message: "Złe hasło lub login" });
                }
              });
            } else {
              res.send({ message: "Użytkownik nie istnieje" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running on port 3001");
});