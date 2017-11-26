# Introduction to SQL

![Pronunciation is hard](https://i.imgur.com/AF73EN7.jpg)

**Resources**

* [How to install Postgres on Linux](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)
* [Mac Postgres app](https://postgresapp.com/)
* [PSequel (Database Visualizer for Mac)](http://www.psequel.com/)

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
