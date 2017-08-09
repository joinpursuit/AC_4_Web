# Callbacks

## Terms

* Functions as values
* functions as input to other functions
* asynchronous programming
* callback

## Lesson

Functions in JavaScript are no different than those other values. Even though they have appeared different, since the rest were defined by using the `var` keyword. But this is just a shorthand notation. We can equally create functions like this:

```js
var add = function(num1, num2) {
  return num1 + num2
}

add(4, 8)
```

So we can see that a function is just another variable. This means that we can pass a functions as an argument to other functions. It may seem weird at first, and not very useful. And we will start with a not-so-useful example.

```js
function call(func, arg1, arg2){
  func(arg1, arg2)
}

call(add(2, 4))
```

The function `call` takes a function and two more arguments, and calls the function with the provided arguments. Again, not so useful, since we could just call `add` directly. Let's try something more useful. The function `forEach` below takes as input an array and a function, and call the function for each element of the array.

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

For each element in the array, the `forEach` function calls `logDouble`. This way it display double the value of each element. A function that is given as input to another function, to be executed at any later time, is also called a *callback function* or just *callback*.

### Anonymous Callbacks

When a function is needed only as a callback, it is common in javascript to just define the callback on the spot. This type of definition is called an **anonymous function**,because the function does not have a name.

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
