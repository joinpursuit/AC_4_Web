# Interviewer B Questions

Answer the following questions using **recursion.**

* Write a function that accepts two integers and returns the exponent of the first integer with the second. For example, given the integers 8 and 2, the function should return 64, or 8^2.

**Solution**
```js
function exponent(base, exp) {
  if (exp === 1) {
    return base;
  }

  return base * exponent(base, exp - 1)
}
```

* Write a function that accepts an array of strings and returns `true` if all strings in the array contain the letter *s*. Assume that all characters in these strings are lowercase.

**Solution**
```js
const recSCheck = (arr) => {
  if (arr.length === 1) {
    let answer = false;

    arr[0].split('').forEach((char) => {
      if (char === 's') {
        answer = true;
      }
    })

    return answer;
  }

  return ( recSCheck([arr[0]]) &&
           recSCheck(arr.slice(1, arr.length)) );
}
```

* Write a function that accepts a string as an input. This string should be written in dot notation, e.g. `'dog.breed.husky'`. Return a nested object that stores each word as a key and stores `true` as the last value. In the above example, we'd return `{'dog': {'breed': {husky: true}}}`.

**Solution**
```js
function recObject(str) {
  if (str.split('.')[0] === str) {
    let finalObj = {};
    finalObj[str] = true;
    return finalObj;
  }

  let split = str.split('.');
  let obj = {};
  obj[split[0]] = recObject(split.slice(1, split.length).join('.'));

  return obj;
}
```
