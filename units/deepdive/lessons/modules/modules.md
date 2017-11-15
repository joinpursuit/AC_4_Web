# NodeJS Modules: Imports and Exports

## Resources

- [Intro To Node Modules](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [Node Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)

## Lesson

### Importing and Exporting Files Using Node's Module System

As your node apps start getting bigger and more complex, organizing them starts becoming more important. Luckily, `node.js` has a built-in module system that makes it easy to organize large apps and pieces of code into multiple files. In node.js, each separate `js` file is essentially a separate module.

Basically, the module system lets one `.js` file interact with another `.js` file, and do things like share functions, objects, and variables. Let's take a look at how it works.

There are two key concepts for importing and exporting modules: `require` and `module.exports`.

You can use the `require` keyword to import other modules. You'll typically save the imported modules as a variable so you can use it elsewhere in your app. To import another file in your project, you'll need to enter the file's path as an argument to `require`. For example, if you have a `math-module.js` file and want to import it into a different file in the same folder, you would do the following:

```js
const mathModule = require('./math-module.js');
```

Note: you can name the variable whatever you want. Also, you can optionally omit the `.js` string at the end of the filename, and it will still work.

Importantly, you also need to export things from the files that you want to import in. To export modules you'll need to use the special `module.exports` keyword. Every time you export something you are exporting an object.

There are a few different ways to structure your exports. All of the below essentially do the same thing:

**1**

```js
const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

module.exports = {
  sum: sum,
  multiply: multiply
}
```

**2**

With ES6 [shorthand property names](http://es6-features.org/#PropertyShorthand)

```js
const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

module.exports = {
  sum,
  multiply
}
```

**3**

```js
module.exports = {
  sum: (a, b) => {
    return a + b;
  },
  multiply: (a, b) => {
    return a * b;
  }
}
```

**4**

```js
function sum(a, b) {
  return a + b;
}

function multiply() {
  return a * b;
}

module.exports.sum = sum;
module.exports.multiply = multiply;
```

**5**

```js
module.exports.sum = (a, b) => a + b;

module.exports.multiply = (a, b) => a * b;
```

## Exercises

- [Modules Exercises](../../exercises/modules/modules.md)

## Project

- [Create a module](../../projects/modules/modules.md)
