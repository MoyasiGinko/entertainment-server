// models/Movie.js
class Movie {
  constructor(title, genre, image, rating, releaseDate, duration) {
    this.id = Movie.generateNextId(); // Assign the next sequential numerical ID
    this.title = title;
    this.genre = genre;
    this.image = image;
    this.rating = rating;
    this.releaseDate = releaseDate;
    this.duration = duration;
  }

  static nextId = 1; // Initial value for the next ID

  static generateNextId() {
    return Movie.nextId++;
  }
}

module.exports = Movie;
