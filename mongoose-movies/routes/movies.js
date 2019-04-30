
var express = require('express');
var router = express.Router();
const Movie = require('../models/movie.js');


// GET  '/movies'
router.get('/', (req, res, next) => {
  Movie.find({})
    .then( (allMovies) => {      
      res.render('movies/index', {allMovies} )
    })
    .catch( (err) => {next; return err});
});


// GET '/movies/details'
router.get('/details', (req, res, next) => {
  const { movieId } = req.params; 
  const { movie_id_query } = req.query;
  Movie.findById( movie_id_query )
    .then((movie) => res.render('movies/movie-details', {movie} ))
    .catch( (err) => console.log(err));
});


// GET '/movies/add'
router.get('/add', (req, res, next) => {
  res.render('movies/add-movie');
});


// POST '/movies/add'
router.post('/add', (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then( (movie) => res.redirect('/movies'))
    .catch( (err) => console.log(err));
});

// GET '/movies/delete/:movieId'
router.get('/delete/:movieId/:movieGenre', (req, res, next) => {
  const { movieId } = req.params;


  Movie.deleteOne({ _id: movieId})
    .then( (movie) => {
      res.redirect('/movies')
    })
    .catch( (err) => console.log(err));
})




module.exports = router;