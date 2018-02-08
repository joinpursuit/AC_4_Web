# Registering Users - Lesson 2

## Resources

* [This Lesson's Repo](https://github.com/lizraeli/express_fullstack_auth_2)

* [Middleware - Wynne Lo](http://wynnelo.com/2015/10/middleware/)
* [Middleware - Lynne Grew, CSU East Bay](http://www.mcs.csueastbay.edu/~grewe/CS6320/Mat/NodeJS/ExpressMiddleware.html)
* [PassportJS](http://www.passportjs.org/)
* [Express Session](https://github.com/expressjs/session)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [Michael Herman's Tutorial](http://mherman.org/blog/2016/09/25/node-passport-and-postgres/)
* [Registering Users - Lesson 1](../user_registration/user_registration.md)
* [How Can bcrypt Have Built-in Salts? - Stack Overflow](https://stackoverflow.com/questions/6832445/how-can-bcrypt-have-built-in-salts)

In this lesson we will continue building up a fullstack app with express, postgres and react.

## Backend: Folder Structure

The following are some of the important folders and files of the backend express server:

```text
+ auth/
  - helpers.js
  - local.js
  - passport.js
+ db/
  - index.js
  - queries.js
  - users.sql
+ routes/
  - users.js
- app.js
```

## Event Flows

There are several flows of events that can happen, starting from the client, going to the server, and back to the client.

### Register User

![register user](assets/register.png?raw=true)

To register a user, a post request is sent to the route _users/new_, the request body containing the username and password. On the server side, `app.js` notes that the request route begins with `users/` and passes the request to `users/users.js` to look at the rest of the route. `users.js` notes that the request type - `POST`, and the rest of the route: `/new`, and forwards the request to the `createUser` function in `db/queries.js`. The `createUser` function creates extracts the password from the request body, creates a hash using the `createHash` function in `auth.helpers.js`. It then insert the user and hashed password into the database, and sends an `Ok` response back to the client.

### Login User

![login user](assets/login.png?raw=true)

To log in, a `POST` request is sent to the route _users/login_, the request body containing the username and password. On the server side, `app.js` notes that the request route begins with `users/` and passes the request to `users/users.js` to look at the rest of the route. `users.js` notes that the request type - `POST`, and the rest of the route: `/login`. Note the (strange-looking) handler for this route:

```js
router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user;
  res.send(`${req.user.username} is logged in`);
});
```

There are several things at play here, some new, and some that we have not discussed in depth before. First, we will turn to the concept of _middleware_.

### Middleware and Express

You may have heard the term before. Looking at the [express documentation](https://expressjs.com/en/guide/writing-middleware.html):

> Middleware functions are functions that have access to the request object (req), the response object (res), and the _next_ function in the application’s request-response cycle. The _next_ function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
>
> Middleware functions can perform the following tasks:
>
> * Execute any code.
> * Make changes to the request and the response objects.
> * End the request-response cycle.
> * Call the next middleware in the stack.
>
> If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

In express, an incoming request will pass through an "assembly line" of middleware functions. Most of these would do some operation pertaining to the request, and put the request back on the assembly line, to be taken up by the next middleware function.

![middleware](assets/middleware.png?raw=true)

For example, the `body paser` middleware takes a request, attaches the request body to the `req.body` property, and passes the request on using `next()`. Without using the body parser at the beginning of the assembly line, there would be no `req.body` available. (the inner workings of `body parser` are not relevant for the current discussion).

We define the middleware functions to be used by calling the `app.use` method. For example, in `app.js` we tell express to use the _body parser_ to try to parse a request body in the json format.
Note that below, the call to `bodyParser.json()` will return a middleware function.

```js
app.use(bodyParser.json());
```

Middleware functions are called in the same order that we pass them to `app.use`.

For a great visual explanation of middleware check out this [article on Middleware by Wynne Lo](http://wynnelo.com/2015/10/middleware/).

> Ex. write your own middleware function. Make it the first middleware to be called on the server. On any request, the function should log `"I'm first!"` and pass the request to the next middleware by calling `next()`.

### Passport, Session and Cookies

The [passport](http://www.passportjs.org/) middleware allows us to authenticate users. When a user is authenticated succesfully, passport will use the current [session](https://github.com/expressjs/session) as follows:

1. It will add the user's information to be stored on the server adjacent to the session id.
2. It will send a cookie to the client with the session id.

The client (usually a web browser) is set to handle cookies automatically, and will attach the cookie on any subsequent request to the server.

![cookie session](assets/cookie_session.png?raw=true)

Looking back to the handler for the `/users/login` route:

```js
router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user;
  res.send(`${req.user.username} is logged in`);
});
```

We see that there are two functions that follow the string `"/login"` as arguments. These work just like middelware functions. `passport.authenticate("local")` will return a function, which, given the request as an input, will attempt to authenticate bassed on the request body _username_ and _password_ propeties. The procedure for the authentication is define in `auth/local.js`. If the username/password combination cannot be found in the database, this function will automatically send a response status `401 - Unauthorized`. (There is more advanced usage where we can manually determine the response send to the user). If the username/password is valid, passport will follow the steps outlined above (add user to session, attach cookie to response), and will then call the next function defined for this handler. That function will simply send a string `[username] is logged in`. The cookie has already been attached and will be sent with the response. The client will attach the cookie to each subsequent request. Passport will scan incoming requests, and will modify requests with the session id of a logged in user. Any such request will get the `user` object directly on the request. This will make the user accebile simply through `req.user`.

### Getting The Hobbies

Note the handler for the `GET users/hobbies` request.

```js
router.get("/hobbies", loginRequired, db.getUserHobbies);
```

The `loginRequired` function is defined in `auth/helpers.js`:

```js
function loginRequired(req, res, next) {
  // if the user is logged in, passport will have attached
  // the user to it
  if (!req.user) {
    return res.status(401).json({ status: "Please log in" });
  }
  return next();
}
```

If there request does not have a `user` attached to it, this is not a request from a logged-in user. In this case, a response with status `401` (unauthorized) will be returned. If the user is logged in, the next function for this handler will be called: `db.getUserHobbies`. This function will query the databse for hobbies based on `req.user` username/id.

> Ex. Draw similar diagrams for the events flows for the following requests:
>
> * GET "/HOBBIES"
> * PATCH "/HOBBIES

### Frontend

> Ex. If the user has logged in, try to log them in automatically on page refresh. This can be done in the `Users` - `componentDidMount`.
> Ex. Add a logout button that will log out the user.
