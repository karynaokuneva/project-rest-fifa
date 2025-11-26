const mongoose = require("mongoose");

const matchModel = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  teamHome: {
    type: String,
    required: true,
  },
  teamAway: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Match", matchModel);
