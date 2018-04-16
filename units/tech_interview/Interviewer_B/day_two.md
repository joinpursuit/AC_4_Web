## Questions

* How do you handle meeting a tight deadline?

* Write a function that accepts a stack as an argument and returns the largest element in that stack. Remember, basic stacks have the methods pop(), push(), peek(), empty(), and size().

**Answer**
``` js
function largestEl(stack) {
  let biggestNum = stack.pop();
  let nextNum;

  while (!stack.empty()) {
    nextNum = stack.pop();
    if (nextNum > biggestNum) {
      biggestNum = nextNum;
    }
  }

  return biggestNum;
}
```

* Write a function that accepts a string as an input and returns that string with all vowels removed.
  - *Clarification, if they ask: Ys can stay. They only have to worry about AEIOU. Expect all vowels to be lowercase.*

**Answer**
```js
function stripVowels(str) {
  let answer = "";

  str.split("").forEach((el) => {
    if (el !== "a" && el !== "e" && el !== "i"
    && el !== "o" && el !== "u") {
      answer = answer.concat(el);
    }
  })

  return answer;
}
```

* I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks. Write a function that translates the numeric score into tally marks. My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. Each group of five should be placed inside one index of an array. Assume that the score you receive will be an integer. This function should return an array that represents the correct score.

**Answer**
```js
const tallyScore = (num) => {
  let answer = []
  let counter = 0;
  let unit = "";
  let tallies = ["a", "b", "c", "d", "e"];

  while (counter < num) {
    if (unit.length === 5) {
      answer.push(unit);
      unit = "a";
    } else {
      unit = unit.concat(tallies[unit.length]);
    }

    counter += 1;
  }

  if (unit.length) {
    answer.push(unit);
  }

  return answer;
}
```
