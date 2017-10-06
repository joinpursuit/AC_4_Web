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

1. Each arguments is assigned to a property of the `this` object.
2. The function does not have a `return` keyword.
3. The function returns the `this` object.

Also, note the following convenstions:

1. Constructor functions start with a capital first letter.
2. Parameter names match the keys (property names) of the object we will create.

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

### Function Properties

Like objects, functions have properties. For example, the `name` property returns a string with the name of the function:

```js
function add1(num) {
    return num + 1;
}

console.log(add1.name) // => "add1"
```

Unlike functions, regular objects cannot be called - trying to call an object will result in an error:

```js
var obj = { name: "Charlie" }
obj()
// TypeError: obj is not a function
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
var obj = {};
console.log(obj)
// {}
```

Logging `add1.prototype` displays not only the (empty) object, but also the function that the object is linked to. In this case, that function is `add1`.

### The Constructor - Prototype link

Each `prototype` object is initially empty, accept for a hidden property called `constructor`. This `constructor` holds the function that the object is linked to. In the instance of the `Dog` constructor

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

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
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

