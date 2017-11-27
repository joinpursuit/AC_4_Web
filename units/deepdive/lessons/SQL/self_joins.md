# Self JOINs and Other SQL Odds & Ends

**Resources**

* [Self JOINs](http://www.dofactory.com/sql/self-join)
* [W3 Schools (gasp!) on GROUP BY](https://www.w3schools.com/sql/sql_groupby.asp)
* [W3 Schools on HAVING](https://www.w3schools.com/sql/sql_having.asp)

## Self JOINs

At their core, self JOINs are identical to regular JOINs. However, they can
be a little bit tricky to wrap your head around. So, let's learn about what
self JOINs are by thinking about why we'd need them.

Consider the following problem. We have a table of `employees`. Some employees
are managed by other employees. Now, we could make a separate table called
`managers`, but this seems inefficient—since managers are employees also, their data
would be duplicated across tables. You can imagine the headaches this would cause if,
say, you had 20,000 employees, or if you didn't structure your queries properly!

There's another solution. We can add a column in our `employees` table called
`manager_id`, corresponding to the `id` of the manager in that same `employees`
table. That'd look something like this:

| id            | name          | manager_id  |
| ------------- | ------------- | ----- |
|1|John Ramos|2|
|2|Kat Stapleton||
|3|Lisa Frank|2|
|4|Will Randall|3|
|5|Wanda Rupert|1|

Based on your reading of this table, who is John Ramos' manager? Who is Will
Randall's?

We can determine this by performing a self JOIN. Self JOINs are exactly like
they sound—we perform a JOIN on a table with itself. Think of it as joining
two copies of the same table. In this case, it'd look like this:

```sql
SELECT team_member.name, manager.name
FROM employees AS team_member
INNER JOIN employees AS manager ON manager.id = team_member.manager_id;
```

As Kat Stapleton is an executive with no manager, our INNER JOIN will
ensure that she's not listed under `team_member`.

Our output will look something like this:

| team_member   | manager       |
| ------------- | ------------- |
|John Ramos|Kat Stapleton|
|Lisa Frank|Kat Stapleton|
|Will Randall|Lisa Frank|
|Wanda Rupert|John Ramos|

*A note on "AS"*—remember, you aren't the only one reading your code!
AS lets you name your output columns descriptively and ensures that your
SQL requests and responses are clear and readable.

## Math

COUNT, MAX, MIN, SUM, and AVG should be fairly self-explanatory. These are
called **aggregate functions** in SQL and allow you to parse information
numerically.

However, if you've played around with these before, you might have noticed an
error message with the description `aggregate functions are not allowed in WHERE`.
This is because the WHERE clause in SQL doesn't support these kinds of functions.

Instead, you'll have to use...

## GROUP BY and HAVING

GROUP BY and HAVING frequently work together, and nearly always work with
aggregate functions. This is because when you aggregate information, you're
squishing (aggregating) a column together. If you want to extract aggregates
based on different parameters, you have to GROUP BY those parameters.

Picture it sort of like a slinky. Let's say you had a list of customers, each
with the country they're from in another column. Let's say you wanted to count
the number of customers per country.

First, you push the customer data together by way of the COUNT aggregate function.
Your slinky is completely compressed. Then, you begin to tease out data again
by grouping it by country. This separates the COUNT sum into country-specific counts.
Your slinky has bounced out again.

HAVING, in this case, imitates WHERE. If you wanted to, say, only list countries
with more than 5 customers, you could add that as a stipulation to HAVING.
This is like taking a pair of wirecutters to your slinky. Not recommended in real
life, but pretty useful in SQL.

The resulting query (with credit to W3 Schools) looks something like this:

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```

[Exercises](../../exercises/SQL/self_joins.md)
