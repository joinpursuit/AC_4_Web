# React Radio Buttons

## Resources

* [Radio Buttons - mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
* [Radio Buttons in React - React Tips](http://react.tips/radio-buttons-in-reactjs/)
* [Radio Button - Wikipedia](https://en.wikipedia.org/wiki/Radio_button)

## Lesson

A radio button allows the user to choose only one of a predefined set of options. While in essence not much different from a `select`, radio buttons have a visual advantage in that all options are seen at once. In html and JSX, radio buttons are grouped based on the `name` attribute - from any number of radio buttons with the same name, only one can be selected at a time.

In React, we usually want to have _controlled_ radio buttons (i.e. to keep the selected value in sync with the state). To do this, we need to define the `checked` boolean attribute and an `onChange` function for each radio button.

### [Cats, Dogs or Giraffes](https://codesandbox.io/s/2z50371kyj)

Let's make a group of radio buttons to get the user's preffered animal between cats, dogs and giraffes. We will start by setting the state with a single variable - `prefAnimal` that we will use to keep track of the user's preferred animal.

```jsx
  constructor() {
    super();

    this.state = {
      prefAnimal: ""
    };
  }
```

Next we define the `render` function with three radio buttons. Here is the code for the first two:

```jsx
  ...
  <p> Do you prefer cats, dogs or giraffes? </p>
  <div>
    Cats
    <input
      type="radio"
      name="prefAnimal"
      value={"cats"}
      checked={prefAnimal === "cats"}
      onChange={this.handleRadioChange}
    />
  </div>
  <div>
    Dogs
    <input
      type="radio"
      name="prefAnimal"
      value={"dogs"}
      checked={prefAnimal === "dogs"}
      onChange={this.handleRadioChange}
    />
  </div>
  ...
```

Note that both radio buttons have the same `name` attribute - `prefAnimal`, and that it is _identical_ to the proprety name in the state. To see which one is checked we simply compare the value of state property `prefAnimal` to the value of the current radio button. Since `prefAnimal` can only have one value at a time, only one of the button will be checked. Finally, the `onChange` attribute points to the same function:

```jsx
  handleRadioChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
```

We are using the _computed property names_ es6 feature here, like we in the previous lesson. The name of the property will be evaluates in real time. If we add a second group of radio buttons, we can assign to them the same `onChange` method.

To the third radio button, we simply replicate the second one, changing the label & the value, and altering the `checked` attribute.

```jsx
  <div>
    Giraffes
    <input
      type="radio"
      name="prefAnimal"
      value={"giraffes"}
      checked={prefAnimal === "giraffes"}
      onChange={this.handleRadioChange}
    />
  </div>
```

The last thing we wish to do is add a `proceed` button, that will be enabled when the user has made a choice. We will do this by assigning a `disabled` property to the button, and making it equal to `!prefAnimal`. If prefAnimal is an empty string, it's value is _falsy_. Adding the `!` operator before it will convert it to the boolean `true`, which will result in the button being disabled. In other words, the button is disabled if there is no preferred animal (i.e. one has not been chosen yet).

```jsx
  <button disabled={!prefAnimal}> submit </button>
```

#### Activity 1

Add another radio button with an animal of your choice.

### [Radio Buttons from Array](https://codesandbox.io/s/4qxj11v3w0)

Rather then hardcoding the values for each radio button, we may want to generate radio buttons for an array. Let's rewrite the previous example using this approach. First, we will define an `animals` array in the components constructor function:

```jsx
  constructor() {
    super();
    this.animals = ["cats", "dogs", "giraffes"];

    this.state = {
      prefAnimal: ""
    };
  }
```

Then, in the render function, we will iterate over the array, maping each element to a radio button.

```jsx
  <p> Do you prefer cats, dogs or giraffes? </p>
  {this.animals.map(animal => (
    <div>
      {animal}
      <input
        type="radio"
        name="prefAnimal"
        value={animal}
        checked={prefAnimal === animal}
        onChange={this.handleRadioChange}
      />
    </div>
  ))}
```

And that's it. Now to add another radio button, all we have to do is add another animal to the `animals` array.

#### Activity 2

1. Add three animal of your choice to the `animals` array.
2. Change the caption: `do you prefer ________ ` to dynamically display the animal names, based on the `animals` array.  **hint**: use an array method.