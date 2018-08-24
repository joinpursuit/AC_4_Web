# React 1

## Sources

* [Why React?](https://reactjs.org/blog/2013/06/05/why-react.html)
* [React - Official Website](https://reactjs.org/)
* [Rendering Elements - React Docs](https://reactjs.org/docs/rendering-elements.html)
* [React.Component - React Docs](https://reactjs.org/docs/react-component.html)
* [Handling Events - React Docs](https://reactjs.org/docs/handling-events.html)
* [CodeSandbox - An online code editor for React](https://codesandbox.io)

## Introduction

React is described as "a JavaScript library for building user interfaces." When you read that description, it probably doesn't mean much. Here's the real takeaway: Once you learn React, you'll never want to go back to the DOM. It's a convenient, well-maintained frontend framework for making websites - websites as simple as the little apps we'll make today, and as complicated as Facebook.

## From Classes To Components

In React, we define classes, but we do not need to create instances of them (i.e. no use of `new`). React will create instances of our classes automatically without our prompting. It knows how to do this, partially, because of *class inheritance*.

When we create a class in React, usually, we add `extends React.Component` to tell it to inherit from React's Component class. Because React is an NPM module, we can't see this Component class unless we poke around in our `node_modules` folder. However, having our React classes inherit from the Component class lets us do a ton of cool stuff. In fact, we usually don't refer to React classes as classes - we refer to them as **components**.

Components are the basic building blocks of React websites. We use components for a lot of different things. Components can store information on the frontend and render it to the user. They can accept user input and fire AJAX requests to APIs. **Very little happens in React without a component making it happen**. Learning how to structure and delegate responsibilities between components is one of the most important things we can do as frontend developers.

Initially, we're going to be making React apps that consist of a single component. This is so that we can get familiar with how React looks and works. However, please keep in mind that most React apps consist of **dozens** of components, each performing different functions and working together to render a complete, seamless web app to our users.

### The Code Sandbox

For the time being, we will be using an online code editor for React called [Code Sandbox](https://codesandbox.io/). We're going to learn how to set up React locally soon, but for the time being, Code Sandbox is really convenient. To save your work, you will need to sign in with Github.

The files for the current project are available in the menu to the left. These may also available as tabs, although the tabs may be closed. To keep a tab open, click on a file from the left-side menu and then press `<ctrl> + <s>`.

### [Our First React Example](https://codesandbox.io/s/k3wxk25km7)

So. Let's get acquainted here.

![files](./assets/files.png)

We've got four files in this project. First is our old friend `package.json`, which lets us know that we're importing two NPM dependencies: `react-dom` and `react`. More on the difference between these packages soon.

Next, let's look at our `index.html` file. The body of the file, as you can see, is pretty sparse:

```html
<body>
	<div id="root"></div>
</body>
```

In fact, it's empty. An empty `div` with an `id` attribute of "root". If all we have is an empty `div`, you might ask, how will this app render anything to the user?
