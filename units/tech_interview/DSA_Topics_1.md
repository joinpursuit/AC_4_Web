# DSA Topics for Technical Interviewing: Part 1

Over the next couple of weeks, we'll be doing a quick-and-dirty overview of DSA topics, with the aim of taking your technical interviews to the next level.

## Topic 1: What is DSA / Why DSA?

Let's talk about **Data Structures** versus **Algorithms**. Data structures are the ways we've found to store data - hopefully efficiently. Algorithms are how we access and process data in those structures.

Put another way: When you're presented with whiteboarding problems, you might think there are a million different ways of accomplishing them. And that's true! Sort of. You see, whatever you do to produce a valid solution, it's likely that you are a) using a known type of data structure to store information, and b) employing some kind of algorithm that we've seen before to process it.

This isn't to discourage you - if anything, it's nice to know that there's a limit to all that dizzying possibility a blank whiteboard represents.

Data structures and algorithms are abstract, so when we talk about them, know that we aren't talking about any specific implementation. Implementation is a separate topic that's very important, but just know that (for example) JavaScript has no built-in `Stack` object. We build our own.

So **why do we use one data structure for something and not another?** There's actually a pretty simple answer to this. Some data structures are really good for accessing information. Some are really good for adding/removing information. Still others are good for searching for information if we don't quite know where we left it. **Depending on what we're doing most often, that's the data structure we want to use.** Therefore, it's good to know how to compare these relative efficiencies.

Enter Big O.

## Topic 2: Big O and You.

Walking around and looking at your whiteboarding, we haven't heard enough about **Big O**. Big O is one of those things you can pull out to impress your interviewer regardless of the type of problem. For example:

```js
function add(x, y) {
  return x + y;
}
```

"Well," you could be saying, "I'm pretty happy with this function because it has a time and a space complexity of O(1)." Even though this is an extremely basic problem, you'd still be able to impress with that! To review:

**Time complexity** is how quickly your function can return a value for an input of size `n`. This can be thought of in individual tics, if you like - for example, in a forEach loop through an array given as an argument, you make at least `n` individual computations. This is because the array can be **any size**, so we assume the worst and call it `n`.

"But wait," you might be asking, "what if I did two things on each loop in my forEach?" For example:

```js
let newArr = [];

arr.forEach((el) => {
  newEl = el * 2; // first thing
  newArr.push(newEl); // second thing
})
```

"Wouldn't this be O(2n)," you might ask. The answer is: **no**. I mean, technically yes, but in Big O-land: no. This is because we only pay attention to the **largest values** as n approaches infinity. As infinity is equivalent to infinity * 2, any O(2n) algorithm should be expressed as O(n).

This means if our algorithm has a greater complexity than O(1), we can always safely remove finite values from our calculations. For example, O(n + 1000000000000000) is equivalent to O(n). It also means that larger n values subsume smaller n values as n approaches infinity. This means O(n + n²) is equivalent to O(n²).

**Space complexity** is how much space in memory your algorithm takes up to find a return value. For example, if your function accepts an array and shovels all of that array's values into a new array, you now have two copies of that array in memory. Because computers and mobile devices have tons of RAM now, we worry less about space complexity. However, it's still good to be aware of.

Find more examples for all of this stuff in this [handy resource](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/) here.

Also, if you don't know about the [Big O Cheat Sheet](http://bigocheatsheet.com/), you're welcome.

## Topic 2: Arrays vs. Stacks and Queues

The most important aspect of an array are its indices. Arrays store information in a fixed space in memory, and keeps track of its indices in the same way.

For example, if an index of an array reliably took up 8 bytes of space, and index 0 was at point 16 in memory, then to find index 8, all our computer would have to do behind the scenes would be to add (8 * 8) to the 0th index's spot. In other words, it'd do:

16 + (8 * 8) = **80**

Because arithmetic is trivially easy for computers, this is O(1) access time.

**However**, this indexing means that inserting and removing elements is less efficient. Unless we are inserting/removing at exactly the end of our array, we have to move everything over in memory when we change it. For example, if we removed the first element from our above example, the second element would have to shift 8 bits over to occupy space 16, then the third would have to shift, and so on.

Stacks and queues are birds of a feather, and both aim to solve this problem of adding and removing elements. They do so **at the expense of efficient access time**. Because you can't index into a stack or queue, they are not good for quick access of information that isn't at the front of the stack or queue. However, when implemented correctly, they're great for adding and removing items.

