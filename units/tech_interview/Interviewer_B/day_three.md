## Questions

* Have you ever dealt with company policy you weren't in agreement with? How?

* Create a function that uses a Queue class to process and store each item in an array of data. The array contains random integers between 1 and 100. The function should convert each integer to a decimal (e.g. 1 is .01, 49 is .49, and so on) and then enqueue it. It should return the head of the queue. You should expect your Queue class to have enqueue(), dequeue(), and head() methods.

**Solution**
```js
function processQueue(arr) {
  let theQueue = new Queue();

  arr.forEach((el) => {
    newEl = el * 0.01;
    theQueue.enqueue(newEl)
  })

  return theQueue.head();
}
```

* Create a function that accepts an array and an integer `n`, and rotates that array by `n` steps. For example, given the array [1, 2, 3] and the integer 1, your function should return [3, 1, 2].

**Solution**
```js
const rotate = (int, arr) => {
  let copyArr = arr;
  let count = int;

  while (count) {
    copyArr.unshift(copyArr.pop())
    count -= 1;
  }

  return copyArr;
}
```
