# Objects - I

## Objectives

* Explain what an object in JavaScript is
* Explain keys, values and properties of an objects
* Create an object
* Create and modify properties of an object
* Iterate through an object

## Vocabulary

* objects
* dot-notation
* keys/values
* properties

## Lesson

### Introduction

An **Object** is a collection of **key/value pairs**. The pairs are also known as **properties**.

```JavaScript
{key: value} // This is a key/value pair
```

JavaScript is **object-based**, like many languages (e.g. Python, Ruby, Java). According to Wikipedia, that means the language "uses the idea of encapsulating state and operations inside objects."

In other words, objects are extremely powerful and fundamental to JavaScript. More on that in another lesson, but for now, think of them as similar to real-world objects.

### Real-world Example

In English, you might refer to an apple as an object. Similarly to a JavaScript object, an apple has properties, like *type* (e.g. "Gala", "Honeycrisp"), *color*, *ripeness* (e.g. "ripe", "rotten", "unripe") and owner (e.g. "Tomer", "Maria").

You might represent this in JavaScript like so (syntax explained in next section):

```javascript
{type: 'Gala', color: 'red', ripeness: 'ripe', owner: 'Tomer'}
```

The above JavaScript object represents a single apple. You could represent many apples this way:

```javascript
{type: 'Gala', color: 'red', ripeness: 'ripe', owner: 'Tomer'}
{type: 'Granny Smith', color: 'green', ripeness: 'unripe', owner: 'Daniel'}
{type: 'Golden Delicious', color: 'yellow', ripeness: 'rotten', owner: 'Ashley'}
{type: 'Honeycrisp', color: 'red', ripeness: 'ripe', owner: 'Maria'}
```

### Syntax

As in the above apple examples, JavaScript objects are often represented using curly braces. The syntax is simple: the pairs are separated by commas, the keys are separated from values by colons, and the entire thing is surrounded by curly braces (Note: an **empty object** is just `{}`).

