# ES6 Reference

## Sources

* [Core ES6 Features - Axel Rauschmayer](http://exploringjs.com/es6/ch_core-features.html)

## Contents

1. [From `var` to `let`](#varlet)
2. [From `let` to `const`](#letconst)
3. [template literals](#templateliterals)
4. [Arrow Functions](#arrowfunctions)
5. [From `forEach` to `for...of`](#forof)
6. [Default Values](#defaultvalues)
7. [Method Definitions](#methoddefintions)
8. [The Spread Operator](#spreadoperator)
9. [Rest Parameters](#restparameters)
10. [Classes](#classes)

<a name="varlet"></a>

### From `var` to `let`

* [Source: let, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

Like `var`, `let` is used to declare a new variable. The difference is in *scoping*: A variable declared with `var` exists either globally or in the scope of a function. A variable declared with `let` exists in the block of code (surrounded by curly braces) in which it was created.

When using `let`, there is less concern with re-using variable names:

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

#### Temporal Dead Zone with `let`

variables declared with `let` do not move to the top of the current execution context. Referencing the variable in the block before the initialization results in a ReferenceError (contrary to a variable declared with var, which will just have the undefined value).

```js
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

<a name="letconst"></a>

### From `let` to `const`

* [Source: const, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

Variables declared with the `const` keyword are block-scoped, like variables defined using `let`. However, we cannot assign a new value to the variable. When declaring a constant variable you must specify its value.(which makes sense, given that it can't be changed later).

The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable  cannot be reassigned. For example, in the case where the content is an object,this means the object's contents (e.g., its parameters) can be altered.

```js
// define MY_FAV as a constant and give it the value 7
const FAV_NUM = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
FAV_NUM = 20;

// throws an error - Uncaught SyntaxError: Missing initializer in const declaration
const FOO;

// const also works on objects
const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];
```

<a name="templateliterals"></a>

### Template Literals

* [Source: Template literals, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Template literals allow you to easily create multi-line strings and to use [string interpolation](https://en.wikipedia.org/wiki/String_interpolation) (see below).

#### Multi-line strings

Any new line characters are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```js
let multiline = 'string text line 1\n' +
                'string text line 2';
console.log(multiline)
// "string text line 1
// string text line 2"
```

To get the same effect with multi-line strings, you can now write:

```js
let multiline = `string text line 1
string text line 2`;
console.log(multiline)
// "string text line 1
// string text line 2"
```

This is especially useful for creating strings that represent HTML:

```js
const HTML = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;
```

#### Expression interpolation

In order to embed expressions within normal strings, you would use the following syntax:

```js
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
// "Fifteen is 15 and not 20."
```

With template literals, you are able to embed values like this in a more readable way:

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and not 20."
```

<a name="arrowfunctions"></a>

### Arrow Functions

#### Shorter function syntax

```js
var animals = [
  'dog',
  'cat',
  'giraffe',
  'moose'
];

animals.map(function(animal) {
  return animal.length;
}); // [3, 3, 6, 5]

animals.map((animal) => {
  return animal.length;
}); // [3, 3, 6, 5]

animals.map(animal => animal.length); // [3, 3, 6, 5]
```

#### No separte `this`

A functions declared with the `function` keyword defines its own `this` value (a new object in the case of a constructor, `undefined` in strict mode function calls, the base object if the function is called as an "object method", etc.)

Consider the following object:

```js
var person = {
  name: 'Chris'
  age: 0
}

person.growUp = function(){
  var that = this;

  // the callaback to set interval will not have access to the person object's `this`.
  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}
```

An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

<a name="for-of"></a>

### From `forEach` to `for...of`

```js
let arr = [10, 20, 30];

for (let value of arr) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

<a name="defaultvalues"></a>

### Default Values

<a name="methoddefinitions"></a>

### Method Definitions

Given the following code:

```js
var obj = {
  foo: function() {
    /* code */
  },
  bar: function() {
    /* code */
  }
};
```

You are now able to shorten this to:

```js
var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  }
};
```

<a name="spreadoperator"></a>

### The spread (`...`) Operator

In array literals:

```js
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]
```

When concatenating arrays:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

With object literals:

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

When calling a function:

```js
function addThree(x, y, z) {
    return x + y + z;
 }

var args = [0, 1, 2];
addThree(...args);
```

<a name="restparameters"></a>

### Rest Parameters

To add many numbers:

```js
function sumOfMany(...numbers) {
  let sum = 0;
  numbers.forEach(number => {
      sum += number;
  })
  return sum;
}

var sum = sumOfMany(2, 1, 2, 3);
console.log(sum); // 8
```

To add many with `reduce` and arrow functions:

```js
const sumOfMany = (...numbers) => numbers.reduce((sum, number) => sum + number)
```

To multiply:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

// with the spread operator:
var numbers = [2, 4, 6];
var arr = multiply(2, ...numbers);
console.log(arr); // [2, 4, 6]
```

<a name="classes"></a>

### Classes

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

let dog = new Animal('Pluto');
dog.speak(); // 'Pluto makes a noise'
```

The class definition is equivalent to the following in ES5:

```js
function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(this.name + ' makes a noise.');
}
```