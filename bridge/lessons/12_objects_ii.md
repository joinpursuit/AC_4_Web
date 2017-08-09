# Objects II

## Objectives

## Vocabulary

* methods
* The `this` keyword
* constructor function
* constructor
* blueprint
* The `new` operator

## Lesson

We have been using the dot notation to access the length of strings and arrays. We have also been using the dot notation to call methods like `push` and `pop`. When we create an objects we can define our own methods, by defining the value for a property as a `function`.

```js
var erica = {
  firstName: 'Erica',
  lastName: 'Lee',
  age: 25,
  speak: function(){
    return 'Hello, my name is Erica Lee'
  }
}

erica.speak()
// will log: 'Hello, my name is Erica Lee'
```

The `speak` method above may not work as expected. Whenever we change either `firstName` or `lastName`, we will need to change the name returned by the function as well. One way to overcome this problem is by making a function `speak` outside of the object. This function will take as input an object.

```js
var erica = {
  firstName: 'Erica',
  lastName: 'Lee',
  age: 25
}

function speak(person){
   return 'Hello, my name is ' + person.firstName + ' ' + person.lastName
}

speak(erica)
```

The function above works, and sometimes we will want to create functions of this kind. However, there is another way to make this function work well and keep it inside the object. We can use the `this` keyword to access an object`s properties from within that object.

### This

Whenever we create a function that as the property of an object (i.e. a method), we can use the `this` keyword to access any of the other properties of that object.

```js
var erica = {
  firstName: 'Erica',
  lastName: 'Lee',
  age: 25
  speak: function(){
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName
  }
}

erica.speak()
// will log  'Hello, my name is Erica Lee'
```

Every time we call the `speak` method, it will access the object's `firstName` and `lastName` properties to get their most recent values.

```js
var erica = {
  firstName: 'Erica',
  lastName: 'Lee',
  age: 25
  speak: function(){
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName
  }
}

erica.speak()
// will log  'Hello, my name is Erica Lee'
erica.lastName = 'Michaels'
erica.speak()
// will log  'Hello, my name is Erica Michaels'
```

### Constructor Functions

We may want to create several objects with the same properties but different values. Reacll the film array from our **Obejcts I** lesson:

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

Back then we create a function `addFilm` to make adding films easier.

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

We can also a **blueprint** for a film, and then create films using that blueprint. In javascript the blueprint looks like a regular function, except that it employes the `this` keyword and usually doesn't seem to return anything. Also, we call it by using the `new` operator.

```js
function Film(name, director, released){
  this.name = name
  this.director = director
  this.released = released
}

var film = new Film('The Truman Show', 'Peter Weir', 1998)
```

The `new` operator creates an empty object, on which the function is applied. The empty object becomes the `this` we see in the `Film` function. To differnciate constructors from regular functions, we begin the with a capital letter. In later lessons we will explore further the internals of `new`. For now it is sufficient to understand how it works. If we want to add a new film to our films array, we may do the following:

```js
films.push(new Film('The Truman Show', 'Peter Weir', 1998))
```

So we no longer need the `addFilm` function.

### Modeling The world

Let's take a look at a more complex example. We want to represent a school class. A class has a subject, a teacher, and a number of students. Each student has a first name, a last name, and a grade. We will use an object to represent the class. This object will have the properties: teacher (string), subject (string), students (array of Students). We will use an object to represent each student. Let's start by making a `Student` constructor:

```js
function Student(firstName, lastName, grade) {
  this.firstName = firstName
  this.lastName = lastName
  this.grade = grade
}
```