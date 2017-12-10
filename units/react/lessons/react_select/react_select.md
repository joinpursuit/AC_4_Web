# React - `select`s

## Sources

* [Forms - React Docs](https://reactjs.org/docs/forms.html)
* [Lifting State Up - React Docs](https://reactjs.org/docs/lifting-state-up.html)
* [Thinking in React - React Docs](https://reactjs.org/docs/thinking-in-react.html)

### Lesson

In the last lesson we have seen different uses of a text input in react. We can apply similar principles to other common form components.

#### Select: [Likes Ice Cream](https://codesandbox.io/s/kwvqk2l405)

Let's say that we want to ask the users if they likes ice cream.

We will define our state to have a `likesIceCream` property, which we will initially set to the string `"yes"`.

```jsx
 constructor() {
    super();

    this.state = {
      likesIceCream: "yes"
    };
  }
  ...
```

We will then define a method called `handleLikesIceCream` that will change the `likesIceCream` state value based on an event.

```jsx
  handleLikesIceCream = e => {
    this.setState({
      likesIceCream: e.target.options[e.target.selectedIndex].value
    })
  }
```

Finally, we will create the `<select>` element with two `<option>`s, `yes!` and `nope`.

```jsx
render() {
    const { likesIceCream } = this.state;
    return (
      <div>
        <div> Do you like ice-cream? {" "}
          <select value={likesIceCream} onChange={this.handleLikesIceCream}>
            <option value="yes">Yes!</option>
            <option value="no">Nope</option>
          </select>
        </div>
        ...
```

Note that the above is a controlled element. When the user chooses an option, the `handleLikesIceCream` function will be called, changing the corresponding state property `likesIceCream`. Once we call the `setState` function, react will change the state, and then call the component's `render` function. This will give the `select` element its new value from the state.

We may want to render something based on the user's choice in the `select` input. For example, if the user likes ice cream, we will write `"great!"`, and if they don't we will write `"go home!"`. In react this is called _conditional rendering_, and is freqently done in the following manner:

```jsx
      ...
      <div>
        {likesIceCream === "yes" ?
          "Great!" : "Go Home"}
      </div>
      ...
```

Note that the above ternary condition will alway return one of two options. This means that at any point either "Great" or "Go Home" will be rendered.

#### Activity

Replace the text `"Great!"` in the conditional render above with a text input for the user's favorite ice cream flavor.

### [Favorite Color](https://codesandbox.io/s/0xnx34po8n)

In this example we have a `select`  component with multiple options. We are asking the user for their favorite color. We could hand code as many lines of `<option>` tags as needed, but this has a number of disatvantages. Mainly, we want to be able to display options based on existing data. For example, we may have an array of possible colors. In react components, we may define such array directly as property of the component (not of the state - since the colors array itself is not dynamic, what changes is only the choice of color),

```jsx
 constructor() {
    super();

    this.colors = ['red', 'green', 'blue', 'teal']

    this.state = {
      favoriteColor: ''
    };
  }
```

Next, we will write a `handleColorSelect` function:

```jsx
  handleColorSelect = e => {
    this.setState({
      favoriteColor: e.target.options[e.target.selectedIndex].value
    })
  };
```

Finally, in the render function, we will write the `select` tag as usual, but generate the `option` tags on the fly.

```jsx
  render() {
    const { favoriteColor } = this.state;
    return (
      <div>
        <div> Choose your favorite color {" "}
          <select value={favoriteColor} onChange={this.handleColorSelect}>
            {this.colors.map(color =>
              <option value={color}> {color} </option>)
            }
          </select>
```

Note above that we _map_ each color in the array to a `JSX` tag, with value and text equal to the value of the color.

### [Extracting Components](https://codesandbox.io/s/1yp3k5w1q7)

One of the ideas popularized by react is that of having multiple re-usable components. There is still a single top component - the one we pass to `ReactDom.render` as argument. But that component can render other components, which can in turn render other components, etc. Let's apply this idea to the `ColorSelect` component we have just created.

First, we will create a component called `Select` this component will take as `props`:

1. An array of values to render as `option`s
2. The current selected value
3. A function to call when the user chooses a new option.

```jsx
class Select extends React.Component {
  render() {
    const { values, selectedValue, handleSelect } = this.props
    // Using the es6 spread operator to create a new array
    const displayValues = ['', ...values]

    return (
      <select
        value={selectedValue}
        onChange={handleSelect}
      >
        {displayValues.map(val =>
          <option value={val}>{val}</option>)}
      </select>
    )
  }
}
```

Note that the component above has no `state`. It is entirely depended on the arguments provided to it as `props`. We indend for a another, _parent component_, to render this component. That parent component will keep in its own `state` the selected value.

Also note that we create a new array called `displayValues` (using the [es6 spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)). This array has an extra first value - the empty string. This way, when the `Select` component is initially rendered, there will be no value selected.

### Rewriting `ColorSelect`

Now let's rewrite the `ColorSelect` component. We wil change it's name to `App` - the customary name for the top-level (or _root_) component in react. The constructor function will stay the same, as will the `handleColorSelect`. Only the render function will change:

```jsx
  render() {
    const { favoriteColor } = this.state;

    return (
      <div>
        <p>
          Choose your favorite color: {" "}
          <Select
            selectedValue={favoriteColor}
            values={this.colors}
            handleSelect={this.handleColorSelect}
          />
        </p>
      </div>
    );
  }
```

The `render` function now renders the `Select` component. When a new option is chosen from the `Select` component, the `App` component's `handleColorSelect` method will be called, changing the `state` of `App` - specifically, the value of `favoriteColor`. This will in turn trigger the `App` component's `render` function, which will render the `Select` component again with the new `selectedValue`.

### [More `select`s](https://codesandbox.io/s/jny7l72m35)

Now that we have a generic `Select` component, we can easily render more select elements from our `App` components. Say we want to ask the user for choose his/her favorite animal from a list. We will first add an `animals` array to the `App` consturctor function:

```jsx
  constructor() {
    super();

    this.colors = ['red', 'green', 'blue', 'teal']
    this.animals = ['dog', 'cat',   'giraffe', 'chinchilla']

    this.state = {
      favColor: '',
      favAnimal: ''
    };
  }
```

We will then add add a `handleAnimalSelect` function:

```jsx
  handleAnimalSelect = e => {
    this.setState({
      favAnimal: e.target.value
    })
  }
```

And render another `Select` component in the `render` function:

```jsx
  ...
  <p>
    Choose your favorite animal: {" "}
    <Select
      values={this.animals}
      selectedValue={favAnimal}
      handleSelect={this.handleAnimalSelect}
    />
  </p>
  ...
```

We can repeat this process any number of times for additional `select`s.
