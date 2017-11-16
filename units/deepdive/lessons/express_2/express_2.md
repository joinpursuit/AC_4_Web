# Express - Part 2

## Resources

* [Express - Using Middleware](https://expressjs.com/en/guide/using-middleware.html)
* [Express - Routing](https://expressjs.com/en/guide/routing.html)
* [mogran](https://github.com/expressjs/morgan)

## Lesson

This lesson assumes you have a minimal working express server.

### Development dependencies

There are a number of dependencies (e.g. modules) that we'll use to create express apps.

#### `morgan` (Logger)

 One such dependency is [morgan](https://github.com/expressjs/morgan). Once installed and set up, morgan will log all incoming HTTP requests to the console. To install morgan, we run the following in the command line:

```bash
npm install --save morgan
```

Once installed, we should be able to see morgan under *dependencies* in the `package.json` file:

```json
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2",
    "morgan":  "^1.9.0"
  }
}
```

To use morgan in our app, we do the following in `index.js`

```js
// create "middleware"
const logger = require('morgan')
const express = require('express')
const port = 8000;

const app = express()

app.use(morgan('dev'))

...

```

Express is built on the idea of **middleware** (more on this in future lessons). For now, you just need to know that any incoming request will first pass to `morgan`, be logged, and then be passed on to `app.get('/')`. Things happen in the order that they appear in the code, from top to bottom.

#### Activity

Start the express app and navigate to `localhost:8000`. What do you see in the terminal window?

### Routing

In express, we simply need to enter the different routes (= URLs) to which we want our app needs to respond. Initially, we defined just one route in our app:

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

This is the route when the user simply types the url as is (i.e. `localhost:8000`). Here is how we would add a route for when the user types the url `localhost:8000/cats` and `locahost:8000/dogs`

```js
app.get('/cats', (req, res) => {
  res.send('meow!')
})

app.get('/dogs', (req, res) => {
  res.send('woof!')
})
```

### Fallback Route

We can also include special `*` character in our router to match all routes. You can do this as a fallback, in case no other route was matched. Make sure to put a route with only `'*'` **after** all the other routes - otherwise all incoming urls will be routed to it.

```js
app.get('*', (req, res) => {
  res.redirect('/')
})
```

Above we use `res.redirect` to redirect the user to the root (`/`) route of our website.

### Route Parameters

We can also define routes that handle parameters. We usually do this by using the `/:` characters. We can then access each of the parameters using `req.params`:

```js
app.get('/users/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

app.get('/users/:name/:favecolor', (req, res) => {
  // ES6 destructuring assignment
  // equivalent to
  // const name = req.params.name
  // const favecolor = req.params.favecolor
  const { name, favecolor } = req.params;
  res.send(`hello ${name}! Hope you are having a ${favecolor} day!`)
})
```

### Exercises

* [Express Part 2 - exercises](../../exercises/express_2/express_2.md)
