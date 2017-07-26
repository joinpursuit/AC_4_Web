
'use strict';
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

//
// the following will be given to the students,
//  and it is recommended that they understand it
//

/**
 * @function returns a random number between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
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

/**
 * 
 * @typedef {Object} Game
 * @property {number} number - the number that needs to be guessed
 * @property {Array.<Number>} guessList - An array of guess numbers
 * @property {number} triesLeft 
 */

/**
 * @constructor Game
 * @param  {Number} min - minimum number
 * @param  {Number} max - maximum number
 * @param  {Number} tries - number of tries
 */
function Game (min, max, tries) {
  this.number = getRandomNumber(min, max)
  this.triesLeft = tries
  this.guessList = []
}

/**
 * @function testGuess
 * @param  {Game} game  
 * @param  {Number} guess 
 * @return {Boolean} `True` if the guess was correct and false otherwise
 */
function testGuess (game, guess) {
  // typecheck:
  if (!Number.isInteger(Number(guess))) {
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
/**
 * @function play
 * @param  {Game} game {description}
 */
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
