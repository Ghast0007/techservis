const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"techservisDATABASE",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.post("/api/insert", (req, res) => {

    const login = req.body.login;
    const haslo = req.body.haslo;


    const sqlInsert =
     "INSERT INTO logowanie (login, haslo) VALUES (?,?)";
    db.query(sqlInsert, [login, haslo], (err, result) => {
        console.log(result);
        
    });
});

app.post("/api/login", (req, res) => {

    const login = req.body.login;
    const haslo = req.body.haslo;

    db.query(
        "SELECT * FROM logowanie WHERE login = ? AND haslo = ?",
        [login, haslo],
        (err, result) => {
            if (err){
                res.send({err: err});
            }
            if (result.length > 0) {
                res.send (result);

            }else {
                res.send({message: "Nie znaleziono użytkownika"});
            }
        }
    );
});

app.listen(3001, () => {
    console.log("running on port 3001");
});