const pgp = require('pg-promise')({});

const db = pgp("postgres://localhost/puppies");

function getAllPuppies() {
  return db.any('select * from pups')
}

function getSinglePuppy(id) {
  return db.one('select * from pups where id = $1', [parseInt(id)])
}

function createPuppy(puppyInfo) {
  const { name, breed, age, sex } = puppyInfo;
  return db.none(
    `insert into pups(name, breed, age, sex)
     values($1, $2, $3, $4)`, [name, breed, parseInt(age), sex]
  )
}

function updatePuppy(id, puppyInfo) {
  const { name, breed, age, sex} = puppyInfo
  return db.none(
    `update pups 
    set name=$1, breed=$2, age=$3, sex=$4
    where id=$5`, [name, breed, parseInt(age), sex, parseInt(id)]
  )
}

function removePuppy(id) {
  return db.result(`delete from pups where id = ${parseInt(id)}`)
}

module.exports = {
  getAllPuppies,
  getSinglePuppy,
  createPuppy,
  updatePuppy,
  removePuppy
};