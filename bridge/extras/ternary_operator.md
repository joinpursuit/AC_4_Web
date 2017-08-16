# The Ternary Operator

The ternary operator, also called the conditional operator, operates on three values. It is written with a question mark and a colon, like this:

```js
console.log(true ? 1 : 2);
// will log 1
console.log(false ? 1 : 2);
// will log 2
```

The value to the left of the question mark determines which of the other two values will be returned. There are two values that follow the question mark, separated by a colon (`:`). When the value to the left of the question mark is `true`, the first value will be returned. When the value to the left of the quesiton mark is `false`, the second value will be returned. The following is an example checking if two numbers are equal.

```js
var num1 = 2
var num2 = 3
// Setting the message, depending on whether num1 and num2 are equal
var message = num1 === num2 ? 'equal' : 'not equal'

console.log(message)
```