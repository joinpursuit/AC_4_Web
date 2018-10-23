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

module.exports = Board
