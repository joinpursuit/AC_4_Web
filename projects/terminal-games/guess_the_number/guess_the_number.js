var readline = require('readline')

// Constants
var MIN = 1
var MAX = 10
var TRIES = 5

/*
 *   the following will be given to the students,
 *   and they are not required to understand it
 */

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.clear = function () {
  return process.stdout.write('\x1B[2J\x1B[0f')
}

// implementation of array.includes
// function includes (array, number) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return true
//     }
//   }
//   return false
// }
/*
 *  the following will be given to the students,
 *  and it is recommended that they understand it
 */
function getRandomNumber (min, max) {
  // type check
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('min and max should be whole numbers')
  }
  return Math.round(Math.random() * (max - min)) + min
}

/*
 *  the following may be partially given to the students
 *  (body-less function definitions, etc.)
 */

// Game constructor
function Game (min, max, tries) {
  this.min = min
  this.max = max
  this.number = getRandomNumber(min, max)
  this.triesLeft = tries
  this.guessList = []
}

function testGuess (game, guess) {
  // typecheck:
  if (!Number.isSafeInteger(Number(guess))) {
    console.log('Insert whole numbers only')
    return false
  }
  // important: try and re-implement array methods
  if (game.guessList.includes(guess)) {
    console.log('You\'ve tried this number already ')
    return false
  }

  game.guessList.push(guess)

  if (guess === game.number) {
    console.log('Success! \n')
    return true
  } else if (guess < game.number) {
    console.log('Aim higher')
    return false
  } else {
    console.log('Aim lower')
    return false
  }
}

function playAgain () {
  rl.question('Would you like to play again? ', function (answer) {
    console.clear()

    if (answer === 'yes') {
      var game = new Game(MIN, MAX, TRIES)
      play(game)
    } else {
     // exit the program
      process.exit()
    }
  })
}

function play (game) {
  rl.question('Enter your guess ', function (guess) {
    console.clear()

    var win = testGuess(game, Number(guess))

    if (win) {
      playAgain()
    } else {
      game.triesLeft--
      console.log('Tries left: ', game.triesLeft)
      console.log('Past guesses: ', game.guessList)
      if (game.triesLeft === 0) {
        console.log('You lose...')
        playAgain()
      } else {
        play(game)
      }
    }
  })
}

console.clear()
var game = new Game(MIN, MAX, TRIES)
play(game)
