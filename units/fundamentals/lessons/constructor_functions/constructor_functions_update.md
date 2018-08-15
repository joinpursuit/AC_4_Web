# Constructor Functions

## Goals
* Understand what constructor functions are and why they are useful
* Create your own constructor functions

## Keywords

* Constructor Functions
* Date Objects
* Error Objects

## Resources

* [A Dript Of Javascript - Constructors in JavaScript](http://adripofjavascript.com/blog/drips/constructors-in-javascript.html)
* [CSS-Tricks - Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/)
* [Eloquent Javascript - The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)
* Object Oriented Javascript, 2nd Edition - Stoyan Stefanov, Chapter 4
* Head First Javascript - Chapter 12

## Lesson

### Object Methods

As we've seen, _objects_ are a pretty neat data structure. They can hold information in very organized ways and are useful in solving problems. One unique property of an object is that it can point to a function, because functions are just data. Properties that point to functions are also called **methods** and they can be invoked just like we invoke any other function. The only difference is we need to use dot notation to connect the method with its parent object. In the following example, `talk` is a method. We call this function by typing `dog.talk()` because `dog` is the object that _contains_ the `talk` function. If we try to call `talk` without `dog` we get an error because the only `talk` function that exists is the one within `dog`:

```js
let dog = {
    name: 'Pluto',
    talk: function () {
        console.log('Woof!');
    }
}
talk() // error => Uncaught ReferenceError: talk is not defined
dog.talk // logs function => ƒ () { console.log('Woof!'); }
dog.talk() // invokes function => 'Woof!'
```

### The `this` keyword

When **inside** an object method, there is a way to refer to the object the method belongs to: by using the special value `this`.

```js
let dog = {
    firstName: 'Pluto',
    lastName: 'Pup',
    talk: function () {
        console.log('Woof!');
    },
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

dog.getFullName() // => 'Pluto Pup'
```

In the example above, we cannot just say `firstName` and `lastName` in the `getFullName` function because `firstName` and `lastName` **do not** exist on their own. They are _built into_ the `dog` object and since we are referring to them _inside_ the `dog` object, we use `this` to tell JavaScript, "Hey, we're talking about the `dog` method `firstName` and calling it `this` because WE IN **THIS** object!" In later units `this` and object methods will become _very important_ so get used to seeing them!

### Adding functions

We can also _add_ information and functions to an object that already exists through dot notation. This is useful because you can easily add more information to objects that already exist without having to recreate the entire object new.

```js
// adding more info to an object that already exists
dog.breed // => undefined (breed was not defined)
dog.breed = "Cartoon" (now we have defined breed)
dog // => {firstName: "Pluto", lastName: "Pup", talk: ƒ, getFullName: ƒ, breed: "Cartoon"} (dog now has a breed property!)
dog.breed // => "Cartoon"

// adding a function to an object that already exists
dog.getBreed = function(){ return `I am a ${this.breed}!` }
dog // => {firstName: "Pluto", lastName: "Pup", talk: ƒ, getFullName: ƒ, breed: "Cartoon", getBreed: ƒ} (dog now has a getBreed function!)
dog.getBreed() // => "I am a Cartoon!"
```

### Creating Constructor Functions

Functions have a second role as **Constructor Functions**. These allow us to create multiple objects that share the same properties and methods. For example, we may want to create multiple *dog* objects and we know each `dog` will have a name, breed and weight. Rather than having to write out what the name, breed and weight of each dog every time, we can utilize constructor functions so that `Dog` accepts name, breed and weight as arguments, which are then set to `Dog.name`, `Dog.breed` and `Dog.weight`. This means to create a new `Dog`, we just need to pass the three arguments and our function will do the rest of the work! :100:

```js
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
```

Let's break down what that did. `this.name = name;` tells the `Dog` object that `this.name` (this `Dog` object's name) is **equal** to the `name` argument passed. `this.breed = breed;` tells the `Dog` object that `this.breed` (this `Dog` object's breed) is **equal** to the `breed` argument passed. `this.weight = weight;` tells the `Dog` object that `this.weight` (this `Dog` object's weight) is **equal** to the `weight` argument passed. 

While a constructor function looks like a regular function, note the following:

1. Each arguments is assigned to a property of the `this` object.
2. The function does not have a `return` keyword.
3. The function returns the `this` object.

Also, note the following conventions:

1. Constructor functions start with a **capital first letter**.
2. Parameter/argument names match the **keys** (property names) of the object we will create.

### Using Constructor Functions

Now if we wanted to create a _new_ `Dog` object, we would do it as follows:
```js
let mojo = new Dog("Mojo", "Brittany Spaniel", 45)

// now if we call mojo, we get the following:
mojo // => Dog {name: "Mojo", breed: "Brittany Spaniel", weight: 45}
mojo.breed // => "Brittany Spaniel"
```
This makes creating many `Dog` objects much easier! Now we just need to pass three arguments to each new `Dog` instance and our constructor function will asign our values appropriately. We also assign the new `Dog` object to a variable so we can reference it later. If you do not assign the new object to a variable, it will be created but you cannot access it or use it later.


```js
new Dog("Charlie", "Mixed", 38) // => Dog {name: "Charlie", breed: "Mixed", weight: 38}

Dog.breed // => undefined (JS does not know what Dog you're talking about, so it returns undefined)
```

We can create any number of objects using the same constructor function. We do this with the `new` keyword, followed by the function name and the arguments. We need to use the `new` keyword to create new instances of the object that utilizes the constructor function otherwise the constructor function will not be invoked.

