"use strict";


var tests = []

/**
 * @function addTest
 * @param  {string} description 
 * @param  {function} test
 */
function addTest(description, test){
    tests.push({
        description: description,
        run: test
    });
}

/**
 * @function run
 */
function run() {
    var passed = [];
    var failed = [];

    tests.forEach(function(test){
        try {
            test.run();
            passed.push(test.description);
        } catch (error) {
            var message = error.message + " should be " + error.expected + " but is " + error.actual;
            var line = error.stack.split("\n")[1];

            failed.push(test.description + "\n" + message + "\n" + line);
        }
    })

    console.log("\n-- Passed ---")
    passed.forEach(function(description){
        console.log("✓  " + description);
    })
    
    console.log("\n-- Failed ---");
    failed.forEach(function(str){
        console.log("\n✕  " + str);
    })

    console.log("\n---Total---")
    console.log(passed.length + " passed")
    console.log(failed.length + " failed")
}
 

module.exports = {
    addTest: addTest,
    run: run
};


