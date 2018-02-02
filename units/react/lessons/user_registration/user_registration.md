# Registering Users using Postgres, Express and React

## Resources

* [Michael Herman's Tutorial](http://mherman.org/blog/2016/09/25/node-passport-and-postgres/)
* [Example using pg-promise](https://github.com/crymall/express_fullstack_example)

## The Skinny

User registration and authentication is fairly difficult to wrap your head around. Thankfully, **it can stay that way** for now. If you want to do Serious Backend Security Development stuff, you can go super deep into these concepts, but for most of us, we just need to have the **boilerplate available** and know how to use it.

That's not to say this won't be a test of your core JavaScript and Express skills, because it absolutely will be. We just won't be going into the nitty gritty of what, exactly, everything is doing.

In this example, we are using a heavily modified version of the full-stack app we created the first time we put Postgres, Express, and React together.

## More Modules

```js
"dependencies": {
  "bcryptjs": "^2.4.3",
  "body-parser": "~1.18.2",
  "cookie-parser": "~1.4.3",
  "debug": "~2.6.9",
  "express": "~4.15.5",
  "express-session": "^1.15.6",
  "jade": "~1.11.0",
  "morgan": "~1.9.0",
  "passport": "^0.4.0",
  "passport-local": "^1.0.0",
  "pg-promise": "^7.3.3",
  "serve-favicon": "~2.4.5",
  "supervisor": "^0.12.0"
}
```

New ones include `bcryptjs`, `express-session`, `passport`, and `passport-local`. The first one, a JavaScript-y extension of bcrypt, is how we will hash and salt our passwords. The other three are all about user authentication - in other words, how we will put a cookie on the user's browser if they input the correct username and password.

## A New Folder: Auth

In this folder, we have three files:

```
-helpers.js
-local.js
-passport.js
```

`helpers.js` is where we use bcrypt to create and verify users. `passport.js` is where we set up how passport will *serialize* and *deserialize* users. This sets up how passport will assign session cookies. Finally, we have `local.js`, which determines whether or not we will, in fact, assign a cookie to a user who is logging in - in other words, we check whether the user exists in the database.

## app.js - Ensuring that authentication occurs

We add several bits to app.js to ensure that requests to the database are properly authenticated:

```js
const session = require('express-session');
const passport = require('passport');

// other middleware stuff

app.use(session({
  secret: "\x02\xf3\xf7r\t\x9f\xee\xbbu\xb1\xe1\x90\xfe'\xab\xa6L6\xdd\x8d[\xccO\xfe",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
```

The 'secret' part is a series of randomly generated characters, and it's generally not best-practice to shove it right in there - when we deploy to production, we want to hide it in a similar way that we'd hide our API keys.

## queries.js - Where the Requests Happen

In `queries.js`, we import some auth files and use them to rewrite our addUsers function, creating a new function called `registerUser`:

```js
function registerUser(req, res, next) {
  return authHelpers.createUser(req)
    .then((response) => {
      passport.authenticate('local', (err, user, info) => {
        if (user) {
          res.status(200)
             .json({
               status: 'success',
               data: user,
               message: 'Registered one user'
             });
        }
      })(req, res, next);
    })
    .catch((err) => {
      res.status(500)
         .json({
           status: 'error',
           error: err
         })
    });
}
```

## React - Not Much Different

In our React app, we create a couple of new components to register users and log them in, but not much is different here at all - we get info from our users and use that to make AJAX requests to our server. All of our auth stuff happens on the backend.

### Exercise

You may have noticed that there isn't a function in queries to log in a user.

Using the Michael Herman tutorial from the Resources section, create a loginUser function to complete this app's login functionalities.

**Bonus**: Display the logged-in username in the upper-left hand side of the screen.
