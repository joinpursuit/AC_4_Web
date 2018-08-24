# React Todos 2

* [Todos v2 - CodeSandbox](https://codesandbox.io/s/2pw303631n)

## Lesson

### [Todos v2: Toggle Completed](https://codesandbox.io/s/2pw303631n)

Let's build on the first version of our app and add a boolean `completed` property that the user can toggle for each of our todos.

First, let's modify the `newTodo` object that we are creating in the `addTodo` method of the `TodoApp` component:

```js
  ...
  const { textInput, todos } = this.state;
  const newTodo = { id: generateId(), text: textInput, completed: false };
  ...
```

Now, whenever we create a new todo, it will have a completed property set to `false`. Next, we will create a `toggleCompleted` method for the `TodoApp` component. This method will take as input the `id` of the todo we wish to toggle. We will see how to pass that `id` later on.

As before, we will avoid modifying the existing `todos` array. Instead, we will create a _new_ todos array by mapping over the existing one. For each `todo` we will check if its `id` is equal to the one passed as an argument:

* If the `id`s are _not_ equal, we will simply return the existing `todo`.
* If the `id`s _are_ equal, we will pass back a new object:
  * this object will contain all properties of the existing `todo`, except that the value of its `completed` property will be flipped (`true` becomes `false` and vice versa).

### The Object Spread Operator

The object spread operator allows us to create a new object by copying properties of existing objects. For example, if we have the following object:

```js
const person1 = { firstName: 'Nick' }
```

And we wish to create a copy of it, we can do the following:

```js
const person1 = { firstName: 'Nick' }
const person2 = { ...person1 }
```

This will iterate over each property in `person1` and copy it into the new object (as it is enclosed with `{ }`). Note that the following:

```js
{ person1 }
```

Will result in a nested object. Also note that the assignment operator would not work as expected here. If we use it, we will simply create a reference to the existing object:

```js
const person1 = { firstName: 'Nick' };
const person2 = person1;
console.log(person2 === person1) // true
person2.lastName = 'Cage'
console.log(person1.lastName) // 'Cage'
```

#### Create a copy with new propertoes

We can easily add new properties when using the object spread operator:

```js
const person1 = { firstName: 'Nick' }
const person2 =  {...person1, lastName: 'Cage'}
```

Note that if we define a property in javascript more than once, only the last definition will take effect. For example:

```js
{ firstName: 'Nick', firstName: 'Elon'}
// => {firstName: 'Elon'}
```

This is also the case when using the object spread operator. If `person1` already has a `lastName` property, it will be dropped because we are redefining it.

### Todos And The Object Spread

The last bit is particularly useful in our todos app. As we iterate over the existing `todos` array an map it to a new array, once we encounter the `todo` with the `id` we've been looking for, we can return the following:

```js
{ ...todo, completed: !todo.completed }
```

Which is exactly what we wanted to do: this object will contain all properties of the existing `todo`, except that the value of its `completed` property will be the inverse of the current todo. Follows is the complete code of the `toggleCompleted` method:

```js
toggleCompleted = id => {
  const { todos } = this.state;

  const newTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo 
  );

  this.setState({
    todos: newTodos
  });
};
```

### Passing the `id`

The last bit we need to do is to use the id of each todo when calling `toggleCompleted`. This does not mean we must make our `Todo` components stateful. What we will do instead is make a new kind of function call for the `onClick` of each of our `Todo`s:

```jsx
const Todo = ({ todo, toggleCompleted }) => {
  const { id, text, completed } = todo;
  return (
    <li  onClick={() => toggleCompleted(id)}>{text}</li>
  )
}
```

Note the above: We cannont simply write: `onClick={toggleCompleted(id)}`, as that will call the function immediately when the component loads. We need to pass an annonymous function that will be invoked later on. `() => toggleCompleted(id)` is an anonymous function, equivalent to: `() => { toggleCompleted(id) } ` and `function(){toggleCompleted(id)}`. For each of our `Todo`s, we create an anonymous function. When the `Todo` is clicked, the anonymous function will be invoked, in turn calling `toggleCompleted` with the `Todo`'s `id`.

Alternatively, we can redefine the `onClick` function inside the `TodoList` component:

```jsx
const TodoList = ({ todos, toggleCompleted }) => (
  <ul>
    {todos.map(todo => <Todo todo={todo} toggleCompleted={() => toggleCompleted(todo.id)} />)}
  </ul>
);
```

And keep our `Todo` component simpler:

```jsx
const Todo = ({ todo, toggleCompleted }) => {
  const { text, completed } = todo;
  const className = completed ? "completed" : "";

  return (
    <li className={className} onClick={toggleCompleted}>
      {text}
    </li>
  );
};
```

### The `completed` className

Finally, to create the `line-through` effect, we define a css class `li.completed`:

```css
li.completed {
  text-decoration: line-through;
}
```

add the css class conditionally to each `Todo`.

```jsx
const Todo = ({ todo, toggleCompleted }) => {
  const { id, text, completed } = todo;
  const className = completed ? "completed" : "";

  return (
    <li className={className} onClick={() => toggleCompleted(id)}>
      {text}
    </li>
  );
};
```

### Optional: Advanced Topics

#### Closures: The Function Remembers

You may be wondering how each of these anonymous functions "remembers" which `id` to call. We are using here a property of javascript called **closures**. When one function returns another function, we may call the first function _enclosing_ and the second _enclosed_. In this case, the _enclosed_ function will retain values of variables defined in the enclosing function. For example, we may write a function called `createNumLogger`:

```js
const createNumLogger = (num) => function(){ console.log(`the number is: ${num}`) };
```

We can also write the above without the `function` keyword (although this maybe be harder to read):

```js
const createNumLogger = (num) => () => { console.log(`the number is ${num}`) };
```

When `createNumLogger` is invoked with a number as argument, it will return a function:

```js
createNumLogger(2)
// => ƒ (){console.log(num)}
```

We can save the returned function into a variable and then invoke it whenver we wish:

```js
const twoLogger = createNumLogger(2)
twoLogger()
// the number is: 2
```

We can also invoke the returned function right away:

```js
createNumLogger(2)()
// the number is: 2
```

What we were doing with our react `Todo` is similar to the above. However, note the following:

* Our enclosing function is the `Todo` component itself.
* Our enclosed function is the `onClick`.
* Instead of logging the number, we are calling a different function, one that was defined in `TodoApp`.

Also, in our react app we had an array of `Todo` components. Given an array of numbers

```js
const numbers = [1, 2, 3, 4]
```

We can iterate over the array, creating an array of `logNumber` functions:

```js
const numLoggers = numbers.map(num => createNumLogger(num));
numLoggers; // (4) [f, f, f, f]
```

We can now invoke any of the functions in our numLoggers array:

```js
numLoggers[0]()
// the number is: 1
numLoggers[1]()
// the number is: 2
numLoggers[2]()
// the number is: 3
```
