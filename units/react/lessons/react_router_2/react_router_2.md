# React Router 1

## Lesson

In this lesson we will expand react-router to more complex use-cases.

### Recap

In the previous lesson we leared about the following react components provided to us by the `react-router-dom` library:

* `Link` - works in a similar fashion to the `<a>` element, exepct that it does not trigger a page reload.
* `Route`
  * When providing a string as the `path` props and a React component as the `Component` prop, the component will be rendered if the current `url` matches the provided `path` string.
  * The above will render partial matches (i.e. path `/a` would be a match for url `/apple`) unless with the `exact` keyword is provided as an attribute.
  * The routing is **inclusive**: if the same url route matches with multiple `path`s, all of the corresponding components will be rendered.

### [My Pets' Website](https://codesandbox.io/s/8yq0ly3708)

In this lesson we will be exploring further routing concepts through the _My Pets' Website_ example.

First, Note the folder structure:

<pre>

- components
  - Pets
    + Pets.js
    + Pet.js
    + PetList.js
  - App.js
  - Home.js
+ index.js
+ index.html
+ petAPI.js

</pre>

As go through this project step-by-step, both the location and the function of each file will begin to make sense.

#### `index.js`

The starting point for the app (following `index.html`) is `index.js`:

```jsx
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

As you can see above, this file's only purpose is to call `ReactDom`'s _render_ function, providing it the `App` component nested within the `BrowserRouter` component.

#### `Components/App.js`

The `App.js` component is responsible for rendering the navigation bar and for the initial routing. As we will see, when using react-dom-router the routing functionality is often spread between different components.

`App.js` renders two links: to `/` and to `/pets`. When rendering routes, it uses the `<Switch>` component to preform exclusive routing:

```jsx
import { Link, Switch, Route } from "react-router-dom";

  ...
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pets" component={Pets} />
  </Switch>
  ...
```

#### Exclusive Routing using `<Switch>`

If we wish that only one of multiple routes will be rendered, we may do so using the `Switch` component provided by the `react-router-dom` library. The `Switch` component will "pick" only one of the child `Route` components to render - whichever one matches the url first. This means that unless we provide the exact keyword for the Route where the `path` is `/`, it will always match (since react-router does partial matching) and none of the other components would ever be rendered. Another solution would be to proivde the Route with that path last. However, it is better to be explicit regardless of `Route` placement and provide the `exact` attribute either way.

#### `Components/Home.js`

In `App.js`, the component for the `/` route will be rendered by default, or when _Home_ in the navbar is clicked. This component is only a few lines long:

```jsx
import React from "react";

const Home = () => (
  <div>
    <h1>My Pets' Website</h1>
  </div>
);

export default Home;
```

Despite it's brevitiy, it is still preferrable to keep this component sepearate. This will make the project easier to maintain as it grows, since we may decide to add more content to this component later on.

#### `Components/Pets/Pets.js`

As you've probably noticed, there are three files (contains three separate components) inside the `Pets` directory, but only `Pets.js` of them gets rendered directly from the `App.js`. This component has two roles:

##### Role 1. Rendering the routes that follow `/pets`: `/` and `/:id`.

Note that we are using the full route every time, even from within the `Pets` component:

```jsx
  ...
  <Switch>
    <Route path="/pets/:id" render={this.renderPet} />
    <Route exact path="/pets" render={this.renderPetList} />
  </Switch>
  ...
```

We will learn in later lessons how to path a partial route, as we have been doing in our express apps.

##### Role 2. Contacting the PetAPI

For this project, we are using a _mock_ (or _fake_) API. This is simply the file `petAPI.js` in our root folder.

###### `PetAPI.js`

In order to simplify matters and focus on routing, we do not use AJAX nor promises in this project. Our `petAPI` file simply holds an array of objects:

```js
const pets = [
  { id: "a234", name: "Oreo", species: "cat" },
  { id: "a345", name: "Luna", species: "dog" },
  { id: "b234", name: "Bell", species: "cat" },
  ...
]
```

Where each object represents a pet, with an `id` a `name` and a `species`. This file exports two methods that allow accessing the array:

```js
const getAll = () => pets;

