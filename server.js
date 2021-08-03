const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();


let notes = JSON.parse(fs.readFileSync(path.join(__dirname, "./db/db.json"), "utf8"))

const PORT = process.env.PORT || 3001;
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/assets/notes.html"))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/assets/index.html"))
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"))
});

app.post("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"))
})

app.post("/api/notes", (req, res) => {
  let newNote = req.body;
  let thisId = notes.length;
  newNote["id"] = thisId +1;
  thisId++;
  notes.push(newNote);
  console.log(newNote);

  fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
    if (err) throw err;
  });
  res.json(newNote);


  return res.status(200).send("Note Added");
})

