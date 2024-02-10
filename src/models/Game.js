const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  avId: Number,
  title: String,
  genre: String,
  image: String,
  modes: String,
  rating: Number,
  releaseDate: String,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
