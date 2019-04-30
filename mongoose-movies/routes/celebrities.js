
var express = require('express');
var router = express.Router();
const Celeb = require('../models/schemas/celebrity.js');

// GET  '/celebrities'
router.get('/', (req, res, next) => {
  Celeb.find({})
    .then( (allCelebs) => {      
      res.render('celebrities/index', {allCelebs} )
    })
    .catch( (err) => {next; return err});
});

module.exports = router;