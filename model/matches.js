const mongoose = reqiure("mongoose");

const matchModel = new mongoose.Schema({
  date: {
    type: string,
    required: true,
  },
  teamHome: {
    type: string,
    required: true,
  },
  teamAway: {
    type: string,
    required: true,
  },
  score: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("Match", matchModel);
