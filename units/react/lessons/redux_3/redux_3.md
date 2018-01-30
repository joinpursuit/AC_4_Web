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

`getAllLinks` and `getSingleLink` look pretty similar to one another, and looking at them more closely, they don't look too different from event handling functions you've worked with in React. OK, so clearly, we're getting a function called `dispatch` as a prop, and because we haven't seen it before, we can safely assume it's Redux stuff.

However, because these functions are accurately named, we can get a sense of what they do. `getAllLinks`, most likely, gets all of our links - probably to render them all at once. `getSingleLink` just gets one link, probably to render them individually. More on that later.
