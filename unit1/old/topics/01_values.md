# Values, Types, and Operators

* Summary:  javascript types: numbers, strings, Booleans, and undefined. Operators: arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||). Unary operators :`-` to negate a number, `!` to negate `true`/`false`, and `typeof` to find a value’s type.

---

## Numbers

* Integers
* Decimals: precise and imprecise (e.g. 1/3)
* Arithmetic Operators: `+`, `-`, `*`, `/`
  * left to right application
  * order of operations
  * bracketing
* Special Numbers: `Infinity` (x / 0), `NaN` (0 / 0, `Infinity` - `Infinity`)

## Strings
* Single Or Double Quotes
* Special Characters: newline (`\n`), quotation marks, `t`abs, double backslash (`\\`)
* string concatenation

## Booleans

* two possible values
* comparison operators: `>=`, `<=`, `==`, `!==`
* comparing strings and numbers
* `NaN` is not equal to any other value, including `NaN`
  * Checking for `NaN` with `isNaN`

## Logical Operators

* Logical AND: `&&` :
  * `true && false` -> `false`
  * `true && true` -> `true`
* Logical OR: `||` :
  * `true || false` -> `true`
  * `false || false` -> `false`
* Logical NOT: `!` :
  * `!true` -> `false`
  * `!false` -> `true`

* Truth Tables

* Order of operators: `||` has the lowest precedence, then comes `&&`, then the comparison operators (`>`, `===`, and so on), and then the rest.
* e.g.: `1 + 1 == 2 && 10 * 10 > 50` 

## Undefined

* Declaring a variable without assigning it a value

## Type Coercion

* Trouble in JS-Land
* String + Number -> String
* String - Number -> Number
* String * Number -> Number

* Converting to number with `Number`

## Typeof operators

* number, string, boolean Types

### Leftovers

* Truthy Values
* Falsy Values
* Short-Circuiting Logical Operators