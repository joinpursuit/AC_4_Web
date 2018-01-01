# React Router 1

## Resources

* [React Router - Official Website](https://reacttraining.com/react-router/)
* [React Router - github](https://github.com/ReactTraining/react-router)
* [react-router-dom - github](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [A Simple React Router v4 Tutorial - Paul Sherman](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
  * [Live Example](https://codesandbox.io/s/vVoQVk78)
* [All About React Router 4 - CSS Tricks](https://css-tricks.com/react-router-4/)
* [Composition vs Inheritance - React Docs](https://reactjs.org/docs/composition-vs-inheritance.html)

## Lesson

Today we will learn about client-side routing in React. Client-side routing works in a similar fashion to server-side routing (as we've seen in Express), except that it works within the browser. In React, client-side routing is most frequently implemented using a library called [React Router](https://reacttraining.com/react-router/).

### [Personal Website](https://codesandbox.io/s/1r165o97o7)

We will start with an example of a simple personal website (click on the title to navigate to the live-code version). This web app consists of several files:

![project structure + dependencies](assets/project_structure.png?raw=true)

Out of these `About.js`, `Skills.js` and `Welcome.js` are stateless components, each representing a "page" in the website. `index.js` is where the routing logic happens.

Note that we are also adding `react-router-dom` as a dependency to our project view the NPM packages:

![dependencies](assets/dependecies.png?raw=true)

In addition to importing the `React` library and the `render` function from the `react-dom` library, we are importing `BrowserRouter`, `Route` and `Link` from `react-router-dom`:

```js
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
```

Note that we are passing something different than usual to the `ReactDom.render` (or in this case simply `render`) function:

```jsx
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

The `BrowserRouter` is a component imported (along with `Route` and `Link`) from the `react-router-dom` library. What we are seeing above is an instance of [component composition](https://reactjs.org/docs/composition-vs-inheritance.html).

### Component Composition

Component composition is similar to function composition, in which the output of one function is given as input to another:

```js
const add = (n1, n2) => n1 + n2;
const double = n => n * n;
double(add(2, 1) /* => 3 */); // => 6
```

In React, we compose components by nesting one within the other. The value returned by the nested (or _child_) component's render function will be passed as a prop to the _parent_ component. Let's see it in action in the [following example](https://codesandbox.io/s/pk7wn5vvoj).

### [Fancy Border](https://codesandbox.io/s/pk7wn5vvoj)

This example features a simple welcome message surronded by a border (defined in the css `fancy-border` class). The component that renders the border is called `FancyBorder`:

```jsx
const FancyBorder = props => (
  <div className="fancy-border">{props.children}</div>
);
```

Note that this component only does two things:

1. Declare a div with the class `fancy-border`.
2. Render the `props.children`

The `props.children` in `2` will be the output of the render function of a child component. The `FancyBorder` class does not need to know in advance what that class is going to be. In our example, we are using the `App` component to return `WelcomeDialog` as a child component of `FancyBorder`:

```jsx
const App = () => (
  <FancyBorder>
    <WelcomeDialog />
  </FancyBorder>
);
```

Where `WelcomeDialog` returns some `JSX` elements:

```jsx
const WelcomeDialog = () => (
  <div>
    <h1>Welcome</h1>
    <p>Thank you for visiting our website!</p>
  </div>
);
```

All of this results in the following HTML:

```html
<div id="root">
  <div class="fancy-border">
    <div>
      <h1>Welcome</h1>
      <p>Thank you for visiting our website!</p>
    </div>
  </div>
</div>
```

Now, let's go back and see how this applies to react-router.

### Back to the [Personal Website](https://codesandbox.io/s/1r165o97o7)

As we've seen above, to make react-router work we define `BrowserRouter` as the root component in our app:

```jsx
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

Everything that's returned by component's `render` functions (or components _themselves_ in case of functional components) will be passed to `BrowserRouter`, which will choose what to return based on our routes and conditions. Since `BrowserRouter` is the root component, whatever it returns in its `render` function will be passed to `ReactDom.render` and rendered as html. In order to define the routes and conditions we will use two other components from the `react-router-dom` library: `Route` and `Link`.

### `Route` and `Link`

In our personal website example, the routes are defined inside `App` using `Route` and `Link`:

```jsx
const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/about">About Me</Link>
      {"  "}
      <Link to="/skills">Skills</Link>
    </nav>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
    </div>
  </div>
);
```

#### `Link`

The `Link` component works in a similar fashion to an `<a>` element, except that it does not result in a page reload. Note that when you click on any of the rendered links, the route changes. This may be easier to see on the [separate-page live-code](https://1r165o97o7.codesandbox.io/).

Every click still results in a re-render, and as a result our components will be able to access the new `url`. The `Route` components are the ones that determine what will get rendered.

#### `Route`

The following lines in the `App` component determine what will get rendered, based on the `url`:

```jsx
  <Route exact path="/" component={Welcome} />
  <Route path="/about" component={About} />
  <Route path="/skills" component={Skills} />
```

Note that each route gets as props a string for `path` and a React component for `component`. If the current `url` matches the string defined in path, the provided component will be rendered.

### Matching a path and `exact`

The default matching algorithm for `path`s will match not only complete strings but also partial ones. This means that `<Route path="/a" component={MyComponent}/>` will render `MyComponent` if the URL is any string that starts with the letter `a`, such as `"about"`. This will immediately be problematic in case of the home route `/`, since this will match any other route (all routes start with `/`). In our example, we provided the `exact` keyword as a prop to the `Route` for `/` in order to only match if the route is exactly `/`:

```jsx
<Route exact path="/" component={Welcome} />
```

#### Inclusive Routing

Also note that the routing is inclusive by default. This means that any number of routes can be rendered. If we remove the `exact` keyword from the home route and click on `About`, _both_ the `Welcome` and `About` components will be rendered. We will see as we go further how to render only a single `<Route />`, and when the possibility of rendering multiple `<Route />`s can come to our adventage.
