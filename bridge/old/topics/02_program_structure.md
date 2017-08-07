# Program Structure

<b>Summary</b>: A program is built out of statements. A sequence of statements results in a program that is executed top to bottom. Disturbances in the control flow: conditional (if, else, and switch) and looping (for and while).

Using variables to save values under a name, and track state in a program. Also, reserved Standard Javascript variables.

Functions as special values that encapsulate a piece of program. Invoking a function `f` by writing `f(arg1, arg2, ...)`. Function call as an expression that produces a value.

---

# Expressions and Statements (Throughout)
* Expressions produce a value. Complex expressions are evaluated.
e.g. `10 -> 10`
e.g. `10 + 20 * 5 -> 10 + 100 -> 110`
e.g. `'con' + 'cat' -> 'concat'`

* Need statements to <i>do</i> something with the produced values

# Variables
* Variable definition statement: `var myVariable` 
* Assigment statment: the `=` operator.
* Variable Names
* When invoked by name, variables produce the value which they hold.
* reserved words

# Reassigning variable value
* To a new value
* To a relative value, e.g. `num = num + 1`

# Function Invocation
* `console.log` (ignore the `.` for now)
* Function as a block of code
* Side effects (e.g. in console.log) 
* Functions that produce values (Math.max)

# If - Else If - Else
* Getting Arguments from terminal in nodejs
* `if`: Checking if input is a number (`Number`, and `isNaN`)
* `if` - `else`: Checking if number is even or odd
* `if` - `else if` - `else`: checking if number is positive, negative, or zero
* Changing if - else conditions: age check: larger than -> smaller than 

# Switch Statement
* Converting `if` ...`else` to `switch`

# While Loops
* `while` loops with number value as a condition
* Infinite Loops: `while (true)` and equivalent
* Updating variables succinctly (`i+=1`, `i++`, `i-=1`, `i--`)
* Loops that never happend (`while (false)`)

# For Loops 
* While loops condensed
* Summations

# Style
* Writing Comments: Single-line and multiline


# Leftovers
* Condional Ternary Operator: Expression that produces one of two values
  * use ternary to assign value to a variable


# Exercises:
* Taking an argument in node
* Checking if number is: even / odd, positive / negative / zero, etc.
* Sum from 1 to `n`
* Logging all numbers from 1 to n
* `EJS` Looping A Triangle, Fizzbuzz, Chessboard
