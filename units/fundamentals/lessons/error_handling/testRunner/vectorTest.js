"use strict";

var assert = require("assert");
var testRunner = require('./testRunner');
var Vector = require('./vector');


testRunner.addTest("Vector Constructor", function(){
    var p1 = new Vector(1, 2);

    assert.strictEqual(p1.x, 1, "p1.x");
    assert.strictEqual(p1.y, 2, "p1.y");
})

testRunner.addTest("Vector plus method", function() {
    var p1 = new Vector(1, 2);
    var p2 = new Vector(2, 4);
    var p3 = p1.plus(p2);

    assert.strictEqual(p3.x, 3, 'p3.x');
    assert.strictEqual(p3.y, 6, 'p3.y');
})

testRunner.run();
