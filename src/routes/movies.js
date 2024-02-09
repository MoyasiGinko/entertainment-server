// src/routes/movies.js
const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// Get all movies
router.get("/", moviesController.getAllMovies);

// Get a specific movie by ID
router.get("/:id", moviesController.getMovieById);

// Create a new movie
router.post("/", moviesController.createMovie);

// Update a movie
router.put("/:id", moviesController.updateMovie);

// Delete a movie
router.delete("/:id", moviesController.deleteMovie);

module.exports = router;
