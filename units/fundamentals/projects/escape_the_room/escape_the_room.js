'use strict';
/*
 *   Boilerplate
 */


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

// End of boilerplate

var ESCAPE_MESSAGE = 'You escaped the room!'

/**
 * @function findElem
 * @param  {any[]} arr
 * @param  {function} callback
 * @return {any | void} {the first element, if exists in the array, to satisfy the callback}
 */
function findElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}


/**
 * Represents a Result of interacting with an object in the room
 * @constructor
 * @param {string} {description}
 * @param {string[]} [items]
 */
function Result(description, items){
    this.description = description;
    if (items === undefined){
        this.items = null
    } else {
        this.items = items
    }
}

console.log(new Result("hello"))
/**
 * Represents a thing in the room
 * @constructor
 * @param  {string} name
 * @param  {string} description
 * @param  {string[]} items  
 * @param  {string[]} neededItems
 * @param  {string[]} actions
 */
function RoomObject(name, description, items, neededItems, actions) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.neededItems = neededItems;
    this.actions = actions;
}


/**
 * Get the items in the RoomObject
 * @function getItems
 * @return {string[]}
 */
RoomObject.prototype.getItems = function () {
    var itemsRef = this.items;
    this.items = [];
    return itemsRef;
};

/**
 * Remove all needed items
 * @function removeNeededItem
 */
RoomObject.prototype.removeNeededItems = function () {
    this.neededItems = [];
};

/**
 * Check if an item is needed for this RoomObject
 * @function isItemNeeded
 * @param  {string} itemName
 * @return {boolean}
 */
RoomObject.prototype.isItemNeeded = function (item) {
    return this.neededItems.indexOf(item) !== -1
};

/**
 * Try to use an item on this RoomObject
 * @function useItem
 * @param  {string} item
 * @return {boolean}
 */
RoomObject.prototype.useItem = function(item) {
    var isNeeded = this.isItemNeeded(item)
    if (!isNeeded) {
        return new Result("Could not use " + item + " on " + this.name);
    } else {
        this.removeNeededItems();
        return new Result(" Used " + item + " -> " + this.name);
    }
}

/**
 * Check if there are any items in this RoomObject
 * @function hasItems
 * @return {boolean}
 */
RoomObject.prototype.hasItems = function(){
    return this.items.length !== 0;
}

/**
 * Check if any items are needed to interact with this RoomObject
 * @function hasItems
 * @return {boolean}
 */
RoomObject.prototype.needsItems = function(){
    return this.neededItems.length !== 0;
}

/**
 * Try to interact with this RoomObject
 * @function interact
 * @return {Result}
 */
RoomObject.prototype.interact = function (action) {
    // action = "jump"
    // this.actions = ["open", "get", "check"]
    if (this.actions.indexOf(action) === -1){
        return new Result("cannot " + action + " " + this.name)
    } else if (this.needsItems()) {
        return new Result(this.description)
    } else if (this.hasItems()) {
        return new Result("You " + action + " the " + this.name, this.getItems()) 
    } else if (this.name === "Door") {
        return new Result(ESCAPE_MESSAGE)
    } else {
        return new Result("didn't find anything useful")         
    }
}

/**
 * Represents a level in the game
 * @constructor
 * @param  {RoomObject[]} objects
 */
function Room(objects) {
    this.objects = objects;
}

/**
 * Try to retrieve a RoomObject contained in this Room 
 * @function getObject
 * @param  {string} objectName
 * @return {RoomObject | void}
 */
Room.prototype.getObject = function (objectName) {
    var name = objectName.toLowerCase()
    var object = findElem(this.objects, function (object) {
        return object.name.toLowerCase() === name
    })
    return object
}

/**
 * Player
 * @constructor
 * @param  {string[]} items 
 * @param  {Room} room  
 */
function Player(room) {
    this.items = [];
    this.currentRoom = room
}

/**
 * Try to get an item from the player's inventory
 * @param  {string} itemName
 * @return {string | void}
 */
Player.prototype.getItem = function (itemName) {
    var name = itemName.toLowerCase()
    var item = findElem(this.items, function (itemName) {
        return itemName.toLowerCase() === name
    })
    return item
}

