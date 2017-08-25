

function map(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}

function makeContainer(num){
  var numContainer = { 
    num: num
  }
  return numContainer
}

var arr = [1, 2, 3]

var arr2 = map(arr, makeContainer)

console.log(arr2)
