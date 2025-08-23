var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities --Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities' });
});
router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities located at banglore' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Airport Facilities --Maintainance and Facilities contact us 9876543210' });
});

module.exports = router;
