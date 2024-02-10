// src/routes/animes.js
const express = require("express");
const router = express.Router();
const animesController = require("../controllers/animesController");

// Get all animes
router.get("/", animesController.getAllAnimes);

// Get a specific Anime by ID
router.get("/:id", animesController.getAnimeById);

// Create a new Anime
router.post("/", animesController.createAnime);

// Update a Anime
router.put("/:id", animesController.updateAnime);

// Delete a Anime
router.delete("/:id", animesController.deleteAnime);

module.exports = router;
