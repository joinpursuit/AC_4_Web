1. 
```js
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ageOneYear() {
    this.age++
  }

  eating() {
      console.log("mmm, mmm, mmm, I'm love'n it")
  }
}

let corey = new Human("corey", 28);
console.log(corey.age)
corey.ageOneYear();
console.log(corey.age);
corey.eating();
```

2.
```js
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    let newVecX = this.x + vec.x;
    let newVecY = this.y + vec.y;
    return new Vector(newVecX, newVecY);
  }

  minus(vec) {
    let newVecX = this.x - vec.x;
    let newVecY = this.y - vec.y;
    return new Vector(newVecX, newVecY);
  }

  getLength() {
    let hype = (this.x * this.x) + (this.y * this.y)
    return Math.sqrt(hype)
  }

}

```