/**
 * Add items to the player's inventory
 * @function
 * @param  {string[]} items
 */
Player.prototype.addItems = function (items) {
    this.items = this.items.concat(items)
}

/**
 * Try to interact with a RoomObject
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.interactWithObject = function (objectName, action) {
    // objectName = "drawer"
    // action = "open"

    // 
    var object = this.currentRoom.getObject(objectName)

    if (object === undefined) {
        return objectName + " not found in room"
    } else {
        var result = object.interact(action);
        if (result.items){
            this.addItems(result.items)
            return result.description + "\n" + "found items: " + result.items
        }
        return result.description;
    }
}

/**
 * Try to use item on an RoomObject
 * @param  {string} itemName
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.useItem = function (itemName, objectName) {
    var item = this.getItem(itemName)
    var object = this.currentRoom.getObject(objectName)

    if (item === undefined) {
        return itemName + " not found in inventory"
    } else if (object === undefined) {
        return objectName + " not found"
    } else {
        var result = object.useItem(item);
        return result.description;
    }
}

/**
 * Game
 * @constructor
 * @param  {Room[]} rooms
 */
function Game(rooms) {
    this.currentRoomIndex = 0;
    this.rooms = rooms;
}

/**
 * Get the current room
 * @return {Room}
 */
Game.prototype.getCurrentRoom = function(){
    return this.rooms[this.currentRoomIndex]
}

/**
 * Set and return the next room
 * @return {Room}
 */
Game.prototype.getNextRoom = function(){
    this.currentRoomIndex++;
    return this.rooms[this.currentRoomIndex]
}

/**
 * @function getObjectNames
 * @param  {RoomObject[]} objects
 * @return {string}
 */
function getObjectNames(objects) {
    var objectNames = objects.map(function (object) {
        return object.name
    })
    return objectNames.join("\n")
}

/**
 * @function view
 * @param  {string} [message]
 * @return {string}
 */
function view(message) {
    message = message || ""
    var room = player.currentRoom
    var title =
        "--Escape the room-- \n" + 
        "1. [action] [object] \n" + 
        "2. use [item] [object] \n" 
    
    var objects =
        "--You See-- \n" + getObjectNames(room.objects) + "\n";

    var items =
        "--Your Items-- \n" + player.items.join("\n") + "\n";

    var input =
        "--Your Input--";

    return title + objects + items + message + input;
}

function parseInput(words){
    // "open chest"
    // words = ["open", "drawer"]
    if (words.length === 2){
        // "open"
        var action = words[0].toLowerCase()
        // "drawer"
        var objectName = words[1].toLowerCase();

        var message = player.interactWithObject(objectName, action)
        if (message === ESCAPE_MESSAGE){
            return "YOUR'E FREE"
        }
        return message
    } else if (words[0] === "use" && words.length === 3) {
        var itemName = words[1].toLowerCase();
        var objectName = words[2].toLowerCase();
        var message = player.useItem(itemName, objectName)
        return message;
    } else {
        return "invalid command"
    }
     
}

/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
    clear()

    var words = input.split(' ')
    
    var message = "-- message -- \n" 
                  + parseInput(words)
                  + "\n"

    console.log(view(message))    
});


// Create an array of RoomObjects
var roomObjects = [
    new RoomObject("Drawer", "This may contain useful items", ["scissors", "pencil", "cloth", "flashlight"], [], ["open", "get", "check"])
]

// Create an array of Rooms
var rooms = [new Room(roomObjects)]

// Create a new Game
var game = new Game(rooms)

// Create a new Player
var player = new Player(rooms[0])
/*
Some clarifications: 
A `Room` is a level in the game. 
A `RoomObject` is something that is contained inside that level -
 shelf, drawer, basement, attic, etc. 
 

 `Item`s may be needed to interact with certain `RoomObject`s. 
 
Items can be found when interacting with certain `RoomObject`s.

A `Game` consists of a series of rooms. 
For this assignment you only need to create a single room.
 To enable multiple rooms you would need to make some changes to the code. 
*/
clear()
console.log(view())
