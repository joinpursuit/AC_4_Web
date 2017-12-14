var express = require('express');
var router = express.Router();

let db = require('../db/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
