
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

<!-- 
#### Task IDs

The next feature that we'd like to add is the ability to mark a task as *completed*. Or if we've mistakenly marked a task as *completed*, we may want to change it back to *not completed*. We first need a way to access an inidividual task in our list. Let's do this by adding an `id` property to each `task` object. We want each task to have a unique id - to ensure this, we will create a global `id` variable, and increment id by `1` every time we create a new task.

```js
var id = 1;
function createTask(description, completed){
  var task = {
    description: description,
    completed: completed,
    id: id
  }
  id += 1;

  return task
}
```

The first task created will have `id` of `1`, the second an `id` of `2`, the third `3`, etc. Now we can rewrite the `logTasks` function to log each tasks `id`:

```js
logTasks(taskArr){
  for (var i = 0; i < taskArr.length; i ++){
    console.log(taskArr[i].id + '. ' +
                taskArr[i].title +
                '. Completed: ' +
                taskArr[i].completed)
  }
}
``` -->
