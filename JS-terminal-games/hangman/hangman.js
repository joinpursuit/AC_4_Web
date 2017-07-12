var readline = require('readline')

var words = ['explain', 'truck', 'neat', 'united', 'branch', 'education', 'decision', 'notice']
var guesses = 6
var BLANK_SPACE = '_'
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

/*
 *  the following will be given to the students,
 *  and it is recommended that they understand it
 */
function getRandomNumber (min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

function getRandomElement (arr) {
  var randomIndex = getRandomNumber(0, words.length - 1)
  return arr[randomIndex]
}

function generateBlankWord (word) {
  var underlines = ''
  for (var i = 0; i < word.length; i++) {
    underlines += BLANK_SPACE
  }
  return underlines
}

/*
 *  the following may be partially given to the students
 *  (body-less function definitions, etc.)
 */
function replaceBlanks (word, userWord, letterStr) {
  var updatedUserWord = ''
  for (var i = 0; i < userWord.length; i++) {
    if (word[i] === letterStr[0]) {
      updatedUserWord += word[i]
    } else {
      updatedUserWord += userWord[i]
    }
  }
  return updatedUserWord
}

function play (word, userWord) {
  console.log(userWord)
  rl.question('enter a letter ', function (letterStr) {
    console.clear()

    if (letterStr.length !== 1) {
      console.log('insert one letter at a time!')
      play(word, userWord)
    } else {
      userWord = replaceBlanks(word, userWord, letterStr)
      play(word, userWord)
    }
  })
}

var word = getRandomElement(words)
var blankWord = generateBlankWord(word)
console.clear()
play(word, blankWord)
