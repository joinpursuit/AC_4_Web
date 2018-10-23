//Nielene and Jonathan.E
const readline = require("readline-sync");
const Board = require("./board.js");
const HumanPlayer = require("./humanplayer.js");
const Game = require("./game.js");

let omar = new HumanPlayer("O", "Omar");
let nathalie = new HumanPlayer("X", "nathalie");
let ticTacToe = new Game(omar, nathalie);
let fakeBoard = new Board();

//console.log(nielene.getMove("3"))
function decideMove() {
  if (fakeBoard.xTurn) {
    let input = readline.question("Welcome to the game, make a move ");
    if (input) {
      let move = fakeBoard.placeMark(input, nathalie.sym);
    } else {
      console.log("Not a real move. Must input a value");
    }
  } else {
    let input = readline.question("Welcome to the game, make a move ");
    if (input) {
      let move = fakeBoard.placeMark(input, omar.sym);
    } else {
      console.log("Not a real move. Must input a value");
    }
  }
}

while (!fakeBoard.winningCombinations()) {
  decideMove();
  fakeBoard.display();
  ticTacToe.giveDirection();

  // checkWinVertical()
}

//fakeBoard.isValidMove(position)
//fakeBoard.checkWinHorizontal()
//fakeBoard.checkDiagnolWin()
//fakeBoard.checkWinVertical()
// console.log(test2)
//console.log(`this is ${res}`)

//user input to an array
//
