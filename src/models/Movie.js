const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  image: String,
  rating: Number,
  releaseDate: Date,
  duration: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
