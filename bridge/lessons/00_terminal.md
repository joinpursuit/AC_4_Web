# The Terminal

Objectives: students will learn to use the terminal for navigating through the file system, creating and deleting files and folders, running the node repl and using node to execute javascript code.

## Vocabulary

* command line = cli = terminal = bash = shell
* folder = directory
* `pwd` - print working directory
* `cd ..` - go directory up
* `cd [folder]` - go into folder
* `~` - your home folder
* `ls` - list files and subfolders in current folder
* `touch [filename]` - create a new file
* `mkdir [directory name]` - make a new directory
* `rm [filename]` - remove (delete) a file
* `rm -r [directory name]` - remove (recursively) a folder, all files, subfolder, subfiles, etc. Will prompt if trying to remove special files.
* `mv [filename] [foldername]` - move a file to a different folder
* `mv [filename] [new filename]` - rename a file
* `node` - start a node REPL
* `node [filename]` - execute a javascript file

## Resources

* Git Tower: [Command Line 101](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101)

## Lesson

* Use tab to autocomplete. for example, if the current folder has subfolders titled `games`, `photos` and `photography`, typing `pho` and pressing the tab key will result in displaying `photo` and `photography`. If we then type the letter `g` to get `photog`,and press the tab key - the command will be autocomplete to `photography`.

We can also use the up and down keys to step through the commands we had typed before.

### Node REPL

A REPL (Read–Eval–Print Loop) is a programming environment that takes user input one line at a time. The REPL evaluate each line and prints the resulting value to the screen. (if there is one). To start the node REPL, simply typed `node` in the terminal, and press enter. You should see the following:

```js
>
```

Type a number and press enter, and the number will be displayed back to you.

```js
> 5
5
```

Type an expression and press enter, and it will be evaluated, the resulting value printed.

```js
> 2 + 8 - 1
11
```