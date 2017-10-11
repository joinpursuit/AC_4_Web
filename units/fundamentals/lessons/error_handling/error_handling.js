"use strict";
var assert = require('assert');
var util = require('util')

function runTests(tests){
    var passed = 0;
    var failed = 0;

    tests.forEach(function(test){
        try {
            test();
            passed += 1;
        } catch (error) {
            console.log(error.name)
            console.log("--- Test Failed ---")
            console.log(error.message + " should be " + error.expected + " but is " + error.actual );
            failed += 1;
        }
    })

    console.log("---Total---")
    console.log(passed + " passed")
    console.log(failed + " failed")
}



function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.y, this.y + other.y);
};


function test1(){
    var p1 = new Vector(1, 2);

    var message = util.inspect(p1);

    assert.strictEqual(p1.x, 1, message + " property x");
    assert.strictEqual(p1.y, 2, message + " property y");
}

function test2() {
  var p1 = new Vector(1, 2);
  var p2 = new Vector(2, 4);
  var p3 = p1.plus(p2);
  
  var message = util.inspect(p3) + "\n";

  assert.strictEqual(p3.x, 3, message + 'property: x');
  assert.strictEqual(p3.y, 6, message + 'property: y');
}

var tests = [test1, test2];
runTests(tests)
