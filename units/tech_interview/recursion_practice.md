## multiply

Write a function called `mult` that takes in an array of numbers as an argument and recursively multiplies together all of the values in the array.

```js
mult([2, 3, 5]); // returns 30
mult([5, 5, 1, 2]); //returns 50
```

## concatenate
Write a function called `concat` that takes in an array of strings as an argument and recursively concatenates the strings together into a single string, with spaces between each original string.

```js
concat(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
concat(['or', 'just', 'the', 'end', 'of', 'time']); //returns 'or just the end of time'
```


## Sum evens
Write a function called `sumEvens` that takes in an array of numbers as an argument and recursively sums only the even numbers in the array.

```js
sumEvens([2, 3, 5, 6]); // returns 8
sumEvens([10, 5, 1, 2, 12]); //returns 24
```

## sqmult
Write a function called `sqmult` that takes in an array of numbers, squares each number, multiplies all of the squared numbers together, and returns the product:

```js
sqmult([1, 2, 3]); // returns 36
sqmult([5, 10]); //returns 2500
```

## range
Write a function called `range` which takes in two numbers (num1, num2) as arguments. The function should return an array of numbers between num1 and num2.

```js
range(2,10); // returns [2, 3, 4, 5, 6, 7, 8, 9, 10]
range(17,20); // returns [17, 18, 19, 20]
```

## count-vowels
Write a function called `countVs` that takes in a string and returns an object with the count of the number of vowels in the string:

```js
countVs('this is a test'); // returns {'a': 1, 'e': 1, 'i': 2, 'o': 0, 'u': 0}
countVs('another one'); //returns {'a': 1, 'e': 2, 'i': 0, 'o': 2, 'u': 0}
```

## add

Write a function called `addAndMult` that takes in an array of nubers and returns an object with two properies: 'sum', which has the sum of the array, and 'product', which has the product of the array:

```js
addAndMult([1, 2, 3, 4, 5]); // returns {'sum': 15, 'product': 120}
addAndMult([10, 10, 10]); // returns {'sum': 30, 'product': 1000}
```


## factorial
Write a function called `fact` that takes in a number as arguments and returns the factorial of that number. A factorial is basically the product of all integers between that number and 1.

5! = 5 x 4 x 3 x 2 x 1 = 120
10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3,628,800

```js
fact(3); //returns 6
fact(4); //returns 24
fact(7); //returns 5040
```

## tiling
You have a hallway of size N x 2. You have a 1 x 2 tile and 2 x 2 tile. How many different ways are there are tiling the floor?

## staircase
A child is running up a staircase with n steps and can hop either 1 step 2 steps or 3 steps at a time. Write a function called 'tripleStep', that takes in an argument `n` that represents the number of steps in the staircase, and returns a count of how many possible ways the child can run up the stairs.

```js
tripleStep(3); //returns 4
tripleStep(4); //returns 7
tripleStep(5); //returns 13
tripleStep(10); //returns 274
```
