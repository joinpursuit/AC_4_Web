# React - AJAX

## Resources

* [The Component Lifecycle - React Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [componentDidMount() - React Docs](https://reactjs.org/docs/react-component.html#componentdidmount)
* [AJAX Requests in React: How and Where to Fetch Data](https://daveceddia.com/ajax-requests-in-react/)
* [axios - github](https://github.com/axios/axios)
* [The Dog API](https://dog.ceo/dog-api/)

## Lesson

In react components, AJAX calls can be made in event handlers (e.g. `handleInputChange`) , or one or more of the component _lifecycle_ methods.

### Component Lifecycle: _Mounting_

In react terminiology, each component has [lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle) that are executed automatically at specific times. We say that a component is _mounting_ when it is being created and rendered to html. As a component mounts, the following methods are called:

1. [constructor()](https://reactjs.org/docs/react-component.html#constructor)
2. [componentWillMount()](https://reactjs.org/docs/react-component.html#componentwillmount)
3. [render()](https://reactjs.org/docs/react-component.html#render)
4. [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)

Out of these, the only method we must implement is `render()`. As we've seen, we only need to implement `constructor()` if we want to assign the component a `state` or other variables to be accessible through `this`. The `componentWillMount()` method will rarely be useful to us - calling setState() while this method is being executed will _not_ trigger a re-rendering.

### [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)

If implemented, the `componentDidMount` method will be called immediately after the initial `render()`. This is similar to the `DomContentLoaded` method that we used when interacting with the html dom directly with javascript. This is a good place to make an ajax call.

## [Random Dog Pictures v1](https://codesandbox.io/s/m4oz8yqlvx)

Let's make a react component that will fetch a random dog picture and display it to the user. A picture will be fetched when the component loads. After that point, the user can click a button and get a new random dog picture.

We will use the [Dog API](https://dog.ceo/dog-api/). We will be making AJAX `GET` requests to the [/api/breeds/image/random](https://dog.ceo/api/breeds/image/random) route on this api to get a URL to a random dog picture. The response is a JSON object that looks likes this:

```JSON
{
  status: "success",
  message: "https://dog.ceo/api/img/bulldog-french/n02108915_618.jpg"
}
```

### [Axios](https://github.com/axios/axios)

Instead of using the fetch API or XMLHTTPReqhest, we will use a third party library called [axios](https://github.com/axios/axios) to make our AJAX requests. Using `axios` is not much different from using the `fetch` API, and it comes with the added benefit of abstracting away some common issues. For example, `axios` treats a reponse with an error status (e.g. `404`, `500`) as an error, so that we can handle it by using the `catch` method. The fetch API does  automatically treat an error status as an error - these must be checked for manually. For more detail, you may read [this article](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5).

### Axios on CodeSandbox

To use axios on CodeSandbox, we need add it as a dependency to our project. We do this in he left-hand side menu, by clicking on `dependencies` -> `Add Package`, typing _axios_ in the new window and clicking on the first result. Then we import the _axios_ library to our project by adding a `require` statement:

```js
const axios = require("axios");
```

To get started with the random dog pictures project, we will define a state with a single property `imgURL`:

```jsx
class App extends React.Componeant {
  constructor() {
    super();

    this.state = {
      imgURL: ""
    };
  }
  ...
```

We will then define a method to make the AJAX call to get a random dog image. We use the axios `.get` method to make the request. This returns a promise, so we chain the `then` method to handle the response when it will arive. To get the content of the reponse using axios, we need to get the content in reponse's `data` property. Recall that the Dog API returns a JSON object with two properties: `status`, and `message` which contains the image url.

```jsx
  getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.setState({
          imgURL: response.data.message
        });
      });
  };
```

Now that we've defined the `getRandomImage` method, we can define the `render` function:

```jsx
  render() {
    const { imgURL } = this.state;
    return (
      <div>
        <p> Random Dog Pictures v1 </p>
        <div>
          <img style={styles.img} alt="" src={imgURL} />
        </div>
        <p>
          <button onClick={this.getRandomImage}> one more! </button>
        </p>
      </div>
    );
  }
```

Note that we are using an inline style for the image to set a constant height for each image we get from the API.

```jsx
const styles = {
  img: {
    height: "15em"
  }
};
```

Finally, we define the `componentDidMount` method to load an image as soon the component is mounted:

```js
  componentDidMount() {
    this.getRandomImage();
  }
```

### Dealing with AJAX Errors

An ajax request can fail in many ways. Most of the can be handled by defining a `catch` method to our axios request. For now we will simply log that there has been an error.

```jsx
getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.setState({
          imgURL: response.data.message
        });
      })
      .catch(err => {
        console.log("error fetching image: ")
      })
  };
```

Later on we will deal with errors in a more elegant way, so that both  the user can know that there was some network error. Otherwise the user may assume that our website is not working correctly.

### Activity

* try and change the `url` for the axios `get` method by adding an `s` at the end.
* 

### Dog Breeds

