var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('language.html', { title: 'Who is bobae'});
});

module.exports = router;
