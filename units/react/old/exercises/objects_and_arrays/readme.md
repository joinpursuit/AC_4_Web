# Final React Exercise

## Concentration

In this exercise, we're making the classic matching game [Concentration](https://en.wikipedia.org/wiki/Concentration_(game)) using React.

Use the images in the "cards" file of this directory for your card graphics. You can get direct image links by right-clicking on them and clicking "open image in new tab." The link in your browser is a direct link to the image, which you can pass to an `img` element in JSX.

The `back` image can serve as your card back. The rest of the images will be your icons to match. Your game board will be a 4 by 4 square of cards.

There's no template for this. You're building it from scratch in Code Sandbox. Things to consider:

* How are you going to keep track of the cards without showing them to the user? (*hint: functional component?*)
* How are you going to check if the two cards the user picks are the same?
* If their choice is incorrect, how are you going to:
  - Show the user both cards, and...
  - Revert the cards to their card backs?
* How are you going to check if the game is complete?