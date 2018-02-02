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

## A Deeper Dive into Auth

### helpers.js

```js
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none('INSERT INTO users (username, password_digest) VALUES (${username}, ${password})', {username: req.body.username, password: hash});
}
```

You will notice, if you take a look at Michael Herman's `helpers.js` file, that this looks very similar - we simply replace the module he uses to interact with the database (called "knex") with our own (pg-promise).

We define two functions here - `comparePass`, which (as the name implies) hashes its first (plain) argument and compares it to the second (hashed) argument. We have to hash instead of decrypt because **it is intentionally impossible** to decrypt hashes.

The second function does what its name implies - it salts and hashed an inputted password and adds the user to the database.

### local.js

This file is to configure Passport to verify users in our database. If a user is verified, then we return it, and Passport is given the go-ahead to assign our browser a session token.

### passport.js

This file works in tandem with `local.js` to configure Passport. It adds the logic to `serialize` (login) the user, and `deserialize`, which verifies any user requests to the database.

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

**Note:** Our session token is a hash, too, and hashing functions often require a seed to get started. The 'secret' part is that seed, and could be anything - here, we used a series of randomly generated characters. It's not generally best-practice to shove it right in there - when we deploy to production, we'll want to hide it in a similar way that we'd hide our API keys.

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

The order here is important:

* First, we use our `authHelpers.createUser` method (from the `helpers` file in the `auth` folder) to process the user's password and add it to the database.
* Then, should the `createUser` promise resolve, we authenticate their password using `passport.authenticate` and log them in.
* Finally, `passport.authenticate` should return a user object if it resolves. We use that user object to send a response indicating that our registration was successful.

## React - Not Much Different

In our React app, we create a couple of new components to register users and log them in, but not much is different here at all - we get info from our users and use that to make AJAX requests to our server. All of our auth stuff happens on the backend.

### Exercise

First, using a combination of the Michael Herman tutorial and the example app as a reference, **recreate the example app** yourself to get a sense of what goes where.

You may have noticed that there isn't a function in `queries` to log in a user. The frontend components include a login page, but the AJAX request it sends currently returns an error 500.

Using the Michael Herman tutorial from the Resources section, create a loginUser function to complete this app's login functionalities.

**Bonus**: Display the logged-in username in the upper-left hand side of the screen.
