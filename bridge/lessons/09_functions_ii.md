# Functions II

## objectives

## keywords

* conciseness
* readability
* abstrac

## Lesson

Programs can vary a lot in conciseness and readability. Ideally, we would want to write code that resembels natural language (i.e. English). Consider the following code that calculates the sum of all numbers between `min` and `max`

```js
var min = 1
var max = 10
var sum = 0

for (count = min; count < max; count++){
  sum += count
}

console.log(sum)
```

There is nothing inherently wrong with the code above. However, we would like to be able to express this program in a more intuitive way. We can do this by breaking the problem into smaller pieces. The first piece would be getting all the numbers between `min` and `max`. Let's create a function `range` that does returns those numbers in an array.

```js

```

```js
function sum (min, max){
  var sum = 0

  for (count = min; count < max; count++){
    sum += count
  }

  return sum
}

console.log(sum)

```