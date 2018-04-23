# DSA Topics for Technical Interviewing: Part 3

## Topic 7: Recursion


![cautionary tale](https://i.redd.it/0wap3cp4khm01.jpg)


Now it's time to talk about recursion.

Recursion is something that you sort of need to squeeze into your head. It doesn't always come naturally. In fact, you might feel like you're sort of hitting a wall at first. Soldier on - the only cure to that is exposure and time. Take a walk. Look at some visualizations of recursion. Try simple recursive problems until the basic mechanics stick. `Console.log`. Finally, talk about it with your peers. Work on problems and whiteboard things out. It'll get easier.

So. **Why recursion**?

Well, some things that we do as programmers are nice for the user. For example, improving our code's Big O efficiency leads to a better user experience as our projects scale. Other things are nice for us. For programmers. Recursion actually can make programs **less stable**, due to the risk of a [stack overflow](https://www.reddit.com/r/explainlikeimfive/comments/1rih4i/eli5_stack_overflow_and_buffer_overflow/). It's also, usually, less efficient. Iteration is frequently preferable. But don't let that discourage you. Why?

Well, because it's cool. Not only that, it's super clean. Let me demonstrate. One classic recursive algorithm is one that calculates and returns numbers in the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number). The integer returned should be the `n`th index of the Fibonacci sequence, where `n` is the function's argument. Here's an iterative solution to that problem:

```js
function fibonacci(num){
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
```

Take a few minutes to work this out. You can even write out your calculations for an example.

Not too easy, right? While this totally works, it's not a great solution because it's not quite clear what each line is doing. There's a lot to keep track of and it's all kind of awkward.

Here is that same algorithm implemented recursively:

```js
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

As you might have gathered from that Wikipedia article posted earlier, to get any given number in the Fibonacci sequence, you simply add the two preceding numbers. The really cool thing about this function is that **this rule is directly represented** by the recursive function's return value. Makes sense, right? Easy to read, right? This is the way you work with your team and your future self - by making readable, beautiful code.

Wait. What? Our Fibonacci function is calling itself as its return value. Won't this function go on forever? ... Wait, what's that if statement up at the top?

Enter the **base case**, or the exit condition. A base case is the rule to ensure that a recursive function doesn't go on to infinity. It's also the way for a recursive function to actually return a value. It's our way of saying "OK, so I know one case to be true, and I'm going to stop this madness when I get there."

A recursive function has to have two things to work properly: It must have a base case, and it must have a recursive call that works towards that base case in a way that will produce the correct value.

In the case of the Fibonacci sequence, for example, we know that the first two values are both 1. Therefore, we set up our base case to return 1, and ensure that the last two arguments that our fibonacci function returns (i.e. fibonacci(1) + fibonacci(0)) are both 1. This can be a little tricky to visualize, so here's a visual aid:


![fib stuff!](https://algorithmstuff.files.wordpress.com/2013/06/fib_5.png)


In this example, we are calculating the fifth index of the Fibonacci sequence, which evaluates to 8. In order for our function to evaluate to 8, it calls itself until its calls reach the **base case** of either 0 or 1, both of which return 1. When everything returns an integer, we evaluate up the chain by adding everything together. Notice that there are **8 separate instances** of `Fib(0)` or `Fib(1)`. This shows that we've done our job.

And we've done it in basically two lines! And it's great! Sort of. We've actually increased our time complexity significantly, as we are calling our function twice again **each time we call it.** Each time, we have to separately evaluate the value of, for example, `Fib(2)`. All told, this actually works out to exponential (O(2^n)) time complexity, one of the worst time complexities we can have.

To put that in perspective, to get to the 50th number in the sequence, this takes the iterative version 0.000001ms and the recursive version 176.742ms, decreasing our efficiency by a factor of **176,742,000**. Exponents grow fast.

The solution to this is to store values that we've already evaluated, pass them on in our recursive call, and add a new base case that returns the proper value if we've already evaluated it. This is a process called **memoization**, and while it still takes up significantly more space than our iterative solution, it takes our time complexity back down to constant (O(n)) time.

Don't worry too much about memoization. It's really unlikely that you'll have to use it when you're whiteboarding. But it's cool, and if you mention it when you're approaching a recursive problem, it's big brownie points. If you'd like, take a look at the memoized solution below, or take a look at the [article](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e) I got it from:

```js
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
```

And, to remind yourselves to look at coding holistically, let's observe the *totally bonkers* top comment for that article, written by someone who knows math, which finds it in O(1) time and space complexity:

```js
function fibonacci(n) {
 return Math.round(
 (Math.pow((1 + Math.sqrt(5)) / 2, n) —
 Math.pow(-2 / (1 + Math.sqrt(5)), n)) /
 Math.sqrt(5)
 );
}
```

I can't even begin to tell you how that one works...

## Recursion Exercises

The best way that you can learn recursion is to struggle through a bunch of classic recursion problems. [This resource](https://github.com/JS-Challenges/recursion-prompts) has a bunch - and if you follow the directions outlined in the README, they even provide test files for you to check your answers. Pretty cool, huh?
