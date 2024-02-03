// src/controllers/moviesController.js
const movies = require('../movieData');
const Movie = require('../models/Movie');

// Initialize movies array with top movies
let movies = topMovies.map((movie) => new Movie(movie.title, movie.genre, movie.image, movie.rating, movie.releaseDate, movie.duration));

// Controller functions

// Get all movies
function getAllMovies(req, res) {
  res.json(movies);
}

// Create a new movie
function createMovie(req, res) {
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  const newMovie = new Movie(title, genre, image, rating, releaseDate, duration);
  movies.push(newMovie);
  res.json(newMovie);
}

// Update a movie
function updateMovie(req, res) {
  const { id } = req.params;
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    movie.title = title;
    movie.genre = genre;
    movie.image = image;
    movie.rating = rating;
    movie.releaseDate = releaseDate;
    movie.duration = duration;
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
}

// Delete a movie
function deleteMovie(req, res) {
  const { id } = req.params;
  movies = movies.filter((m) => m.id !== id);
  res.json({ message: 'Movie deleted successfully' });
}

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
