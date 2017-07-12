const readline = require('readline')

// Constants
const MIN = 1
const MAX = 10
const TRIES = 5

/*
 *   the following will be given to the students,
 *   and they are not required to understand it
 */

const rl = readline.createInterface({
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
  this.win = false
  this.message = ''
}

const updateGame = (game, guess) => {
  // typecheck:
  if (!Number.isSafeInteger(Number(guess))) {
    return Object.assign({}, game, {
      win: false,
      triesLeft: game.triesLeft - 1,
      message: 'Insert whole numbers only'
    })
  } else if (game.guessList.includes(guess)) {
    return Object.assign({}, game, {
      win: false,
      triesLeft: game.triesLeft - 1,
      message: 'you\'ve tried this number already'
    })
  } else if (guess === game.number) {
    return Object.assign({}, game, {
      win: true,
      message: 'success!'
    })
  } else if (guess < game.number) {
    return Object.assign({}, game, {
      guessList: game.guessList.concat([guess]),
      triesLeft: game.triesLeft - 1,
      message: 'aim higher'
    })
  } else {
    return Object.assign({}, game, {
      guessList: game.guessList.concat([guess]),
      triesLeft: game.triesLeft - 1,
      message: 'aim lower'
    })
  }
}

const playAgain = () => {
  rl.question('Would you like to play again? ', (answer) => {
    console.clear()

    if (answer === 'yes') {
      const game = new Game(MIN, MAX, TRIES)
      play(game)
    } else {
     // exit the program
      process.exit()
    }
  })
}

const play = (game) => {
  rl.question('Enter your guess ', (guess) => {
    console.clear()

    const updatedGame = updateGame(game, Number(guess))
    console.log(updatedGame.message)

    if (updatedGame.win) {
      playAgain()
    } else {
      console.log('Tries left: ', updatedGame.triesLeft)
      console.log('Past guesses: ', updatedGame.guessList)

      if (updatedGame.triesLeft === 0) {
        playAgain()
      } else {
        play(updatedGame)
      }
    }
  })
}

console.clear()
const game = new Game(MIN, MAX, TRIES)
play(game)
