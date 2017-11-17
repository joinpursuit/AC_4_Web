# Express - Bonus Exercises

## Shuffle

Create a server with a route `'draw'` that accepts a number as a parameter.
E.g. "localhost:8000/draw/:number".

Set up an a container (e.g. a JS object or an array) for a standard deck
of playing cards. You can represent the cards however you want--they
could be strings (e.g. "ace of hearts"), or you could even set them each up as
JS objects themselves, like so:

```js
{
  suit: "heart",
  value: "ace"
}
```

When a user inputs a number into the URL, your app should:

* Make sure the number is 10 or less.
* Draw that number of cards randomly from the deck.
* Render those cards to the user.

Cards can be rendered however you want--if you want to render a plain old
stringified JS object, like the Rock, Paper, Scissors API you created, that's
just fine. If you want to use images, render HTML, or play around with different Node libraries, that's OK, too.

## Blackjack Tutor

* [Blackjack Rules](http://www.bicyclecards.com/how-to-play/blackjack/)

**It's fine to utilize or modify your previous project to create this!**

Based on the rules of blackjack, create a server which, on a standard request to
the root domain (`'/'`):

* Draws two cards.
* Determines the value of those cards by the rules of Blackjack.
* Shows the user the cards and the value of the hand.
* Recommends to the user whether to "hit" or "stay" based on that value.

Things to consider:

* What is the statistical probability that the user will "bust" (exceed
  21 points) for any given hand? How will you determine this?
* Aces can be either 1 or 11. How will you determine what value they will be?
  How will that affect your advice to "hit" or "stay?"
