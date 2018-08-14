# Function Arguments and Closures

## Goals

* Understand the various ways arguments can be passed to functions and utilized in block
* Understand what closures are in JavaScript
* Create and utilize closures

## Keywords

* arugments
* rest or spread operator
* default value
* closure


## Lesson

### Function Arguments

#### `arguments`
As we saw in previous lessons, functions can accept _arguments_ which can be used inside the function. JS functions also can accept more arguments than are asked for and you can access these through a special property called `arguments` which is very similar to an array. Let's say we want to write a function that will print out all the arguments but we don't know how many arguments there will be. This would be a good case to use the `arguments` property.

```js
function logArguments(args) {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

logArguments(1,2,3) 
// => 1
// => 2
// => 3
```

Above we passed in three arguments but no matter how many we passed in, it would log each argument to the screen. **WARNING** about using the `arguments` property: it is not a _true_ array, so you cannot use all of the built-in methods that come with a standard array. 

#### Rest or Spread Operator

With ES6 we've added the _Rest Operator_, also referred to as the _Spread Operator_, which allows us to split items in an array into single values and vice-versa. We can use our `logArguments` function from above as an example. If we add the spread operator, represented by three periods `...`, before our arguments a standard array is formed. Now we can call `args.length` (whereas before we had to call `arguments.length`) and iterate **directly** over the new `args` array.

```js
function logArguments(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}

logArguments(1,2,3) 
// => 1
// => 2
// => 3
```

For more :cool: things you can do with the spread operator, check out this [article](https://davidwalsh.name/spread-operator).


#### Default Values

Occasionally, we want to ensure that an argument in a function is given regardless of user input. We've seen before that if a function expects to receive an argument but none is passed, the argument will become `undefined` which isn't great.

```js
function sayHello(name) {
  return `Hello, ${name}!`
}

sayHello()
//=> "Hello, undefined!"
```

To prevent this, we can now use _default variables_ with ES6. To do this, all you need to add is an assignment operator `=` after your argument and assign it a value. Now, if the function is called without a defined argument, the default value will be used instead.

```js
function sayHello(name="beautiful") {
  return `Hello, ${name}!`
}

sayHello()
//=> "Hello, beautiful!"

sayHello("Matt")
// => "Hello, Matt!"
```
