# Introduction to SQL

![Pronunciation is hard](https://i.imgur.com/AF73EN7.jpg)

**Resources**

* [How to install Postgres on Linux](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)
* [Mac Postgres app](https://postgresapp.com/)
* [PSequel (Database Visualizer for Mac)](http://www.psequel.com/)
* [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
* [Wikipedia Entry for NULL](https://en.wikipedia.org/wiki/Null_%28SQL%29)

## Pulling It All Together

Okay, so we've been learning how to make SQL queries and get information from
databases using SQLZoo. That's nice, but it's not the full picture. If we're
developing production apps, we don't just want to be able to ask for and get
data—we want to create, update, and delete information from our own databases.

In order to do this, we need something called a **database server**, which is
handled by an **RDBMS** or a Relational Database Management System. In this case,
we're going to use a service called **PostgreSQL** (AKA Postgres).

## Postgres

You should be familiar with the **client-server model** from our work with HTTP.
SQL is simply another structured way of querying a server to get, update, or delete
information. You can think of Postgres like Node's HTTP module, if you'd like,
in that it acts as a middleman between these requests and responses.

Not all user inputs will require queries to our servers—remember, we can also
store data on the frontend in the user's browsers. However, when you're working
with lots and lots of data, it doesn't make sense to ask the user to download
and manage all of your information locally—it's a *web* app, remember?

So, let's say that we're making Yelp, and a test user is searching in an area
they've never searched before. Because we don't have restaurants in this area
saved on the frontend, we'll have to query our database. So, under the hood,
the interaction might go like this:

**User** -> *HTTP Request* -> **Our Server** -> *Database Query* -> **Our Database**

This flow is also important if, say, our user wants to leave a review. In order
for other users to see that review, we will have to save the review to our database.
That review, of course, will have the proper associations to the restaurant,
so when other users bring up the restaurant our database will send that user's
review.

More on Postgres (for example, how to incorporate it into our previously-stateless
Express apps) later!

## Advanced SQL- Joins

A quick refresher—databases, at their core, are made up of tables. Those tables
can point to one another by way of *foreign keys*. For example, in a database of
teachers in a school district, each teacher might have a column indicating their
`school_id`. These integers would point to IDs in a `schools` table. That way,
we can query the `teachers` table for teachers that come from a particular school.

This method of querying presents a problem. Database queries are expensive operations.
In the modern web, querying a database is frequently a computational *bottleneck*,
which simply means it's one of the more time-consuming actions our apps can perform.
This means, if we want to query for information across multiple tables, it doesn't
make sense for us to send multiple queries to our database.

Enter **joins**.

Joins are a way for us to grab information from two tables at once. Think of them
as a way to grab all of the information that you'll find relevant from each table.
This presents opportunities and problems, which is why different types of joins
prove useful.

Take a look at the article in the Resources section, [A Visual Understanding of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/).
Here, you'll find the different types of joins, which I'll list below:

* `INNER JOIN`
* `FULL OUTER JOIN`
* `LEFT OUTER JOIN`
* `CROSS JOIN`

There's a `RIGHT OUTER JOIN`, too, which works the same way as `LEFT OUTER JOIN`.
Largely, we'll want to be doing the first three types of joins. Don't worry about
`CROSS JOIN` for now.

In order to produce nice, orderly data, you'll want to join `ON` particular
columns. To use our earlier example, let's say you wanted to get the school's name
next to the teacher. You could do something like this:

```sql
SELECT fname, lname
FROM teachers
INNER JOIN schools
ON teachers.school_id = schools.id
```

This would produce a list of teachers with their corresponding schools next to their
names. It would only include teachers that have `school_id`s that correspond to
entries in the `schools` table-that's what our `INNER JOIN` is doing.

## NULL- When Nothing is Important

So, what's the real difference between "outer" and "inner" joins?

The answer has something to do with NULL. NULL is SQL's way of saying that
a piece of data does not exist in the database. INNER JOINs hate NULL values.
In our above example, if a teacher didn't have a `school_id` (i.e. if it was
NULL), it wouldn't show up in our response.

However, if we did a FULL OUTER JOIN, teachers without a `school_id` would
show up. We might get something like this:

| id            | fname          | lname  | school_id | id  | name  |
| ------------- | ------------- | ----- | --------- | ----- | --------- |
|1|James|Simpson|12|12|Lapham Elementary|
|2|Rita|May|12|12|Lapham Elementary|
|3|Godfrey|Paterson|14|14|O'Keeffe Middle School|
|3|Steve|Leavitt||||
|5|Eva|Orton|16|16|East High School|
|6|Patricia|Clark|12|12|Lapham Elementary|

Without an OUTER JOIN, we'd never see Steve Leavitt. That's because his `school_id`
is NULL. Keep this in mind!

[**Exercises**](../../exercises/SQL/introduction.md)

[**Project**](../../projects/SQL/introduction.md)
