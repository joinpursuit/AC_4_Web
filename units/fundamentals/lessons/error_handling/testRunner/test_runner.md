# Using the Test Runner

1. Place the `testRunner.js` file in the the same folder as your other `js` files.
2. Export the code in a `js` by including `module.exports` at the bottom of that file. For example:

```js
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

module.exports = Vector;
```

3. Create a test file, e.g. `vectorTest.js`.
4. Import your `js` file and the `testRunner.js` at the top of the test file. You do not need to include the file extension. E.g:

```js
var testRunner = require('./testRunner');
var Vector = require('./vector');
```

5. Add new tests by calling the `testRunner.add` method, that takes as arguments a string describiing the test and the test function.

6. Run the tests by calling the `testRunner.run` method.