# Functions II

## Objectives

* Pass return values between functions
* Explain functional composition
* Write clean, concise code

## Keywords

* conciseness
* readability
* abstraction
* function composition
* helper function

## Lesson

### Sum Range Example

Programs can vary a lot in conciseness and readability. Ideally, we would want to write code that resembles natural language (i.e. English). Consider the following function that calculates the sum of all numbers between `min` and `max`.

```js
function sumOfRange(min, max){
  var sum = 0;

  for (var count = min; count <= max; count++){
    sum += count;
  }
}

console.log(sumOfRange(1, 5)); // Logs 15 (i.e. 1+2+3+4+5)
```

There is nothing inherently wrong with the code above -- it is perfectly fine, and in many ways optimal. However, we could express this program in a way that is more intuitive and that creates **helper functions** that serve other purposes.

We can do this by breaking the problem into smaller steps. The first step would be to get all the numbers between `min` and `max`. Let's create a function called `range` that returns all these numbers in an array.

```js
function range(min, max) {
  var numbers = [];
  for (var i = min; i <= max; i++){
    numbers.push(i);
  }
  return numbers;
}
```

Now whenever we need a range of numbers, for this or other purposes, all we need to do is call the `range` function.

The other step we need is a function that will take as an input an array of numbers and return their sum.

```js
function sum(numbers){
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
```

Now that we have these two functions, we can use them together. More precisely, we will use the return value of the `range` function as an argument for the `sum` function.

```js
// Get and store in a variable an array of all numbers between 10 and 100
var numArr = range(10, 100);

// Get the sum of all numbers in the array
var sum = sum(numArr);

console.log(sum); // Log the sum
```

We can be even more concise, and do the above on the same line.

```js
// printing the sum of numbers between 10 and 100
console.log(sum(range(10,100)));
```

The above is a common pattern in JavaScript. We need the output of one function only as input for another function. Let's create another function (yes, one more) that will make use of the other two.

```js
function sumOfRange(min, max) {
  return sum(range(min, max));
}
```

All we did was place the earlier code into a function. Now we can call `sumOfRange` for any `min` and `max`.

```js
console.log(sumOfRange(1, 5));
```

This will have the exact same output as the original function at the start of this lesson, but it reads much more intuitively and you get the helper functions `sum` and `range`, which you could use elsewhere in your program.

This may seem like much work for a small benefit. But if a sum of a range is something we need often, our code will become clearer and less prone to bugs thanks to the `sumOfRange` function.

To reiterate, the process we have gone through is using the output of `range` as input for `sum`, and using the output of sum in `sumOfRange`. The process of combining two functions to create a third is called **function composition**.

(Note: While this approach is more intuitive and has the above benefits, it is *not* the most efficient way to sum a range of numbers. In particular, it is not space efficient. Imagine getting the sum of the range of numbers between 10 and 10 billion -- you'd create an enormous array!)

### Formatting Example

Oftentimes when designing an app you will receive data from an API that you'd then like to pass to a function. Only issue is the function expects the data in a particular format different from the format in which you receive it from the API.

In these cases, it's helpful to write a helper function that formats the data. You could then take the return value (i.e. the formatted data) and pass it to the function.

```js
var rawData = [
  {
    somethingUseless: 192845738,
    somethingElseUseless: '234988EFESFSDF',
    somethingUseful: 'Orange'
  },
  {
    somethingUseless: 134348239,
    somethingElseUseless: '582424080248SDFSD',
    somethingUseful: 'Apple'
  }
];

function formatFruitData(rawFruitData){
  var formattedData = [];

  for(var i=0; i<rawFruitData.length; i++){
    var fruit = rawFruitData[i].somethingUseful;
    formattedData.push(fruit);
  }

  return formattedData;
}

// Returns the array ['Orange', 'Apple']
formatFruitData(rawData);

// Alternatively, format the data and then immediately pass it to some function
console.log(formatFruitData(rawData));

```

## Exercises

1. Create two functions: `double` and `square`. `double` should take a number and return the number times two. `square` should take a number and return the number squared. Create a third function `doubleSquare` that uses both of the functions to return a number that is first doubled and then squared.

2. Create a function `classyGreeting` that takes as input the strings `firstName` and `lastName`, and returns a string with a greeting using the two. Create a second function `yell` that takes as input as string and returns the string in all capitalized letters. Create a third function `yellGreeting` that will take the `firstName` and `lastName` as inputs and yell a greeting using the two.

3. Create your own two functions, and then create a third function that is a composition of them.
