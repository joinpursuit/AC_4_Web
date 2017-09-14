var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function createTask(description, completed) {
  return {
    description: description,
    completed: completed
  }
}



function forEachArr(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}


var taskList = []


function update(action) {
  switch (action.type) {
    case 'add':
      {
        var newTask = createTask(action.value, false)
        taskList.push(newTask)
        return 'done'
      }
    case 'toggle':
      {
        var index = action.value
        if (!taskList[index]) {
          return 'could not find task'
        } 
        taskList[index].completed = !taskList[index].completed    
        return 'done'    
      }
    default:
      return 'unknown action'
  }
}

function formatTask(task){
  return task.description + '. Completed: ' + task.completed
}

function render(message){
  if (message){
    console.log(message)    
  }

  console.log('actions: ')
  console.log('* Add Task: add [description]')
  console.log('* Toggle Completed: toggle [index]')
  

  forEachArr(taskList, function (task, i) {
    console.log(i + '. ' + formatTask(task))
  })
}

rl.on('line', function (input) {
  clear()
  var arr = input.split(' ')

  var action = {}
  if (arr[0] === 'add') {
    var description = arr.slice(1).join(' ')
    action = {
      type: 'add',
      value: description
    }
  } else if (arr[0] === 'toggle') {
    var index = Number(arr.slice(1).join(''))
    action = {
      type: 'toggle',
      value: index
    }
  } 

  var message = update(action)
  if (message === 'done'){
    render()    
  } else {
    render(message)
  }
})

clear()
render('Welcome to Your Task List')