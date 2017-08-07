# Functions 101

## Terms

## Lesson

Functions are one of the most powerful things in JavaScript. Today we will begin to learn about their different uses.

Code Reuse <br>
In past lessons we've written code to print the numbers from 1 to 10. More generally we can use two variables to print the values between any two numbers: 

```js
var start = 2
var end = 12
for (var num = start; num <= end; num += 1){ 
  console.log(num)
}
```

What if we want to print the numbers from 2 - 12, and later print the numbers from 4 - 14, in the same program? We would have to create two loops, which would look the same except for the values of `start` and `end`. Alternatively, we could create a *function*.

A function is a reusable block of code. In mathematics, a function is a relationship where each input has a single output. This definition can be transferred to computer science. 

To create a function, we can create a new variable, using the `function` keyword as the value, followed by parentheses `()`, followed by the code block `{}`.
This is called *defining* a function.

```js
var hello = function (){
  console.log('hello')
}
```

It is important to note that the function above takes **no inputs**.

Once we created a function, we can run it at any time by writing its name, followed by parentheses. This is called calling or invoking the function.

```js
> hello()
hello
```

We can put any code inside a function. We could put the printing loop from above. 

A function is like a mini-program inside our main program. Whenever the code inside it is done running, we return to the line from which we called the function.

We can also define a function to take in vales from the outside world. 