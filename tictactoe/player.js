

 class HumanPlayers{
  constructor(name, sym) {
  this.name = name;
  this.sym = sym;
 }
  assign(pos, someBoard) { // refactor conditional statements
    if (pos ==='a'|| pos ==='b'|| pos ==='c') {
      someBoard.row1[someBoard.row1.indexOf(pos)] = this.sym;
    } else if (pos === 'd'|| pos === 'e'|| pos === 'f') {
      someBoard.row2[someBoard.row2.indexOf(pos)] = this.sym;
    } else if(pos ==='g'|| pos === 'h'|| pos =='i') {
      someBoard.row3[someBoard.row3.indexOf(pos)] = this.sym;
    } else {
      return `${this.name}, you are a trouble maker. Try Again!`;
     }
    }
}
module.exports = HumanPlayers
