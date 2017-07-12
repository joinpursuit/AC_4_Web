1. Write a function `product` that takes the product of up to four arguments.
Topics: arguments, mathematical operations, loops, types, default parameters
```js
product(1, 2) // returns 2
product(3, 5, 2) // returns 30
product(0, 2, 7, 12) // returns 0
product(1, 2, 3, 4, 5) // returns 24
```

2. Write a function called `contains` that checks if an element exists within an array. The function should take in two arguments: an array, and an element to search for within that array. The function should return `true` if the element is within the array, and should return `false`   if the element is not in the array. You cannot use the built-in array method `.includes()`. You must construct your own loop and iterate and check each element.
Topics: loops, conditionals, booleans

Examples:
```javascript
contains([1,2,3,4], 2);     //returns true
contains([1,2,3,4], 1);     //returns true
contains([1,2,3,4], 5);     //returns false
contains([1,2,3,4], 'dog'); //returns false
```

3. Write a function that takes a string as input. If the string is an even number of letters the function should capitalize and return the entire string. If the string is an odd number of letters the function should change all the letters to lower case and return the string.
Topics: modulo function, loops

Examples:
```js
capitalizeOrLowerCase('EvEn'); // returns 'EVEN'
capitalizeOrLowerCase('oDd'); //returns 'odd'
```

5. Topics: command line
Word Bank: `ls`, `cd ..`, `cd`, `pwd`, `touch`, `mkdir` <br>
__________ A. creates new file <br>
__________ B. navigates to a certain directory <br>
__________ C. prints the entire file path <br>
__________ D. creates new folder <br>
__________ E. prints the contents of the current folder <br>
__________ F. navigates upwards <br>

6. Callbacks question
setTimeOut function
## Q4 Callbacks
Complete the code below.
```js
function exclaim(str) {
  return str += '!'
}

function realExcited(sentence, callback) {
  // ADD YOUR CODE HERE
}

realExcited("I am going to DisneyWorld", exclaim)
// returns "I! am! going! to! DisneyWorld!"
```


7. Create a constructor function `Employee` that takes in a name and makes a Employee object that has the properties: name, salary, and company. The default values for company and salary are null and 0.
Topics: object constructors
```js
var nate = new Employee("Nate Maddrey", 50000, 'C4Q')
nate.name // returns "Nate Maddrey"
nate.salary // returns 50000
nate.company // return "C4Q"
var charles = new Employee("Charles Kuang")
charles.name // returns "Charles Kuang"
charles.salary // returns 0
charles.company // return null
```

8. Write a function `hire` for instances of `Company` that receives an `Employee` object and a salary. `hire` will place the employee in the company's employees array, increase the size by 1, set the employee's company to the company, and set the employee's salary to the salary argument.
Topics: functions, prototypes
```js
var c4q = new Company('Coalition for Queens')
var charles = new Employee('Charles Kuang')
var nate = new Employee('Nate Maddrey')
c4q.hire(charles, 500000)
c4q.hire(nate, 1000000)
c4q.employees //return [charles, nate]
c4q.size //return 2
charles.salary //return 500000
nate.salary //return 1000000
```
