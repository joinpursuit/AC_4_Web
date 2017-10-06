# Tasks App

## Objectives

## Vocabulary

## Lesson

Let's create a task list with everything we've learned so far. Our app will consist of a `task` array, where each element is a `task` object. Each `task` object will have two properties:

1.`title`: a string.
2.`completed`: a boolean.

Let's create a factory function that returns a new `task` object.

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

Alternatively, we can return an object literal right away:

```js
function createTask(title, completed){
  return {
    title: title,
    completed: completed
  }
}
```

Now let's create an empty `taskArr` array, and use the `push` method to add the new `task` object to the array:

```js
var taskArr = []

var buyMilk = createTask('buy milk', false)
taskArr.push(buyMilk)

var cleanHouse = createTask('clean the house', false)
taskArr.push(cleanHouse)

console.log(taskArr)

// will log:
// [ { title: 'buy milk', completed: false },
//   { title: 'clean the house', completed: false}]
```

Now that we are able to add tasks to our list, we would like to be able to log them more nicely. Let's log the tasks with a number for each, like this:

1. buy milk. Completed: false.
2. clean the house. Completed: false.

Let's create a function `logtasks`.

```js
function logTasks(taskArr){
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

Let's use the `forEach` function to log the tasks array:

```js
forEachElem(taskArr, function(task, i){
  console.log(i + '. ' + task.title + '. Completed: ' + task.completed)
})
```

### Toggling Boolean Values

The next feature that we'd like to add is the ability to mark a task as *completed*. Or if we've mistakenly marked a task as *completed*, we may want to change it back to *not completed*. We first need a way to access an inidividual task in our list. Let's do this by using each task's index in the task array.

```js
function completeTask(index) {
  taskArr[index].completed = true
}

```

The `completeTask` function, takes an index number as argument, and set the task's `completed` value at that index to `true`. A similar function can be written to set a task to `false`.

> Ex. write a function `unCompleteTask` that takes an index number as an argument, and set the task's `completed` value at that index to `false`

Alternatively, we can use the fact that the `completed` property has a boolean value, and that there are only two boolean values - `true` and `false`. Given a variable that holds a boolean value, we can get the opposite value by using the negation operator - `!`.

```js
var myBool = true
myBool = !myBool
// myBool's value is `false`
myBool = !myBool
// myBool's value us `true` again
```

Changing a boolean value in this fashion is also called *toggling*. We can use this method to toggle a task's `completed` value:

```js
function toggleCompleted(index) {
  taskArr[index].completed = !taskArr[index].completed
}
```

We can now write a program that will add and toggle tasks based on a user's input. Let's begin by creating an empty `taskArr` array.

```js
var taskArr = []
```

### Adding Tasks

The input to add a new task may look like this: `'add [description]'`, where the description may consist of any number of words. Let's take an example input: `'add buy milk'`. We will begin by splitting the input on the spaces, geting an array of strings.

```js
var input = 'add buy milk'
var inputArr = input.split(' ')
// inputArr: ['add', 'buy', 'milk']
```

When the first element of the array is the string `'add'`, we will need to add a new task to the array. We will first create a task with the user's input as the description. To get this input we will take all elements of the array starting from index `1`, and join these back into a string with spaces.

```js
var description = inputArr.slice(1).join(' ')
```

We will now create a new `task` object. We will assume that a new task will have `false` as its `completed` value.

```js
var newTask = createTask(description, false)
```

Finally, we will add the new `task` object to the array, and log the contents of the array.

```js
taskArr.push(newTask)
logTasks(taskArr)
```

### Toggling Tasks

The input to toggle an array will look like this: `'toggle [index number]'`. We are printing the index numbers every time we log the contents of the array using `logTasks`. Let's take the example input `'toggle 0'`. We will first split the input on the spaces.

```js
var input = 'toggle 0'
var inputArr = input.split(' ')
```

If the first element of the array is the string `'toggle'`, we will need to read the index number from the second element. Since that element is a string, we will first need to convert it to a number. Then we will need to check if an element with that index exists in the array. If it does, we will toggle the completed value of the `task` object at that index.

```js
if (inputArr[0] === 'toggle') {
  var index = Number(inputArr[1])
  if (taskArr[index] === undefined){
    console.log('an element at that index does not exist')
  } else {
    toggleCompleted(index)
  }
}
```