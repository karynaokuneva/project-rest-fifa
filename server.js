const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose

  .connect("mongodb://127.0.0.1:27017/fifa")
  .then(() => {
    console.log("Polączono z MongoDB - ok");
  })
  .catch((err) => {
    console.log("Błąd połączenia:", err);
  });

app.get("/", (req, res) => {
  res.send(" FIFA REST API działa");
});

app.listen(PORT, () => {
  console.log(`Server dziala na http://localhost${PORT}`);
});
