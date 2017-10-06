# Constructor Functions

## Links

* [A Dript Of Javascript - Constructors in JavaScript](http://adripofjavascript.com/blog/drips/constructors-in-javascript.html)
* [CSS-Tricks - Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/)
* [Eloquent Javascript - The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)
* Object Oriented Javascript, 2nd Edition - Stoyan Stefanov, Chapter 4
* Head First Javascript - Chapter 12

## Keywords

* Constructor Functions
* Date Objects
* Error Objects

## Lesson

### Object Methods

A property of an object can point to a function, because functions are just data.
Properties that point to functions are also called methods. In the following example,
talk is a method:

```js
var dog = {
    name: 'Pluto',
    talk: function () {
        console.log('Woof!');
    }
}

dog.talk() // logs 'Woof!'
```

### The `this` keyword

When inside a method, there is a way to access the object the method belongs to: by using the special value `this`.

```js
var dog = {
    name: 'Pluto',
    talk: function () {
        console.log('Woof!');
    },
    getName: function() {
        return this.name;
    }
}

console.log(dog.getName()) // logs 'Pluto'
```

It is possible to use the `this` keyword to have an object change some of its other property values.

```js
var car = {
    make: "Mercedes",
    year: 1980,
    color: "white",
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function {
        if (!this.staretd){
            console.log('start the car first!')
        } else {
            console.log('The ' + this.color + ' ' + this.make + ' is driving! ')
            // ...
        }
    }
};

car.drive() // 'start the car first!'
car.start()
car.drive() // 'the white Mercedes is driving!'
```

### Creating Constructor Functions

Functions have a second role as Constructor functions. These allow us to create multiple objects that share the same properties and methods. For example, we may want to create multiple *dog* objects, where each dog has a name, a breed and a weight. Using constructor functions, we can pass as arguments the values for these three properties.

```js
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
```

A constructor function looks like a regular function, but note the following:

1.Capital first letter (by convension)
2.Parameter names match the properties we want to supply to each individual object.
3.Each arguments is assigned to a property using the `this` keyword.
4.The function does not return anything.

### Using Constructor Functions

We can create any number of objects using the same constructor function. We do this with the `new` keyword, followed by the function name and the arguments.

```js
new Dog("Charlie", "Mixed", 38)
```

The above will return a new Dog object, so we can assign it to a variable.

```js
var charlie = new Dog("Charlie", "Mixed", 38)
console.log(charlie)
// Dog { name: 'Charlie', breed 'Mixed', weight 38}
```

Following, the above pattern, we can create any number of Dog objects.

```js
var charlie = new Dog("Charlie", "Mixed", 38);
var sergeant = new Dog("Sergeant", "Newfoundland", 140);
var alice = new Dog("Alice", "Golden Retriever", 60);
```

As is the case with other variables, we can put the create objects into an array. Since we create all three objects using the same constructor, we know that all of them will have the `name`, `weight`, and `breed` properties.

```js
var dogs = [charlie, sergeant, alice];
for(var i = 0; i < dogs.length; i++) {
    console.log(dogs[i].name + " is a " + dogs[i].weight + " lb " + " " + dogs[i].breed);
}

// Charlie is a 38 lb Mixed
// Sergeant is a 140 lb  Newfoundland
// Alice is a 60 lb  Golden Retriever
```

### Omitting the `new` keyword

When the `new` keyword is omitted, you may or may not see an error -  one way to ensure an error in this case is to include the keywords: `"use strict";` at the top of your javascript file. A constructor without `new` will be called like a regular function that does not return anything.

### The instanceof operator

If we try to use the `typeof` operator with any of the above created objects, we will always get back the string `"object"`. As far as types are concerned, javascript dconsiders all objects to be the same. We *can*, however, check if an object was created using a specific constructor function. This is done using the `instanceof` operator:

```js
console.log(charlie instanceof Dog) // => true
```

An object created using a constructor may be considered an instance of its constructor. The constructor may be viewed as a blueprint for creating objects.

### Prototype

