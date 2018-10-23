//Nielene and Jonathan.E

const readlineSync = require("readline-sync");

class HumanPlayer {
  constructor(sym, name) {
    this.name = name;
    this.sym = sym;
  }
}

let nielene = new HumanPlayer("Nielene", "X");
//console.log(nielene.boardChar["2"])
// console.log(nielene.getMove("3"))
//console.log(nielene.getMove("3"))

module.exports = HumanPlayer;
//this
