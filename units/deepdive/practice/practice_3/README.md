# Practice Assignment 3

## Instructions

API calls aren't just formatting AJAX requests. They're about familiarizing yourself with an API, making the right API calls, and using your data effectively. Today, we're going to be exploring a new API, the [Deck of Cards API](http://deckofcardsapi.com/), to perform a real-world activity: A game of poker.

We will be using [Texas Hold 'Em](https://en.wikipedia.org/wiki/Texas_hold_%27em) rules. We won't be betting--hands will just have winners and losers. You don't have to evaluate the quality of hands, at the start. You just have to shuffle, deal, and draw. Think of this as making a deck of cards that you can use to play Poker with friends in real time.

### Level 1

We're just playing with the API for now. No need to render complex HTML or anything. Plain old JavaScript is fine.

Take a look at the different capabilities of the API. What can you do? Really *play*. The more you play now, the fewer headaches you'll have later.

**Hint**: How would you do players' hands? How would you shuffle? Is it possible to use the `deck_id` feature to share a deck between different players on different computers?

### Level 2

Create buttons with event listeners to trigger AJAX requests for drawing cards and allocating them to piles according to the rules of Texas Hold 'Em.

Now, use `<img>` tags and the DOM to render cards visually using the cards' built-in `image` property.

Finally, try playing with your neighbors. Try playing on one computer, and try playing across multiple computers using the same `deck_id`.

### Level 3

Nice work. This is above-and-beyond. See if you can use the cards' built-in `value` property to evaluate the quality of each hand and determine a winner. Render that winner on the DOM after all cards are dealt.

Extra-extra credit: Create a system for betting by keeping track of users by name. Users should have properties, including, perhaps, their hands and their wallets. How will your app handle user registration, betting, etc? This is **your** app. We can give you advice for how you might set it up, but at the end of the day, it's up to you how it works.

