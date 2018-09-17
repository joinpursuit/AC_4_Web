# Conditional Solutions

1. 
```js
let variable = "hello"
console.log(variable === variable)
```
2. 
```js
let variableOne = 5;
let variableTwo = 10;
if(variableOne > variableTwo) {
  console.log("The greater number of " + variableOne + " and " + variableTwo + " is " + variableOne)
} else if(variableTwo > variableOne) {
  console.log("The greater number of " + variableOne + " and " + variableTwo + " is " + variableTwo)
} else {
  console.log("The numbers are equal")
}
```

3. 
```js
let language = "german";
if(language === "spanish") {
  console.log("Hola Mundo")
} else if(language === "german") {
  console.log("Hallo Welt")
} else {
  console.log("Hello World")
}
```

4. 
```js
switch (language) {
  case "spanish":
    console.log("Hola Mundo");
    break;
  case "german":
    console.log("Hallo Welt");
    break;
  default:
    console.log("Hello World");
}
```

5.
```js
let numGrade = 85;
if(numGrade >= 90) {
  console.log("A")
} else if(numGrade >= 80 ) {
  console.log("B")
} else if(numGrade >= 70) {
  console.log("C")
} else if(numGrade >= 60) {
  console.log("D")
} else {
  console.log("F")
}
```

6. 
```js
let animalName = 'cat';
let numberOfAnimals = 3;
if(numberOfAnimals === 1) {
  console.log(numberOfAnimals + " " + animalName)
} else {
  console.log(numberOfAnimals + " " + animalName + "s")
}
```

7. 
```js
let num = 8;
if(num % 2) {
  console.log("odd")
} else {
  console.log("even")
}
```
8. 
```js
let num = 7;
num % 2 ? console.log("odd") : console.log("even")
```
9. 
```js

```let num = 0
if(num < 0) {
  console.log("negative");
} else if(num > 0) {
  console.log("positive");
} else {
  console.log("equal to 0")
}
