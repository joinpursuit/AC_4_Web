# Objects II

## Objectives

## Keywords
* methods
* The `this` keyword

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

