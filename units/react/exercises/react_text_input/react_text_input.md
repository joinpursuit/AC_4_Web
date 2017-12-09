# React Text Input Exercises

## Reverser

Create a react component with an input field and a paragraph. The paragraph will always display the reverse of the user input in the input field.

## Identical Passwords

Create a react component that will compare the password of two input fields. Store in your state three properties: `password1`, `password2`, and `samePassword`. The password values should initially be an empty string, and the value for `samePassword` should be true.

As the user inserts input into the password fields, display a message below the password to indicate if these are identical or not.

### Bonus

Add a `clear` button that will clear both password fields.

## Reader

Create a react component called `Reader` that will display the first two verses of the following poem:

```text
You are old, Father William (Carroll)
“You are old, father William,” the young man said,
“And your hair has become very white;
And yet you incessantly stand on your head–
Do you think, at your age, it is right?”

“In my youth,” father William replied to his son,
“I feared it might injure the brain;
But now that I’m perfectly sure I have none,
Why, I do it again and again.”
```

Define the poem outside the class, and pass it the text as a prop.

Use a `<pre>` tag to display the poem in your `render` function. In your html file, define three css classes under a `<style>` tag:

```css
  .small {
    font-size: 12px;
  }
  .medium {
    font-size: 14px;
  }
  .large {
    font-size: 16px;
  }
```

Above the poem, include a text input titled `fontSize` which will display the value of a state property with the same name. Set it initially to the string `'small'`. Whenever the `render` function is called, check if `fontSize` has one of the values `small`, `medium` or `large`. If it does, assign the appropriate class to the `pre` tag that displays the poem. If the value of `fontSize` is something else, assign the class `small` to the `pre` tag.