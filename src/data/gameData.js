// gameData.js
const { incrementGlobalAvIdCounter } = require("../utils/globals");
const Game = require("../models/Game");

const gameData = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-Adventure",
    image: "https://www.example.com/game1.jpg",
    rating: 9.5,
    releaseDate: "2017-03-03",
    modes: "Single-player",
  },
  {
    title: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    image: "https://www.example.com/game2.jpg",
    rating: 9.8,
    releaseDate: "2018-10-26",
    modes: "Single-player, Multiplayer",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "Role-Playing",
    image: "https://www.example.com/game3.jpg",
    rating: 9.7,
    releaseDate: "2015-05-19",
    modes: "Single-player",
  },
  // Add more games as needed
];

const seedGameDatabase = async () => {
  try {
    await Game.deleteMany({});
    for (const game of gameData) {
      const newGame = new Game({
        ...game,
        avId: incrementGlobalAvIdCounter(),
      });
      await newGame.save();
    }
    console.log("Database seeded successfully with games");
  } catch (error) {
    console.error("Error seeding game database:", error);
  }
};

module.exports = seedGameDatabase;
