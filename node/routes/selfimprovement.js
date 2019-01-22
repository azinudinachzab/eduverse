var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('selfimprovement');
});

router.get('/topic', function(req, res, next) {
  res.render('sitopic');
});

router.get('/event', function(req, res, next) {
  res.render('sievent');
});

module.exports = router;
