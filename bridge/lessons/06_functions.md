# Functions

## Terms

## Lesson

Functions are one of the most powerful things in javascript. Today we will begin to learn about their different uses.

Code reuse.
In past lessons we've written code to print the numbers from 1 to 10. More generally we can use two variables to print the values between any two numbers: 

```js
var start = 2
var end = 12
for (var num = start; num <= end; num += 1){ 
  console.log(num)
}
```

What we want to print the numbers from 2 - 12, and later print the numbers from 4 - 14, in the same program? We would have to create two loops. These would look the same except for the values of `start` and `end`. Alternatively, we could create a function.

A function is a reusable block of code. To create a function, we can create a new variable, and as the value use the `function` keyword, followed by parentheses, followed by the code block.
This is called defining a function.

```js
var hello = function (){
  console.log('hello')
}

```
Once we created a function, we can run it at any time by writing its name, followed by parentheses. This is called calling or invoking the function.

```
hello()
```

We can put any code inside a function. We could put the printing loop from above. 

A function is like a mini-program inside our main program. Whenever the code inside it is done running, we return 


We can also define a function to take in vales from the outside world. 