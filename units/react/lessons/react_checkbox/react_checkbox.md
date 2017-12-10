# React `checkbox`es

## Resources

* [Computed Property Keys - 2ality](http://2ality.com/2014/12/es6-oop.html#computed-property-keys)
* [Forms - React Docs](https://reactjs.org/docs/forms.html)
* [Components and Props - React Docs](https://reactjs.org/docs/components-and-props.html)

## Lesson

### [Not a Robot](https://codesandbox.io/s/m4y7xkxrl9)

Let's make a simple react component to check whether the user is a robot. If the checkbox is checked, If the checkbox is checked, a button titled `proceed` will be displayed. We will begin by writing a constructor function with a single boolean property `notARobot`, initially set to `false`.

```jsx
  constructor() {
    super();
    this.state = {
      notARobot: false
    };
  }
```

Now we will write a render with a `checkbox` JSX element:

```jsx
 render() {
    const { notARobot } = this.state;

    return (
      <div>
        <p> I am not a robot{" "}
          <input
            type="checkbox"
            checked={notARobot}
            onChange={this.handleRobotCheckboxChange}
          />
        </p>
        ...
```

Note that we assign a boolean value for the `checked` attribute. Now we just need to implement the `handleCheckboxChange` function to change the state when the checkbox is clicked.

Here is one way to implement that function:

```jsx
  handleRobotCheckboxChange = (e) => {
    this.setState({
      notARobot: e.target.checked
    })
  }
```

The above looks similar to the `handle______` functions we have been writing before. Except that we are using the `target`s checked boolean property instead of the value.

### Computed Property Names

If we wish to have many checkboxes in our page, there is a shortcut that allows us to write a single `handleCheckboxChange` function that will work for all of them:

```jsx
  handleCheckboxChange = (e) => {
    // Using ES6 Computed property keys
    this.setState({
      [e.target.name]: e.target.checked
    })
  }
```

Above we are using the es6 [computed property keys (=names)](http://2ality.com/2014/12/es6-oop.html#computed-property-keys) feature. This allows us to create an object with a property that will be determined as the program runs. All that is required now is to assign each checkbox a name attribute that will be identical to the corresponding property name in the `state`:

```jsx
render() {
      ...
        <p> I am not a robot{" "}
          <input
            name="NotARobot"
            type="checkbox"
            checked={notARobot}
            onChange={this.handleCheckboxChange}
          />
        </p>
        ...
```

### [Computed Property Names in `select`s](https://codesandbox.io/s/9l7q1n459o)

We can use computed property names with our `select` elements as well. We will do this by creating a function `handleSelect`:

```jsx
handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
};
```

If the `select` element is rendered from a component (as we did in the previous lesson), we will first need to pass that component the `name` as a `prop`.

```jsx
render() {
    const { favColor, favAnimal } = this.state;

    return (
      <div>
        <p>
          Favorite color: {" "}
          <Select
            name='favColor'
            values={this.colors}
            selectedValue={favColor}
            handleSelect={this.hadnleSelect}
          />
        </p>
        <p>
          Favorite animal: {" "}
          <Select
            name='favAnimal'
            values={this.animals}
            selectedValue={favAnimal}
            handleSelect={this.handleSelect}
          />
        </p>
      </div>
    );
  }
}
```

Note that the `Select` is a component and and not a `JSX` element. We will assign the name as an attribute inside the render function of the `Select` component:

```jsx
class Select extends React.Component {
  render() {
    const { name, values, selectedValue, handleSelect } = this.props;
    const displayValues = ["", ...values];

    return (
      <select
        name={name}
        value={selectedValue}
        onChange={handleSelect}
      >
        {displayValues.map(val => <option value={val}>{val}</option>)}
      </select>
    );
  }
}
```

### [Cat and Pizza](https://codesandbox.io/s/p3852k2k2m)

Let's go back to checkboxes and use them for something fun. We will make a component that renders two questions, each with it's own checkbox:

![cat pizza unchecked](assets/cat_pizza_unchecked.png)

If the user checks the first box, an image of a pizza will be displayed. If the user checks the second box, an image of a cat will be displayed. If the user checks both boxes, an image of a cat eating a pizza will be displayed.

Starting with the consturctor, we will assign two boolean values to our state: `likesPizza` and `likesCats`.

```jsx
 constructor() {
    super();

    this.state = {
      likesPizza: false,
      likesCats: false
    };
  }
```

We will then create the `handleCheckBoxChange` function using computed property name:

```jsx
 handleCheckBoxChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };
```

Our `render` function will start with the two checkboxes:

```jsx
render() {
    const { likesPizza, likesCats } = this.state;

    return (
      <div>
        <p>
          Do you like pizza?
          <input
            name="likesPizza"
            type="checkbox"
            checked={likesPizza}
            onChange={this.handleCheckBoxChange}
          />
        </p>
        <p>
          Do you like cats?
          <input
            name="likesCats"
            type="checkbox"
            checked={likesCats}
            onChange={this.handleCheckBoxChange}
          />
        </p>
      ...
```

So far there is nothing unexpected. Now to render the image, we will need a conditional of some sort. We could use a nested ternary:

```jsx
  { likesCats && likesPizza ?
    ...
    : likesCats ?
      ...
      : likesPizza ?
        ...
        : ''}
```

But the above code can be hard to read quickly get out of hand. When a piece of code in the `render` function seems to complicated for its own good, that is a good sign we need another component.

#### Functional Components

Let's call this component `ShowImage`. All we need it to do is take the two boolean values as props, and then go through a bunch of conditional statements that determine which image to return. This component is no different than a function, one that happens to return a `JSX` image element. There is a shorter syntax to write this kind of component in react:

```jsx
const ShowImage = props => {
  const { likesCats, likesPizza } = props;

  return ...
}
```

If you think the above looks like a function - you are right. In react this is called a . This kind of component can have no state of it's own. It simply takes some props as arguments, and returns some `JSX` elements. Here is the code for this component:

```jsx
const ShowImage = props => {
  const { likesCats, likesPizza } = props;

  if (likesPizza && likesCats) {
    return (
      <img
        style={imgStyle}
        alt="cat eating pizza"
        src="http://slice.seriouseats.com/images/2013/09/20130926-crazy-pizza-cat.jpg"
      />
    );
  } else if (likesPizza) {
    return (
      <img
        style={imgStyle}
        alt="pizza"
        src="http://www.academiabarilla.com/crop_pizzamargherita_xhm1p-2_0835_0310.jpg"
      />
    );
  } else if (likesCats) {
    return (
      <img
        style={imgStyle}
        alt="cat"
        src="https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781"
      />
    );
  } else {
    return "";
  }
};
```

Above we check all 4 possible cases for the two boolean values, and return an image accoringly. Note that we are also defining the in a new way: as a javascript object:

```jsx
const imgStyle = {
  width: "200px"
};
```

We will discuss the different options of styling in react in future lessons.

Since `ShowImage` is still a react component, we will place it as usual in the `App` component's `render` function:

```jsx
  ...
  <p>
    <ShowImage likesCats={likesCats} likesPizza={likesPizza} />
  </p>
  ...
```

### Activity

Create three arrays of image urls: one for cats, one for pizza, and one for cat's eating pizza. In the `ShowImage` component above - for each conditional, return a random image from the corresponding array.