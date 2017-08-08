# Getting User Input with NodeJS

## Terms

* modules
* require

## Lesson

NodeJS handles most user input in an asynchronous manner. To illustrate, let's examine the `question` function that is part of the **readline** module. A Module is just some code that exists in another file. In order to access a specific module, we use the `require` keyword:

```js
var readline = require('readline')
```

The **readline** module is built-in to node - if you can run node you should be able to access it. We can give the variable to the left of `require` any name, not just `readline`. However, The string to the right of `require` (`'readline'`) must remain exactly the same. This string would be used to find a file whose name is `readline`. There is one more step to be made - understanding it is not necessary, so you may simply copy and paste this into your program:

```js
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
```

Now we can use the variable `rl` to get input from the user. The method we need is `question`: This method takes as input a string and a (callback) function. It will log the string to the console, get input from the user, and call the provided function with the user's input as an argument. Let's see it in action:

```js
function log(string){
  console.log('your input was: ' + string)
}

rl.question('enter something', log)
```

Or using an anonymous function:

```js
rl.question('enter something', function(string) {
  console.log('your input was: ' + string)
})
```

Note that the input will always be of the `string` type, even if the user types a number. Of course, we may convert the string to a number if needed. In that case, however, we should make sure that we did not get `NaN`. First, we try converting the input to a number using `parseInt`. If `parseInt` fails it will return `NaN` to be assigned to `number`. So we will check if number is `NaN` using `isNaN`.

```js
rl.question('enter a number', function(input) {
  // attempting to convert the input to a number
  var number = parseInt(input)
  // checking if input was not a number
  if (isNaN(number)) {
    console.log('that was not a number')
  ) else {
    console.log('your input was: ' + number)
  }
})
```

### Repeatedly asking for input

The above code works to get the user's input a single time. What about if we wanted to repeatedly ask for input? For example: every time we receive input from the user with `rl.question`, we process that input, and if it is not a number we ask the user for input again. First, let us put the above code into a function:

```js
function getUserInput(){
  rl.question('enter a number: ', function(input) {
    // attempting to convert the input to a number
    var number = parseInt(input)
    // checking if input was not a number
    if (isNaN(number)) {
      console.log('that was not a number')
    ) else {
      console.log('your input was: ' + number)
    }
  })
}

getUserInput()
```

So far the only thing we changed was that we need to call `getUserInput`. Before we go further, let us rewrite the callback as a non-anonymous function:

```js
function handleInput(input) {
  // attempting to convert the input to a number
  var number = parseInt(input)
  // checking if input was not a number
  if (isNaN(number)) {
    console.log('that was not a number')
  } else {
    console.log('your input was: ' + number)
  }
}

function getUserInput() {
  rl.question('enter a number: ', handleInput)
}

getUserInput()
```

Now all we have to do is call `getUserInput` from `handleInput` if we get `NaN`:

```js
function handleInput(input) {
  // attempting to convert the input to a number
  var number = parseInt(input)
  // checking if input was not a number
  if (isNaN(number)) {
    console.log('that was not a number')
    getUserInput()
  } else {
    console.log('your input was: ' + number)
  }
}

function getUserInput() {
  rl.question('enter a number: ', handleInput)
}

getUserInput()
```

### Questions

1. Write a program that asks the user for input. If the input is `'dog'`, log `'cat'`.
2. Write a program that asks the user for input. The input must be of length 10 or greater. Ask the user for input until they provide the correct length.
