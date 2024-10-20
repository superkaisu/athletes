const mysql = require("mysql");
const express = require("express");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "kt",
  password: "ssana",
  database: "athletes",
  multipleStatements: true,
});

//Headers copied
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  // Pass to next layer of middleware
  next();
});

/*
Urheilija:
id(INT),
etunimi(VARCHAR),
sukunimi(VARCHAR),
kutsumanimi(VARCHAR),
syntymävuosi(DATE),
paino(INT),
kuva(TINYTEXT),
laji(VARCHAR),
saavutukset(TEXT)
*/

//GET, POST, PUT, DELETE

//Make a new connection to the database
conn.connect((err) => {
  if (err) {
    console.log("Error connecting to DB:", err);
    return;
  }
  console.log("Connected to DB");
});

//GET - Display all data from the table athletes WORKS!
app.get("/athletes", (req, res) => {
  conn.query("SELECT * FROM athletes", (err, rows) => {
    if (err) {
      console.log("Error:", err);
      res.status(500).send("Error in database operation");
      return;
    }
    res.json(rows);
  });
});

//GET w/id - Display data from the table athletes with id WORKS!
app.get("/athletes/:id", (req, res) => {
  const id = Number(req.params.id); //HUOM TÄÄ
  //const id = req.params.id;
  conn.query("SELECT * FROM athletes WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
});

//Insert a new athlete to the table athletes
/*conn.query("INSERT INTO athletes SET ?", urheilija, (err, res) => {
  if (err) throw err;
  console.log("Last insert ID:", res.insertId);
});*/

//POST - WORKS! (Don't insert id, it's autoincrement)
app.post("/athletes/lisaa", (req, res) => {
  let urheilija = req.body;
  console.log(urheilija);
  if (!urheilija) {
    return res
      .status(400)
      .send({ error: true, message: "Urheilija -objektia ei mudostunut" });
  }
  conn.query(
    "INSERT INTO athletes SET ? ",
    urheilija,
    function (error, results, fields) {
      if (error) throw error;
      return res.send(JSON.stringify({ ...urheilija }));
    }
  );
});

//PUT - Update data from the table athletes with id - WORKS! (provide id to url)
app.put("/athletes/:id", (req, res) => {
  const urheilija = req.body;
  const id = req.params.id;

  conn.query(
    "UPDATE athletes SET ? WHERE id=?",
    [urheilija, id], //updates all info
    (err, results) => {
      if (err) throw err;

      console.log(`Changed ${results.changedRows} row(s)`);
      res.send(JSON.stringify({ ...urheilija }));
    }
  );
});

//DELETE - Delete data from the table athletes with id - WORKS! (note auto increment in id)
app.delete("/athletes/:id", (req, res) => {
  const urheilija = Number(req.params.id);
  if (!urheilija) {
    return res
      .status(400)
      .send({ error: true, message: "Urheilijaa ei löytynyt" });
  }

  conn.query("DELETE FROM athletes WHERE id=?", urheilija, (err, results) => {
    if (err) {
      return res
        .status(500)
        .send({ error: true, message: "Virhe tietokantaoperaatiossa" });
    }
    if (results.affectedRows === 0) {
      return res
        .status(404)
        .send({ error: true, message: "Urheilijaa ei löytynyt" });
    }
    res.send({ message: "Urheilija poistettu onnistuneesti" });
  });
});
