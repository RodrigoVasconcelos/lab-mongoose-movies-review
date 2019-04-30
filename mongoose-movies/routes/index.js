var express = require('express');
var router = express.Router();
const moviesRouter = require('./movies')
const celebritiesRouter = require('./celebrities');


// *  '/celebrities'
router.use('/celebrities', celebritiesRouter);

// * '/movies'
router.use('/movies', moviesRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
