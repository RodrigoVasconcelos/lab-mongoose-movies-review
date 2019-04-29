var express = require('express');
var router = express.Router();
const celebritiesRouter = require('./celebrities')
const mongoose = require('mongoose');

router.use('/celebrities', celebritiesRouter)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
