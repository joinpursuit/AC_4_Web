# Redux 1

## Links

* [Redux - Official Site](https://redux.js.org/)
* [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [Leveling Up With React: Redux - CSS Tricks](https://css-tricks.com/learning-react-redux/)
* [Question: How to choose between Redux's store and React's state? github redux repo](https://github.com/reactjs/redux/issues/1287)

## Lesson

Redux is a library for managing application state. When used with React, Redux provides a single state object that exists at the root of our app. This is especially useful when building large-scale react applications.

### A Birds-Eye View

When we start building react applications that feature multiple components, we inevitably run into issues regarding state. We often want the state of a component to be preserved throught our app. However, this will not always be the case. Consider, for example, the following app:

### [Show / Hide Animal Selector](https://codesandbox.io/s/py858r28j0)

The `App` component conditionally renders a nested component `AnimalSelector`. The animal selector will display either "giraffe" or "moose" - we click on the `change animal` button to switch between the two. `AnimalSelector` stores the selected animal in its own state as `selectedAnimal`, with "giraffe" being the default value.

The `App` component renders a button that toggles the animal selector. This is done by changing the value `showAnimalSelector` in the state of the `App` component. The `AnimalSelector` component will only be rednered if the value of `showAnimalSelector` is `true`. When `App` stops rendering `AnimalSelector`, the latter will be unmounted - the instance of that component will be discarded, and its internal state will be forgotton. So, when `App` renders `AnimalSelector` again, it will display "giraffe", regardless of the value that was being displayed before.

In this simple app, if we wanted to keep the value of the selected animal, we could do that by putting the `selectedAnimal` property inside the state of the `App` component, and make `AnimalSelector` a stateless component that receives a callback function from `App` to change the animal.

> Ex. rewrite the app so that the selected animal value will be in the state of `App`.

This is a good solution for smaller apps, but this can get quite difficult to do for larger-scale apps that have components rendering other components.

### [Dog Pictures](https://codesandbox.io/s/8z91lzo50)

The dog picture app can be represented using the following diagram:

![dog pictures](assets/react_dogs.png?raw=true)

There is an arrow from each component to a component that is renders. Props are represented along the arrows. Each component that communicates with the dog API has a cloud next to it.

If we want to add a _favorites_ feature to the dog picture app, things can get tricky. The `Dogs` component seems like a good candidate to hold the array of favorite dogs, but this means it will need to pass a callback to `RandomDog` (and `RandomDogWithBreed`), and these components could in turn pass it to the `Dog` component. Another problem is that if the `App` component can render something that follows a different route than `/dogs/...`, the favorites will be forgotten - `App` will no longer be rendering the `Dogs` component, so this component will be unmounted.

### Centralized State

The benefits of Redux are apparent in a scenario such as the above. With redux, we can keep state in a `store` at the root of our app. The following is a possible diagram for the dogs app with react and redux:

![react redux dogs](assets/react_redux_dogs.png?raw=true)

Note that while the store is a the root of our app, we can think of it as communicating directly with certain components. These components - `RandomDog` and `DogBreeds` - communicate with the store using _actions_. Actions are javascript objects that have at the very least a `type` property, which is a string describing what the action does. The `"SET_IMAGE_URL"` action from `RandomDog` also contains a string with the image url, and the `"SET_DOG_BREEDS"` action from `DogBreeds` also contains an array with the dog breeds. The store will use the action type to determine what needs to be changed. Once a change is made, the app will be re-rendered from the root `App` component all the way down. We say that an action is _dispatched_ when it is send from a component to the store.

Adding a _favorites_ functionality to the redux app may involve adding a `favorites` property to the store, and possibly two actions: `"ADD_TWO_FAVORITES"` and `"REMOVE_FROM_FAVORITES"`. We will discuss the implementation details in further lectures.

Redux does not force us to put _all_ of our state in the store. For example, if a component has a search bar that we don't need available globally, we can keep the search input in the state of that component. It is up to us to decide how much of the state we want to put in the global store. There is a great discussion on this point in the [redux github repo](https://github.com/reactjs/redux/issues/1287).

> Ex. Using the knowledge you have so far, create a diagram of the favorite movies app without redux, and another diagram with redux

### Getting Started With Redux

Having looked at redux from a birds-eye view, we will now start learning how to use Redux. While the benefits discussed above will not be apparent in the small examples discussed today, these will lay the foundations for more complex use-cases of Redux.

### [Redux-Counter](https://codesandbox.io/s/5w3zprwzop)

We start with the traditional counter app. This `src/` folder of the app has the following structure:

```text
- components/
| - Counter.js
- containers/
| - Counter.js
- reducers/
| - count.js
| - index.js
- index.js
```

`containers` and `reducers` are terms from the react/redux world. The files inside the `reducers` folder (except for `index.js`) represent different parts of our global state. Currently there is only one part called `count`. Looking inside `count.js`, we will see a single functional being exported:

```js
export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
```

This function is a reducer. It describes the initial value of `count` (`0`) and how it will change when an action is dispatched to the store, based on the action type. Each reducer exists in isolation and describes its own state. In the world of count, the state is just a number. This number is incremented by one on an `"INCREMENT"` type action, and decremented by one on a `"DECREMENT"` type action. Actions of any other type (if there are any), will result in returning the current state.

The other file in the `reducers/` folder, `index.js`, imports all the reducers (currently just `count`) and exports them as a single object using a function provided by redux: `combineReducers`. The properties of the object correspond to the names of the reducers. So, in our case, the object will initially look like this:

```js
{
  count: 0;
}
```

This object will be the global state in our store. When an action is dispathched, a new state will be generated. For example:

```text
// store state
{ count: 0 }
// action:
{ type: "INCREMENT" }
// new store state
{ count: 1 }
```

The combined reducers are imported in `index.js` as `reducer` and used to create the redux store with the provided `createStore` function. To set up the store to work with react a component provided by the `react-redux` library `<Provider>` is set at the the root of the app in `ReactDom.render`, taking the initial `App` component as a child. The `App` component renders the `CounterContainer`, imported from `containers/Counter.js`. `CounterContainer` is the component that actively connects to the redux store and dispatches actions to it. It receives as props from the store both a `dispatch` function and the `count`. It renders the `Counter` componet from `components/Counter`, which is a simple functional component. To connect `CounterContainer` to the store, we use the `connect` method provided by the `react-redux` library. The use of this method will look strange. In practice it is often used differently. We will discuss this in more detail in later lessons.

## Exercises

1. Using the counter app as a strating point, add three buttons: `increment if even`, `increment if odd`, and `increment async` which will increment after one second has passed. These will only require additons to the `CounterContainer` and `Counter` components.
2. Use the following react-redux app that has two reducers: age, name. Change name to firstName and add a lastName reducer and input. [Redux Inputs](https://codesandbox.io/s/k23y2qlwr7).