const getOne = id => pets.find(pet => pet.id === id);
```

Simply enough, `getAll` returns all the pets, and get one returns a single pet based on an `id` (or `undefined` if that pet doesn't exist). In our future projects, we will mostly have external sources for our data, but for this lesson we will at least be using methods to access the data, do prepare ourself for dealing with real API in the future.

#### `Pets.js`: `renderPet`

Going back to the `Pets` component, you will notice that each `Route` has a `render` prop passed to it instead of a `component` prop. While the `component` prop will result in the rendering of a Component, the `render` prop will result in invoking a the provided callback function. As is the case with the `component` prop, this functon will be called if the `Route`s path matches the `url` . This function will be automatically given as argument a `props` object. The most important piece of the passed `props` object is the `match.params` property, which is an object that contains the `url` parameters, if there are any. In the case of the `/pets/:id` route, we need to acces the `props.match.params.id` property in order to access the `id` of the pet that needs to be rendered.

```jsx
  renderPet = props => {
    const { id } = props.match.params
    // The above is equivalent to:
    // const id = props.match.params.id;

   ...
```

Once we have the id, we use the `petAPI` in order to get the pet with this id. since there is not guaranty that a pet will be found - (the user is able to enter any random id in the address bar) - the returned value may be `undefined`:

```jsx
renderPet = props => {
  const id = props.match.params.id;
  const pet = petAPI.getOne(id);
  if (!pet) {
    return <div> could not find pet </div>;
  } else {
    return <Pet name={pet.name} species={pet.species} />;
  }
};
```

If the returned `pet` is undefined, we return a `div` element with a message `"could not find pet"`. Otherwsie - if the pet _was_ found, we render a `Pet` component with the pet's name and species as _props_.

#### `Pets.js`: `renderPetList`

The other route - `/pets`, is simpler, in that we do not need any params from the url. The `renderPetList` function is defined as if no arguments are passed to it. In fact, the `props` argument will still be passed to, but `props.match.params` will be an empty object, as there are no params to the `url`. So in the case we ignore the passed in `props` entirely. All we to do is fetch all the pets from our `petAPI` and render a `PetList` component with the pets as a prop.

#### `Components/Pets/PetList.js`

While the `Pets` component does most of the heavy lifting, both the `Pet` and `PetList` are more like the simple stateless components we've seen before. The only difference is that we're using the `Link` component from `react-router-dom`:

```jsx
const PetList = ({ pets }) => (
  <ul>
    {pets.map(pet => (
      <li key={pet.id}>
        <Link to={`/pets/${pet.id}`}>
          {pet.id}: {pet.name}
        </Link>
      </li>
    ))}
  </ul>
);
```

Abovem the `PetList` component iterates over the `pets` array given to it as a prop, and for each displays a link to it with the pet's `id` and `name` as text. Of course, the `url` itself requires some knowledge on our part: we know that the `Pets` component defines the route for a single pet as `/pets/:id`.

#### `Components/Pets/Pet.js`

Finally, the `Pet` component takes a `props` object with `name` and `species` as input, displays a header with the name and another header with the species. It also includes a `Link` back to `/pets`.

#### A mental model for navigation and `Links`

Even though there is no page reload when we click on a link render by a `Link` component, the app itself gets re-rendered from the root. When we click, for example, on one of the pets in the list: `a234: Oreo`, the url becomes: `/pets/a234`. We are first back at the `App` component, matching the `/pets` route, which renders the `Pets` component. Inside the `Pets` component, we match the `/pets/:id` route, calling the `renderPet` function. This fetches the id via `props.match.params`, fetches the `pet` object via the `petAPI`, and finally renders the `Pet` component.
