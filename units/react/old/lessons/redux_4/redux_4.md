# Redux 4

## Links

* React Router Cats
  * [without redux](https://codesandbox.io/s/o75qzy25r6)
  * [with redux](https://codesandbox.io/s/w607v68qzl)
* [Container components - Learn React with chantastic](https://medium.com/@learnreact/container-components-c0e67432e005)
* [Presentational and Container Components - Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Lesson

Today we will look at how to rewrite the [react router cats](https://codesandbox.io/s/o75qzy25r6) project with Redux.

### [React Redux Router Cats](https://codesandbox.io/s/w607v68qzl)

Mostly, this is similar to Redux apps that you've seen before. However, there are a couple of things we'd like you to look at.

### CatList Reducer

```js
export default (state = [], action) => {
  switch (action.type) {
    case "SET_CAT_LIST":
      return action.catList;
    default:
      return state;
  }
};
```

Not too much to say here, except that you can see our default Redux state in all of our reducers is empty. We are going to query our API to populate them. Which brings us to...

### CatListContainer

```js
componentDidMount() {
  catAPI.getAll().then(cats => {
    console.log("got cats: ", cats);
    this.props.dispatch({ type: "SET_CAT_LIST", catList: cats });
  });
}
```

In the componentDidMount here, we combine two things that you've done in the past. First, we make a pseudo-AJAX request with our makeshift Cat API. Then, we utilize the Redux method `dispatch` to update our empty Redux state with our cats.

If you aren't too fussy about specifics, and you're looking for a way to conceptualize `dispatch`, you'll notice here that it functions in a way that's very similar to React's `setState`. Our naming bears this out - we say `"SET_CAT_LIST"` to indicate that we are 'setting' a state that our CatList component can use as a prop.

### Cats and CatContainer

From Cats.js:

```js
renderCat = props => {
  const { id } = props.match.params;
  return <CatContainer id={id} />;
};
```

From CatContainer.js:

```js
componentDidMount() {
  const { id } = this.props;
  catAPI
    .getOne(id)
    .then(cat => {
      this.props.dispatch({ type: "SET_CAT", cat: cat });
    })
    .catch(err => {
      console.log(err);
    });
}
```

You can see here that CatContainer is doing a lot. It's receiving the `id` prop from Cats, it's making an API call for the specific cat object, and it's dispatching that object to our Redux reducer.

We can also send dispatches to favorite and unfavorite cats - again, functioning like `setState`:

```js
removeFromFav = id => {
  const { dispatch } = this.props;
  dispatch({ type: "REMOVE_FROM_FAV", id: id });
};

addToFav = cat => {
  const { dispatch } = this.props;
  dispatch({ type: "ADD_TO_FAV", cat: cat });
};
```

### Exercises

1. When a single cat is not found, display a corresponding message.
2. Display a `"loading"` message or animation:

* After the user click on `cat list` in the navigation bar.
* After the user clicks on a single cat.

#### Bonus

Rewrite the `catAPI.js` file to use the [cat api](http://thecatapi.com/docs.html). The cat api cannot respond with `json`, only `xml`, so you will need to find a way to convert xml to json.
