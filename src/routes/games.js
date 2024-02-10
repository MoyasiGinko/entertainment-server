// src/routes/games.js
const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

// Get all games
router.get("/", gamesController.getAllGames);

// Get a specific Game by ID
router.get("/:id", gamesController.getGameById);

// Create a new Game
router.post("/", gamesController.createGame);

// Update a Game
router.put("/:id", gamesController.updateGame);

// Delete a Game
router.delete("/:id", gamesController.deleteGame);

module.exports = router;
