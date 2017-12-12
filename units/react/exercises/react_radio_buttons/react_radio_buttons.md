# React Radio Buttons - Exercises

## Radio Poem

Modify the `Reader` component from the text input lesson to display radio buttons for the font sizes. Add a fourth font size: `humongous`.

![radio reader](assets/radio_reader.png?raw=true)

Use the following [inline styles](https://www.reactenlightenment.com/react-jsx/5.6.html) instead of those in the `html` document:

```js
const fontSizes = {
  small: {
    fontSize: "12px"
  },
  medium: {
    fontSize: "14px"
  },
  large: {
    fontSize: "16px"
  },
  humongous: {
    fontSize: "48px"
  }
};
```

## arrToNames

Create an `arrToNames` function that will take an array of strings, such as `['cats', 'dogs', 'giraffes']` and return a single string where:

* All values until the last one are separted by commas.
* The second to last and the last are value are separated as follows: `" ___, or ___ "`

For example:

```js
const animals = ['cats', 'dogs', 'giraffes']
arrToNames(animals)
// cats, dogs, or giraffes
```

### Two radio groups

* Create a React component with two radio groups: one for the user to select their preferred animal, and one for the user to select their preferred color.
* Add a submit button that will be enabled only if the user selected both an animal and a color. When the button is clicked, alert the user with their choice of animal and color.

### Advanced: Radio Group Component

Create a stateless `RadioGroup` component that will render a group of radio buttons. It will take the following as props:

* `name`
* `values`
* `selectedValues`
* `handleChange`

Test this component by rendering it from the `App` component from the previous exercise or from the lesson.