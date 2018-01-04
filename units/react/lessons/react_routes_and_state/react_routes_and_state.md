## Routing with State

Thus far, we've kept routing and state management separate. That's about to change.

### [Cat App](https://codesandbox.io/s/o75qzy25r6)

Take a moment to look this app over. It should look relatively similar to our Pets app from yesterday. Check out the files in the following order:

* `index.html`
* `index.js`
* `App.js`
* `Home.js`
* `/Cats/catAPI.js`
* `/Cats/Cats.js`
* `/Cats/CatList.js`
* `/Cats/Cat.js`

Let's think about what this app is doing. We have:

* A homepage
* A list of cats
* Views for individual cats
    - Buttons to favorite/unfavorite individual cats
* A list of favorite cats

Wait. What? Yes. We now have a means to change information in one route (the individual cat components, using the **favorite** button) and have it update in another (the list of favorite cats).

However, looking at the components that render those two pages, we can see that they aren't stateful components. They can't re-render themselves in response to user input. How, then, do we update our favorite cats?

Sorcery.

Just kidding. We manage all of those components from `Cats.js`, which, if you take a look, has a state. It also has plenty of functions. `addToFavs` and `removeFromFavs` passes favorite-ing functionality to each individual cat component through `renderCat`.

Let's think, then, about what happens in our app when the user clicks "add to favorites." First, consider the `Cat` component, where the event is triggered:

``` javascript
const Cat = ({ id, url, isFavCat, addToFavs, removeFromFavs }) => {
  return (
    <div>
      id: {id}
      <div>
        <img style={styles.img} alt="" src={url} />
      </div>
      {isFavCat ? (
        <button onClick={removeFromFavs}> remove from favorites </button>
      ) : (
        <button onClick={addToFavs}> add to favorites </button>
      )}
    </div>
  );
};
```

You can see we're passing a lot in here. We've got all the standard stuff we used in our previous pets app (`id` and `url`), plus a new item - `isFavCat`. `isFavCat` is a boolean that returns true or false depending on whether the cat is favorited. Where do we get that from?

Let's go to where we pass that `Cat` component props, our `Cats` component:

```js
renderCat = props => {
    const { id } = props.match.params;
    const cat = catAPI.getOne(id);

    if (!cat) {
      return <div> could not find cat </div>;
    } else {
      const { favCats } = this.state;
      const isFavCat = favCats.some(cat => cat.id === id);
      return (
        <Cat
          addToFavs={() => this.addToFavs(cat)}
          removeFromFavs={() => this.removeFromFavs(cat.id)}
          isFavCat={isFavCat}
          url={cat.url}
          id={cat.id}
        />
      );
    }
  };
```

This also looks similar, but you can see another change in our `else` clause. We are storing our favorite cats' `id`s in our state, under the name `favCats`. We make a copy of that part of state, and for each individual cat, we determine if it's present in our `favCats` array using the enumerable `some`, which returns a boolean depending on whether its argument returns true for one or more elements of the array - hence, `some`.

Let's take a look at how we manage our state:

```js
removeFromFavs = id => {
    const { favCats } = this.state;
    this.setState({
      favCats: favCats.filter(cat => cat.id !== id)
    });
  };

  addToFavs = cat => {
    const { favCats } = this.state;
    this.setState({
      favCats: [...favCats, cat]
    });
  };
```

We remove a cat from our favorites using the `filter` enumerable and we add them using the spread operator. Simple as that.

Note here that **at no point are we changing our `catAPI.js` file**. This means that we don't persist data yet (*yet...*) - instead, we manage extra information (in this case, whether the user likes a cat) in our frontend state and nowhere else. We don't necessarily want one user's opinion of a cat to change all users' data, so for now, this is what we're doing.
