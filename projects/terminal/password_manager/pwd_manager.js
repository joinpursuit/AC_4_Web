
'use strict';
var readline = require('readline')
var ADD = "ADD"

/*
 *   the following will be given to the students,
 *   and they are not required to understand it
 */
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.clear = function () {
  return process.stdout.write('\x1B[2J\x1B[0f')
}

function saveToFile(file, data){
  fs.writeFileSync()
}

//
// the following will be given to the students,
//  and it is recommended that they understand it
//


/*
 *  the following may be partially given to the students
 *  (body-less function definitions, etc.)
 */

/**
 * @typedef {Object} Contact
 * @property {String} name
 * @property {Number} number
 */

/**
 * @typedef {Object} Action
 * @property {String} Type
 */

var contacts = []

/**
 * @function update
 * @param  {Contact[]} contacts  
 * @param  {Action} action 
 */
function update (contacs, action) {
  if (action.type === ADD) {
    contacts.push({
      name: action.name,
      number: action.number
    })
    console.log('added number \n')
  } else if (action.type === REMOVE) {
    contacs.filter(function(contact){
      contact.name !== action.name
    })
  }
}

/**
 * @function play
 * @param  {Contact[]} contacts
 */
function play (contact) {
  rl.question('ADD / REMOVE ', function (choice) {
      if (choice === ADD){
        
      }
    
  })
}

console.clear()
play(contacts)
