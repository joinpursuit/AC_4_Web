# Objects - I

## Objectives

## Vocabulary

* object
* Dot notation
* properties

## Lesson

An **Object** is a collection of values, where each value has a coresponding property name. One way to create an object is by using curly braces. We write the name of the property, followed by a comma, followed by a value. We separate each property-value pair by a commas.

```js
var person = {
  firstName: 'Erica',
  lastName: 'Kim',
  age: 25
}
```

Once we created an object, we can access any of its values by using the variable name, followed by a dot, followed by the property name. This is called **dot notation**.

```js
console.log(person.firstName)
// 'Erica' will be logged
person.firstName = 'Michelle'
console.log(person.firstName)
// 'Michelle' will be logged
```

### Objects as input to functions

We can log the `person`'s full name like this:

```js
console.log(person.firstName + ' ' + person.lastName)
```

We can also put the above into a function that takes a `person` object as an argument.

```js
function getFullName(person){
  return person.firstName + ' ' + person.lastName
}
```

Once we have the `getFullName` function, we can call it at any time, with any object that has a `firstName` and `lastName` properties.

```js
var anotherPerson = {
  firstName: 'Joe'
  lastName: 'Stein'
  favoriteFood: 'pizza'
}

getFullName(anotherPerson)
// will log: 'Joe Stein'
```

### Arrays vs objects

Arrays and object are closely realted to each other (a fact we will expand on in future lessons). An array is really a special kind of object, where the property names are numbers. Arrays also have special properties (such as length) and methods to insert, delete, iterate over and modify elements.

### Arrays of Objects

It is often useful to use objects in conjunction with arrays. For example, we may want to create an array of films, where each film is an object that contains a name,release year, and director.

```js
var films = [
  {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }, {
    name: 'Citizen Kane',
    director: 'Orson Welles',
    released: 1941
  }, {
    name: 'The Usual Suspects',
    director: 'Bryan Singer',
    released: 1995
  }
]
```

Now We can access the objects and any field within the objects.

```js
console.log(films[0].name)
// will log 'Psycho'
```

Adding a new object to the array will be pretty cumbersome:

```js
films.push({
  name: 'Inception',
  director: 'Christopher Nolan',
  released: 2010
})
```

We can ease this process easier by creating a function `addFilm` that will take `name`, `director` and `released` as arguments.

```js
function addFilm(name, director, released){
  films.push({
    name: name,
    director: director,
    released: released
  })
}

addFilm('The Truman Show', 'Peter Weir', 1998)
```

Note above that to the left of the colon is the property name. To the right is the variable name. They do not have to coincide, but this make the function easier to understand.

### Object Equality Test

The equality test for an array derives from it being a kind of object. For any variable of the object type, the equality operator will return `true` only if their are referring to the same object.

### The `for ... in` loop

To iterate over an array, we need only a loop of some kind. We know that all properties are numbers in rising sequence, from `0` to `array.length - 1`. To iterate over an object, we must first know the property names. We can get these using a `for...in` loop. This loop looks similar to a `for` loop, but it works quite differently. Like in the for loop, we begin with `var [variable name]`, but we follow this with the keyword `in` and then the object name. This loop gives us the property names only.

```js
var cat = {
    name: 'Tom',
    type: 'Domestic Cat'
}

for (var prop in cat) {
  console.log(prop)
}
// will log: 'name', 'type'
```

As we get the property names inside the `for ... in` loop, we can use each to access the corresponding value.

```js
for (var prop in cat) {
  console.log(prop + ': ' + cat[prop])
}
// will log: 'name: Tom', 'type: 'Domestic Cat'
```

### A todo list

Let's put everything together by building a small todo list program. Here are the steps:
1. Decide what each `todo` task will look like: what are the fields we need. Create a javascript object that matches the description.
2. Create a `todos` array to hold all `todo` objects.
3. Create a function that adds a `todo` to the `todos` array.
4. Create a function that shows all `todos`.
5. Create function that marks a `todo` as completed (based on the index number).

### Exercises

1. The Watch List
Keep track of which films you watched and which films you want to watch! Create an array of films, where each film and has properties for the title (a string), director (a string), and startedWatching (a boolean indicating if you started watching it).
Iterate through the array of films. For each film, log the title and director like this: `'Wonder Woman, directed by Patty Jenkins'`.
Now use an `if ... else` statement to change the output depending on whether you watched it yet. If you watched it, log a string like 'You watched "Wonder Woman" directed by Patty Jenkins', and if not, log  `'You still need to watch "Wonder Woman" by director Patty Jenkins.'`

2. Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).On separate lines (one console.log statement for each), log the recipe information so it looks like:

```js
name: Mole
servings: 2
ingredients:
cinnamon
cumin
cocoa
```
