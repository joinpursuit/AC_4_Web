## Questions

* Give an example of an occasion where you used logic to solve a problem.

* Create a function that uses a stack to reverse a string. Assume you have a Stack class with the methods push(), pop(), and size().

**Solution**
```js
const reverseStrStack = (str) => {
  const strStack = new Stack();
  const strArr = str.split('');

  while (strArr.length) {
    strStack.push(strArr.shift());
  }

  while (strStack.size()) {
    strArr.push(strStack.pop())
  }

  return strArr.join("");
}
```

* Write a function that accepts an integer and returns that integer's factorial (n!). A factorial is the product of that integer and each integer between it and one (assume positive integers). For example, 3! is 3 * 2 * 1, or 6.

**Solution**
```js
function factorial(int) {
  if (int < 2) {
    return int;
  }

  return int * factorial(int - 1);
}
```

* Write a function that takes two arguments: An array with three or more integers, and a constant integer `c`. Return a boolean depending on whether three of the elements in the array add up to `c`. For example, for the inputs [6, 2, 3, 4] and 9, our function would return `true`, as 2 + 3 + 4 = 9.
  * *Details, if they ask: The array can contain negative numbers. The array is not sorted. The elements do not have to be consecutive.*
  * Questions for after this problem: What if the elements had to be consecutive? Is there a way to optimize this problem from a Big O perspective?

**Solution**
```js
const sumThree = (arr, int) => {
  let sortedArr = arr.sort();

  for(let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sumOfInts = sortedArr[i] + sortedArr[left] + sortedArr[right]
      if (sumOfInts === int) {
        return true;
      } else if (sumOfInts < int) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return false;
}
```
