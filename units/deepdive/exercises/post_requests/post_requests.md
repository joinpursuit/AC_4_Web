# Post Requests - Exercises

## Number

Create an express server that will store a number in the file `number.json`. The json file should look like this:

```json
{"number":"4"}
```

* When the server receives a `get` request to `/number` it will respond with the string `the number is: ` followed by the number. If the `number.json` file does not exist, the server will respond with the string `There is no number`.
* When the server receives a `post` request to `/number`, it will look for a `number` property in the request body, and write the number to the json file. If the `number.json` file does not exist, the server will create it. The server will respond with the string `"number updated"`.

## View Counter

Create an express server that will count the number of times a site is visited. It will store this number in a json file `counter.json`. The json file should look like this:

```json
{"count":"4"}
```

* When the server receives a `get` request to `/` it will increment the view count by `1` and respond with the string `Welcome to my site`. If the `counter.json` file does not exist, the server will create it and set the count to `1`.
* When the server receives a `post` request to `/reset`, it will set the count in the json file to `0`. If the `counter.json` file doesn't exist, the server will create it.

### Login

Copy the following JSON into a file `users.json`:

```json
[
  {"username" : "adam", "password":"123"},
  {"username" : "josh", "password": "asd"},
  {"username" : "cat", "password": "dog"}
]
```

Create an express server, that receives post reqests to `/login`. It will check that the request has a `username` and `password` properties. It will fetch the list of username-password pairs from `users.json` and try to match the request to one of these. If a match is found, the server will respond with the string `'You're In!`. Otherwise, it will respond with `'Invalid username/password'`.

### Challenge: Rock Paper Scissors V.2

Exten the _rock paper scissors_ project from express 2 exercises. Now your server will take a get request of this form:

`/:name/:move`

where `name` can be any string, and `move` is either `'rock'`, `'paper'` or `'scissors'`. The server will do the return:

* The results of a single "Rock, Paper, Scissors" match against a computer opponent.
* The number of wins and losess associated with that name.

Keep track of the wins and losses for each name in a json file.

### Challenge: Rock Paper Scissors V.2 Cheat

Add a `/cheat` `post` request for the server. On that request, the server will check for the properties `name`, `wins` and/or `lossess` on the request body. If these exist, the server will update the record with the given name to have the given number of wins and/or losses.