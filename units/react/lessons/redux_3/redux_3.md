# Redux 3

This is your first real lesson and project incorporating React and Redux, so of course, we wanted to take it as seriously as possible. Today, we'll be making a Reddit clone that will take on the solemn responsibility of serving up only the spiciest memes. In order to keep track of our data even when components mount and unmount, we'll be incorporating a Redux store to manage state in a centralized location.

Go ahead and make a directory, `cd` into it, and type:

```bash
git clone https://github.com/C4Q/react_redux_ex_lesson_3
npm install
npm start
```

You should see a serious and polished app in your browser on localhost:3000. Open the project in your code editor, and let's get the lay of the land. You should be looking at the files in this order:

## package.json

```js
"dependencies": {
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-redux": "^5.0.6",
  "react-router": "^4.2.0",
  "react-router-dom": "^4.2.2",
  "react-scripts": "1.1.0",
  "redux": "^3.7.2"
}
```

Wow, so many dependencies. We are going to be using all of them, but remember that React and Redux aren't just singular things - as you learned in the last lesson, they are a patchwork of dependencies that can be used together or separately.

## index.js

```js
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
```

You can see here that we're wrapping our `App` component in another layer of module - in this case, something called `Provider`, which we import from `react-redux`. As its name implies, `Provider` makes sure we give our Redux store (in other words, our global state and our methods to change that state) to our React app. In the words of the Redux docs:

"If you *really* need to, you can manually pass `store` as a prop to every `connect()`ed component, but we only recommend to do this for stubbing `store` in unit tests, or in non-fully-React codebases. Normally, you should just use `<Provider>`."

Not that bad, right? While `Provider` might seem like a new and scary term, what it actually is is just a shortcut to pass the store to all our components.

Make sure to **take a look at all of the stuff we are importing** above the code. This should help give you a sense of what all of these methods are for. For example, `Provider` is part of `react-redux`, and what does it do? Connect React and Redux. Meanwhile, we get `createStore` from `redux` because it's a core part of what makes Redux - and only Redux - tick.

Let's move on.

## App.jsx and home.jsx

*Note: `.jsx` files are parsed like JavaScript - the .jsx is just so that JSX linters make our JSX more readable. Just like we were using HTML. If you don't have a JSX linter, get one! They're super helpful.*

Let's just look at the top-level components for now, just to see what's different. Looking at `App`, we can see... That it's pretty much the same. Home is also normal - nothing egregious there except for the use of emojis. Great!

What's that other route, though? `LinksContainer`? Hmm...

## linkscontainer.js

```js
getAllLinks = () => {
  const { dispatch } = this.props;
  dispatch({ type: "GET_ALL" });
};

getSingleLink = (id) => {
  const { dispatch } = this.props;
  dispatch({ type: "GET_ONE", id: id });
}
```

Now we're knee-deep in weird. `LinksContainer` returns our `Links` component, with some functions passed down as props that don't make much sense right now.

`getAllLinks` and `getSingleLink` look pretty similar to one another, and looking at them more closely, they don't look too different from event handling functions you've worked with in React. OK, so clearly, we're getting a function called `dispatch` as a prop, and because we haven't seen it before, we can safely assume it's Redux stuff. Indeed, we can see where we get it on the bottom, where we call `connect` from `react-redux`:

```js
export default connect(state => state)(LinksContainer);
```

*Note: This isn't strictly a good way to call the 'connect' function, but it'll do for now.*

Because these functions are accurately named, we can get a sense of what they do. `getAllLinks`, most likely, gets all of our links - probably to render them all at once. `getSingleLink` just gets one link, probably to render them individually. More on that later.

We also pass `links` as props, which we call `state`, so for now (bear with me), let's assume that that's our global state.

## links.jsx

`Links` is also a pretty normal component - it gets props passed from `LinksContainer`, passes them down to its child components `LinkList` and `SingleLink`, and handles routing.

You should note, however, that `Links` is a functional component. This is because we don't have to handle state in our parent component anymore - we get our state from Redux and pass it down as props to all components that need it.

This isn't always the way we'll handle things using React and Redux together - we aren't done with stateful components entirely - but over the course of the day, you'll see that Redux makes our components significantly sleeker and more capable, and making our parent component not have to hold state is one of the ways we can do that.

## linklist.jsx

```js
componentDidMount() {
  this.props.getAllLinks();
}

render() {
  const { state } = this.props;

  const allList = state.allMemes.map((item) => {
    return (
      <Link to={`/links/${item.id}`}>
        <li id={item.id}>
          {item.title}
        </li>
      </Link>
    )
  });

  return (
    <div>
      <ul>
        {allList}
      </ul>
    </div>
  )
}
```

So, in `componentDidMount`, where we would normally put an AJAX request, we now ask Redux for all of our links. Then (as normal) we map over an item (`allMemes`) in our state to get JSX that we can return from our `render` function.

Each of these items links (using `react-router-dom`'s `Link`) to the individual page for that link. Let's take a look:

## singlelink.jsx

```js
componentDidMount () {
  this.props.getSingleLink(this.props.id);
}

render () {
  const { state } = this.props;
  return (
    <div>
      <h3>{state.oneMeme.title}</h3>
      <a href={state.oneMeme.url} target="_blank">
        <p>
          Go to Site
        </p>
      </a>
    </div>
  );
}
```

You can see a pattern here. Using the lifecycle function `componentDidMount`, we make all of our components (sort of) stateful. Instead of passing a whole link down as a prop to this component, it can independently render itself by referring to Redux - meaning that we can link to a page for a single link and not worry about whether we grabbed all of them first. That's not usually an issue (the parent component `Links` renders anyways) but it's definitely a good thing.

Now for the new stuff. What the heck was `dispatch` (in our `LinksContainer` component) doing?

Let's look at some reducers...

## linksreducer.js

```js
export default (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case "GET_ALL":
      return newState;
    case "GET_ONE":
      let theOne = newState.allMemes.filter((meme) => meme.id === action.id);

      if (theOne[0]) {
        return ({
          allMemes: newState.allMemes,
          oneMeme: theOne[0]
        });
      } else {
        return newState;
      }
    default:
      return newState;
  }
};
```

So, we define a default state, that will (for now...) represent what we get from making a SQL request to our database. Then, we put it in an anonymous function that we just export.

But what is this function doing? Well, it expects a state (which we give it) and an action. Remember `dispatch`? That's the format it gets the action in - an object with (for certain) a key called `type`. When it gets one kind of action type, it does one thing, and a different one for another - standard if-else stuff.

We return a state, which we then pass to all our components by way of `connect` in `LinksContainer`. This way, we can call the functions from our components, and their `state` prop will change automatically - it's handled by Redux.

## rootreducer.js

This is where it all comes together. We use `combineReducers` to grab all of our reducers that we define, merging our state and the methods to change that state into one big easy-to-access place.

Then, we pass it to our React-DOM function by way of `index.js`, in `createStore`. We've come full-circle - Redux both gives its state to components and to our JS files that, ultimately, compile to manipulate the DOM.

## Project

[Complete the app!](../../projects/redux_3/redux_3.md)
