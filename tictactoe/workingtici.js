//DO NOT TOUCH THIS FRIKKIN FILEEEEE!!!!!!!

const readlineSync = require('readline-sync');


class Board {
  constructor() {
  this.row1 = ["a", "b", "c"];
  this.row2 = ["d", "e", "f"];
  this.row3 = ["g", "h", "i"];
  this.hrLine = "-----"
 }
 display() {
  console.log(`${this.row1.join("|")}\n${this.hrLine}\n${this.row2.join("|")}\n${this.hrLine}\n${this.row3.join("|")}`)
 }
}

class HumanPlayers{
 constructor(name, sym) {
 this.name = name;
 this.sym = sym;
}
 assign(pos) { // refactor conditional statements
   if (pos ==='a'|| pos ==='b'|| pos ==='c') {
     ticitaci.row1[ticitaci.row1.indexOf(pos)] = this.sym;
   } else if (pos === 'd'|| pos === 'e'|| pos === 'f') {
     ticitaci.row2[ticitaci.row2.indexOf(pos)] = this.sym;
   } else if(pos ==='g'|| pos === 'h'|| pos =='i') {
     ticitaci.row3[ticitaci.row3.indexOf(pos)] = this.sym;
   } else {
     return `${this.name}, you are a trouble maker. Try Again!`;
    }
   }
}

class Game {
  constructor() {
    this.count = 0;
    this.valid = false;
  }
  condition() {
    return (ticitaci.row1[0] === ticitaci.row1[1] && ticitaci.row1[1] === ticitaci.row1[2]
    || ticitaci.row2[0] === ticitaci.row2[1] && ticitaci.row2[1] === ticitaci.row2[2]
    || ticitaci.row3[0] === ticitaci.row3[1] && ticitaci.row3[1] === ticitaci.row3[2]
    || ticitaci.row1[0] === ticitaci.row2[0] && ticitaci.row2[0] === ticitaci.row3[0]
    || ticitaci.row1[1] === ticitaci.row2[1] && ticitaci.row2[1] === ticitaci.row3[1]
    || ticitaci.row1[2] === ticitaci.row2[2] && ticitaci.row2[2] === ticitaci.row3[2]
    || ticitaci.row1[0] === ticitaci.row2[1] && ticitaci.row2[1] === ticitaci.row3[2]
    || ticitaci.row1[2] === ticitaci.row2[1] && ticitaci.row2[1] === ticitaci.row3[0])
  }

   gameFlow() {
     ticitaci.display()
    while (!this.condition()) {
      while (!this.valid) {
      let pos1 = readlineSync.question(`What's Ya Move, ${Trey.name}?`)
      let ans = Trey.assign(pos1)
      if (typeof(ans) === 'string') {
        this.valid = false;
      } else {
      ticitaci.display()
      this.valid = true;
      }
     }
      this.count++;
      console.log(`Turn number: ${this.count}`)
      if (this.condition()) {
        return console.log(`${Trey.name} wins!`)
      } else if (this.count === 9) {
        return console.log("*=>TIE<=*");
      }
      while (this.valid) {
      let pos2 = readlineSync.question(`What's Ya Move,  ${Rinat.name}?`)
      let ans = Rinat.assign(pos2)
      if (typeof(ans) === 'string') {
        this.valid = true;
      } else {
      ticitaci.display()
      this.valid = false;
      }
    }
      this.count++;
      console.log(`Turn number: ${this.count}`)
      if (this.condition()) {
        return console.log(`${Rinat.name} wins!`)
      }

    }
  }
}

let ticitaci = new Board()
let Rinat = new HumanPlayers("Rinat", "O")
let Trey = new HumanPlayers("Trey", "X")
let tic = new Game();
tic.gameFlow();
