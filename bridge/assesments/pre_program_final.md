1. You are given a function `isNumber`. This function takes one argument and returns `true` if it is a number and `false` otherwise.  Write a function `product` that returns the product of two arguments. Return `-1` if either of the arguments is not a number.

Topics: mathematical operations, types, type checking, boolean logic

```javascript
product(1, 2) // returns 2
product('dog', 'hello') // returns -1
product('cat', 3) // returns -1
```

2. Write a function called `contains` that checks if an element exists within an array. The function should take two arguments: an array, and an element to search for within that array. The function should return `true` if the element is within the array, and `false` otherwise. You must construct a loop to iterate over the array and check each element.
Topics: loops, conditionals, booleans

Examples:
```javascript
contains([1,2,3,4], 2);     // returns true
contains([1,2,3,4], 1);     // returns true
contains([1,2,3,4], 5);     // returns false
contains([1,2,3,4], 'dog'); // returns false
```

3. Write a function that takes a string as an argument. If the string is has even number of letters, the function should return the string with the first letter in upper-case. If the string has an odd number of letters, the function should return the string with the first letter in lower-case. **hint**: To convert the first letter, use the built-in string methods `toUpperCase` and `toLowerCase`. To get the rest of the string use the built-in string method `slice`.

Topics: modulo, functions, strings

Examples:
```js
UpperOrLowerCase('even'); // returns 'Even'
UpperOrLowerCase('Odd'); //returns 'odd'
```

4. Topics: command line
Word Bank: `ls`, `cd ..`, `cd`, `pwd`, `touch`, `mkdir` <br>
__________ A. creates new file <br>
__________ B. navigates to a certain directory <br>
__________ C. prints the entire file path <br>
__________ D. creates new folder <br>
__________ E. prints the contents of the current folder <br>
__________ F. navigates upwards <br>

5. You are writing a program that calculates the areas of two geometric shapes: triangles and squares. A triangle object has a `type` property that is set to `"triangle"`, and also `height` and `base` properties (both of which are numbers). A square object has a `type` property that is set to `"square"` and also a `base` property (number). You are given the functions `triangleArea` and `squareArea`. Create a function `shapeArea` that takes a shape object as an argument and returns the object's area. If the `type` is neither `"square"` nor `"triangle"`, return `-1`.
Topics: functions, objects

```js
function triangleArea(base, height){
  return (base * height) / 2
}

function squareArea(base){
  return base * base
}

function calcArea(shape){

}
```


6. Create a constructor function `Employee` that takes in a name and creates an Employee object with the properties: name, salary, and company. The default values for company and salary are null and 0.
Topics: object constructors, boolean logic
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

7. Write a function `hire` for instances of `Company` that receives an `Employee` object and a salary. `hire` will place the employee in the company's employees array, increase the size by 1, set the employee's company to the company, and set the employee's salary to the salary argument.
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
