# Factory Functions

## Objectives

## Vocabulary

* Factory Functions

## Lesson

Often are often useful when combined with arrays. For example,  may want to create several we may want to create an array of objects, where each objects has the same properties. One such example is the films array from our first **Objects** lesson:

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

We can now use the `getTitle` function as input to a `forEachElem` function, that applies a callback function to each element in an array.

```js
function forEachElem(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i])
  }
}

forEachElem(films, logTitle)
// will log:
// The Truman Show
// Citizen Kane
// The Usual Suspects
```

### A Task List

Let's create a task list with everything we've learned so far. Our app will consist of a `task` array, where each element is a `task` object. Each `task` object will have two properties:

1. `title`: a string.
2. `completed`: a boolean.

Let's create a factory function to create a new `task` object.

```js
function createTask(title, completed){
  var task = {
    title: title,
    completed: completed
  }
  return task
}

var buyMilk = createTask('buy milk', false)
console.log(buyMilk)
// will log: {title: 'buy milk', completed: 'false'}
```

Now let's create an empty `taskArr` array, and use the `push` method to add the new `task` object to the array:

```js
var tasks = []

var buyMilk = createTask('buy milk', false)
tasks.push(buyMilk)

var cleanHouse = createTask('clean the house', false)
tasks.push(cleanHouse)

console.log(tasks)

// will log:
// [ { title: 'buy milk', completed: false },
//   { title: 'clean the house', completed: false}]
```

Now that we are able to add tasks to our list, we would like to be able to log them more nicely. Let's log the tasks with a number for each, like this:

1. buy milk. Completed: false.
2. clean the house. Completed: false.

Let's create a function `logtasks`.

```js
logTasks(taskArr){
  for (var i = 0; i < taskArr.length; i ++){
    console.log(i + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed)
  }
}
```

We could have used the `forEachElem` function. The problem is that it only works with array element, but here we need the index numbers as well. So let's modify it:

```js
function forEachElem(arr, callback){
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

Now we can rewrite our `logTasks` fucntion:

```js
logTasks(taskArr){
  forEachElem(taskArr, function(task, i){
    console.log(i + '. ' + task.title + '. Completed: ' + task.completed)
  })
}
```

#### Task IDs

The next feature that we'd like to add is the ability to mark a task as *completed*.

<!-- 
The next piece of our program will be changing the `completed` property of a `task`. Let's create a function called `toggleTask` that takes a `doto` as an argument, and returns a new `task` with the same title, but with the completed property toggled: if it was `true` it will be `false`, it was `false` it will be `true`.

```js
function toggleTask(task){
  var toggledTask = createTask(task.title, !task.completed)
  return toggledTask
}
```

We still need to figure out how to use the `toggleTask` function inside our app. One way to do so is to toggle a task by its index in the `taskArr` array. That is, we will create a function that takes as arguments the `taskArr` and an index, and return a new `toDoArr` array where the task at that index has a toggled `completed` value. For example, if we are taking this `taskArr` (with the index numbers marked to the left):

```js
0: {task: 'buy milk', completed: true}
1: {task: 'clean house', completed: false}
2: {task: 'walk dog', completed: false}
```

and the number `1`, we return this new `taskArr`:

```js
0: {task: 'buy milk', completed: true}
1: {task: 'clean house', completed: true}
2: {task: 'walk dog', completed: false}
```

So the object at index 1 has been transformed, and the rest have remained the same. This is a mapping operation, i.e. mapping an array of `task` objects to a new array of `task` objects. So we can use a function called `mapArr`, that takes an array and a callback function, and returns a new array where the callback function has been applied on each element of the array.

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

### Map-Array in Tasks

In order to use the `mapArr` function to transform our  a `taskArr` array, we will need to modify it in the same way as we did to `forEachArr`. Each time the callback will be passed the index number as well as the array element:

```js
function mapArr(arr, callback){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i], i))
  }
  return newArr
}
```

As stated before, this will not interfer with cases where we do not need the index number. Now let's write a `toggleInTaskArr` function that will take as arguments a `TaskArr` array and an index number. We will only need to modify the element in the array where the index matches the request index. The other element will remain the same.

```js
function toggleInTaskArr(taskArr, toDoIndex){
  var newTaskArr = mapArray(taskArr, function(task, index){
    if (index === toDoIndex){
      var newTask = createTask(task.title, !task.completed)
      return newTask
    } else {
      return task
    }
  })
  return newTaskArr
}
``` -->