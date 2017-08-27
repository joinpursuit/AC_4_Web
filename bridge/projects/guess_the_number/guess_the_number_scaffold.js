
/*
 *   Boilerplate
 */
'use strict';

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

// End of boilerplate

/**
 * @function returns a random number between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandomNumber (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

/**
 * @function Game
 * @param  {Number} number {the number to guess}
 * @param  {Number} triesLeft {number of attempts }
 * @param  {Boolean} win
 * @param  {String} message
 * @return {Game} a Game object
 */
function Game (number, triesLeft, gameOver, message) {
  var game = {
    number: number,
    triesLeft: triesLeft,
    gameOver: gameOver,
    message: message
  }
  return game
}

/**
 * @function updateGame
 * @param {Game}
 * @param {Number} guess
 * @param {Game} The updated game
 */
function updateGame (game, guess) {
  var number = game.number
  var triesLeft = game.triesLeft - 1
  var message = ''
  var gameOver

  if (guess === number) {
    gameOver = true
    message = 'You win!'
  } else if (guess < number) {
    gameOver = false
    message = 'Aim higher'
  } else {
    gameOver = false
    message = 'Aim lower'
  }
  
  var updatedGame = Game(number, triesLeft, gameOver, message)
  return updatedGame
}


/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
  var guess = Number(input)
  
  game = updateGame(game, guess)
  
  if (game.gameOver){
    render (game, '')
    process.exit()
  } else {
    render(game, 'guess a number')
  }
});

/**
 * Logs the game message and a prompt
 * @function
 * @param  {Game} game   
 * @param  {String} prompt 
 */
function render(game, prompt){
  clear()
  console.log(game.message)
  console.log(prompt)
}


/**
 * Called when the user starts the game. Sets up the game object.
 * @function startGame 
 *
 */
function startGame(){
  var gameNumber = getRandomNumber(1, 10)
  var tries = 10
  var gameOver = false
  var message = 'Guess The Number'
  game = Game(gameNumber, tries, gameOver, message)

  render(game, 'guess a number')
}

var game
startGame()