const express = require("express");
const cors = require('cors');
const app = express();
const path = require("path");
const mysql = require('mysql');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const multer = require('multer');
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password:"",
  database:"techservisdatabase",
  multipleStatements: true,
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

app.post("/api/insert", (req, res) => {
  const login = req.body.login;
  const haslo = req.body.haslo;
  const imie = req.body.imie;
  const nazwisko = req.body.nazwisko;
  const mail = req.body.mail;
  const telefon = req.body.telefon;

  bcrypt.hash(haslo, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO logowanie (login, haslo, rola, imie, nazwisko, mail, telefon) VALUES (?,?,'user', ?, ?, ?, ?)",
      [login, hash, imie, nazwisko, mail, telefon],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../client/public', 'images'),
  filename: function (req, file, cb) {   
      // null as first argument means no error
      cb(null, Date.now() + '-' + file.originalname )  
  }
});

app.post("/api/zamow", async (req, res) => {
  const opis = req.body.opis;
  const url = req.body.url;
  const kategoria = req.body.kategoria;
  const user_id = req.body.user_id;

    const user_img = req.file.filename;
    const sql = "INSERT INTO zamowienia (opis, url, kategoria, user_id, czy_zrealizowane, czy_zaplacone, user_img) VALUES (?, ?, ?, ?, 0, 0, ?)";
    db.query(sql, [opis, url, kategoria, user_id, user_img], (err, results) => {  if (err) throw err;
      res.json({ success: 1 })      
    });
});

app.post('/imageupload', async (req, res) => {
	try {
		let upload = multer({ storage: storage}).single('photo');
		
		upload(req, res, function(err) {
      const opis = req.body.opis;
      const url = req.body.url;
      const kategoria = req.body.kategoria;
      const user_id = req.body.user_id;

			if (!req.file) {
				return res.send('Please select an image to upload');
			}
			else if (err instanceof multer.MulterError) {
				return res.send(err);
			}
			else if (err) {
				return res.send(err);
			}
			
			const classifiedsadd = {
        opis: opis,
        url: url,
        kategoria: kategoria,
        user_id: user_id,
        czy_zrealizowane: 0,
        czy_zaplacone: 0,
				user_img: req.file.filename
			};
			
			const sql = "INSERT INTO zamowienia SET ?";
			db.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
				res.json({ success: 1 })      

			});  
		});  
  } catch (err) {console.log(err)}
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
        bcrypt.compare(haslo, result[0].haslo, (error, response) => {
          if (response) {
            req.session.user = result;
          //   console.log(req.session.user);
            res.send(result);
            return;
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

app.post("/api/usun_zamowienie", (req, res) => {
  const id_zamowienia = req.body.id_zamowienia;

  db.query(
    "DELETE FROM zamowienia WHERE id_zamowienia =  " + id_zamowienia,
    (err, result) => {
      console.log(err);
    }
  )
})

app.post("/api/zmien_status", (req, res) => {
  const id_zamowienia = req.body.id_zamowienia;
  
  db.query(
    "UPDATE zamowienia SET czy_zrealizowane = 1 WHERE id_zamowienia = " + id_zamowienia,
    (err, result) => {
      console.log(err);
    }
  )
})

app.post("/api/czy_zaplacone", (req, res) => {
  const id_zamowienia = req.body.id_zamowienia;
  
  db.query(
    "UPDATE zamowienia SET czy_zaplacone = 1 WHERE id_zamowienia = " + id_zamowienia,
    (err, result) => {
      console.log(err);
    }
  )
})

app.get("/api/status", (req, res) => {
  const user_id = req.body.user_id;
  
  db.query(
    "SELECT * FROM logowanie INNER JOIN zamowienia ON logowanie.Id = zamowienia.user_id WHERE logowanie.Id Order By data DESC " ,
    (err,result) => {
      if (err) {
        res.send({err: err});
      }
      else {
        result.forEach((key)=> {
          result[key] = result;
        })
  
        res.send(result);
        console.log(user_id);
      }
    }
  );
});

app.get("/logout", function(req, res) {
  req.session.destroy(() => {});
});

app.listen(3001, () => {
    console.log("running on port 3001");
});