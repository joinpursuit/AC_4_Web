
/**
 * @function createTodo
 * @param  {string} description 
 * @param  {boolean} completed 
 * @return {type} {description}
 */
function createTodo(description, completed){
  var todo = {
    description: description,
    completed: completed
  }

  return todo
}

function addTodo(todoArr, todo){
  return todoArr.concat(todo)
}

function logTodo(todo, i){
  console.log(i + '. ' + todo.description + '. Completed: ' + todo.completed)
}

function forEachArr(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i)
  }
}




forEachArr(todoArr, logTodo)

var todoArr = []
var buyMilk = createTodo('buy milk', false)
todoArr = addTodo(todoArr, buyMilk)

var cleanHouse = createTodo('clean the house', false)
todoArr = addTodo(todoArr, cleanHouse)