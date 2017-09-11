# Callbacks

## Terms

* Functions as values
* Functions as input to other functions
* Asynchronous programming
* Callback

## Lesson

### Syntax for Declaring Functions

We've learned that many different types of data that can be stored in variables -- for example, numbers, strings, arrays and objects.

In JavaScript, functions can be stored in variables just like other data types.

So far, we have declared functions using this syntax:

```js
function add(num1, num2){
  return num1 + num2;
}
```

This is one way to create a function. We could also create the function and not give it a name.

```js
function(num1, num2) {
  return num1 + num2;
}
```

In this example, there is no name following the `function` keyword. A function without a name is called an **anonymous function** -- we will discuss the significance of this at a later time. This isn't very useful if we plan to invoke the function later.

Instead, we could use this same syntax but declare a variable (using the `var` keyword) that points to the function:

```js
var add = function(num1, num2) {
  return num1 + num2;
}
```

This is equivalent to the first example, and operates the same way. You should be familiar with both ways to create functions, and for now, both ways can be used interchangeably.

### Callback Functions

As demonstrated above, a variable can hold a function just like any other data type (e.g. array, integer, string).

Similarly, as is the case with other variables, we can pass a functions as an argument to other functions. A function that is passed as an argument to another function is called a **callback function**, or just **callback**.

Let us start with a with a not-so-useful example.

```js
function call(arg1, arg2, callback){
  callback(arg1, arg2)
}

call(2, 4, add)
```

The function `call` takes two arguments and a function (i.e. callback), and calls the callback with the provided arguments. This is not very useful, since we could just call `add` directly:

```js
add(2, 4)
```

Let's try something more useful. The function `forEachElem` below takes as input an array and a function, and call the function for each element of the array.

```js
function forEachElem(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function logDouble(num) {
  console.log(num * 2);
}

var arr = [1, 2, 3];

forEachElem(arr, logDouble);
// will log: 2, 4, 6
```

We pass to the `forEachElem` function:
1. an array of numbers, and
2. a function `logDouble`, that takes a number as an argument and logs its value times two.

The `forEachElem` functions invokes the callback (in this case, logDouble) on each element of the array. This displays the doubled value of each element.

### Anonymous Callbacks

When a function is needed only as a callback, it is common to just define it on the spot and not give it a name (i.e. create it as an **anonymous function**).

```js
forEachElem(arr, function(num) {
  console.log(num * 2);
})
```

The code above works the same as the earlier code. The function definition looks the same as when we define a function using the `var` keyword. The only difference is instead of storing the function into a variable, we are immediately passing it as an argument. Remember, a function in JavaScript is a value, just like a string or an integer.

### Asynchronous Programming

We traditionally think of code as being executed from top to bottom such that lower code waits for code higher up to complete before being executed.

Many programming languages operate this way. But this is not always useful. For example, if you're fetching data through an API call, it might take a while for that request to go all the way to the server, be processed, and make its way back to you. Meanwhile, your app could be doing other things, like loading the rest of the page.

For this reason, JavaScript -- a language designed for the web -- heavily relies on `asynchronous` processes. From StackOverflow: "When you execute something *synchronously*, you wait for it to finish before moving on to another task. When you execute something *asynchronously*, you can move on to another task before it finishes."

### setInterval

Let's examine a built-in function `setInterval`, which is available on the browser window. This function takes as arguments:

1. a callback
2. a time interval (in milliseconds)

`setInterval` will call the callback every `n` milliseconds, as defined by the second argument. To see it in action, let's log `hello` every second:

```js
function sayHello() {
  console.log('hello')
}

setInterval(sayHello, 1000)
```

Or with an anonymous function:

```js
setInterval(function(){
  console.log('hello')
}, 1000)
```
