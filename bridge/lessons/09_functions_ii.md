# Functions II

## objectives

## keywords

* conciseness
* readability
* abstraction
* function composition

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

There is nothing inherently wrong with the code above. However, we would like to be able to express this program in a more intuitive fashion. We can do this by breaking the problem into smaller pieces. The first piece would be getting all the numbers between `min` and `max`. Let's create a function called `range` that returns all these numbers in an array.

```js
function range(min, max) {
  var numbers = []
  for (var i = min; i < max; i++){
    numbers.push(i)
  }
  return numbers
}
```

Now whenever we need a range of numbers, all we need to do is call the `range` function. The other piece we need is a function that will take as input an array of numbers, and returns their sum.

```js
function sum(numArr){
  var total = 0
  for (var i = 0; i < numbers.length; i++) {
    total += numArr[i]
  }
  return total
}
```

Now that we have these two functions, we can use them together. More precisely, we will use the return value of the `range` function as an argument for the `sum` function.

```js
// Getting an array of all numbers between 10 and 100
var numArr = range(10, 100)
// Getting the sum of all numbers in the array
var sum = sum(numArr)
console.log(sum)
```

We can be even more concise, and do the above on the same line.

```js
// printing the sum of numbers between 10 and 100
console.log(sum(range(10,100)))
```

The above is a common pattern in javascript. We need the output of one function only as input for another function. Let's create another function (yes, one more) that will make use of the other two.

```js
function sumOfRange(min, max) {
  return sum(range(min, max))
}
```

All we did was out the earlier code into a function. Now we can call `sumOfRange` if that is what we need.

```js
console.log(sumOfRange(10, 100))
```

It may seem like much work for a small thing. But if a sum of a range is something we need often, our code will become clearer and less prone to bugs thank to the `sumOfRange` function. To reiterate, the process we have gone through is using the output of `range` as input for `sum`, and using the output of sum in `sumOfRange`. This process is called **function composition**. It can be taken even further, but we will not do so at this time.

### Exercises

1. Create two functions: `double` and `square`. Create a third function `doubleSqare` that will use both of the functions.

2. Create a function `classyGreeting` that takes as input a firstName and a lastName, and returns a string with a greeting using the two. create a second function `yell` that takes as input as string and returns the string capitalized. Create a third function `yellGreeting` that will take as input.

3. Create your own two functions and third function that is a composition of the other two.