**Stacks** are LIFO, or "Last In, First Out." This means that the last thing you put into them is the first thing you remove. Think of them like a stack of plates. It's hard to remove a plate from the bottom, so even if it's a little wet from the wash, we remove a plate from the top first.

Stacks can have as many methods as their implementation allows, but their most basic methods are `push` and `pop`. They can also have `size`, `empty?`, `head`, and others, but `push` and `pop`, as our most efficient operations, are our bread and butter.

**Queues** are FIFO, or "First In, First Out." Queues are (if you like) fairer than stacks. When we add an item to a queue (*enqueue*), we move it up the line every time we remove an item (*dequeue*). Eventually, our item will be next in line to dequeue. That's how you should be thinking of queues - like a literal line of people.

Queues can also have plenty of methods, including all of the extra ones we talked about with stacks. Their version of `push` and `pop` are - you guessed it - `enqueue` and `dequeue`.

Now, here's where things get a little bit tricky. We're going to talk *implementation*.

Remember how arrays work in memory? It's actually possible to implement an array-based stack that's pretty efficient. This is because stacks have only one 'end' - that is, we push and pop from the same side. Because arrays don't have to shift each element if they add/remove from the last point in memory, they can efficiently add and remove elements from the end of the array.

Queues are trickier. They have two 'ends' - we add items to one end and remove them from the other. Therefore, without some significant modification, arrays aren't the best way to implement a queue. Check out this [resource](https://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348) for a pretty slick implementation using JavaScript objects.

## Topic 3: Hashing, Objects, and Efficient Solutions to Common Problems

You've probably heard the term **Hash Table** a fair amount. In JavaScript, Objects are the closest built-in implementation we have to a hash table. But what are hash tables, what is hashing, and how does it work?

You might have heard a thing or two about **hashing functions**. Hashing functions are ways we convert something (a number, string, point in memory, etc.) to something else. The thing that we convert it to is arbitrary as long as it is *one-way* (that is, we can't convert the information back to its original form) and as unique as possible (we don't want any *collisions*).

Wait. What? Why do we need to convert something potentially meaningful into something arbitrary? Well, it turns out hashing functions do all sorts of things really well. You are probably aware of their role in encryption and security, but we won't talk about that right now. What we'll talk about is their role in **data storage** by way of the abstract data type **hash tables**.

Take a look at the diagram below:

![hashin'](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)

When we define keys and values in an object, we take for granted that JavaScript is going to relate them and store them, no problem. However, this isn't the whole story. As we learned with arrays, JavaScript has to store this stuff somewhere in memory. Unlike arrays, we don't have a clear, easy way to do that. We can't just index key-value pairs, because objects are not indexed.

How, then, do we store these pairs? Well, we place keys in memory and then put their position in memory into a hashing function to get an arbitrary (and, again, hopefully unique) place in memory to store the value. That way, when we input our key again, we just run the hashing function over again to fetch that key's value.

**Why is this potentially a good thing?** Well, remember when we said that arrays are really good at fetching indices? Well, this means that they're not so good at looking stuff up without the index. They have to check each index individually to find the correct value.

Objects work in a similar way. If we don't know the key, finding a given value is pretty hard. However, unlike indices, we can make our keys **as relevant as possible** to their corresponding values. For example, if we want to keep track of a number of dogs in a shelter, we can store a key called `dogNum` with an integer value.

This makes objects particularly suitable for finding better Big O solutions. For example, look at these two solutions for finding the most common character in a string (assuming no ties):

**Solution A**
```js
const mostCommonChar = (str) => {
  let strArr = str.split("");
  let max = 0;
  let count = 0;
  let winner;

  strArr.forEach((el, i) => {
    count += 1;
    strArr.forEach((el2, j) => {
      if (i !== j && el === el2) {
        count += 1;
      }
    })

    if (count > max) {
      max = count;
      winner = el;
    }

    count = 0;
  })

  return winner;
}
```

**Solution B**
```js
const mostCommonChar = (str) => {
  let counter = {};
  let strArr = str.split("");

  strArr.forEach((el) => {
    if (!counter[el]) {
      counter[el] = 1;
    } else {
      counter[el] += 1;
    }
  })

  let commonChar;
  let maxNum = 0;

  Object.keys(counter).forEach((key) => {
    if (counter[key] > maxNum) {
      maxNum = counter[key];
      commonChar = key;
    }
  })

  return commonChar;
}
```

While both of these solutions are pretty verbose, one of them is **way more efficient** than the other. By using an object to keep track of the count of characters, Solution B avoided using two forEach loops through our strArr. Therefore, the efficiency of Solution B is O(n), whereas the efficiency of Solution A is O(n²).
