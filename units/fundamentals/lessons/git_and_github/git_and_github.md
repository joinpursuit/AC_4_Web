# Git and Github

## Links

* [Try Git](http://try.github.io)
* [Pro Git ebook](https://git-scm.com/book/en/v2)

## Lesson

### About Version Control

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

### Stream of Snapshots

![storing data as snapshots](assets/snapshots.png)

### Nearly Every Operation Is Local

### Git Generally Only Adds Data

### Modified, Staged, Commited

![areas](assets/areas.png)

### Getting a Git Repository

#### Initializing a Repository in an Existing Directory

```bash
$ git init
$ git add .
$ git commit -m 'initial commit'
```

#### Cloning an Existing Repository

```bash
$ git clone <url>
```

### Recording Changes to the Repository

![lifecycle](assets/lifecycle.png)

#### Checking the Status of Your Files

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```

Adding new file `README.md`:

```bash
$ echo 'My Project' > README.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to track)
```

### Tracking New Files

```bash
$ git add README.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
```

### Staging Modified Files

Modifying the file `CONTRIBUTING.md`

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

Adding the file `CONTRIBUTING.md`:

```bash
$ git add CONTRIBUTING.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
    modified:   CONTRIBUTING.md
```

Making more changes to  `CONTRIBUTING.md`:

```bash

$ vim CONTRIBUTING.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
    modified:   CONTRIBUTING.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

Adding `CONTRIBUTING.md` again:

```bash
$ git add CONTRIBUTING.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
    modified:   CONTRIBUTING.md
```

### Ignoring Files: `.gitignore`

The files ignored follow the patterns in `.gitignore`:

* Blank lines or lines starting with # are ignored.
* Standard glob patterns work.
* You can start patterns with a forward slash (/) to avoid recursivity.
* You can end patterns with a forward slash (/) to specify a directory.
* You can negate a pattern by starting it with an exclamation point (!).

```txt
# no .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
```

### Committing Your Changes

Commiting with a message:

```bash
$ git commit -m "Fix benchmarks for speed"
```

### Removing Files

With regular `rm`:

```bash
$ rm PROJECTS.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    PROJECTS.md

no changes added to commit (use "git add" and/or "git commit -a")
```

with `git rm`:

```bash
$ git rm PROJECTS.md
rm 'PROJECTS.md'
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    deleted:    PROJECTS.md
```