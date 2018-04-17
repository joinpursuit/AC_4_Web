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
