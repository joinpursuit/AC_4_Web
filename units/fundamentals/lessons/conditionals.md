# Conditionals

## Objectives

## Vocabulary

* control flow -  the order in which the computer executes statements. Sources: [mdn](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)
* `if`, `else`, `else if`
* code block

## Lesson

So far our programs have been running line-by-line, from top to bottom. Conditionals allow us to execute some lines of code in some cases, but not in others.

### The `if` statement

#### Only `if`

Our first conditional is the `if` statement. It executes a block of code only when an expression (provided in parentheses) evaluates to the boolean value `true`. A block of code is any number of lines enclosed with curly brackets: `{...}`.
 The simplest `if` statement is the one where we simply provide the value true.

```js
if (true) {
  console.log('It is true')
}
```

The value `true` above can be substituted with any expression that evaluates to `true`, such as `'cat' === 'cat'` and `2 > 1`. The next simple `if` statement is the one that is always false.

```js
if (false) {
  console.log('hello')
}
```

The code block following the `if` statement will **never** be executed. Similarly to the previous example, `false` can be substituted with any expression that evaluates to `false`.

> Ex. provide examples of expressions for the condition to an `if` statement, so that the code block following it will never be executed

Note that an an `if` statement is not the end of a program. The code following it will run as usual.

```js
var num = 4
if (num > 2) {
  console.log('It\'s larger than 2')
}
console.log('done checking')
```

In the code above,  `'Its larger than 2'` may or may not be printed (depending on the value of num). Either way `'done checking'` *will* be printed.

#### if - else

We can extend the `if` statement to make it an `if - else` statement. This statement will execute one of two code blocks:

```js
var num = 3
if (num > 2) {
  console.log('it\'s larger than 2')
} else {
  console.log('it\'s not large than 2')
}
```

If the condition evluates to `true`, the first block will be executed. If it evaluated to `false`, the second block will be executed. We can think of an `if` statement like choosing one of two detours:

![if statement diagram](assets/if.svg)

<sup> Image: [Eloquent Javascript, Chapter 2](http://eloquentjavascript.net/02_program_structure.html)</sup>

> Ex. write three `if - else` statements in which the second block of code will always be executed.

#### if - else if - else

We can use the `if - else if - else` statement when we want one of three or more code blocks to be executed. We will have the initial `if`, followed by any number of `else if`, optionally followed by an `else`.

```js
var color = 'azure'

if (color === 'blue') {
  console.log('That\'s my favorite color!')
} else if (color === 'green') {
  console.log('That\'s a nice color!')
} else {
  console.log('That\'s an okay color.')
}

console.log('done checking')
```

The above statement will be checked the conditions one at a time. First, the conditional statement following `if` will be checked. If it is false, the conditional statement following `else if` will be checked. If it is also false, the code block following  `else` will be executed. We can have as many `else if` statements as we like. For example, we may want to check if a number is equal to `1`, `2` or `3`:

```js
var num = 2
if (num === 1) {
  console.log('Jackpot!')
} else if (num === 2) {
  console.log('You won 10 coins')
} else if (num === 3) {
  console.log('You won 20 coins')
} else {
  console.log('Try again.')
}
```

Remember, only one of the code blocks will be executed.

### Checking for range

One way we can utilize `if - else if - else` statement is to check for different ranges. For example, we may want to perform a different action depending on the user's age group.

```js
var userAge = 19

if (userAge < 18) {
  console.log('Parental supervision is required')
} else if (userAge < 21) {
  console.log('Parental permission is required')
} else {
  console.log('You may proceed')
}
```

> What are the ranges that the code above is checking for? How can we rewrite the statement with the **larger than** (`>`) operator?

### Using logical operators

So far in our `if ... ` statements we have been checking for a single condition. It is also possible to check for multiple conditions using the `&&` and `||` boolean operators. For example, we may want to perform the same action when the day is Saturday or Sunday.

```js
var day = 'Monday'

if (day === 'Saturday' || day === 'Sunday'){
  console.log('Have a nice weekend!')
} else if (day === 'Friday') {
  console.log('The weekend is almost here!')
} else {
  console.log('Have a nice day.')
}
```

We can use the && operator to check for ranges. For example, say we want to check if a user's age is between 18-45. When writing code, this is how we will expresses this: if age is larger than 18 **AND** age is smaller than 45, then [...]. In javascript, the opening curly bracket stands in place of the word `then`, and the closing one stand in place of the period at the end of the sentence.

```js
var userAge = 27

if (userAge > 18 && userAge < 45){
  console.log('would you like to take a survey?')
}
```

> How whould you write a conditional statement that outputs the same message if a user's age is either smaller than 18 **OR** larger than 45?

### Truthy and Falsy Values

We can provide the `if` statement with a non-boolean value, or an expression that returns a non-boolean value.

```js
// this will log 'hello'
if (1){
  console.log('hello')
} else {
  console.log('goodbye')
}
```

Checking whether the number `1` is true or false doesn't seem to make much sense. Still, javascript tries to work with us and will convert **any** value to boolean. For numbers, `0` will be converted to `false`, and any other number will be converted to `true`.

```js
// this will log 'goodbye'
if (0){
  console.log('hello')
} else {
  console.log('goodbye')
}
```

For strings, the empty string will be converted to `false`, and any other strings will be converted to `true`. Other values that will be converted to false are `null` and `undefined` and `NaN`. The values that get converted to `false` are called [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). The values that get converted to `true` are called [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).