The above will return a new Dog object, so we can assign it to a variable.

```js
let charlie = new Dog("Charlie", "Mixed", 38)
console.log(charlie)
// Dog { name: 'Charlie', breed 'Mixed', weight 38}
```

Following, the above pattern, we can create any number of Dog objects.

```js
let charlie = new Dog("Charlie", "Mixed", 38);
let sergeant = new Dog("Sergeant", "Newfoundland", 140);
let alice = new Dog("Alice", "Golden Retriever", 60);
```

As is the case with other variables, we can put the create objects into an array. Since we create all three objects using the same constructor, we know that all of them will have the `name`, `weight`, and `breed` properties.

```js
let dogs = [charlie, sergeant, alice];
for(let i = 0; i < dogs.length; i++) {
    console.log(dogs[i].name + " is a " + dogs[i].weight + " lb " + " " + dogs[i].breed);
}

// Charlie is a 38 lb Mixed
// Sergeant is a 140 lb  Newfoundland
// Alice is a 60 lb  Golden Retriever
```

### Function Properties

Like objects, functions have **properties**. For example, the `name` property returns a string with the name of the function:

```js
function add1(num) {
    return num + 1;
}

console.log(add1.name) // => "add1"
```

Unlike functions, regular objects cannot be invoked - trying to call an object will result in an error:

```js
let obj = { name: "Corey" }
obj() // => TypeError: obj is not a function
```

We've been accessing properties of objects through dot notation (`add1.name`) but we can also use **bracket notation** which works in a similar way to dot notation but with brackets. To access the `name` property in `add1` using bracket notation, we would instead write `name` in quotes inside square brackets: `add1["name"]`. If we tried to access `name` without quotes around it, we will get an error. Bracket notation is not as easy as dot notation but it does have benefits. For example, if the property you want to access has dashes (`-`) in it, dot notation will not work. In those cases, bracket notation would be better: `add1["another-property"]`.

```js
let obj = { name: "Corey" }
obj["name"] // => "Corey"
obj["name"] = "Matt"
obj["name"] // => "Matt"
```

### The `prototype` property

Every function also has a proprety called `prototype`. By default, the value of the `prototype` property is an object.

```js
function add1(num){
    return num + 1;
}
console.log(add1.prototype)
// add1 {}
```

The result of logging `add1.prototype` looks a litte different then if we logged a regular empty object.

```js
let obj = {};
console.log(obj)
// {}
```

Logging `add1.prototype` displays not only the (empty) object, but also the function that the object is linked to. In this case, that function is `add1`.

### The ConstructorPrototype link

Each `prototype` object is initially empty, except for a hidden property called `constructor`. This `constructor` holds the function that the object is linked to. Let's look at a `Rabbit` constructor (similar to our `Dog` example):

```js
function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```

This may be easier to visualize with a diagram:

![constructor <-> prototype](assets/cc.png)

We can verify this:

```js
console.log(Rabbit.prototype.constructor === Rabbit)
// => true
```

### `this` in the constructor

Whenever we call a function with the `new` keyword, the `this` value inside the function is linked to the function's `prototype` property. So, every object created with the `Rabbit` constructor will be linked to `Rabbit.prototype`.

```js
function Rabbit(type) {
  this.type = type;
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

![two rabbits](assets/bk_rabbits.png)

### Adding methods to the prototype

The `Rabbit` constructor and the `Rabbit.prototype` Object prototypes lie behind killerRabbit as a kind of backdrop, where properties that are not found in the object itself can be looked up.

So to add a `speak` method to rabbits created with the Rabbit constructor, we can simply do this:

```js
Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};
blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'
```

The diagram would now look like this:

![prototype method](assets/rabbit_prototype_method.png)

### Getting an object's prototype

While The `__proto` property can be used to access an objects prototype, it is a non-standard feature. The recommended way of getting and object's prototype is the `Object.getPrototypeOf()` method:

```js
Object.getPrototypeOf(killerRabbit)
//  Rabbit { speak: [Function] }
```

### logging a constructed object

As we've seen, the result of logging a prototype object looks different - the constructor function appears before the object itself. This is also true for any object created using the constructor:

```js
console.log(killerRabbit)
// Rabbit { type: 'killer' }
```

### Omitting the `new` keyword

When the `new` keyword is omitted, you may or may not see an error -  one way to ensure an error in this case is to include the keywords: `"use strict";` at the top of your javascript file. A constructor without `new` will be called like a regular function that does not return anything.

### The instanceof operator

If we try to use the `typeof` operator with any of the above created objects, we will always get back the string `"object"`. As far as types are concerned, javascript dconsiders all objects to be the same. We *can*, however, check if an object was created using a specific constructor function. This is done using the `instanceof` operator:

```js
console.log(killerRabbit instanceof Rabbit) // => true
```

### Overriding Prototype properties

When a property is added to an object, whether it is present in the prototype or not, the property is added to the object itself. If there is a property by the same name in the prototype, this property will no longer affect the object. The prototype itself is not changed.

```js
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
```

### Adding To The Prototype Later

A prototype can be used at any time to add new properties and methods to all objects based on it. For example, it might become necessary for our rabbits to dance.

```js
Rabbit.prototype.dance = function() {
  console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
// → The killer rabbit dances a jig.
```

### Quotes

"If you add [a property] to the parent, the children will all get it. If a child already has one, it will use its own" - Aiden

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

