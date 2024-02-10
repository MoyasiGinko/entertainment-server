const { incrementGlobalAvIdCounter } = require("../utils/globals");
const Game = require("../models/Game");

// Define your controller methods

// Get all games
const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific game by ID
const getGameById = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Game.findById(id);
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new game
const createGame = async (req, res) => {
  const { title, genre, platform, rating, releaseDate, modes } = req.body;
  const newGame = new Game({
    avId: incrementGlobalAvIdCounter(),
    title,
    genre,
    platform,
    rating,
    releaseDate,
    modes,
  });
  try {
    const savedGame = await newGame.save();
    res.json(savedGame.toJSON());
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a game
const updateGame = async (req, res) => {
  const { id } = req.params;
  const { title, genre, platform, rating, releaseDate, modes } = req.body;
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      {
        title,
        genre,
        platform,
        rating,
        releaseDate,
        modes,
      },
      { new: true }
    );
    if (updatedGame) {
      res.json(updatedGame);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a game
const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await Game.findByIdAndDelete(id);
    if (deletedGame) {
      res.json({ message: "Game deleted successfully" });
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Export the controller methods
module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
