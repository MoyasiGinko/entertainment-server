const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  avId: Number,
  title: String,
  genre: String,
  image: String,
  rating: Number,
  year: Number,
  episodes: Number,
  director: String,
  studio: String,
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;
