// 'use strict'
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
console.log("The " + this.type + " rabbit says '" +
            line + "'");
};

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

console.log(killerRabbit)