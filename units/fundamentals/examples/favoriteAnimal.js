function favoriteAnimal(str, callback) {
  return callback(str);
}

function replaceWithDog(str){
  var arr = str.split(' ')
  // ['animal', 'animal', 'bird']
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].replace('animal', 'dog')
  }
  
  return arr.join(' ')
}

function replaceWithCat(str){
  return str.replace('animal', 'cat')
}

var s = favoriteAnimal('animalhouse', replaceWithDog)
console.log(s)