# Variables and Control Flow

## Vocabulary

* expression
* statement
* variable
  * define
  * modify
* the `undefined` type
* keywords
* control flow
  * conditionals
    * if, else, else if
  * while loops
    * condition
  * for loops
    * initialization
    * condition
    * increment

## Statements

In the previous lesson we only used expressions in our code. But on their own, expressions don't really do anything. We can write the following program, using `;` to indicate the end of a line.

```js
1 + 1;
"cat";
"bat" + "man";
```

Each of the expressions will be evaluated, produce a value, and then get discarded. None of the expressions will have any effect on anything.

## console.log

The first kind of effect we need is printing text to the screen. In the node REPL, the value produced by an expression was printed for us. When executing file with `js` code, this will not usually happen.

To save values in the computer's memory, we uses <b> variables </b>. To create a variable, we use the keyword `var`, followed by the name of the variable.

```js
var myVariable
```

We can assign a value of any type to the variable. To do this, we use the assignment operator, `=`, followed by the value.

```js
var myCat = 'Tom'
var myAge = 25
```

We can now use these variables.

## Exercises

* Taking an argument in node
* Checking if number is: even / odd, positive / negative / zero, etc.
* Sum from 1 to `n`
* Logging all numbers from 1 to n
* `EJS` Looping A Triangle, Fizzbuzz, Chessboard
