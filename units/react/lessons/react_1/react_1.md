# React 1

## Sources

* [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [React - Official Website](https://reactjs.org/)
* [Rendering Elements - React Docs](https://reactjs.org/docs/rendering-elements.html)
* [React.Component - React Docs](https://reactjs.org/docs/react-component.html)
* [Handling Events - React Docs](https://reactjs.org/docs/handling-events.html)
* [CodeSandbox - An online code editor for React](https://codesandbox.io)

## Lesson

React is described as "a javascript library for building user interfaces." When you read that description, it probably doesn't mean much. We will begin learning about React by looking at examples that gradually increase in complexity, and eventually, we'll circle back to the aforementioned description.

### ES6 Classess

Since React uses ES6 `class`es, we will need to get acquainted with these first. An ES6 class is not different in essence than a JavaScript constructor function. This means that a class is really a function we can use to create an object with specific properties, methods, and prototypes.

Let's have a look at a constructor function and its corresponding class definition:

The following is a constructor function for an `Animal` object, along with a method defined on the constructor's prototype.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function(words) {
  return `${this.name} says "${words}"`;
}

let dog = new Animal('Luna')
dog.speak('woof')
// => 'Luna says "woof"'
```

Here is the corresponding `class` definition:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak(words) {
    return `${this.name} says "${words}"`
  }
}

let myDog = new Animal('Luna')
myDog.speak('woof')
// => 'Luna says "woof"'
```

The `class` combines the constructor function and the prototype methods. The constructor is the lowercase `constructor` and will be invoked whenever we create a new object using the class. The other methods will be automatically be added to the common prototype.

Aside of the class definition, our code is identical.

### Exdending classes

Another feature available with classes is the `extends` keyword. This allows us to define a type of object with the same methods (and properties) of an existing type of object, plus whatever new methods and properties we want to define. For example, we may define an object of type `Dog` that extends the `Animal` class:

```js
class Dog extends Animal {
  constructor(name, breed){
    super(name)
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks.`
  }
}

let myDog = new Dog('Luna')
myDog.speak('haha!')
// => 'Luna says "haha!"'
myDog.bark()
// => 'Luna barks.'
```

In this case, the method `speak` is a method on the `Animal` class, and the method `bark` is unique to the `Dog` class. We can make Dogs `speak`, but we cannot make Animals `bark`. In other words, all forks are utensils, but not all utensils are forks.

When extending a `class`, we always need to call `super` with the arguments the _parent_ class constructor was expecting. Above, the `super` function calls the constructor for the `Animal` class with the provided name. We may omit both `super` and `constructor` entirely if we do _not_ need to add anything to the constructor:

```js
class MooAnimal extends Animal {
  sayMoo() {
    return this.speak('moo!')
  }
}

let myMooAnimal = new MooAnimal('Moses')
myMooAnimal.sayMoo()
// => 'Moses says "moo!"'
```

Remember that each `MooAnimal` has access (through its prototype) to all the methods of `Animal`. This is how we are able to call `this.speak` inside the `sayMoo` method for `MooAnimal`.

### Classes in React

In React, we define classes, but we do not need to create instances of them (i.e. no use of `new`). We only need to define each class to extend the `React.Component` class and let React handle the rest. Classes in React are also called _components_. We will gradually learn the significance of this naming convention.

### The Code Sandbox

For the time being, we will be using an online code editor for React called [Code Sandbox](https://codesandbox.io/). Later on, we will learn how to set up React locally. To save your work in the online editor, you will need to sign in with Github.

The files for the current project are available in the menu to the left. These may also available as tabs, although the tabs may be closed. To keep a tab open, click on a file from the left-side menu and then press `<ctrl> + <s>`.

**Most of the titles to follow link to code examples in the sandbox.**

### [Our first React Example](https://codesandbox.io/s/5zqmz1l7rk)

Our first React example consists of two files: `index.html` and `index.js`. Also, note the word `Template` on the left-hand-side menu and below it a link to `create-react-app`.

![left side menu](assets/left-side-menu.png?raw=true)

We will discuss `create-react-app` at length in the future. For now, it's sufficient to know that this project configures everything we need to make react work.

### Settings

It is recommended that you disable `Prettify on save` in the options menu - obtained by click on the gear icon in the top-right corner.

![sandbox settings](assets/sandbox_settings.png?raw=true)

You can always format the document by right-clicking and choosing `format document`, or by using the keyboard combination `<ctrl>+<shift>+<I>`.

### `index.html`

Note that the we only have a single `div` element in the document body.

```html
<!doctype html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>First React Component</title>
  <style>
    .myClass {
      background-color: green;
    }
  </style>
</head>

<body>
  <div id="root"></div>
</body>

</html>
```

This is common in React apps. React will be generating the HTML for us as needed.

### `index.js`

The index.js file containes some parts we have seen before. However, they may seem strangely out-of-place.

```jsx
const React = require("react");
const ReactDom = require("react-dom");

ReactDom.render(
  <div> hello </div>,
  document.getElementById("root")
);
```

Let's start from the top:

#### `require` in the front-end

We have seen `require` statements before when working with Node. Some recent developments in the JavaScript universe have made it possible to load packages into the front-end as well. We will discuss in the future both how this is done, and how to configure it on your local machines. Regardless of these details, the end result is the same as in our Node projects. There are two packages being imported:

* `react` being imported as `React`. This package, even though not directly used, must be imported into every `js` file that uses react.
* `react-dom` being imported into the `ReactDom` varaible. This one is clearly used in the `ReactDom.render` function.

#### ReactDom.render and HTML in JS

While `ReactDom.render` looks like a regular function call, something truly weird seems to be happening inside of it. Namely, the first argument looks like an html tag.

```jsx
ReactDom.render(
  <div className='myClass'> hello </div>,
  ...
```

This is not really the case. Behind the scenes, this html-looking tag is translated into JavaScript. Specifically, it is translated to a function that tells React to create this `div` element. That function looks like this:

```js
React.createElement(
  'div',
  { className: 'myClass' },
  ' hello '
)
```

The html-looking syntax is called [JSX](https://reactjs.org/docs/jsx-in-depth.html). JSX exists for the convenience of developers, as it is much easier to both read and write then the long-hand `createElement` syntax.

However, we can already see in the example above the first difference between JSX and HTML syntax.

* In JSX we write `className` instead of `class`. The reason for this is that JSX eventually becomes JavaScript, and `class` is a reserved keyword in javascript (along with `var`, `let`, `function`, etc.). So for most HTML keywords that have the potential to conflict with JavaScript, there is a similar-but-different JSX syntax.

#### Activity: ReactDom.render generates HTML

Inspect the generated HTML and find the rendered elements. This will be nested quite a bit, as there are many other things happening on the page. You should be able to see the following:

![inspect](assets/inspect.png?raw=true)

The element `<div id='root'>` that we defined in the `index.html` file is still there. Nested within it we can see the JSX element defined in `ReactDom.render`. The element to generate HTML under was passed in the second argument to `ReactDom.render`:

```jsx
ReactDom.render(
  <div> hello </div> // what to render,
  document.getElementById("root")  // where to render
);
```

### [Our first React Component](https://codesandbox.io/s/7y3pp513jx)

Naturally, we would want to render more than a single JSX tag into our HTML document. In react, we separate the HTML we wish to render into independent pieces called [components](https://reactjs.org/docs/react-component.html). One way to define a react component is to create a `class` that extends the `React.Component` class. In our newly created class, the least we need to do is define a function called `render` that will return the JSX elements that we wish to render.

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <h1> I am a React Component </h1>
        <div className='myClass'> Hello </div>
      </div>
    )
  }
}
```

Note that a React component is also a JSX element. For this reason we can provide the `App` component as the first argument to `ReactDom.render`

```jsx
ReactDom.render(
  <App />,
  document.getElementById('root')
);
```

When we render a component in this fashion, what React will do is take all the JSX elements defined within the component's `render` function. So, we can think about each component as a function that returns some JSX elements.

### JSX Closing Tags

In JSX, every element must have a closing tag. When it comes to tags like `div` and `p`- this behavior is the same as in HTML. However, in cases when there is no separate closing tag, we need to close the element with `/>` and not just with `>`.

### `props`

As is the case with functions, each component can also accept arguments. The arguments to a react component are called `props`.

### [Our First Props](https://codesandbox.io/s/21q40zrn6j)

To pass an argument (i.e. prop) to a react component, we do the following:

```jsx
ReactDom.render(
  <App firstName='Loona'/>,
  ...
);
```

The name of the argument passed above is `firstName` and its value is `Loona`. Now this argument will be available to our `App` component as a property of `this.props`:

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.firstName}
        </h1>
        ...
      </div>
    )
  }
}
```

Note that to access a JavaScript value from within JSX, we enclose that value with curly braces (`{...}`).

### `state`

A component can also have its own variables. All of a component's variables must be stored within a property of called `state`. This property is a plain object. It is first defined within a components `constructor` function, and after this may be accessed from within the component as usual with `this.state.[property name]`. Unlike a regular property, `state` may _not_ be changed directly, but only using a special function called `setState`. More on this shortly.

### [Our First Stateful Component](https://codesandbox.io/s/2wvoll9wvr)

Note that since we are defining a `constructor` function on class that extends another class, we must include a call to `super` in order for the parent component to work:

```jsx
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: 'Luna'
    }
  }
  ...
