const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Match = require("./model/matches");

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

app.post("/matches", async (req, res) => {
  try {
    const { date, teamHome, teamAway, score } = req.body;

    const match = new Match({
      date,
      teamHome,
      teamAway,
      score,
    });

    const savedMatch = await match.save();

    res.status(201).json(savedMatch);
  } catch (error) {
    console.error("Error podczas zapisywania meczu:", error);
    res.status(500).json({ error: "Bląd podczas zapisywania meczu" });
  }
});

app.get("/matches", async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (error) {
    console.error("Bląd podczas pobieranie meczów:", error);
    res.status(500).json({ error: "Bląd podczas pobierania meczów" });
  }
});

app.get("/matches/:country", async (req, res) => {
  try {
    const country = req.params.country;
    const matches = await Match.find({
      $or: [
        {
          teamHome: country,
        },
        { teamAway: country },
      ],
    });
    res.json(matches);
  } catch (error) {
    console.error("Bląd podczas pobierania metcha danego kraju");
    res
      .status(500)
      .json({ error: "Bląd podczas pobierania metcha danego kraju" });
  }
});

app.listen(PORT, () => {
  console.log(`Server dziala na http://localhost${PORT}`);
});
