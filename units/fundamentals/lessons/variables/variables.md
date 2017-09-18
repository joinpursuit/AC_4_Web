# Variables

## Objectives

Students will understand the difference between a statement and an expression. They will be able to define, assign value to, and modify variables. They will understand what `state` broadly means and why we want to save values to begin with.

## Vocabulary

* expression vs statement
* variable
  * definition
  * assignment
* state
* the `undefined` type
* keyword

## Expressions

In the previous lesson we only used expressions in our code. But on their own, expressions don't really do anything. We can write the following program, using `;` to indicate the end of a line.

```js
1 + 1;
"cat";
"bat" + "man";
```

Each of the expressions will be evaluated, return a value, and then get discarded. None of the expressions will have any effect on anything.

## console.log

The first kind of effect we need is logging text to the screen. We have been using the node REPL, where the value returned by an expression was logged for us. To write programs, however, we will be creating a files in which we put our javascript code. When running a file with the code above, nothing will get logged. In order to log something in javascript file, we will need to use the `console.log` function.

```js
console.log("bat" + "man")
```

We will go into greater detail about functions in subsequent lessons. For now it is sufficient to know that to use a function, we need to write its name, followed by parentheses. We may pass a value or an expression to the function by putting it inside the parentheses. An expression will get evaluated first. Some functions return values once they are done executing. However, in the case of `console.log`, nothing useful is returned. Instead the function causes an effect (or side-effect), which is logging the value to the screen.

## Math functions: max and min

Math.min is a function that takes as input any number of `number` values, and returns the smallest of them. To pass more than one value we use commas. Try and type the code below in a node REPL.

```js
> Math.max(2, 1, 4)
4
```

A value that is returned by a function works like any other value. So, we can put the function call inside `console.log`:

```js
console.log(Math.max(2, 1, 4))
```

## Creating a variable

To save values in the computer's memory, we use <b> variables </b>. To create a variable, we use the keyword `var`, followed by the name of the variable.

```js
var myVariable
```

### Assigning a value

A variable is really a placeholder for a value that is stored somewhere in the computer's memory. We can assign a value to a variable by using the assignment operator, `=`.

```js
var myCat = 'Tom'
var myAge = 25
```

To get back the value we assigned, we simply need to write the variable's name. The name can be used by itself, or as part of an expression.

```js
var myCat = 'Tom'
console.log(myCat)
console.log('My cat\'s name is ' + myCat)
```

We can use variables as the left hand and right hand sides of any comparison operator:

```js
var num1 = 2
var num2 = 4
console.log(num1 === num2)
console.log(num2 >= num1 + 2)
console.log(num1 + num2 === 6)
```

### Statements and Expressions

Variable assignment is our first example of a <b>statement</b>. When we assign a value to a variable, nothing visible happens. Instead, the <b>state</b> of our program changes. <b>State</b> is everything that's stored in memory while a program runs. In general, an expression returns a value, while a statement changes the programs state. When using the assignment operator, the right hand side is actually an expression. This means that we are not limited to writing a single value.

```js
var myNumber = 2 * 4 + 2
console.log(myNumber)
```

When running the code above, the expression to the right of the `=` operator will be evaluated to `10` and only then assigned to the variable `myNumber`. We can also use the value of existing variables to create new ones.

```js
var num1 = 4
var num2 = 8
var sum = num1 + num2
```

> Ex. In the following code, explain the evaluation process when assigning a value to the variable `sentence`. What would be logged to the screen?

```js
var string = 'My favorite number is '
var number = 42
var sentence = string + number
console.log(sentence)
```

### Undefined

If we don't assign a value to a variable, it will hold the value `undefined`. This is not a description but an actual value, one we can write in the node REPL:

```js
> undefined
undefined
```

This means we can used `undefined` like we would use any other value. Why this is useful will become clear in the following lessons.

## Modifying Variables

We can assign a new value to a variable at any time by using the assignment operator. This will overwrite the old value of that variable.

```js
var day = 'Monday'
cosole.log('Today is ' + day)
day = 'Tuesday'
console.log('Tomorrow will be ' + day)
```

We may want to use the current value when modifying a variable. For example,we may want to add some numeric value to an existing number. To do this, we can use the variable's name to the right hand side of the assignment operator:

```js
var myNumber = 2
myNumber = myNumber + 1
console.log(myNumber)
```

Since the right hand side of `=` is an expression, it will first be evaluated to a single number. This number will then be assigned to the variable `myNumber`.

> Ex. write the step-by-step evaluation of the third line in the code below:

```js
var sentence = 'My name is'
var name = 'Mia'
sentence = sentence + ' ' + name
console.log(sentence)
```

### Updating Variables Shorthand

There is a shorter syntax to updating variables using their existing value. When we wish to add something to the variable's value, we may use the `+=` operator, as in `num += 1`. This is a shorthand for `num = num + 1`. The same works with `-=`:

```js
var num = 2
num += 6
// Num is 8
num -= 3
// num is 5
```

## Exercises

1. Age Calculator:
* Store your birth year in a variable.
* Store a future year in a variable.
* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated amount per day (as a number).
* Calculate how many you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need NN to last you until the age of X".

3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `Pi` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is NN".
* Calculate the area based on the radius, and log "The area is NN".

4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "NN°C is NN°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "NN°F is NN°C."
