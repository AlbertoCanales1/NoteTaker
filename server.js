const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();


const PORT = process.env.PORT || 3001;
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

app.get("/api/notes", function (req, res) {
  res.json(notes)
  console.log(notes)
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/assets/notes.html"))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/assets/index.html"))
});


