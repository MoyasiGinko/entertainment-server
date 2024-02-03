// src/controllers/moviesController.js
const Movie = require('../models/Movie');

let movies = [];

const getAllMovies = (req, res) => {
  res.json(movies);
};

const createMovie = (req, res) => {
  const { title, genre } = req.body;
  const newMovie = new Movie(title, genre);
  movies.push(newMovie);
  res.json(newMovie);
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, genre } = req.body;
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    movie.title = title;
    movie.genre = genre;
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  movies = movies.filter((m) => m.id !== id);
  res.json({ message: 'Movie deleted successfully' });
};



module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
