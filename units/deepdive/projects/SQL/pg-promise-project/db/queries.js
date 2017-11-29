const pgp = require('pg-promise')({});

const db = pgp("postgres://localhost/puppies");

function getAllPuppies() {
  return db.any('select * from pups');
}

module.exports = {
  getAllPuppies: getAllPuppies
};