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
are managed by other employees. Now, we could make a separate table called `managers`,
but this seems inefficient—since managers are employees also, their data would
be duplicated across tables. You can imagine the headaches this would cause if,
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
they sound—we perform a JOIN on a table with itself.
