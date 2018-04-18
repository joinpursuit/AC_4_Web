# Interviewer B Questions

* When you worked on multiple projects, how did you prioritize?

* Given an array of positive integers, write a function to determine if the array can be split into two pieces (without re-ordering the elements of the array) so that both pieces have the same sum. If it is possible, return the two pieces. If not, your function should return `false`. For instance, the array [1, 2, 3, 4, 5, 15] can be split into two pieces, [1, 2, 3, 4, 5] and [15], each with sum 15.

**Solution**
```js
const canSplit = (arr) => {
  let answer = false;

  arr.forEach((el, i) => {
    let firstSum = arr.slice(0, i + 1)
                      .reduce((acc, el) => {return acc + el}, 0);
    let secondSum = arr.slice(i + 1, arr.length)
                       .reduce((acc, el) => {return acc + el}, 0);
    if (firstSum === secondSum) {
      answer = [arr.slice(0, i + 1), arr.slice(i + 1, arr.length)];
    }
  })

  return answer;
}
```

* Assume you have a method isSubstring which checks if one word is a substring of another (**note**: a word is a substring of another if the word can be found inside the other word. E.g. "the best of" is a substring of "it was the best of times"). Given two strings, s1 and s2, write a function to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., `waterbottle` is a rotation of `erbottlewat`).
  * *If they ask: Assume s1 and s2 are the same length. Assume the strings are not length 0.*

**Solution**

```js
function isRotation(s1, s2) {
  let twoStrings = s1.concat(s1);
  return isSubstring(twoStrings, s2);
}
```

* You have a five-quart jug, a three-quart jug, and an unlimited supply of water (but no measuring cups). How would you come up with exactly four quarts of water? Note that the jugs are oddly shaped, such that filling up exactly "half" of the jug would be impossible.

**Solution**

| 5-quart | 3-quart | Action                                    |
|---------|---------|-------------------------------------------|
| 5       | 0       | Fill 5-quart jug.                         |
| 2       | 3       | Filled 3-quart with 5-quart's contents.   |
| 2       | 0       | Dumped 3-quart.                           |
| 0       | 2       | Filled 3-quart with 5-quart's contents.   |
| 5       | 2       | Filled 5-quart.                           |
| 4       | 3       | Filled remainder of 3-quart with 5-quart. |
| 4       | 0       | Done!                                     |

* Write a function that accepts two arguments: An array of strings and a string, `str`. Return a boolean based on whether **at least three** of the array's strings are anagrams of `str`.

**Solution**
```js
function atLeastThree(arr, str) {
  counter = 0;

  arr.forEach((el) => {
    if (isAnagram(el, str)) {
      counter += 1;
    }
  })

  return(
    counter >= 3
  );
}

function isAnagram(str1, str2) {
  let counterObj = {};
  let counterObj2 = {};
  let answer = true;

  if (str1.length !== str2.length) {
    return false;
  }

  str1.split("").forEach((el) => {
    if (!counterObj[el]) {
      counterObj[el] = 1;
    } else {
      counterObj[el] += 1;
    }
  })

  str2.split("").forEach((el) => {
    if (!counterObj[el]) {
      counterObj2[el] = 1;
    } else {
      counterObj2[el] += 1;
    }
  })

  Object.keys(counterObj).forEach((key) => {
    if (!counterObj2[key] || counterObj[key] !== counterObj2[key]) {
      answer = false;
    }
  })

  return answer;
}
```
