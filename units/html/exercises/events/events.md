# Events - Exercises

## Reverser

Using the files *reverser.html* and *reverser.js*, build a page with a form that includes one input field, a submit button, and a paragraph element with the text: "Please type something". When the user submits the form, the text of the paragraph element should change to be the reverse of the string. HINT: Use .split('').reverse().join('').

You'll need to use .preventDefault() to prevent the page from refreshing when the user submits the form.

Also, the "submit" button should have the text "Reverse" instead of "Submit".

## Clicker

Using the files *clicker.html* and *clicker.js*, build a blank web page with only a body element. (Of course you may still import your script.) If the user clicks on the left half of the page, use .style.backgroundColor to change the page's color to mediumaquamarine. If the user clicks on the right half of the page, change the page's color to peachpuff. HINT: Use window.innerHeight and window.innerWidth.

## Echo-er

1. Using the files *echo-er.html* and *echo-er.js*, build a page with an h1 element. Every time the user presses a key, the innerText of the h1 element should change to show what key was pressed.

2. Link a file *echo-er.css* to give the page a rebeccapurple background, center the h1 element, and place the h1 element 100px from the top of the page.

3. Continuing with the files *echo-er.html*, *echo-er.js*, and *echo-er.css* add a text-decoration: underline property to the h1 element when the user types a capital letter, and remove it when the user types a period, question mark, or exclamation point.

4. Now, when the user presses a key, the value should be appended to the innerText of the h1 element (instead of replacing innerText with the new key).