var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/table', function(req, res){
  res.render('table');
});

router.get('/medialist', function(req, res){
  res.render('medialist');
});

router.get('/tree', function(req, res){
  res.render('tree');
});




router.get('/ionic', function(req, res){
  res.render('ionic');
});

module.exports = router;
