# Functions I

## Terms

* function
  * definition
  * call

* scope: global, locals

## Lesson

Functions are one of the most powerful features of javascript. Today we will begin to learn about their different uses.

A function is a reusable block of code. To create a function, we use the `function` keyword, followed by a name of our choosing, followed by parentheses, followed by the code block.
This is called defining a function.

```js
function hello(){
  console.log('hello')
}
```

Once we created a function, we can run it at any time by writing its name, followed by parentheses. This is called calling or invoking the function.

```js
hello()
```

A function is like a mini-program inside our main program. Whenever the code inside it is done running, we return to the line from which we called the function. A variable defined inside a function will be forgotten when the function is done running. Every time we call the function `logPets` below, the variables will be created anew.

```js
// This function will print 'cat' and then print 'dog'
function logPets(){
  var pet = 'cat'
  console.log(pet)
  pet = 'dog'
  console.log(pet)
}
// logNumbers will have the same effect every time we call it
logPets()
logPets()
```

### Scope

The variables defined inside a function simply do not exist outside of it.

```js
function hello(){
  var greeting = 'hello'
  console.log(greeting)
}
// the code below will produce an error
console.log(greeting)
```

Variables declared outside a function are called `global` and they can be accessed and modified from any function.

```js
var greeting = 'hi'

// This function changes the global variable greeting
function hello(){
  greeting = 'hello'
  console.log(greeting)
}

// will print hello
console.log(greeting)
```

A commonly used term for this is **scope**: a variable inside a function has local scope, and a variables not inside any function has global scope. If we create a variable inside a function with the same name as a global variable - the function will only be aware of the local one. This, however, will not change the value of the global variable.

```js
var greeting = 'hello

function hello(){
  var greeting = 'what\'s up?'
  // will print "what's up?"
  console.log(greeting)
}

// will print "hello"
console.log(greeting)
```

### Parameters (arguments)

We define functions to take in values from the outside world. These are called parameters. They are defined by writing their names inside the parenthese that follow the function's name. Then when we call the function we can pass the values to it inside the parentheses. Values that we pass to a function when calling it are called `arguments`.

```js
function say(what) {
  console.log(what)
}

var greeting = 'hello'

// we can pass variable values
say(greeting)
// or just plain values
say('goodbye')
```

A function can also produce a value. This is done by using the `return` keyword followed by the value. The return value will be produced in the place where the function was called from.

```js
function getFive(){
  return 5
}

var number = getFive()
// This will print `5`
console.log(number)
```

One way we often discuss functions is by stating what they do. For example: function `add` adds two numbers and returns the result. When talking of functions this way, it is usually assumed that the variables (in this case the two numbers), will be provided as arguments to the function.

```js
function add(num1, num2){
  return num1 + num2
}

var num1 = 2
var num2 = 3
// adding num1 and num2
var sum = add(num1, num2)

console.log(sum)
```

Note that we are not changing the values of `num1` and `num2`.

> Ex 1. Create a function that returns a number with doubled value

### Calling functions from other functions

We can call functions from other functions, in the same way we would call them from our main code.

```js
// Returns the square of a number
function square(num){
  return num * num
}

// Returns the sum of the squares of two numbers
function addSquares(num1, num2){
  return square(num1) + square(num2)
}

// Adding the squares of 2 and 3
var sum = addSquares(2, 3)

console.log(sum)
```

Be careful when two function call each other. The following code will never stop running:

```js

// Calls egg
function chicken(){
    egg()
}

// Calls chicken
function egg(){
    chicken()
}

egg()
```

One way to imagine the code above is as a stack of functions calls - each time we call a new function, it gets put on the stack. The function is put out of the stack only when it is done running. In the code above, we keep piling `chicken` and `egg` functions, and never takes them off - until the computer runs out of memory.

## Exercises

1. Convert all exercise answers from unit 3 (conditionals) into functions.
2. Write a function named calculateDogAge that:
takes 1 argument: your dog's age.
* calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
* Call the function three times with different sets of values.

3. Create 2 functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Create a function called calcCircumfrence:
* Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
* Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
4. Make a temperature converter based on [these steps](http://www.mathsisfun.com/temperature-conversion.html).
Create a function called `celsiusToFahrenheit`:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called `fahrenheitToCelsius`:
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "NN°F is NN°C."

### Bonus

The Calculator:
* Write a function `square` that will return the square of a number.
* Write a function called `half` that will return half the value of a number.
* Write a function called `percentOf` that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
* Write a function called `areaOfCircle` that will take one argument (the radius), and return the area of a circle with that radius.
  * Bonus: Round the result so there are only two digits after the decimal.
* Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
  1. Calcualte half the number and save the value
  2. Square the result of #1 and store that result.
  3. Calculate the area of a circle with the result of #2 as the radius.
  4. Calculate what percentage that area is of the squared result (#3). Save and print the result of this calculation.