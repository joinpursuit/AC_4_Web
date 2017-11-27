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

```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

2. Run `psql` as postgres user:

```
sudo -u postgres psql
```

3. Create a new user, matching you login user:

```
sudo -u postgres createuser --interactive

Enter name of role to add: <yourloginhere>
Shall the new role be a superuser? (y/n) y
```

4. Create a new database:

```
sudo -u postgres createdb <yourloginhere>
```
