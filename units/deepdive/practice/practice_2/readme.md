# Practice Assignment 2

## Keywords

* SQL / Postgres
* pg-promise
* Routing
* API

## Instructions

Northwind is back! Find the .sql file in this directory (if you don't have
a database already on your Postgres server). Review it and get ready. We're
making an Express API using it!

**Hint**: Remember, our API will have no frontend rendering. No Pug on this
project, or, in fact, on the assessment. You'll still have to do HTML/CSS,
however, so brushing up on that is a good idea.

### Level 1

Create routes and corresponding SQL requests for the following data sets:

* `/products`
* `/products/:id`
* `/employees`
* `/employees/:employeeid`

### Level 2

Remember **database associations**? Northwind has tables that join employees
and products by way of `orders` and `order_details`. Figure out how these
tables associate products and employees (*hint: employees are like salespeople*)
and make the following routes:

* `/products/:id/employees`
  - AKA, for a given product, who has been selling the most of it? Order
  the results by the most productive employee.
* `/employees/:id/products`
  - AKA, for a given employee, which products have they been selling the most?
  Order the results from most to least.
