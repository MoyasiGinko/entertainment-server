const Movie = require("../models/Movie");

// Controller functions

// Get all movies
async function getAllMovies(req, res) {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Get a specific movie by ID
async function getMovieById(req, res) {
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
}

// Create a new movie
async function createMovie(req, res) {
  const { title, genre, image, rating, releaseDate, duration } = req.body;
  const newMovie = new Movie({
    title,
    genre,
    image,
    rating,
    releaseDate,
    duration,
  });
  try {
    const savedMovie = await newMovie.save();
    res.json(savedMovie.toJSON()); // Ensure .toJSON() is called
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Update a movie
async function updateMovie(req, res) {
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
}

// Delete a movie
async function deleteMovie(req, res) {
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
}

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
};