This notation is one common way to declare an object (another way is `new Object()`, but don't worry about that for now). You can then store the result in a variable. For example:

```javascript
var person = {
  firstName: 'Erika',
  lastName: 'Kim',
  age: 25
}
```

### Programming Example

Are we going to create apples in our apps? Maybe, for example if you wanted to create an app that tracks inventory for a grocery store, or an app that tracks the contents of your refrigerator.

But digital examples can also use objects. For example, a Facebook `post` could be an object, as could an Airbnb `reservation`. Can you imagine some properties these objects might have?

### Getting & Setting Properties

Once you have an object, what might you want to do with it? For starters, you may want to create new properties as well as read and update existing ones.

#### Getting Properties

If you had an object stored in the variable `person` and wanted to get that person's firstName, you could use **dot notation**. The syntax looks like this:

```javascript
  // Same object as before
  var person = {
    firstName: 'Erika',
    lastName: 'Kim',
    age: 25
  }

  console.log(person.firstName);
  // 'Erika' will be logged
```

If you try to get a property that doesn't exist, `undefined` will be returned.

```javascript
console.log(person.propertyThatDoesntExist);
// 'undefined' will be logged
```

You could also use a key stored in a variable, but you need to use brackets (`[]`) in this case. For example:

```javascript
var someVariable = 'firstName';
console.log(person[someVariable]);
// 'Erika' will be logged
```

We could also log the person's full name like this:

```javascript
console.log(person.firstName + ' ' + person.lastName);
```

We could also put the above into a function that takes a person object as an argument.

```javascript
  function getFullName(person){
    console.log(person.firstName + ' ' + person.lastName);
  }
```

Once we have the `getFullName` function, we can call it at any time, with any object that has a `firstName` and `lastName` properties.

```javascript
  // Creates the object `anotherPerson`
  var anotherPerson = {
    firstName: 'Joe',
    lastName: 'Stein',
    favoriteFood: 'pizza'
  }

  getFullName(anotherPerson);
  // Will log 'Joe Stein'

```

#### Setting Properties

Now that we know how to *get* an object's properties -- how do we *set* them? In other words, how do we add or change properties of an object?

Let's revisit our basic person object:

```javascript
  var person = {
    firstName: 'Erika',
    lastName: 'Kim',
    age: 25
  }
```

Just as we could use dot notation to get the property of a person, we could use it similarly to set a property, whether it exists or not.

If it already exists, we can change it like this:

```javascript
  console.log(person.firstName); // Logs 'Erika'

  person.firstName = 'Jane'; // Changes firstName property
  console.log(person.firstName); // Logs 'Erika'
```

If it doesn't already exist, the same notation adds a property:

```javascript
  console.log(person.hometown); // Logs 'undefined'

  person.hometown = 'Arkansas'; // Creates and sets hometown property to 'Arkansas'
  console.log(person.hometown); // Logs 'Arkansas'
```

### Arrays vs Objects

Arrays and object are closely related to each other (a fact we will expand on in future lessons). An array is really a special kind of object, where the keys are numbers. Arrays also have special properties (such as length) and special methods.

```javascript
  var myArray = ['firstValue', 'secondValue'];
  console.log(myArray[0]); // Logs 'firstValue'

  var myObject = {0: 'firstValue', 1: 'secondValue'}
  console.log(myObject[0]); // Logs 'firstValue'
```

### Arrays of Objects

What if you were to want a collection of objects (e.g. a collection of films)? One data structure we learned to store a collection is an array -- so we could store an array of objects.

For example, we may want to create an array of films, where each film is an object that contains a name, release year and director.

```javascript
var films = [
  {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  },
  {
    name: 'Citizen Kane',
    director: 'Orson Welles',
    released: 1941
  },
  {
    name: 'The Usual Suspects',
    director: 'Bryan Singer',
    released: 1995
  }
]
```

Now, we could access any of the films just as we do any values in an array, and then access that object's properties. In the below example, we access the name of the first film.

```javascript
console.log(films[0].name);
// Logs 'Psycho'
```

Adding a new object to the array might be cumbersome:

```javascript
  films.push({
    name: 'Inception',
    director: 'Christopher Nolan',
    released: 2010
  })
```

We could make this process easier by creating a function `addFilm` that takes `name`, `director` and `released` as arguments.

```javascript
  function addFilm(name, director, released){
    film.push({
      name: name,
      director: director,
      released: released
    })
  }

  addFilm('The Truman Show', 'Peter Weir', 1998);
```

Note that in this case the property keys to the left are the same as the argument variables. This doesn't have to be the case but is easier to read.

```javascript
  function addFilm(blah1, blah2, blah3){
    film.push({
      name: blah1,
      director: blah2,
      released: blah3
    });
  }

  addFilm('The Truman Show', 'Peter Weir', 1998);
  // Also works, but not semantic
```

### Object Equality Test

Many JavaScript constructs are types of objects (e.g. Arrays fall under the Object class).

For any variable of the object type, the quality operator (i.e. `===`) will only return `true` if both sides refer to the *exact same* object. It's not enough for them to just look the same.

```javascript
  var firstPerson = {name: 'Bob', age: 47};
  var secondPerson = {name: 'Bob', age: 47};

  console.log(firstPerson === secondPerson); // False
  console.log(firstPerson === firstPerson); // True

  var pointer = firstPerson; // Create a variable pointing to firstPerson
  console.log(pointer === firstPerson); // True
```

### Iterating through Objects

As mentioned earlier, an array is like an object where the keys are consecutive numbers.

Iterating through an array is simple: we only need a loop of some kind that goes, for example, from `0` to `array.length - 1`, because you know those numbers are `key`s of the array.

But with an object, you don't know what those keys are. They may not be numbers, but instead may be `firstName` and `age`, as in the above examples.

For this, we use the `for...in` loop. Its syntax is:

```javascript
  for(var key in object){
    // Code to execute on each each key
  };
```

For example, to log all the key/value pairs of an object:

```javascript
  var cat = {
    name: 'Tom',
    type: 'Domestic'
  }

  for(var key in cat){
    console.log(key);
  };
  // Logs: 'name' and then logs 'type'

```

Okay so that's how we get the keys. How do we get the values? We can simply key into the object.

```javascript
  for(var key in cat){
    console.log(key + ": " + cat[key]);
  };
  // Logs 'name: Tom' and then 'type: Domestic'

```

### Order in Objects

Arrays have order; objects do not. There is a first item in an array, whereas there isn't a "first" item in an object.

```javascript
  var person1 = {
    firstName: 'Erika',
    lastName: 'Kim',
    age: 25
  }

  var person2 = {
    age: 25,
    firstName: 'Erika',
    lastName: 'Kim'
  }

  // These objects behave the same way. The order in which the properties appear in the creation of the object doesn't matter.
```

This is a crucial distinction you will learn about more later. It is generally bad practice to depend in any way on the order of attributes within an object.

### Exercises

#### To Do List

Let's put everything together by building a small todo list program. Here are the steps:

1. Decide what each todo task will look like: what are the fields we need? Create a JavaScript object that matches the description and stores example data for one todo.
2. Create an array of todos to hold multiple todo objects.
3. Create a function that adds a todo to the todos array.
4. Create a function that logs information from all the todos.
5. Create function that marks a todo as completed (based on the array index number).

#### Watch List

1. Create an array of films, where each film has the following properties: `title`, `director`, and `watched` (a boolean indicating if you started watching it).
2. Create a function that iterates over the array and logs the title and director for each film. (e.g. 'Wonder Woman, directed by Patty Jenkins').
3. Now change the output depending on whether the film was watched. If it was watched, log a string like 'You watched "Wonder Woman" directed by Patty Jenkins', and if not, log 'You still need to watch "Wonder Woman" by director Patty Jenkins.'

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `title`, `numberOfServings`, and `ingredients` (an array).
* Create a function that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients:
cinnamon
cumin
cocoa
```

* **Bonus**: change the function to log ingredients on the same line:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```
