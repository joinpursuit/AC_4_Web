# React Router and Ajax

* [The Component Lifecycle - React Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

## Lesson

In this lesson we will combine for the first time react-router and ajax requests from a real API.

### [Random Dog Picture](https://codesandbox.io/s/p5oxzvvx17)

Our first web-app has two routes, both reachable through the navbar:

1. `/` is the default route, rendering the `Home` component.
2. `/dogs/random` is the route rendering the `RandomDog` component, which displays a random dog picture on demand.

Note that the folder structure is slightly different then before:

<pre>

- api
  + dogAPI.js
- components
  - Dogs
    + Dog.js
    + Dogs.js
    + RandomDog.js
  + Home.js
  + App.js
+ index.js
+ index.html

</pre>

There are different way to structure our code in terms of folders. There is no _single_ correct approach, but this is something worth thinking about, especially when building a larger app (Which we will be doing quite soon).

### `index.js`

This is our entry point, and we are only doing one thing here: calling the `render` function from `react-dom`:

```jsx
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

### `components/App.js`

Next, our app component is in charge of displaying the navbar and doing initial routing:

```js
const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/dogs/random">Random Dog</Link>
      {"  "}
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dogs" component={Dogs} />
    </Switch>
  </div>
);
```

The first route from the `App` component renders the `Home` component. This components simply displays the heading _Dog Pictures_.

The second route renders the `Dogs` component.

### `components/Dogs/Dogs.js`

This component does some further routing. Currently there is only one route: `/dogs/random`, which renders the `RandomDog` component.

### `components/Dogs/RandomDog.js`

This is our first and only _stateful_ component. The state has a single property: `imageURL`, which is initially set to an empty string.

There are two [lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle) here, on that we have seen before and one that we have not:

* [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount) is invoked immediatelly after a component is loaded (or _mounted_ in react terminology).
* [componentWillReceiveProps](https://reactjs.org/docs/react-component.html#componentdidmount) is invoked before a _mounted_ component receives new props. We will see why this method is useful in a bit.

The heavy lifting for the `RandomDog` component is done inside the `getPicture` method. In this method, we use the imported `dogAPI`, which is a file that currently exports one function wrapped in an object.

```js
import axios from "axios";

const getRandomDog = () => axios.get("https://dog.ceo/api/breeds/image/random");

export default {
  getRandomDog
};
```

So, to call `getRandomDog` from the `RandomDog` component, we write `dogApi.getRandomDog()`:

```jsx
dogAPI.getRandomDog().then(response => {
  this.setState({ imageURL: response.data.message });
});
```

Once we have gotten a response (i.e. when the promise is _resolved_), we use the response data to set the `imageURL` in the state.

The `getPicture` method is called from two other methods inside this component:

* We call it from `componentDidMount()` to get an image right when the component loads.
* We call it from `componentWillReceiveProps()` so that a new image will be loaded when we click on _Random Dog_ in the navbar when we are already viewing this component.

### Exercise 1

Exercise: commment out `componentWillReceiveProps()` method. In what way can you still get a new picture, without clicking on the _One More_ button?

### End of Exercise 1

Finally, the render function returns a header, a `Dog` component to which we pass the `imageURL`, and a _One More_ button that calls the `getPicture` method.

The `Dog` component simply renders the passed image, wrapped in a `div`. Note that there is a css `height: 10em` attribute set on the div, and a css `height: 90%` attribute set on the image. This means that we want the image to take 90% of the div's height.

### Exercise 2

Note that we call `setState` once before making the AJAX request, setting the `imageURL` to an empty string.

```jsx
  this.setState({ imageURL: "" })
  dogAPI.getRandomDog().then(response => {
    ...
```

* How does this line affect what you see on the screen?
* What does it have to do with the styling inside the `Dog` component?
* What happens if you erase or comment out that line?

### End Of Exercise 2

## [Dog Breeds](https://codesandbox.io/s/8z91lzo50)

The dog breeds app builds on the previous one. Now in additon to getting a random dog picture, we can click on _Dog Breeds_ to see a list of breeds. When we click on one of the breeds, we see random pictures of dogs of that particular breed.

### Changes to `App.js`

There is only one change in this component - a new `<Link>` in the navbar:

```jsx
<Link to="/dogs/breeds">Dog Breeds</Link>
```

Since the path starts with `/dogs/` it will still trigger the following route:

```jsx
<Route path="/dogs" component={Dogs} />
```

### Changes to `components/Dogs/Dogs.js`

This component has been added new `<Route>` for `/dogs/breeds/`

```jsx
<Route path="/dogs/breeds" component={DogBreeds} />
```

It now renders a new `DogBreeds` component.

### `components/Dogs/DogBreeds.js`

This is another stateful component. The state has a `breeds` property that is initially an empty array. When the component mounts the `getDogBreeds()` method is called. This method calls `dogAPI.getMasterBreeds()` to get all dog breeds, and sets the state `breeds` property with the array received as a response. This is an array of strings that is received from [https://dog.ceo/api/breeds/list](https://dog.ceo/api/breeds/list).

In its `render` method, `DogBreeds` has two `<Routes>`:

* `/dogs/breeds` renders the `DogBreedList` component with the array of breeds given as prop. The `DogBreedList` iterates through the breeds, displaying a `Link` to each in the following format: `/dogs/breeds/${breed}`.
* `/dogs/breeds/:breed` renders the `RandomDogWithBreed` component, passing the breed received from the url `params` as a prop.

### `components/Dogs/RandomDogWithBreed.js`

The `RandomDogWithBreed` component is similar to the `RandomDog` component. The difference is that it receives a `breed` as a prop, and that in its `getPicture` method, it calls `dogAPI.getRandomDogWithBreed(...)` passing that breed as an argument. The `dogAPI` will send a request to the following url: `https://dog.ceo/api/breed/${breed}/images/random`. You can try copying and pasting this into your browser, replacing `${breed}` with, for example, `malamute`: [https://dog.ceo/api/breed/malamute/images/random](https://dog.ceo/api/breed/malamute/images/random).
