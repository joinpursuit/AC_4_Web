# Conditionals

## Terms

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
  console.log('hello')
}
console.log('welcome back')
```

In the code above,  `'hello'` may or may not be printed (depending on the value of num). Either way `'welcome back'` *will* be printed.

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


## **Exercises**

1. In a file named `greaterNum.js`, create two numeric variables. Use an `if` statement to print which number is larger. For example, for the numbers  `5` and `10`, your output should look like this: `'The greater number of 5 and 10 is 10'`

2. In a file named `helloWorld.js`, create a string variable with a language code (e.g. "es", "de", "en"). Use an `if - else if - else` statement to print "Hello, World" for the given language, for at least 3 languages. It should default to returning English.

3. In a file named `assignGrade.js` create a variable `numGrade` that will containt a numeric grade (out of 100). Use an `if - else if - else ` statement to print a letter grade, either "A", "B", "C", "D", or "F".

4. In a file named `pluralize.js` create two variables, one two hold a  noun and one to hold a number. Use a `if - else` statement to print the
number and either a single or plural form, like "5 cats" or "1 dog".
Bonus: Make it handle a few collective nouns like "sheep" and "geese".