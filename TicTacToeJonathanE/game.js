//Nielene and Jonathan.E
const Board = require("./board.js");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.currentPlayer = this.player1;
    this.gameOver = false;
  }
  switchPlayers() {}
  giveDirection() {
    //console.log(`Welcome to Tic Tac Toe. If you are 6 years old and don't know how to play it, find a 5 year old to help you.`)
    // if (xturn === false) {
    //   console.log("player 1 turn")
    // } else {
    //   console.log("player 2 turn")
    // }
  }

  logWinnerOrTie() {}
  getMove() {}

  play() {
    this.giveDirection();
    while (!this.board.isGameOver()) {
      this.currentPlayer.getMove();
      if (this.board.isValidMove(move)) {
        this.board.makeMove(move, this.currentPlayer.sym);
      }
      this.switchPlayers;
    }
  }
  //readline is asyncronous
} //ending class curlyBrace

module.exports = Game;
