# Access Code 4.1 Introdcution

Hi Everyone.

## Chrome 
Here at Access Code the Browser of choice is [Chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en). Chrome will be especially useful when we get to frontend debugging. It has wonderful tools that are already built in. 

## Mac OS Installation Instructions

1. Open a terminal window.

2. Enter:

```bash
$ xcode-select --install
```

3. You will see an alert box:

![devtools popup](../assets/xcode_devtools.png)

Click “Install” to download and install Xcode Command Line Tools.

4. Enter:

```bash
$ cd ~
$ mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

5. Enter

```bash
$ brew install node
```

6. To check that node is installed, enter:

```bash
$ node -v
```

7. This one is super easy. Go to [atom.io](http://www.atom.io), then download and install Atom.

To verify that the shell commands were installed correctly, run `which atom` in your terminal. If `atom` is not a recognized command, open the Atom editor and go to Atom > Install Shell commands (on Linux, you may have to open the Command Palette using `Ctrl+Shift+P` and search for `Window: Install Shell Commands`). This allows you to easily open files in atom from the Terminal using the `atom` command followed by a file or directory.

Let's install some linters to help us write clean code while working in atom.
Run the following:
```sh
# apm is the 'atom package manager'
apm install linter linter-eslint prettier-atom linter-jscs highlight-selected react
```


8. Drag the downloaded file into your `applications` folder. A pop up will appear - click `authenticate`, then enter the user name and password for your machine.

## Git
Git is a version control system that allows us to track, commit and revert changes to files within a directory. Here we will install it and add global user info.

```sh
# install git
brew install git

# makes git terminal output pretty
git config --global color.ui true

# this will mark you as the 'author' of each committed change
git config --global user.name "your name here"

# use the email associated with your GitHub account
git config --global user.email your_email_here
```

### PostgreSQL
PostgreSQL is a fast, feature-rich, open-source database application. It is a scalable application that we can use for development and production apps. We will be using PostgreSQL for most of our web-apps.

#### MacOS X

Fortunately for MacOS X, we can use [Postgres.app][postgres-app], which provides the database application and a command line interface (CLI) so we can interact with it. To install Postgres.app, download and follow the installation instructions from the website.


Paste these commands into the terminal:

```sh
sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
```

#### Linux

The [Ubuntu wiki][pg-linux] can help. See especially "Alternative Server Setup".

[pg-linux]: https://help.ubuntu.com/community/PostgreSQL

### After installation

Close and reopen your terminal to gain access to the `psql` command. Let's try it out.

```
# open the PostgreSQL CLI
psql

# you should be greeted with a prompt that looks like this
psql (10.X)
Type "help" for help.

yourname=#

# type '/q' to quit
yourname=# \q

```

## Postman 
We will be using Postman to test call to our backend. Download it [here](https://www.getpostman.com/apps).

## PSequel 
Will allow us to try running different SQL calls on a database. Download it [here](http://www.psequel.com/).

## Slack
Is an App that allows us to message and communicate easy. Download it [here](https://slack.com/downloads/osx).



## Logic Puzzles

### Hats

Cannibals ambush a safari in the jungle and capture three people. The cannibals give the people a single chance to escape uneaten.

The captives are lined up in order of height, and are tied to stakes. The person in the rear can see the backs of his two friends, the person in the middle can see the back of the person in front, and the person in front cannot see anyone. The cannibals show the people five hats. Three of the hats are black and two of the hats are white.

Blindfolds are then placed over each person's eyes and a hat is placed on each person's head. The two hats left over are hidden. The blindfolds are then removed and it is said to the people that if one of them can guess what color hat he is wearing they can all leave unharmed.

The person in the rear who can see both of his friends' hats but not his own says, "I don't know". The middle one (who can see the hat of the person in front), says "I don't know". The front person who cannot see ANYBODY'S hat says "I know!".

How did he know the color of his hat and what color was it?

### Island of Truthtellers and Liars

The island has only one city, the capital, Quandary. Its population is made up entirely of members of two groups, the Truthtellers and the Liars. The Truthtellers always say the truth, and the Liars always lie. The members of each tribe can always recognize who is or isn't a member of their tribe.

Ellen decided that her best course was to reach the capital. Walking from the beach, she came to a road that split in two and saw a man and a woman: she could tell for sure they were members of opposite tribes, but she could not tell who of them belonged to which one.

With one question, Helen found out which way she should go to reach the capital. What was the question?

### Deadly Choice

A man is caught on the King's property. He is brought before the King to be punished.

The King says, "You must give me a statement. If it is true, you will be killed by lions. If it is false, you will be killed by trampling of wild buffalo."

But in the end, the King has to let the man go.

What was the man's statement?

### Farmer Crosses River

A farmer wants to cross a river and take with him a wolf, a goat, and a cabbage.

There is a boat that can fit herself plus either the wolf, the goat, or the cabbage.

If the wolf and the goat are alone on one shore, the wolf will eat the goat. If the goat and the cabbage are alone on the shore, the goat will eat the cabbage.

How can the farmer bring the wolf, the goat, and the cabbage across the river?
