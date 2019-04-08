const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });


app.get("/api/books", (req, res) => {
  db.Book.find({}).then(book => {
    res.json(book);
  }).catch(err => {
    res.json(err);
  });
});

app.post("/api/books", (req, res) => {
  let book = req.body

  db.Book.create(book).then(book => {
    res.json(book);
  }).catch(err => {
    console.log(err);
  });
});

app.delete("/api/books/:id", (req, res) => {
  db.Book.deleteOne({ _id: req.params.id }, err => {
    if(err) console.log(err);
  }).then(book => {
    res.json(book)
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
