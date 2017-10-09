# Map, Filter, Reduce

## Links

* [Functional Programming in JavaScript](http://reactivex.io/learnrx/)
* [Eloquent Javascript - Higher Order Functions](http://eloquentjavascript.net/05_higher_order.html)

## Lesson

### Working with Arrays

The Array is Javascript's only collection type. Arrays are everywhere. Arrays in javascript already have built-in `map`, `filter`, and `reduce` methods. In this lesson we are going to reimplement these functions.

In this lesson we will be transforming array into new arrays. We will first do so using loops and statements. Then we will implement one of the functions, and then use it to solve the same problem without loops. We will also see how to combine `filter`, `map` and `reduce` to solve more complex problems.

### Logging elements using a loop

Given an array of names, we can easily print all of its elements using a loop:

```js
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
```

We can also log the elements using the built-in `forEach` array method.  `forEach` takes a function as an argument, and call it for each element in the array.

```js
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

names.forEach(function(name){
    console.log(name)
})
```

The `forEach` method lets us specify what we want to happen to each item in the array, but hides how the array is traversed.

### Array transformation

To tranform one array into another, we apply a function to each item in the array and collect the results into a new array.

Given an array of film objects below, we can tranform it into an array of {id,title} pairs using `forEach`:

```js
var films = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
],

idAndTitlePairs = [];

films.forEach(function(film) {
    idAndTitlePairs.push({ id: film.id, title: film.title });
});
```

Most array tranformations share two operations in common:

1. Traverse the source array.
2. Add each item's transformed value to a new array.

We will see how to abstract away these operations.

### Adding methods to the Array type

When we add a property or method to `Array.prototype`, we can then call this method with any array.

```js
Array.prototype.sayHello = function(){
    return "hello";
}

var arr = [1, 2, 3]
arr.sayHello()
// => "hello"
```

The above is **not** be something we would usually want to do. Extending the basic functionalities of javascript types can lead to unexpected bugs and errors in our code. Even more so when we are working with other programmers, who may not know what functionalities we have added. In this lesson, we be re-implementing methods that already exist in javascript arrays.

### Implementing the `map` function

To make tranformations easier, let's implement a `map` method. `Map` takes a tranformation function as argument, applies it to each element in the source array, and returns the tranfromed array.

```js
Array.prototype.map = function(func) {
    var results = [];
    for (var i = 0; i < this.length; i++){
        results.push(func(this[i]));
    }

    return results;
};
```

### Using `map()`

We can now repeat the exercise of collecting {id, title} pairs for each film in the `films` array, but this time we will use the `map` function.

```js
var idAndTitlePairs = films.map(function(film) {
    return { id: film.id, title: film.title };
};
```

### Filtering Arrays

Like transformation, Filtering an array is a very common operation. To filter an array we apply a test to each item in the array, and collect the items that pass the test into a new array.

#### Filtering using `forEach`

Let's start by using `forEach()` to loop through the films in the `films` array and, if a `film` has a rating of `5.0`, add it to the `bestFilms` array.

```js
var bestFilms = [];

films.forEach(function(film) {
    if (film.rating === 5.0) {
        bestFilms.push(film);
    }
})
```

Like `map`, every `filter` operation shares some things in common:

1. Traverse the array.
2. Add elements that pass the test to a new array.

#### Implementing array `filter` method

To make filtering easier, let's implement a `filter()` method in the Array prototype. The filter() method accepts a test function. The test function takes as argument an element in the array, and returns a boolean indicating whether the item should be retained in the new array.

```js
Array.prototype.filter = function(testFunc) {
    var results = [];
    for (var i = 0; i < this.length; i++){
        if (testFunc(this[i])) {
            results.push(this[i]);
        }
    })

    return results;
}
```

### Chaining Method Calls

Since both `filter` and `map` return an array, we can chain these two methods. We can do this to collect the ids of videos that have a rating of 5.0.

```js
var bestFilmIds = films
    .filter(function(film) {
        return film.rating === 5.0;
    })
    .map(function(film) {
        return film.id;
    });
```

### Reducing Arrays

Let's say we need to find the largest integer in an array. We can't use `filter`, because it only examines one element item at a time. To find the largest integer we need to compare elements in the array to each other.

One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.

#### Using `forEach` to find the largest box art

In this example we use `forEach` to find the largest box art. Each time we compare the current box art with the maximum we've found so far. If the boxart is smaller than the maximum size, we discard it. If it's larger, we save it and set its size as our new maximum. Finally we're left with the largest boxart.

```js
var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

var currentSize;
var maxSize = -1;
var largestBoxart;

boxarts.forEach(function(boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
        largestBoxart = boxart;
        maxSize = currentSize;
    }
});

return largestBoxart;
```

### Implementing `reduce`

Let's add a `reduce()` method to the Array.

```js
Array.prototype.reduce = function(func, initialValue) {
    var counter;
    var accumulator;

    // If the user didn't pass an initial value, use the first element.
    if (initialValue === undefined) {
        accumulator = this[0];
    } else {
        accumulator = initialValue;
    }

    // Iterate through the array, feeding the current value and the result of
    // the previous computation back into the function
    for (var i = 0; i < this.length; i++) {
        accumulator = func(accumulator, this[i])
    }

    return accumulator;
}
```

Let's use the reduce function to find the largest value in an array of numbers.

```js
var ratings = [2,3,1,4,5];

var largest = ratings.reduce(function(acc, curr) {
    if (acc > curr) {
        return acc;
    } else {
        return curr;
    }
});
```

Now let's try using `reduce()` to find the largest box art in the array.

```js
var boxarts = [
        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
        { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ];

var largestBoxart = boxarts.reduce(function(acc,curr) {
        if (acc.width * acc.height > curr.width * curr.height) {
            return acc;
        } else {
            return curr;
        })
```

It is also possible to use reduce to combine the elements of an array. For example, we may want to find the sum of all the numbers:

```js
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(acc, num){
    return acc + num;
})
```

At `acc` will have to the value of the first element in the array, and `curr` will have the value of the second element in the array. Following this, `acc` will have the value returned by the previous invocation of the callback, and `curr` will have the value of the next element in the array.

```js
// acc = 2    curr = 3    return 2 + 3 -> 5
// acc = 5    curr = 1    return 5 + 1 -> 6
// acc = 6    curr = 4    return 6 + 4 -> 10
// acc = 10   curr = 5    return 10 + 5 -> 15
```

### Map -> Reduce

We can also combine map and reduce. In this case map will be first (returning an array), and reduce will be second (returning a single value). For example, we may want to sum the values of the all numbers squared.

```js
var sumOfSquares = numbers
    .map(function(number) {
        return number * number;
    })
    .reduce(function(total, number) {
        return total + number;
    }, 0);
```