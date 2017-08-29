# Mid-Assessment Grading Key

Total: 53 point

1. **1 point.** What is the correct command to list the files in a directory?

2. **2 points.** I am in my home directory, `/home/benno/`, which contains the subdirectories Desktop, Documents, Downloads, and Pictures. Write the command I can use to move to the Desktop directory.

3. **2 points.** I am in the directory /home/benno/Desktop/ which contains the file hello.js. Write the command I can use to run this file with Node.

4. **1 point.** `+`,`-`,`*`, and `/` are mathematical operators that evaluate a basic arithmetic expression and return the result. Which of the following is an operator that returns the remainder of a division?

5. **1 point.** Sometimes basic mathematical operators are insufficient. Name the object that contains useful methods such as .floor(), .round(), and .pow().

6. **2 points.** Explain in one sentence the difference between `popsicle` and `'popsicle'`

7. **1 point.** What does the following expression evaluate to?

`1 === 2 && 2 === 2`

8. **2 points.** Complete the following truth table.

9. **1 point.** Which of the following is not a proper variable name?

10. **1 point.** What will this code log?

```js
var wearSweater = false;
var tempFahrenheit = 40;

if (tempFahrenheit < 55) {
   wearSweater = true;
}
console.log(wearSweater);
```

11. **2 points.** What will the following code log?

```js
var numberOfPopsicles = 100;
if (numberOfPopsicles < 3) {
   console.log(“Do not share.”);
} else if (numberOfPopsicles < 10) {
    console.log(“Share these popsicles!”);
} else {
    console.log(“We are going to need more people.”);
}
```

12. **2 points.** For each of the following values, fill in if it is truthy or falsy.

13. **3 points.** In the following for loop, label the initialization, condition, and increment.

14. **2 points.** What does this code log?

```js
var count = 0;
while (count < 5) {
  if (count % 2 === 0) {
    console.log(“Count “ + count + “ is even.”);
  }
  count += 1;
}
console.log(“We are done here.”)
```

15. **4 points.** Write a loop for the numbers 1 through 20. Do the following for each number:

If it is divisible by 2 but not 4, console.log(“fools”).
Otherwise, If it is divisible by 4, console.log("charlatans")
Otherwise, log the number.

16. **3 points.** Identify the function definition and the function call in the following code. Also identify the argument that is passed to the function.

17. **1 point.** What is the result of executing the above code? Hint: The value of Pi is ~3.14.

18. **4 points.** Write a function sameType that takes two arguments: x and y. If x and y have the same type, the function returns true. Otherwise, the function returns false.

19. **1 point.** What important piece is missing in the following function definition?

```js
function fahrenheitToCelcius( tempF )
   return (tempF - 32) / 1.8
```

20. **1 point.** What property of a string will return its length?

21. **3 points.** What will this code log?

```js

var x = “Jane”
console.log(x.toUpperCase())
console.log(x.toLowerCase())
console.log(x[ x.length - 1 ])
console.log(x.split(''))
```

22. **5 points.** Write a function oddCaps that takes one argument: str. If str is not of type string, return undefined, otherwise return a new string with the same letters as str, but with every odd letter capitalized.

23. **2 points.** Use the .slice() method to return the 2nd, 3rd, and 4th elements of the array.

24. **2 points.** What will this code log?

```js
var x = [‘rainbow dash’, ‘fluttershy’, ‘rarity’, ‘applejack’];
console.log(x.join(‘’));
console.log(x.join(‘, ‘));
```

25. **4 points.** Write a function firstEven that takes as argument an array: arr. The function returns the first even number in the array. If there are no even numbers in the array, the function returns undefined.