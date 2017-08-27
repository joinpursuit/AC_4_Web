# Number Guessing Game

## Step 1

[Download](guess_the_number_scaffold.js) or copy-paste the inital code for the app.

The app is working in its current state. On starting the app, a random number is generated, and the user is prompted to guess a number. If the guess is incorrect, feedback is given (`Aim higher` / `Aim lower` ) and the user is prompted to guess a number again. If the guess is correct, a message is displayed (`You win!`) and the game is exited automatically.

## Step 2

Read over the code and think about what each function does. Some functions can be understood through their input an output. For example:
* `getRandomNumber` takes as arguments two numbers, and returns a random number in betwen the two.
* Every time the `Game` (with a capital G) function is called, it returns a new object with the following properties:

  * `number`: the random number
  * `triesLeft`: how many attempts the user has left
  * `gameOver`: a boolean indicating if the game is over
  * `message`: a message to the user

* `updateGame` takes as arguments
a game object and a guess, and returns a new, updated game object.

### Step 3

Add 1 or more of the following features to the game:

1. After every guess, log the number of remaining attempts. If there are `0` attempts remaining, log `You lose` and quit the game.
2. Display all previous guesses after every guess.