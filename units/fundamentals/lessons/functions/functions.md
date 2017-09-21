# Functions & Scope

## Sources

* [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [Eloquent Javascript - Functions](http://eloquentjavascript.net/03_functions.html)

## Terms

* Function Definition
* Function Call
* *Function Expression* syntax
* *Function Declaration* syntax

* Global variable scope
* Local variable scope (function scope)

## Lesson

### Function Expression

Functions are at the core of JavaScript programming. Today we will begin to learn how to use them.

We use functions to store code that we want to re-use. Let's write a function that doubles a number.

```js
function (num) { return num + num }
```

The above syntax is called **function expression**. The function defines `num` as a name for something it would expect as *input*. The input is always written between parentheses, and these are always followed by the function *function body*. The function body consists of an opening curly bracket, any number of lines of code, and a closing curly bracket. The `return` keyword states that the code to follow it will be the *output* of the function.
We can think of a function as a solid box that contains some machinery. The box has an opening on one side, where something can come in, and an opening at the other side, where something may come out. The names of the things that go in are called *parameters*. The function above, for example, defines one parameter called `num`. We call it `num`, and not `cat` or `giraffe`, in order to communicate that we are expecting a number as input.

### Functions as Values

Before we can begin using the above function, we need to store it somewhere. In JavaScript, a function is a value, just like numbers and string, and like other values, it can be assigned to a variable:

```js
var double = function (num) { return num + num }
```

Now that we have store the function into a variable called `double`, we can pass some input into the function and observe the output. We do this by writing the name of the variable to which the function is assigned (`double` in this case), followed by parentheses, in which we write the input for the function.

```js
double(5)
```

The input values we provide to a function are also called **arguments**. When you open a node REPL, write the function definition and call the function as we did above, you will see the output right away.

```js
> var double = function (num) {
... return num + num
... }
> double(5)
10
```

When we write programs, however, we will want to use the output in some way. For example, we may want to log the output.

```js
var double = function (num) {
  return num + num
}

console.log(double(3))
```

Once the `return` statement is reaches inside a function, the function is execution is over, and we return to the point at which we called the function. The code `double(3)` will then be replaced by the value that was returned by the function. As far as `console.log`, what is being passed to it is the value `9`. It knows nothing about `double`.

As you may have realized, `console.log`, is also a function - one that is provided for us. The dot in it's name is meaningful, and will be discussed at a later point. `console.log` differs from out `double` function in two other ways:

1. It does not produce an output.
2. It leads to something else happening - the value passed to it being logged to the screen.

The first part is easy to replicate. All we need to do is write a function without a `return` keyword:

```js
var noReturn = function (num){
  num + num
}
```

The function above takes a number as argument, doubles it, and does nothing with the result. We can test this:

```js
> var result = noReturn(2)
> console.log(result)
undefined
```

In JavaScript, a function that does not have a return statement will return the value `undefined`.

### Side-effects

The second aspect of `console.log` - a value being logged to the screen, is not something we can replicate. However, this is part of a larger aspect of functions called a *side effect*. A *side effect* is anything that happens inside a function which result in changes to the outside world. One side effect that we *can* create is changing the value of a variable that was defined outside the function.

```js
var myNumber = 2
var sideEffect = function(){
  myNumber += 1
}

sideEffect()
console.log(myNumber)
```

The function `sideEffect` above takes no arguments, and has a single side-effect, adding `1` to the value of the variable `myNumber`.

> Ex. Call `sideEffect` multiple times, and then log myNumber. What is the result?
> Ex. Put a call to the `sideEffects` function as an argument to `console.log`: ```js console.log(sideEffects())```. What is logged? Why?
> Ex. Writing a function that produces side effects *and* has a return value.

### Function shorthand syntax

There is a shorter way to write `var dobule = function…`: start with the `function` keyworkd, followed by the function name.

```js
function double(num){
  return num + 1
}
```


The above syntax is called **function declaration**. `double` is a still a variable in both cases, one whose value is a function.


### Function Hoisting

The only substantial difference is that function declarations are hoisted. This means that you can call a function before it is defined:

```js
console.log(sayHelloDec) // logs: [Function: sayHelloDec]
sayHelloDec(); // logs "hello"

function sayHelloDec() {
  console.log('hello');
}
```

A function defined with the expression syntax will be assigned to a variable, and any variable used before it is defined will have the value `undfined`

```js
console.log(sayHelloExp) // logs: undefined
sayHelloExp(); // TypeError: sayHelloExp is not a function

var sayHelloExp = function() {
  console.log('hello');
}
```

### Funtions as Mini-Programs

A function is like a mini-program inside our main program. Whenever the code inside it is done running, we return to the line from which we called the function. A variable defined inside a function will be forgotten when the function is done running. Every time we call the function `logPets` below, the variables will be created anew.

```js
// This function will print 'cat' and then print 'dog'
function logPets(){
  var pet = 'cat'
  console.log(pet)
  pet = 'dog'
  console.log(pet)
}
// logNumbers will do the same thing every time we call it
logPets()
logPets()
```

### Variable Scope

The variables defined inside a function simply do not exist outside of it.

```js
function hello(){
  var greeting = 'hello'
  console.log(greeting)
}

console.log(greeting) // ReferenceError: greeting is not defined
```

Variables declared outside a function are called `global` and they can be accessed and modified from any function.

```js
var greeting = 'hi'

// This function changes the global variable `greeting`
function hello(){
  greeting = 'hello'
  console.log(greeting)
}
hello()

console.log(greeting) // logs: 'hello'
```

A commonly used term for this is **scope**: a variable inside a function has local scope, and a variables not inside any function has global scope. If we create a variable inside a function with the same name as a global variable - the function will only be aware of the local one. This, however, will not change the value of the global variable.

```js
var greeting = 'hello'

function hello(){
  var greeting = 'what\'s up?'
  console.log(greeting) // logs: 'what's up?'
}


console.log(greeting) // logs: 'hello'
```

### Functions in English

One way we often discuss functions is by stating what they do. For example: function `add` adds two numbers and returns the result. When talking of functions this way, it is usually assumed that the variables (in this case the two numbers), will be provided as arguments to the function.

```js
function add(num1, num2){
  return num1 + num2
}

var num1 = 2
var num2 = 3
// adding num1 and num2
var sum = add(num1, num2)

console.log(sum) // logs: 5
```

Note that we are not changing the values of `num1` and `num2`.

> Ex 1. Write a function that takes a number as argument and returns the number to the power of 2

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


function chicken(){
    // call egg
    egg()
}

function egg(){
    // call chicken
    chicken()
}

egg()
```

One way to imagine the code above is as a stack of functions calls - each time we call a new function, it gets put on the stack. The function is put out of the stack only when it is done running. In the code above, we keep piling `chicken` and `egg` functions, and never takes them off - until the computer runs out of memory.
