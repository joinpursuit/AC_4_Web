# Interviewer A Questions

Answer the following questions using **recursion.**

* In the new version of JavaScript, the modulo operator is broken. Write a function that accepts a positive integer and returns the string "even" if the number is even and "odd" if the number is odd.

**Solution**
```js
function evenOrOdd(num) {
  if (num === 0) {
    return "even";
  } else if (num === 1) {
    return "odd";
  }

  return evenOrOdd(num - 2);
}
```

* Write a function that accepts a string and returns that string reversed. For example, "bell" returns "lleb".

**Solution**
```js
const recReverse = (str) => {
  if (str.length === 1) {
    return str;
  }

  return str[str.length - 1].concat(recReverse(str.slice(0, str.length - 1)))
}
```

* Given a multi-dimensional array (e.g. an array with arrays inside of it), return the total number of integers stored in the array. For example, the array `[1, 2, ['foo', 3], [[4]]]` would return 4.

**Solution**
```js
function totalIntegers(array) {
  if (array.length === 0) {
    return 0;
  }

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)){
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}
```
