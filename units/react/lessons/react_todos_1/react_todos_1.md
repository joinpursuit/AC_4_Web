# React Todos - Lesson 1

* [React Todos v1 - CodeSandbox](https://codesandbox.io/s/2o4yn03m1n)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

## Lesson

In this lesson we will begin building a todo list app with react. Right Off-the- bat, we will make some decisions regarding our app's architechture. We will try to keep the application's state in one place. In react this is often done by creating a single stateful component, and aiming for the other components to be stateless. we can makes this easier to enforce by creating functional stateless components - components that are declared as functions that takes some `props` as input (i.e. arguments) and return some JSX elements and/or components. If we determine that `state` is needed after all, we can always refactor our components later on.

### Visual Outline

One way to begin dividing our app into components is to thing about it visually. Each component should answer for some slice of the UI we end up seeing on the screen.

![visual outline](assets/outline.png)

As illustrated above, we have `TodoApp` as our top-level component. `TodoApp` renders two components:

1. `TodoForm` where the user can insert the text for a new todo and submit it (by either clicking on the `add` button or pressing `<enter>`).
2. `TodoList` - renders a list of `Todo`s, where each `Todo` consists of some text.

The division into components will help us as we add additional functionality to our app.

### [TodoApp](https://codesandbox.io/s/2o4yn03m1n)

We will start by creating the top-level component we will call `TodoApp`. This component will have a state consisting of two properties:

1. `textInput` - a string representing the user's input in the textbox.
2. `todos` - an array of objects, where each object represents a single todo.

```js
class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      todos: []
    };
}
```

We have not yet considered what each todo will consist of. The simplest implementation of a list of todos is an array of strings:

```js
['walk dog', 'buy milk']
```

However, we will prefer to store each todo as an object. In our current implementation, each todo will have two fields: `text` and `id`. We will be identifying each todo by its `id` rather than by its index.

If we saving the todos in a database, it would generate a unique id whenever we insert a new todo. For now, we will use a function that generates ids with a sufficiently high probability of being unique.

```js
const generateId = () => Math.random().toString(34).slice(2);
```

(Don't conern yourself with the implemenation details of the above function)

Next, we will implement the `addTodo` function:

```js
addTodo = e => {
  e.preventDefault();

  const { textInput, todos } = this.state;
  const newTodo = { text: textInput, id: generateId() };
  // using the es6 spread operator to create a new array
  const newTodos = [...todos, newTodo];

  this.setState({
    textInput: "",
    todos: newTodos
  });
};
```

* Since we are adding todos using a form, we first need to call the event's `preventDefault()` method so that the page does not get refreshed.
* To create a new todo, we define an object with two properties:
  1. `text` which we extract from the `state`'s `textInput` property.
  2. `id` which we generate by calling the `generateId` function.
* Note that we avoid modyfing the existing `todos` array. Instead of using `push` to add the new todo, we create a new array that consists of all the elements from the existing array, plus the new todo. We frequently try to avoid mutating the existing state in React. You may think of the state as a snapshot - like in a comic reel, we will be able to go backwards and farwards across this series of snapshots (details to follow).
* Finally, we call `setState`, setting the `todos` property to equal to the new todos array, and setting the `textInput` value to an empty string.

One more custom method we need in our `TodoApp` is `handleTextInput`. For the sake of simplicity we will set the `textInput` property by name instead of using a computed property name.

Finally, we can define the render function. As we have determined in the visual outline above, the `TodoApp` component renders the `TodoForm` and `TodoList` components.

```jsx
render() {
  const { textInput, todos } = this.state;
  return (
    <div>
      <h2>Todos</h2>
      <TodoForm
        handleSubmit={this.addTodo}
        textInput={textInput}
        handleTextInput={this.handleTextInput}
      />
      <TodoList todos={todos} />
    </div>
  );
}
```

* We pass the `TodoForm` two methods: `handleTextInput` and `handleSubmit`, and the `textInput` value. Every change in the text input of the `TodoForm` will go through the `TodoApp`s `handleTextInput` method, calling the `TodoApp`'s `setState` function, which will call `render` internally, which will in turn render to `TodoForm` again with the updated input.
* We pass only the array of `todo` objects to the `TodoList`. For now, ll we will do in our `TodoList` is render a list of `Todo` components. We do not have yet any functionality such as removing todos, marking them as completed, etc.

### `TodoForm`, `TodoList` and `Todo`

Now we will go on to define our stateless components. We will use one new syntax here: instead of destructuring the `props` inside the component's `render` function, we will do when we define it. Note that the following The following two functions are equivalent:

```js
const person = {firstName: 'Nick', middleName: 'Henry', lastName: 'Stone'}

const getFullName1 = (person) => {
  const { firstName, middleName, lastName } = person;
  return firstName + middleName + lastName;
}

const getFullName2 = ({ firstName, middleName, lastName}) => (
  firstName + middleName + lastName
);
```

Above in `getFullName2`, we are specifying in the function definition that we are expecting an object with three properties: `firstName`, `middleName` and `lastName`. The object passed in will be destructured, so that we can use each of its properties as a variable. Note that we enclose the return statement in parentheses `=> ( ... )` for the purpose of readibility - so that the function begginning and end will be clearly visible. In this instance the parenthese have no impact on the code. The only case in which we must wrap a returned expression in parentheses is when we are implicitly returning an object:

```js
const getPerson = () => ({ firstName: 'Nick', lastName: 'Stone' });
```

Without wrapping the object in parentheses above, javascript would not know to interpret the function as return implicitly, and the parenthese will be treated as enclosing the function body.

Similary, we can rewrite the following `TodoList` component:

```jsx
const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul>{todos.map(todo => <Todo todo={todo} />)}</ul>
  );
}
```

In this manner:

```jsx
const TodoList = ({ todos }) => (
  <ul>{todos.map(todo => <Todo todo={todo} />)}</ul>
);
```

Similarly, we will define the `Todo` component as follows:

```jsx
const Todo = ({ todo }) => <li>{todo.text}</li>;
```

And finally, the the `TodoForm` component:

```jsx
const TodoForm = ({ handleSubmit, textInput, handleTextInput }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={textInput} onChange={handleTextInput} />
      <button type="submit"> add </button>
    </form>
  </div>
);
```

Note again in the `TodoForm` that any change in the text input will result in the `handleTextInput` function being called. This function is given as a one of the arguments passed, in this case, from `TodoApp`.
