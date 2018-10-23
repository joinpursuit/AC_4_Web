//Nielene and Jonathan.E
class Board {
  constructor(table) {
    this.table = [
      //this.table[0][2]
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    this.boardChar = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2]
    };

    this.xTurn = false;
  }

  isGameOver(winningCombinations) {
    if (ticBoard.winningCombinations) {
      console.log("winner");
      return true;
    } else {
      return false;
    }
    // }
    // if (winning combinations) {
    // return endgame
    // } else {
    // resume game
    // }
    //   }
    //if board is full, return "end of game"
    //this is good for boolean logic. is is a boolean logic to write function names like that
  } // this is the class statement

  // this.grid[2][0] = "X" to key into the array
  display() {
    console.log(this.table[0].join(" | "));
    console.log("_________");
    console.log(this.table[1].join(" | "));
    console.log("_________");
    console.log(this.table[2].join(" | "));

    //to display board on screen
  }
  isValidMove(position, sym, placeMark) {
    //check later
    if (position !== sym) {
      console.log(sym);
      //return placeMark(position,sym)
    } else if (position === sym) {
      return "this is not a valid move";
    } else if (placeMark < 1 || placeMark > 9) {
      return "this is not a valid move";
    }
  }
  // placeMark(position,sym){
  //   this.table[position[0]][position[1]] = sym
  // if(sym !== this.table[position[0]][position[1]]){
  //   //return 'this is not a valid entry'
  //   return isValidMove(position)

  //to put in helper functions?
  placeMark(position, sym) {
    let mark = this.boardChar[position];
    if (mark) {
      if (sym !== this.table[mark[0]][mark[1]]) {
        this.table[mark[0]][mark[1]] = sym;
      } else {
        console.log("Spot taken");
      }
    } else {
      console.log("Invalid move");
    }
    this.xTurn = !this.xTurn;
    console.log(this.table);
  }
  findWinner() {
    return "hello world";
  }

  printRow(row) {
    console.log(row.join(" | "));
  }

  winningCombinations() {
    if (
      (this.table[0][0] === this.table[0][1] &&
        this.table[0][1] === this.table[0][2]) ||
      (this.table[1][0] === this.table[1][1] &&
        this.table[1][1] === this.table[1][2]) ||
      (this.table[2][0] === this.table[2][1] &&
        this.table[2][1] === this.table[2][2]) ||
      (this.table[0][0] === this.table[0][1] &&
        this.table[0][1] === this.table[0][2]) ||
      (this.table[1][0] === this.table[1][1] &&
        this.table[1][1] === this.table[1][2]) ||
      (this.table[2][0] === this.table[2][1] &&
        this.table[2][1] === this.table[2][2]) ||
      (this.table[0][0] === this.table[1][1] &&
        this.table[1][1] === this.table[2][2]) ||
      (this.table[2][0] === this.table[1][1] &&
        this.table[1][1] === this.table[0][2])
    ) {
      console.log("Winner");
      return true;
    } else {
      return false;
    }
  }

  getMove(position) {
    return this.boardChar[position];
  }
} //class curly bracket
let ticBoard = new Board();
// board.display()
//console.log(test)
//test.placeMark([0,1],"X")
// this is hardcode come up with way to not make it hard code it
ticBoard.display();

ticBoard.isValidMove(21, [0, 1]);
ticBoard.isGameOver();

module.exports = Board;
