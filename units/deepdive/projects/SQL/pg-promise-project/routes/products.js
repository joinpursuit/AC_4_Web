var express = require('express');
var router = express.Router();

var db = require('../db/queries');


router.get('/', (req, res, next) => {
  db.getAllPuppies()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
  }
);


module.exports = router;
