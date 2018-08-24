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

This is the folder structure of the redux cats app :

```text
+ api
  - catAPI.js
+ components
  - App.js
  - Cat.js
  - CatList.js
  - Cats.js
  - Home.js
+ containers
  - CatContainer.js
  - CatListContainer.js
  - FavCatsContainer.js
+ reducers
  - cat.js
  - catList.js
  - favorites.js
  - rootReducer.js
- index.js
```

This is one approach to structuring a Redux app, where each _container_ component has a relatively limited scope. The following is a diagram of the app's components:

![cats diagram](assets/redux-cats-diagram.png?raw=true)

Each Container component (i.e component whose name ends with `"Container"`) is connected to the Redux store. The `CatListContainer` component takes the `catList` property from the store, which is an array of cats, and dispatches the action `SET_CAT_LIST` to set the cat array once it fetched it from the api. The `FavCatsContainer` component fetches the `favorites` property from the store, which is an array of the favorite cats. The `CatContainer` component takes both `cat` and `favorites` properties from the store. It checks if the cat is in the `favorites` array, and passes a corresponding boolean `isFav` to `Cat`, along with the cat itself, and with methods to both add and remove the cat from favorites.

### Exercises

1. When a single cat is not found, display a corresponding message.
2. Display a `"loading"` message or animation:

* After the user click on `cat list` in the navigation bar.
* After the user clicks on a single cat.

#### Bonus

Rewrite the `catAPI.js` file to use the [cat api](http://thecatapi.com/docs.html). The cat api cannot respond with `json`, only `xml`, so you will need to find a way to convert xml to json.
