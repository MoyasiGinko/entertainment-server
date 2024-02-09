const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const seedDatabase = require("./src/data/movieData"); // Import the seed function

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection status
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  // Seed the database with movie data
  await seedDatabase();
});

// Routes
app.use("/movies", require("./src/routes/movies"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
