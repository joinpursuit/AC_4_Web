# Functions II


## Lesson

In the past lessons we've written code to print the numbers from 1 to 10. More generally we can use two variables to print the values between any two numbers:

```js
var start = 2
var end = 12
for (var num = start; num <= end; num += 1){
  console.log(num)
}
```

What we want to print the numbers from 2 - 12, and later print the numbers from 4 - 14, in the same program? We would have to create two loops. These would look the same except for the values of `start` and `end`. Alternatively, we could create a function.
