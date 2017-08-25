var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

var journal = []

// takes an array of strings, 
// converts them into numbers and adds them up
function addNumbers(arr){
  // ['4', '5', '9']
  var sum = 0
  for (var i = 0; i < arr.length; i++){
    var num = Number(arr[i])
    if (!isNaN(num)){
      sum += num
    }
  }
  return sum
}

rl.on('line', function (input) {
  clear()
  var arr = input.split(' ')
  var sum = addNumbers(arr)
  console.log(sum)
  console.log('write some numbers: ')
})

clear()
console.log('write some numbers: ')