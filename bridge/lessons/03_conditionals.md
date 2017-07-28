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

We can extend the `if` statement to make it an `if - else` statement. This statement will

We can think of an `if` statement like this:

![if statement diagram](assets/if.svg)

<sup> Image: [Eloquent Javascript, Chapter 2](http://eloquentjavascript.net/02_program_structure.html)</sup>