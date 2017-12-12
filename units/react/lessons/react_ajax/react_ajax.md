# React - AJAX

## Resources

* [The Component Lifecycle - React Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [AJAX Requests in React: How and Where to Fetch Data](https://daveceddia.com/ajax-requests-in-react/)
* [componentDidMount() - React Docs](https://reactjs.org/docs/react-component.html#componentdidmount)
* [axios - github](https://github.com/axios/axios)

## Lesson

In React components, AJAX calls can be made in event handlers (e.g. `handleInputChange`) or when a component initially loads. In react terminology, we say that a component has _mounted_ after the initial call to its render function.

## Random Dog Pictures

Let's say we want to make a React component that will fetch a random dog picture and display it to the user. A picture will be displayed when the component first loads. After that point, the user can click a button and get a different dog picture every time. We will be using the dog API - it provides a route that responds to GET requests with a random url of a dog image. We will call this url once when the component has mounted, and again every time the user clicks on the `more` button.

### componentDidMount

React provides us with lifecycle methods - functions that, if defined, will be invoked automatically. We will be using the `componentDidMount` lifecycle method, that is invoked once, after the component has completed its initial `render`.
