const { incrementGlobalAvIdCounter } = require("../utils/globals");
const Anime = require("../models/Anime");

// Define your controller methods

// Get all animes
const getAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.find();
    res.json(animes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific anime by ID
const getAnimeById = async (req, res) => {
  const { id } = req.params;
  try {
    const anime = await Anime.findById(id);
    if (anime) {
      res.json(anime);
    } else {
      res.status(404).json({ message: "Anime not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new anime
const createAnime = async (req, res) => {
  const { title, genre, image, rating, year, episodes, director, studio } =
    req.body;
  const newAnime = new Anime({
    avId: incrementGlobalAvIdCounter(),
    title,
    genre,
    image,
    rating,
    year,
    episodes,
    director,
    studio,
  });
  try {
    const savedAnime = await newAnime.save();
    res.json(savedAnime);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update an anime
const updateAnime = async (req, res) => {
  const { id } = req.params;
  const { title, genre, image, rating, year, episodes, director, studio } =
    req.body;
  try {
    const updatedAnime = await Anime.findByIdAndUpdate(
      id,
      {
        title,
        genre,
        image,
        rating,
        year,
        episodes,
        director,
        studio,
      },
      { new: true }
    );
    if (updatedAnime) {
      res.json(updatedAnime);
    } else {
      res.status(404).json({ message: "Anime not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete an anime
const deleteAnime = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnime = await Anime.findByIdAndDelete(id);
    if (deletedAnime) {
      res.json({ message: "Anime deleted successfully" });
    } else {
      res.status(404).json({ message: "Anime not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Export the controller methods
module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};
