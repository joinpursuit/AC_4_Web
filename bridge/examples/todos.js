var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function createTodo(description, completed){
  var todo = {
    description: description,
    completed: completed
  }

  return todo
}

function logTodo(todo, i) {
  console.log(i + '. ' + todo.description + '. Completed: ' + todo.completed)
}

function forEachArr(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i)
  }
}

var todoArr = []

forEachArr(todoArr, logTodo)

rl.on('line', function(input){
  clear()
  var arr = input.split(' ')

  if (arr[0] === 'add'){
    arr = arr.slice(1)
    if (arr[arr.length - 1] === 'true'){
      arr.pop()
      var description = arr.join(' ')
      var todo = createTodo(description, true)
      todoArr.push(todo)
    } else if (arr[arr.length - 1] === 'false'){
      arr.pop()
      var description = arr.join(' ')
      var todo = createTodo(description, false)
      todoArr.push(todo)
    } else {
      var description = arr.join(' ')
      var todo = createTodo(description, false)
      todoArr.push(todo)
    }

    forEachArr(todoArr, logTodo)
  } else {
    console.log('start with add')
  }
})

clear()
console.log('Todos')
