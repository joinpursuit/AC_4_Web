"use strict";
var assert = require("assert");

function runTests(tests) {
    var passed = 0;
    var failed = 0;

    tests.forEach(function(test){
        try {
            console.log()
            console.log(test)
            test();

            passed += 1;
        } catch (error) {
  
            console.log("--- Test Failed ---")
            console.log(error.message + " should be " + error.expected + " but is " + error.actual );
            console.log(error.stack.split("\n")[1])

            failed += 1;
        }
    })

    console.log()
    console.log("---Total---")
    console.log(passed + " passed")
    console.log(failed + " failed")
}

function Vector(x, y) {
    this.x = x;
    this.y = y;
}


Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

function test1(){
    var p1 = new Vector(1, 2);

    assert.strictEqual(p1.x, 1, "p1.x");
    assert.strictEqual(p1.y, 2, "p1.y");
}

function test2() {
  var p1 = new Vector(1, 2);
  var p2 = new Vector(2, 4);
  var p3 = p1.plus(p2);

  assert.strictEqual(p3.x, 3, 'p3.x');
  assert.strictEqual(p3.y, 6, 'p3.y');
}

var tests = [test1, test2];

runTests(tests)


