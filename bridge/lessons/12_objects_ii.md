# Factory Functions

## Objectives

## Vocabulary

* Factory Functions

## Lesson

Often are often useful when combined with arrays. For example,  may want to create several we may want to create an array of objects, where each objects has the same properties. One such example is the films array from our first **Obejcts** lesson:

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

We can also create a function that, whenever called, will return a new `film` object. We call this kind of function a **factory function**.

```js
function createFilm(name, director, released){
  var film = {
    name: name,
    director: director,
    released: released
  }
  return film
}

var myFilm = createFilm('The Truman Show', 'Peter Weir', 1998)
```

A variable that is defined within a function is created anew every time the function is called. When we get to the end of a function, the varaiables that have been created within it are forgotten. We can, however, return a variable that was created inside a function. The variable itself will be forgotten, but its value will be assigned to a variable that lives outside the function. So, in the above example, we are assigning the value of the `film` variable from inside the function to the `myFilm` variable outside the function.

An advantage of a factory functions is that we can insure that each object will have the same properties. This will make it easier to with an array of objects later on. In our films example, when we only use the `createFilm` function to add new films to the films array, we can then create a function to get the film title for any film in the array.

```js
function logTitle(film){
  console.log(film.title)
}

films.push(createFilm('The Truman Show', 'Peter Weir', 1998))
films.push(createFilm('Citizen Kane', 'Orson Welles', 1941))
films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))

logTitle(films[2])
// will log: 'The Usual Suspects'
```

We can now use the `getTitle` function as input to a `forEachArr` function, that applies a function to each element in an array.

```js
function forEachArr(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i])
  }
}

forEach(films, logTitle)
// will log:
// The Truman Show
// Citizen Kane
// The Usual Suspects
```

### A Todo List

Let's create a todo list with everything we've learned so far. Our app will consist of a `todos` array, where each element is a `todo` object. Each `todo` object will have two properties:

1. `title`: a string.
2. `completed`: a boolean.

Let's create a factory function to create a new `todo` object.

```js
function createTodo(title, completed){
  var todo = {
    title: title,
    completed: completed
  }
  return todo
}

var buyMilk = createTodo('buy milk', false)
console.log(buyMilk)
// will log: {title: 'buy milk', completed: 'false'}
```

Now let's create an empty `todoArr` array, and a function to add a `todo` to the array.

Let's use the `push` to add the new `todo` object to the array:

```js
var todos = []

var buyMilk = createTodo('buy milk', false)
todos.push(buyMilk)

var cleanHouse = createTodo('clean the house', false)
todos.push(cleanHouse)

console.log(todos)

// will log:
// [ { title: 'buy milk', completed: false },
//   { title: 'clean the house', completed: false}]
```

Now that we are able to add todos to our list, we would like to be able to log them more nicely. Let's log the todos with a number for each, like this:

1. buy milk. Completed: false.
2. clean the house. Completed: false.

Let's create a function `logTodos`.

```js
logTodos(todoArr){
  for (var i = 0; i < todoArr.length; i ++){
    console.log(i + '. ' + todoArr[i].title + '. Completed: ' + todoArr[i].completed)
  }
}
```

We could have used the `forEachArr` function. The problem is that it only works with array element, but here we need the index numbers as well. So let's modify it:

```js
function forEachArr(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i)
  }
}
```

Now in addition to the element, we are passing the index to the callback every time. What about callbacks that don't expect an index number? For javascript this doesn't matter. If we pass extra arguments to a function, it will just ignore them:

```js
function add(num1, num2){
  return num1 + num
}

add(2, 3, 10)
// will return 5, ignoring the `10`
```

Now we can rewrite our `logTodos` fucntion:

```js
logTodos(todoArr){
  forEachArr(todoArr, function(todo, i){
    console.log(i + '. ' + todo.title + '. Completed: ' + todo.completed)
  })
}
```

The next piece of our program will be changing the `completed` property of a `todo`. Let's create a function called `toggleTodo` that takes a `doto` as an argument, and returns a new `todo` with the same title, but with the completed property toggled: if it was `true` it will be `false`, it was `false` it will be `true`.

```js
function toggleTodo(todo){
  var toggledTodo = createTodo(todo.title, !todo.completed)
  return toggledTodo
}
```

We still need to figure out how to use the `toggleTodo` function inside our app. One way to do so is to toggle a todo by its index in the `todoArr` array. That is, we will create a function that takes as arguments the `todoArr` and an index, and return a new `toDoArr` array where the todo at that index has a toggled `completed` value. For example, if we are taking this `todoArr` (with the index numbers marked to the left):

```js
0: {todo: 'buy milk', completed: true}
1: {todo: 'clean house', completed: false}
2: {todo: 'walk dog', completed: false}
```

and the number `1`, we return this new `todoArr`:

```js
0: {todo: 'buy milk', completed: true}
1: {todo: 'clean house', completed: true}
2: {todo: 'walk dog', completed: false}
```

So the object at index 1 has been transformed, and the rest have remained the same. This is a mapping operation, i.e. mapping an array of `todo` objects to a new array of `todo` objects. So we can use a function called `mapArr`, that takes an array and a callback function, and returns a new array where the callback function has been applied on each element of the array.

```js
function mapArr(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}
```

### Map-Array Refresher

As a refresher: the `mapArr` function can take an array of numbers and a function `add1` and return a new array of numbers where each element has been incremented by 1:

```js
var arr1 = [1, 2, 3]

function add1(num){
  return num + 1
}

var arr2 = mapArr(arr1, add1)

console.log(arr2)
// will log: [2, 3, 4]
```

Or with an anonymous callback:

```js
var arr1 = [1, 2, 3]

var arr2 = mapArr(arr1, function(num){
  return num + 1
})
```

### Map-Array in Todos

In order to use the `mapArr` function to transform our  a `todoArr` array, we will need to modify it in the same way as we did to `forEachArr`. Each time the callback will be passed the index number as well as the array element:

```js
function mapArr(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i], i))
  }
  return newArr
}
```

As stated before, this will not interfer with cases where we do not need the index number. Now let's write a `toggleInTodoArr` function that will take as arguments a `TodoArr` array and an index number. We will only need to modify the element in the array where the index matches the request index. The other element will remain the same.

```js
function toggleInTodoArr(todoArr, toDoIndex){
  var newTodoArr = mapArray(todoArr, function(todo, index){
    if (index === toDoIndex){
      var newTodo = createTodo(todo.title, !todo.completed)
      return newTodo
    } else {
      return todo
    }
  })
  return newTodoArr
}
```