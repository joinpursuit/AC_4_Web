# Events 2 - Exercises

## **Quadrant Toggle**

Using the files *quadrant-toggle.html* and *quadrant-toggle.js*, build a
page with four divs that each occupy a quarter of the window: `#topLeft`,
`#topRight`, `#bottomLeft`, and `#bottomRight`. When a user clicks any
quadrant, the `background-color` property of that `div` should change from
white to black, or from black to white, as appropriate. (If you prefer
other colors you are encouraged to use them.)

## **Bubble Factory**

Using the files *bubble-factory.html* and *bubble-factory.js*, build a
page with a single button that reads, "Build a Bubble". Search the
internet for an image of a bubble. When the button is clicked, use
`document.createElement()` to build an `img` element where `src` is a link to
that bubble and add it to the page. (This exercise is more fun with
smaller bubbles.)

## **Lister 1**

1. Using the files *lister.html* and *lister.js*, build a page with an empty unordered list and a form containing a single text input field. When the form is submitted, the page should not reload. Instead, use `document.createElement()` to build a list item (`li`) where the `innerText` is the value in the text input field. Add this list item to the end of the unordered list. Also, reset the value of the text input field to an empty string.

2. Continuing with the files *lister.\**, make is so that when a user clicks an item on the list, the text of the item receives a line-through styling to signify that it is completed. If the user clicks a completed item, the line-through styling should be removed.

3. Continuing with the files *lister.\**, add a button with the text, "Remove all completed items." When a user clicks the button, every finished item (ie every item with a line-through) should be removed from the page. HINT: You can use `Element.style.textDecoration` to see if an item is "completed".