const mongoose = require('mongoose');
const Celebrity = require('../models/schemas/celebrity');


const {dbName} = require('./../config');
mongoose.connect(`mongodb://localhost/${dbName}`);

Celebrity.collection.drop();

const celebrityList = [
  {
    name: 'Kitty',
    occupation: 'scratch',
    catchPhrase: 'miau'
  },
  {
    name: 'Doggy',
    occupation: 'bite',
    catchPhrase: 'bark'
  },
  {
    name: 'Fishy',
    occupation: 'swim',
    catchPhrase: 'blup'
  },

]

Celebrity.create(celebrityList, (err)=>{
  if (err){throw(err)}
  console.log(`Created ${celebrityList.length}celebrities`)
  mongoose.connection.close();
})