# Redux 2 - Redux Without React

* [redux](https://redux.js.org/)
* Examples:
  * [Plain JS Counter](https://repl.it/@lizraeli/Redux-JS-Counter)
  * [HTML + JS Counter](https://repl.it/@lizraeli/redux-html-js-counter)
  * [HTML + JS Todos](https://repl.it/@lizraeli/redux-html-js-todos)
  * [HTML + JS Todos with Visiblity Filter](https://repl.it/@lizraeli/redux-html-js-todos-w-filter)

## Lesson

In the previous lesson we discussed the motivation behind having a library such as Redux to manage the state of our React application. But Redux is _not_ exclusively tied to React. In fact, when incorporating Redux into a React app, we will use two separate libraries: [Redux](https://redux.js.org/) and [React Redux](https://github.com/reactjs/react-redux). In this lesson we will use the Redux library with plain JavaScript and HTML. This may help understand the unique concepts that Redux introduces, before we dive into a full-fledged React + Redux app.

### [Plain JS Counter](https://repl.it/@lizraeli/Redux-JS-Counter)

We start with a basic counter, without any HTML representation. The code is split into section, each one denoted with a title (e.g. `/* reducers */`). The sections here are:

* **constants** - These are used to define the possible action types. Both strings `"INCREMENT"` and `"DECREMENT"` will be used at least twice in the code. Saving these strings as variables will eliminate the possibilty of making a spelling mistake. (An incorrectly spelled variable will produce an error).
* **reducers** - A reducer is a functions that takes as input the current state and an actions, and returns a new state. An action is an object with at minimum a `type` property.
* **action creators** - An action creator is a function the returns an _action_ object. In the case of the counter app these are called `increment` and `decrement`, and each returns an object with the corresponding action type. As we will see later, action creators will in some cases take arguments and return a more unique object every time they are called. (for example, an `addTodo` action creator will take as argument a string with the new _todo_'s description).
* **store** - this is where we create the store. We call the `createStore` function, giving it the reducer(s) as an argument. In the case of this simple app, the store consists of single reducer, and the state of the store will be a number rather than an object.

We can get the state of the store by calling `store.getState()`. When called initially, this will return `0`. When the store is created, each reducers is called once, like this: `[reducer name](undefined, {})`. Since the state value is _undefined_, it will be given the default value, which we defined as `0`. Since the _action_ object does not have a _tpye_ property, its value is _undefined_ too, so inside the _switch_ statement, the _default_ case will be reached, returning the value of _state_ (`0`).

Following the above, we change the value of the store's state by calling `store.dispatch` and giving it either an object with _type_ `"INCREMENT"` or `"DECREMENT"`. In the code, this is done by calling either the `increment` or `decrement` action creators.

### [HTML + JS Counter](https://repl.it/@lizraeli/redux-html-js-counter)

The current example consists of an `index.html` and `index.js` files. The HTML looks likes this:

```html
<body>
    <div id="count"> </div>
    <button id="incButton"> increment </button>
    <button id="decButton"> increment </button>

    <script src="index.js"></script>
  </body>
```

The `index.js` file has the same initial sections as the previous counter example: _constants_, _reducers_, _actions creators_, and _store_. The new sections are:

* _DOM events_: these are event listeners to clicks on the increment and decrement buttons. When either button is called, an corresponding action is dispatched to the store.
* _render_: this consists of a _render_ function. Since we are _not_ using React, we need to manipulate some part of the HTML directly. Every time the render function is calle, we get the current state of the store, and then display the state using `innerHTML` of a DOM element.

We use `store.subcribe` method so that every time the state of the store changes, the function given as argument will be called. Now, whenever, the user clicks on either the _increment_ or _decrement_ buttons, and action will be dispatched to the store, causing the store's state to change, which will in turn cause the _render_ function to be called, which will display the new value of the state of our store. This can be summarized as follows:

THE USER CLICKS ON A BUTTON -> AN ACTION IS DISPATCHED TO THE STORE -> THE STORE UPDATES -> THE RENDER FUNCTION IS CALLED

> Ex. ADD the following buttons to the counter app: `increment if even`, `increment if odd`, and `increment async` that will increment the counter after one second has passed.

### [HTML + JS Todos](https://repl.it/@lizraeli/redux-html-js-todos)

The current more compelx example has the following HTML:

```html
<body>

  <form id="todoForm">
    <input minlength="3" id="todoInput" type="text" required>
    <button type="submit"> submit </button>
  </form>

  <ul id="todos"></ul>

  <script src="index.js"></script>
</body>
```

`index.js` has the same sections as the one before, plus one:

* constants
* _helper_ functions: the new section. The function here will be discussed in the following sections.
* reducers: we still have a single reducer. Now our initial state is the default value of an empty array of todos. The possible action types are `ADD_TODO` and `TOGGLE_COMPLETED`. Note that the reducer does _not_ change the state directly, but instead returns a new state. The `ADD_TODO` case creates a new todo array by copying all the existing todos (using the array spread operator), and adding the new one at the end. The `TOGGLE_COMPLETED` case create a new array in which all the todos but one will be the same. The todos with the relevant `id` will have a flipped `completed` field. This can be done by calling the spread operator on the `todo` object:

```js
return { ...todo, completed: !todo.completed };
```

* **action creators** - both action creators take arguments. The `toggleCompleted` action creator takes the `id` of the `todo` we want to toggle. The `addTodo` action creator takes the text of the `todo` we want to add, and returns an object with the propertyies::

* type `ADD_TODO`
* todo: an object with a uniquely generated id, a completed staus of `false`, and the text we given as argument.

* **DOM EVENTS** - the single dom event is a listener to the user's click on the `submit` button. It takes the text from the `input` field and dispatches an action created by the `addTodo` action creator (given the text as an argument). Finally, the value of the input field is set to an empty string.

* **render** - this is more complex then before. Every time the `render` function is called, to current `todos` array will be fetched from the store's state. The `ul` will be emptied, and then recreated from the array. If we were using React, it would have done a more efficient job of simply replacing the `li`s that changed, rather then replacing the entire list every time.

> Ex. Add a `clear completed` button that will remove all elements from the todos array where the value of `completed` is `true`.

### [HTML + JS Todos with Visiblity Filter](https://repl.it/@lizraeli/redux-html-js-todos-w-filter)

This example extends the previous todos app with a visiblity filter. The HTML looks like this:

```html
<body>

  <form id="todo-form">
    <input minlength="3" id="todoInput" type="text" required>
    <button type="submit"> submit </button>
  </form>

  <p>
    show
    <select id="visibility-options">
      <option value="SHOW_ALL">all</option>
      <option value="SHOW_COMPLETED">completed</option>
      <option value="SHOW_ACTIVE">active</option>
    </select>
  </p>

  <ul id="todos"></ul>

  <script src="index.js"></script>
</body>
```

Adding a visiblity filter to the todo app requires extending the functionality of redux. We need to keep in our state both the todos array and the current visibility filter. This means that the state will be an object with two properties. The way we set up redux to handle this is by:

* Creating a separate reducer for each property of the state. So now, in addition to the `todosReducer`, we have a `visibilityFilterReducer`.
* Combining the reducers into a single reducer using a the redux [combineReducers](https://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html) method.

Now our state will be an object with the properties `todos` and `visibilityFilter`. Every time an option is chosen from the visility select element, we will dispatch an action of type `SET_VISIBILITY_FILTER`. This will cause redux store to create a new state, by calling each of the reducers, one after the other. The `todos` reducer will return the exisiting array - this is the default case, when the action type is not `"ADD_TODO"` or `"TOGGLE_COMPLETED"`. The `visibilityFilter` reducer will set the new `visibilityFilter` based on the action `filter` property. Every time the render function is called, we will filter the `todos` array based on the visibility filter.

When an action of type `"ADD_TODO"` or `"TOGGLE_COMPLETED"` is dispatched, the visibility filter will return the current `visibility` property - this is the default case, when the action type is not `"SET_VISIBILITY_FILTER"`.

### Exercises

#### Shopping Cart

Compelte the following boilerplate code to reproduce the shopping cart functionality.

Boilerplate: [https://repl.it/@lizraeli/redux-html-js-cart](https://repl.it/@lizraeli/redux-html-js-cart)

Working example (without redux): [https://codesandbox.io/s/zx6nqr4623](https://codesandbox.io/s/zx6nqr4623)