```

Following the definition of the `state` property, we use it as usual:

```jsx
...
  render() {
    return (
      <div>
        <h1> Hello {this.state.firstName} </h1>
        <div className='myClass'>
          I am a stateful React component
        </div>
      </div>
    )
  }
...
```

### [Changing State](https://codesandbox.io/s/qk902r2ymw)

In React, the state of a component changes in response to events. Events are typically triggered in response to (user) actions. For example, we may want to have a component with a button and a counter that displays how many times the button was clicked. In our component's constructor function, we set the state with a `count` variable.

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  ...
```

We then define a function that will increment the count when some button is clicked. We will call this function `handleClick`:

```jsx
  handleClick = () => {
    this.setState({
      count: this.state.count + 1;
    })
  }
```

Note two important points:

#### Point #1:  Method Syntax

The syntax of this method looks different than usual. We could have define the method like this:

```jsx
  handleClick(){
    ...
  }
```

but defining it as `handleClick = () => {...}` ensures it will be bound properly to the `Counter` class. Recall some issues we had with the `this` keyword being lost or pointing at the wrong thing. This (recent) syntax is a simple solution to that problem. We will discuss this issue in depth in later lessons. Meanwhile, remember the following: if you want a function that uses the `this` keyword and will be called in response to an event, define it with the syntax we have used here.

#### Point #2: Using `setState`

In React, we never change `state` directly, but only through the `setState` function. This function is defined in the `React.Component` class we always extend, and accepts a single argument: an object with the parts of the state that we want to change. If our component had other properties to the `state` object other than `count`, these would remain unchanged in our example, since we are passing an object with only a `count` property. Once the `setState` method has changed the state of our component, it will automatically call the `render` function. This way, the latest information from `state`- in this case the count- will always appear to the user.

#### Activity: Rerendering Efficiently

Note that React is quite efficient at rendering and re-rendering. Even though the `render` function is called on every change to `state`, React would only modify the parts of the HTML that have changed.

> Ex. Inspect the html of the rendered elements. As you click on the button, note which parts of the page get re-rendered (they will momentarily flash in blue).

![counter screenshot](assets/counter.png?raw=true)

