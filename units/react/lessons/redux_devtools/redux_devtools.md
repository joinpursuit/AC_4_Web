# Redux Devtools

## Links

* [Redux Devtools Extension - github](https://github.com/zalmoxisus/redux-devtools-extension)
* [Redux Devtools - Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

### Instructions

Redux devtools are a great tool to visualize the redux store and to debug redux apps. When installed with Chrome, the Redux Devtools can be accessed by opening the browser's developer tools and selecting the `Redux` tab.

![screenshot](assets/screenshot.png?raw=true)

To set up Redux Devtools:

1. Install the extension from the [chrome web store].(https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. In your project, modify the `createStore` function to take a second argument (this is typically in `index.js`):

```js
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```
