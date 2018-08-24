# Sequelite

Sequelite is a cool, lightweight way to locally host and query databases without the help of a server. Instead of running the database off of a server (which is what Postgres does), we create a file that stores all of our data and store it in our app itself.

This has limitations, but generally, works pretty well. It's used almost exclusively in mobile apps, for example.

Here's how you might implement it in an Express project.

First, install Sequelite by opening your terminal and typing `npm install -g sqlite3`. Next, install an easier way to access the database (think pg-promise) by npm installing, in your app, `better-sqlite3`.

Then, `cd` down to your 'db' folder and type `sequelite3 {database name}.db`. This will create an empty Sequelite database in your 'db' folder - it should be visible in your files.

Now it's time to feed our Sequelite database tables and data. If you typed the commands above, you should already be in the Sequelite database environment in your terminal. From here, simply type:

`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT);`

Remember your semicolons! Then type:

`INSERT INTO users VALUES (NULL, "Reed");`

You should, at this point, have a Sequelite database with a table (users), with two columns (id and username). You should also have a single item in that table, with the username "Reed".

As we aren't using pg-promise in our `queries.js` file, your queries are going to look a little bit different. Consider this example:

```js
const Database = require('better-sqlite3');
const db = new Database('./db/users.db');

function getAllUsers(req, res, next) {
  let allUsers = db.prepare('SELECT * FROM users').all();

  res.status(200)
     .json({
         status: 'success',
         data: allUsers,
         message: 'Retrieved ALL users'
     })
}
```

You can see here that we aren't using `.then`. This is because better-sqlite3 isn't Promise-based. Because sqlite is very fast, we shouldn't need to deal with any asynchronicity.

Take a look at the [better-sqlite3 API documentation](https://github.com/JoshuaWise/better-sqlite3/wiki/API) to see what `.prepare` and `.all` are doing. It's quite possible that, depending on what you want to do to your database, you won't be using those exact commands.
