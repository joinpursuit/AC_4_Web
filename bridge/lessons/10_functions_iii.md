# Callbacks

## Terms

* Functions as values
* functions as input to other functions
* asynchronous programming
* callback

## Lesson

We've talked about different values that can be stored in variables: numbers, strings, arrays and objects.
In JavaScript, functions are no different than other values. Even though they may appear different.

```js
function add(num1, num2){
  return num1 + num2
}
```

The above is really a shorthand syntax to defining functions. We can also create functions using the longer syntax with the `var` keyword:

```js
var add = function(num1, num2) {
  return num1 + num2
}

add(4, 8)
```

The only different from the shorthand syntax is that there is no name following the `function` keyword. But we still have the variable name `add` to refer to the function. A function without a name is also called an **anonymous function** - we will talk about the significance of this at a later time. For now, both shorthand and longhand syntax can be used interchangeably.

So we can see that a function is just another variable type. As is the case with other variables, we can pass a functions as an argument to another functions. Let us start with a with a not-so-useful example.

```js
function call(func, arg1, arg2){
  func(arg1, arg2)
}

call(add, 2, 4)
```

The function `call` takes a function and two more arguments, and calls the function with the provided arguments. This is not very useful, since we could just call `add` directly:

```js
add(2, 4)
```

Let's try something more useful. The function `forEach` below takes as input an array and a function, and call the function for each element of the array.

```js
function forEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

function logDouble(num) {
  console.log(num * 2)
}

var arr = [1, 2, 3]

forEach(arr, logDouble)
// will log: 2, 4, 6
```

We pass to the `forEach` function:
1. an array of numbers.
2. a function `logDouble`, that takes a number as an argument and logs its value times two.

For each element in the array, the `forEach` function calls `logDouble`, displaying the doubled value of each element. A function that is given as an argument to another function is also called a *callback function* or just *callback*.

### Anonymous Functions

When a function is needed only as a callback, it is common to just define it on the spot. A function defined  **anonymous function**,because the function does not have a name.

```js
forEach(arr, function(num) {
  console.log(num * 2)
})
```

The code above works the same as the earlier code. The function definition looks the same as when we define a function using the `var` keyword. The only difference is - instead of putting the function into a variable, we are immediately passing it as an argument. Remember, a function in javascript is a value, just like a string or a number.

### Asynchronous Programming

The scary-sounding word `asynchronous` means that we don't know the exact order or time that different pieces of code will be executed. Being a language for the web, JavaScript is largely design to support this. Think of a web page with a simple counter: you click on the `+` button to increment the counter, and on the `-` button to decrement it. We don't know which button the user would click on, or when.

### setInterval

Let's examine a built-in function `setInterval`. This function is given as argument:
1. a function
2. a time interval (in milliseconds)

`setInterval` will call the function every time the given time interval has
passed. To see it in action, let's try logging `hello` every second:

```js
function sayHello() {
  console.log('hello')
}

setInterval(sayHello, 1000)
```

Or with an anoymous function:

```js
setInterval(function(){
  console.log('hello')
}, 1000)
```
