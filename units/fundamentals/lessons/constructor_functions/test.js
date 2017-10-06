
function Rabbit(type, name) {
    this.type = type;
    this.name = name;
}

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit " +
                this.name + " says '" + line + "'");
};

var killerRabbit = new Rabbit("killer", "George");
console.log(killerRabbit instanceof Rabbit)