const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");




app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// dealing with sessions
app.use(
  session({
    key: "userId",
    secret: "nothing",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// dealing with java web tokens
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("we need a token");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

// Connecting with database

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodeprojectserver",
  password: "RITIK99nakra@",
});

app.get("/home", verifyJWT, (req, res) => {
  res.send("great work ");
});



// creating register api
app.post("/register", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(email + "register");
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

// creating login api
app.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email + " login");

  db.query("SELECT * FROM users where email=? ", [email], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });
          req.session.user = result;
          // console.log(req.session.user);
          //res.send(result)
          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({ auth: false, message: "Wrong username/password" });
        }
      });
    } else {
      res.json({ auth: false, message: "no user exist" });
    }
  });
});

// creating profile api
app.get("/profile", verifyJWT, (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false, user: req.session.user });
  }
});

// logout api
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("session deleted");
});

// update api
app.post("/update", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const id = req.body.id;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(id);

    db.query(
      "UPDATE users SET name=?, email=?, password=? where id=?",
      [name, email, hash, id],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
app.listen(3001, () => {
  console.log("Your server is running at 3001...");
});
