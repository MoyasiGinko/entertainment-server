// models/Movie.js
const uuid = require('uuid');

class Movie {
  constructor(title, genre) {
    this.id = uuid.v4();
    this.title = title;
    this.genre = genre;
  }
}

module.exports = Movie;
