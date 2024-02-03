// movieData.js
const uuid = require('uuid');
const Movie = require('./models/Movie');

const movieData = [
  {
    id: uuid.v4(),
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    rating: 9.3,
    releaseDate: '1994-09-23',
    duration: 142,
  },
  {
    id: uuid.v4(),
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    rating: 9.3,
    releaseDate: '1994-09-23',
    duration: 142,
  },
  {
    id: uuid.v4(),
    title: 'The Godfather',
    genre: 'Crime',
    image: 'https://www.gstatic.com/webp/gallery/2.jpg',
    rating: 9.2,
    releaseDate: '1972-03-24',
    duration: 175,
  },
  {
    id: uuid.v4(),
    title: 'The Dark Knight',
    genre: 'Action',
    image: 'https://www.gstatic.com/webp/gallery/3.jpg',
    rating: 9.0,
    releaseDate: '2008-07-18',
    duration: 152,
  },
  {
    id: uuid.v4(),
    title: 'Pulp Fiction',
    genre: 'Crime',
    image: 'https://www.gstatic.com/webp/gallery/4.jpg',
    rating: 8.9,
    releaseDate: '1994-10-14',
    duration: 154,
  },
  {
    id: uuid.v4(),
    title: 'The Lord of the Rings: The Return of the King',
    genre: 'Adventure',
    image: 'https://www.gstatic.com/webp/gallery/5.jpg',
    rating: 8.9,
    releaseDate: '2003-12-17',
    duration: 201,
  },
  {
    id: uuid.v4(),
    title: 'Schindler\'s List',
    genre: 'Biography',
    image: 'https://www.gstatic.com/webp/gallery/6.jpg',
    rating: 8.9,
    releaseDate: '1994-12-15',
    duration: 195,
  },
  {
    id: uuid.v4(),
    title: 'Fight Club',
    genre: 'Drama',
    image: 'https://www.gstatic.com/webp/gallery/7.jpg',
    rating: 8.8,
    releaseDate: '1999-10-15',
    duration: 139,
  },
  {
    id: uuid.v4(),
    title: 'Forrest Gump',
    genre: 'Drama',
    image: 'https://www.gstatic.com/webp/gallery/8.jpg',
    rating: 8.8,
    releaseDate: '1994-07-06',
    duration: 142,
  },
  {
    id: uuid.v4(),
    title: 'Inception',
    genre: 'Action',
    image: 'https://www.gstatic.com/webp/gallery/9.jpg',
    rating: 8.8,
    releaseDate: '2010-07-16',
    duration: 148,
  },
  {
    id: uuid.v4(),
    title: 'The Matrix',
    genre: 'Action',
    image: 'https://www.gstatic.com/webp/gallery/10.jpg',
    rating: 8.7,
    releaseDate: '1999-03-31',
    duration: 136,
  },
  {
    id: uuid.v4(),
    title: 'The Silence of the Lambs',
    genre: 'Crime',
    image: 'https://www.gstatic.com/webp/gallery/11.jpg',
    rating: 8.6,
    releaseDate: '1991-02-14',
    duration: 118,
  },
  {
    id: uuid.v4(),
    title: 'The Godfather: Part II',
    genre: 'Crime',
    image: 'https://www.gstatic.com/webp/gallery/12.jpg',
    rating: 9.0,
    releaseDate: '1974-12-18',
    duration: 202,
  },
  {
    id: uuid.v4(),
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    genre: 'Adventure',
    image: 'https://www.gstatic.com/webp/gallery/13.jpg',
    rating: 8.8,
    releaseDate: '2001-12-19',
    duration: 178,
  },
  {
    id: uuid.v4(),
    title: 'The Dark Knight Rises',
    genre: 'Action',
    image: 'https://www.gstatic.com/webp/gallery/14.jpg',
    rating: 8.4,
    releaseDate: '2012-07-20',
    duration: 164,
  },
  {
    id: uuid.v4(),
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    rating: 9.3,
    releaseDate: '1994-09-23',
    duration: 142,
  },
  {
    id: uuid.v4(),
    title: 'The Empire Strikes Back',
    genre: 'Action',
    image: 'https://www.gstatic.com/webp/gallery/2.jpg',
    rating: 8.7,
    releaseDate: '1980-06-20',
    duration: 124,
  },
  {
    id: uuid.v4(),
    title: 'Titanic',
    genre: 'Drama',
    image: 'https://www.gstatic.com/webp/gallery/3.jpg',
    rating: 7.8,
    releaseDate: '1997-12-19',
    duration: 195,
  },
  {
    id: uuid.v4(),
    title: 'Avatar',
    genre: 'Action',
    image: 'https://www.gstatic.com/webp/gallery/4.jpg',
    rating: 7.8,
    releaseDate: '2009-12-18',
    duration: 162,
  },
  {
    id: uuid.v4(),
    title: 'Jurassic Park',
    genre: 'Adventure',
    image: 'https://www.gstatic.com/webp/gallery/5.jpg',
    rating: 8.1,
    releaseDate: '1993-06-11',
    duration: 127,
  },
];

const movies = movieData.map((movie) => new Movie(movie.title, movie.genre, movie.image, movie.rating, movie.releaseDate, movie.duration));

module.exports = movies;
