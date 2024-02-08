// src/controllers/moviesController.js
const movies = require("../data/movieData");
const Movie = require("../models/Movie");

// Controller functions

// Get all movies
function getAllMovies(req, res) {
  res.json(movies);
}

// Get a specific movie by ID
function getMovieById(req, res) {
  const { id } = req.params;
  const numericId = parseInt(id, 10);
  const movie = movies.find((m) => m.id === numericId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
}

// Create a new movie
function createMovie(req, res) {
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  const newMovie = new Movie(
    title,
    genre,
    image,
    rating,
    releaseDate,
    duration
  );
  movies.push(newMovie);
  res.json(newMovie);
}

// Update a movie
function updateMovie(req, res) {
  const { id } = req.params;
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  const movie = movies.find((m) => m.id === parseInt(id)); // Convert id to number
  if (movie) {
    movie.title = title;
    movie.genre = genre;
    movie.image = image;
    movie.rating = rating;
    movie.releaseDate = releaseDate;
    movie.duration = duration;
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
}

// Delete a movie
function deleteMovie(req, res) {
  const { id } = req.params;
  const numericId = parseInt(id, 10);
  movies = movies.filter((m) => m.id !== numericId);
  res.json({ message: "Movie deleted successfully" });
}

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
};
