# Other Postgres Statements

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
* `ALTER TABLE...` etc.
  - This allows you to create associations between different tables. Remember
  that this has to happen on both ends—both the table containing the foreign
  reference and the primary table being referenced have to have this association
  established.
