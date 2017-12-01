var express = require('express');
var router = express.Router();

var db = require('../db/queries');


router.get('/', (req, res, next) => {
  db.getAllPuppies()
    .then((data) => {
      res.render('puppyList', { puppies: data });
    })
    .catch((err) => {
      return next(err);
    });
});

router.get('/:id', (req, res, next) => {
  db.getSinglePuppy(req.params.id)
    .then((data) => {
      res.render('puppy', { puppy: data });
    })
    .catch((err) => {
      return next(err);
    });
});

router.post('/', (req, res, next) => {
  db.createPuppy(req.body)
    .then(() => {
      res.json({
        status: 'success',
        message: 'Inserted one puppy'
      });
    })
    .catch((err) => {
      console.log(err)
      return next(err);
    });
});

router.put('/:id', (req, res, next) => {
  db.updatePuppy(req.params.id, req.body)
    .then(() => {
      res.json({
        status: 'success',
        message: 'Updated puppy'
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  db.removePuppy(req.params.id)
    .then(function (result) {
      /* jshint ignore:start */
      res.json({
        status: 'success',
        message: `Removed ${result.rowCount} puppy`
      });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
});


module.exports = router;