const mongoose = require('mongoose');
const Movie = require('../models/movie');


const {dbName} = require('./../config');
mongoose.connect(`mongodb://localhost/${dbName}`);

Movie.collection.drop();

const  movieList = [
  {
    title: 'Kitty',
    genre: 'scratch',
    plot: 'miau'
  },
  {
    title: 'Doggy',
    genre: 'bite',
    plot: 'bark'
  },
  {
    title: 'Fishy',
    genre: 'swim',
    plot: 'blup'
  },

]

Movie.create( movieList, (err)=>{
  if (err){throw(err)}
  console.log(`Created ${movieList.length}movies`)
  mongoose.connection.close();
})