# Setup Postgres


## Mac: Postgres.app
[Postgres.app](https://postgresapp.com/)

1. Download, Move to Applications folder and Double Click
2. Click "Initialize" to create a new server
3. Configure your $PATH to use the included command line tools:

`sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`

4. Done!

### PostgreSQL server running on your Mac with these default settings:

Host: `localhost`<br>
Port: `5432`<br>
User: your system user name<br>
Database: same as user<br>
Password: none<br>
Connection URL: `postgresql://localhost`

To connect with `psql`, double click a database. To connect directly from the command line, type `psql`.


## Linux

[Postgres on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)

1. Install

```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

2. Start the `psql` service:

```bash
sudo service postgresql start
```


3. Run `psql` as postgres user:

```bash
sudo -u postgres psql
```

4. Create a new user, matching your login user (c4q):

```bash
sudo -u postgres createuser --interactive

Enter name of role to add: c4q
Shall the new role be a superuser? (y/n) y
```

5. Create a new database:

```bash
sudo -u postgres createdb c4q
```

6. Install pgAdmin3:

```bash
sudo apt-get install pgadmin3
```

7. Start pgadmin through the command line

```bash
pgadmin3
```

Or through start menu -> run program -> pgadmin3

8. Click on the plug symbol (`add a connection to a server`)

1. Enter `db` for name
2. Enter the postgres username (`c4q`) for `username`
3. Click on the `ok` button.
