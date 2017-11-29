# Integrating Express and Postgres

## Other Postgres Statements

Take a look at the `northwind.sql` file in the "Projects" section for this unit.
This file, to refresh your memory, *seeds* a database with tables and data.

Normally, you'd want to populate your database with real input—for example,
from inventory scans or form completions. However, if you want to create and
show a web app that you've developed independently, you don't always have time
to use it enough to develop a compelling dataset.

Seeding databases, in short, lets you cheat! You can create tables, add columns
to those tables, create associations between them, and populate them with
data, no real-world use required.

While the statements that let you do this are mostly self-explanatory, let's
review a few to make sure we get it:

* `DROP TABLE`
  - This ensures that you cleanly seed your database. If you've seeded
  it before and changed any data, this will drop your old, changed tables
  and replace them with new, fresh ones. The IF EXISTS makes sure that it's
  referring to something—otherwise you'd tell the system to drop a table
  that doesn't exist and it'd probably throw an error. Think of re-seeding
  your database as starting from scratch.
* `CREATE TABLE`
  - This... creates a table. Notice the unique argument that creates columns,
  specifies the data type of those columns (e.g. smallint, character, etc.),
  and specifies certain conditions that the column must meet (e.g. NOT NULL if you want
  to require that data be included).
* `INSERT INTO _ VALUES _`
  - This allows you to seed your tables with data. Arguments line up 1:1
  with columns.
* `UPDATE _`
  - This updates existing values in a table.
* `DELETE FROM _`
  - This allows you to delete rows from a table.
* `ALTER TABLE...` etc.
  - This allows you to create associations between different tables. Remember
  that this has to happen on both ends—both the table containing the foreign
  reference and the primary table being referenced have to have this association
  established.

## pg-promise and Express App Structuring

Alright, at this point, you should have all the tools to put together a complete
Express app, with a SQL database and everything!

But how? What does an Express app with a SQL database look like? How do we
integrate our SQL queries into JavaScript?

Great questions. In order to parse SQL in our Express apps, we're going to use
a module called pg-promise. Pg-promise connects to our database and produces
an object, which we'll assign to a variable called `db`.

Once we have this object, the world is our oyster. We can use the methods
packaged into pg-promise to interact with our SQL database. Like so:

```javascript
function getAllPuppies(req, res, next) {
  db.any('select * from pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
```

Let's slow down and look closely at the above function. We have the method `any`,
which we're giving a string-formatted SQL request as an argument. True to its name,
pg-promise returns a Promise object from this method. We can then utilize the `.then`
method (remember Promises?) to send a response to the client once we fetch the
data from our database server. We then use `.catch` to handle any errors.
