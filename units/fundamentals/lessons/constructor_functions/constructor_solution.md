1. 
```js
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.ageOneYear = function() {
  this.age++;
}

Human.prototype.eating = function() {
  console.log("mmm, mmm, mmm, I'm love'n it")
}

let corey = new Human("corey", 28);
console.log(corey.age)
corey.ageOneYear();
console.log(corey.age);
corey.eating()
```

2. 
```js

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vec) {
  let newVecX = this.x + vec.x;
  let newVecY = this.y + vec.y;
  return new Vector(newVecX, newVecY);
}

Vector.prototype.minus = function(vec) {
  let newVecX = this.x - vec.x;
  let newVecY = this.y - vec.y;
  return new Vector(newVecX, newVecY);
}

Vector.prototype.getLength = function() {
  let hype = (this.x * this.x) + (this.y * this.y)
  return Math.sqrt(hype)
}
```
