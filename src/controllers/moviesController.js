const { incrementGlobalAvIdCounter } = require("../utils/globals");
const Movie = require("../models/Movie");

// Controller functions

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific movie by ID
const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  const newMovie = new Movie({
    avId: incrementGlobalAvIdCounter(),
    title,
    genre,
    image,
    rating,
    releaseDate,
    duration,
  });
  try {
    const savedMovie = await newMovie.save();
    res.json(savedMovie.toJSON());
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        genre,
        image,
        rating,
        releaseDate,
        duration,
      },
      { new: true }
    );
    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (deletedMovie) {
      res.json({ message: "Movie deleted successfully" });
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
};
