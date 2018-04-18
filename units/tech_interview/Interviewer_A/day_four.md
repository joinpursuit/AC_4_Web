# Interviewer A Questions

* Share an example of how you were able to motivate employees or co-workers.

* Write a function that accepts an array of 10 unique integers and returns the third smallest integer. **You may not use Array.sort()**.

**Solution**
```js
const thirdSmallest = (arr) => {
  let first = arr[0];
  let second = null;
  let third = null;

  arr.forEach((el, i) => {
    if (i === 0) {
      //do nothing
    } else if (el < first) {
      if (second) {
        third = second;
      }
      second = first;
      first = el;
    } else if (!second || el < second) {
      third = second;
      second = el;
    } else if (!third || el < third) {
      third = el;
    }
  })

  return third;
}
```

* Write a function that accepts a matrix of any height and width. If an index in that matrix is 0, set it's entire row and column to 0. For example:

```js
[
[1, 2, 3],
[4, 5, 6],
[7, 0, 9]
]
```

Becomes:

```js
[
[1, 0, 3],
[4, 0, 6],
[0, 0, 0]
]
```

**Solution**
```js
const convertZeroMatrix = (mtr) => {
  let copy = mtr;
  let xIndices = [];
  let yIndices = [];

  copy.forEach((row, y) => {
    row.forEach((el, x) => {
      if (el === 0) {
        xIndices.push(x);
        yIndices.push(y);
      }
    })
  })

  return copy.map((row, y) => {
    return row.map((el, x) => {
      if (xIndices.includes(x) || yIndices.includes(y)) {
        return 0;
      } else {
        return el;
      }
    })
  })
}
```

* You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of the weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.
  * *If they ask - "only once" means you can get only one reading, period. Bottles have unlimited capacity for pills.*

**Solution**
```
Theoretically, if we were to put one of each pill in a bottle, it would weigh 20.1 grams. However, we'd have no way of knowing which pill added the extra .1 gram. Therefore, the solution is to put a different number of each pill in the bottle. Like so:

1st bottle we add 1 pill.
2nd bottle we add 2 pills.

...and so on.

Keeping track of our bottles, we'd be able to determine the heavy bottle based on the exact weight of the test.
```

* Your boss has an array full of JavaScript objects. Each object represents a user. These user objects have three key-value pairs: They have usernames, emails, and descriptions. All of these keys are connected to values that are strings. Your boss has gotten word that some of these users are bots. Bot users have different usernames and emails, but all have the word "beep" in their descriptions. Write a function that accepts this array and returns a new array containing all bots.

**Solution**
```js
function filterBots(arr) {
  return arr.filter((obj) => {
    descArray = obj.description.split(" ");
    if (descArray.includes('beep')) {
      return obj;
    }
  })
}
```
