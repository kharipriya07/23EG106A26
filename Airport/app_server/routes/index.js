var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities --Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities About us' });
});
router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities located at banglore' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities contact us 9876543210' });
});

module.exports = router;
