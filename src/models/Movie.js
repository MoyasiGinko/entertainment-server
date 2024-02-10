const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  avId: Number,
  title: String,
  genre: String,
  image: String,
  rating: Number,
  releaseDate: String,
  duration: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
