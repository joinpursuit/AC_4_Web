var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('enter a number')
rl.on('line', function(input) {
  // attempting to convert the input to a number
  var num = Number(input)
  // checking if input was not a number
  if (isNaN(num)) {
    console.log('that is not a valid number')
  } else {
    console.log('your input was the number: ' + num)
  }
})