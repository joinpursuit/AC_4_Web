# Testing with Jest
## or, Jesting with Test, lol
### (we have fun around here)

## Resources
* [Introduction to Test Driven Development](http://agiledata.org/essays/tdd.html)
* [Types of Testing](https://www.atlassian.com/continuous-delivery/different-types-of-software-testing)
* [Jest](https://facebook.github.io/jest/en/)
  - [Getting Started](https://facebook.github.io/jest/docs/en/getting-started.html)
  - [Testing React Apps](https://facebook.github.io/jest/docs/en/tutorial-react.html)

*Testing*. We've heard that word so frequently. It's like *agile*. Or *algorithm*. *Testing*. But what does it mean?

Well, it's straightforward enough. Testing your code is, simply, developing processes to make sure that the code you write does what you want it to. There are a few different ways we can do this. We'll go over three different methods today:

### Method 1: Unit Testing

Unit testing is very low-level. When we write unit tests, we test individual functions to see if they return what we want them to for different inputs. For example, I have a function `add()` that accepts two numbers and adds them together. When I input the numbers 1 and 2, I should expect `add(1, 2)` to produce a return value of 3.

### Method 2: Integration Testing

Integration testing is the next step. When we integration test, we test groups of functions - sometimes even classes - all together to make sure they're working properly. This looks very similar to unit testing, just with a broader scope.

### Method 3: End-to-End Testing

You should be familiar with this kind of testing. This is where we fire our app up and see if it works, pretending to be a user and clicking around. This is both the most and least meaningful kind of testing. It's super important to test if your app compiles, etc., but it depends on your ability to be particular and check for edge cases.

## Jest

There are a lot of options for testing JavaScript and React. Mocha and Chai come to mind. We're going to be using Jest, because it's made by Facebook specifically for testing React stuff, and because it's pretty easy to use and mess with. Take the basic example Jest offers, for our function `add()`, or in their case, `sum()`:

```js
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Pretty much human readable, right?

There are a number of fancy quality-of-life things that Jest lets us do to test code. For example, `toBe()` works similarly to the JavaScript equality operator, in that it won't work for equivalent arrays, because even equivalent arrays are stored in different places in memory (remember: [1, 2, 3] !== [1, 2, 3]). Ditto for objects.

However, because Jest is nice, they don't make you loop through each element of the array or object. They give you the function `toEqual()`, which recursively runs through each element for you to determine if two array/object instances contain the same stuff. For example:

```js
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

You can even chain test functions to test for inequality - for example, throw a `not` in front of a `toBe` and everything changes:

```js
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

There are tons of other methods that Jest provides, including less-than and greater-than validations, fake timers, tests for asynchronous functions that use Promises to ensure that it gets the right outputs, and much more. Poke around in the [docs](https://facebook.github.io/jest/docs/en/getting-started.html) to try it out!

## Let's Try It Out

You might be wondering: what do these tests actually show us when we run them? Fork the repl.it link [here](https://repl.it/@amasad/try-jest) and see what you get. Mess around with it - try different, more complex functions and see what happens! Don't forget to check out the Jest docs for more functions.

Next, take one of your assignments from the last two weeks. Using Jest, write tests for each function. Make sure to take into account edge cases for each one!

We will get into asynchronicity and React later this week.
