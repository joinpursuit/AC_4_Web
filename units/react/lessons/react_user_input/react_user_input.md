# React - More User Input

## Sources

* [Forms - React Docs](https://reactjs.org/docs/forms.html)

### Lesson

In the last lesson we have seen different uses of a text input in react. We can apply similar principles to other common form components.

#### [Likes Ice Cream](https://codesandbox.io/s/kwvqk2l405)

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
      likesIceCream: e.target.value
    })
  }
```

Finally, we will first create the `<select>` element with two `<option>`s, `yes!` and `nope`. 

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

Note that the above is a controlled element. When the user chooses an option, the `handleLikesIceCream` function will be called, changing the corresponding state property `likesIceCream`. Once we call the `setState` function, react will change the state, and then call the component's render function. This will give the `select` element its new value from the state.

We may want to render something based on the user's choice in the select input. For example, if the like ice cream, we may write, `"great!"`, and if the don't we will write `"go home!"`.
In react this is called conditional rendering, and is freqently done in the following manner:

```jsx
      ...
      <div>
        {likesIceCream === "yes" ?
          "Great!" : "Go Home"}
      </div>
      ...
```

Note that the above ternary condition will alway return one of two options. This means that at any point in our component, either "Great" or "Go Home" will be rendered.

#### Activity

Replace the conditional render above with a text input for the user's favorite ice cream flavor.

### [Favorite Color](https://codesandbox.io/s/0xnx34po8n)

In this example we have a `select`  component with multiple options. We are asking the user for their favorite color. We could hand code as many lines of `<option>` tags as needed, but this has a number of disatvantages. Mainly, we want to be able to display options based on existing data. For example, we may have an array of possible colors. In react components, we may define such array directly as property of the component (not of the state - since the colors array itself is not dynamic, what changes is only the choice of color),

```jsx
 constructor() {
    super();

    this.colors = ['red', 'green', 'blue', 'teal']

    this.state = {
      favoriteColor: null
    };
  }
```

Next, we will write a `handleColorSelect` function:

```jsx
  handleColorSelect = e => {
    this.setState({
      name: e.target.value
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

Note above that we _map_ each color in the array to a `JSX` tag, with value and text equal to the value of the color. React knows how to handle the resulting array of JSX elements will render it to html.