# React Todos 1 - Exercises

## Dynamic Select

* Create Aatext input form with an `add` button.
* Create a select element that will be empty initially. When the user submits some text from the input, add this text as an option to the select.
* Create a `submit` button. This button will be disabled as long as the user had not selected a value from the select (to select a value, the user will need to add it first).
* When the submit is not disabled and the user clicks on it. Display the following text below the select: `"You selected"` followed by the selected value.

![select screenshot](assets/select.png)

## Dynamic Radio Button Group

Repeat the `make a select` exercise above, this time adding a radio button to a radio button group.

## Double Trouble

Create two todos in one app. This means two inputs and two todo lists.  One should have a heading `super important` and the other just `important`.

One solution to the above is very simple, but it involves letting each todo list completely manage it's own state. Alternatively, consider how you would keep track of both todo lists in the same component. One solution to this type of problems in react are state management libraries such as [redux](https://redux.js.org/), which we will cover in the next unit.