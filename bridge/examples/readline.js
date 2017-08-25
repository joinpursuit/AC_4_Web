var readline = require('readline')


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var num = 
rl.on('line', function (input) {
  
  var num = Number(input)

  if (isNaN(num)){
    console.log('not a number')
  } 
  else {
    console.log(input)
  }
})

console.log('insert a number: ')