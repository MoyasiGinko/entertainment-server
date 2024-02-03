// models/Movie.js
const uuid = require('uuid');

class Movie {
  constructor(title, genre, image, rating, releaseDate, duration) {
    this.id = uuid.v4();
    this.title = title;
    this.genre = genre;
    this.image = image;
    this.rating = rating;
    this.releaseDate = releaseDate;
    this.duration = duration;
  }
}

module.exports = Movie;
