## Questions

* Do you ever postpone making a decision at work? If so, why?

* Design a function that can accept as an argument three different data types: A string, an integer, or an array. This function should return a boolean depending on whether its argument is symmetrical. For example, `121` is symmetrical, whereas `122` is not.
  - *Clarifying, if they ask: Strings and arrays can be empty, and empty strings/arrays are symmetrical.*


**Answer**
```js
function flexSymmetry(arg) {
  let newArg;

  if (typeof(arg) === "string") {
    newArg = arg.split("");
  } else if (typeof(arg) === "integer") {
    newArg = arg.toString("").split("");
  } else {
    newArg = arg;
  };

  return (newArg === newArg.reverse());
}
```

* Given an array of numbers, reset the array to put all the non-zero numbers in front of all the zeros in the array. Then return the new array and the count of non-zero numbers.
  - *If they ask: The new array and the count can be contained inside a larger array. They would be the 0th and 1st indices.*

**Answer**
```js
const nonZeroNums = (arr) => {
  let count = 0;
  let newArr = [];

  arr.forEach((el) => {
    if (el) {
      newArr.unshift(el);
      count += 1;
    } else {
      newArr.push(el);
    }
  })

  return(
    [newArr, count]
  );
}
```

* Write a function that combines two arrays by alternating taking elements from each array in turn. E.g. [1, 2, 3], [a, b, c] becomes [1, a, 2, b, 3, c].

**Answer**
```js
const alternateArrs = (arr1, arr2) => {
  let answer = [];

  if (arr1.length > arr2.length) {
    while (arr2.length) {
      answer.push(arr1.shift());
      answer.push(arr2.shift());
    }
    while (arr1.length) {
      answer.push(arr1.shift());
    }
  } else {
    while (arr1.length) {
      answer.push(arr1.shift());
      answer.push(arr2.shift());
    }
    while (arr2.length) {
      answer.push(arr2.shift());
    }
  }

  return answer;
}
```
