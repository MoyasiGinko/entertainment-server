const { incrementGlobalAvIdCounter } = require("../utils/globals");
const Anime = require("../models/Anime");

const animeData = [
  {
    title: "Attack on Titan",
    genre: "Action, Drama, Fantasy",
    image: "https://www.gstatic.com/webp/gallery/1.jpg",
    episodes: 75,
    rating: 9.0,
    year: 2013,
    director: "Tetsurō Araki",
    studio: "Wit Studio",
  },
  {
    title: "Death Note",
    genre: "Mystery, Psychological, Supernatural",
    image: "https://www.gstatic.com/webp/gallery/2.jpg",
    episodes: 37,
    rating: 8.6,
    year: 2006,
    director: "Tetsurō Araki",
    studio: "Madhouse",
  },
  // Add more anime data objects here
];

const seedAnimeDatabase = async () => {
  try {
    await Anime.deleteMany({});
    for (const anime of animeData) {
      const newAnime = new Anime({
        ...anime,
        avId: incrementGlobalAvIdCounter(),
      });
      await newAnime.save();
    }
    console.log("Database seeded successfully with animes");
  } catch (error) {
    console.error("Error seeding anime database:", error);
  }
};

module.exports = seedAnimeDatabase;
