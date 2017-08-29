var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

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

// logging all todos
forEachArr(todoArr, logTodo)

rl.on('line', function(input){

})

