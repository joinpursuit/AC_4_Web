# The Command Line

## Objectives

Students will understand what a Graphical User Interface (GUI) is, what a command line (=terminal) is, and why we use the command line. They will learn to use Terminal to perform basic tasks such as navigating the file system, creating, moving and deleting files and folders, and opening and editing text files.

## Vocabulary

* Operating System (OS)
* Graphical User Interface (GUI)
* Command Line Interface (CLI) = Terminal = Shell
* Folder = directory
* `pwd` - print working directory
* `cd ..` - go to parent directory (aka up)
* `cd [folder]` - go into folder
* `~` - your home folder
* `ls` - list files and subfolders in current folder
* `touch [filename]` - create a new file
* `mkdir [directory name]` - make a new directory
* `rm [filename]` - remove (delete) a file
* `rm -r [directory name]` - remove (recursively) a folder, all files, subfolder, subfiles, etc. Will prompt if trying to remove special files.
* `mv [filename] [foldername]` - move a file to a different folder
* `mv [filename] [new filename]` - rename a file
* `vim [filename]` - open the vim editor

## Resources

* Tree House: [Introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
* Git Tower: [Command Line 101](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101)
* TuxRadar: [The Command Line](http://tuxradar.com/content/lpi-learn-linux-and-get-certified-part-5-command-line)

## Lesson

### What is the terminal (= command line)

One way people interact daily with their operating system (be it Mac OS, Windows or Linux) is through the Graphical User Interface, or in short - GUI. A graphical user interface uses graphics, along with a keyboard and a mouse, to provide an easy-to-use interface to the OS. A GUI provides windows, pull-down menus, buttons, scrollbars, icons, and the mouse to enable users to interact with the operating system or application.

A command line interface (CLI) enables users to type commands in a terminal or console window to interact with an operating system. Users respond to a visual prompt by typing a command on a specified line, and receive a response back from the system. Users type a command or series of commands for each task they want to perform. [Oracle](https://docs.oracle.com/cd/E19683-01/806-7612/startup-78447/index.html)

### Getting Started

To open the terminal On OS X, open your Applications folder, then open the Utilities folder. Open the Terminal application. You may want to add this to your dock. You could also use the Spotlight to search for `terminal`. [Tree House](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

When it’s launched, we see something like this:

```bash
computer:~ user$
```

The `~` symbol stands for your home directory.

### Where We Are

In the console, you are always working in a directory (=folder). We call this the working directory. You can see where you are using pwd (=print working directory)

```bash
pwd
```

### Navigation

You can change your directory with cd (= change directory). If you follow this command with a name, it will move you to that location, if it exists. Without an argument, it will take you to your home directory (~).

```bash
cd Downloads
```

I was in my home directory, which contains the a directory called `Downloads`. This is relative path, because I specified my destination relative to my current directory. I can provide a full path beginning starting with my home directory (~) such as:

```bash
cd ~/Downloads
```

If you want to navigate “up”, to the directory that contains your current directory, you can use the special name `..`. From the `Documents` directory, this command will take us up to the home directory.

```bash
cd ..
```

### Creating Files and Folders

* the `touch` command creates a new file with the provided name. For example:

```bash
touch foo
```

Will create a new file with the name `foo` in the current directory.

* the `mkdir` command creates a new folder with the provided name. For example:

```bash
touch js
```

Will create a new folder named `js`.

### Editing Files and Folders

* The `cp` command creates a copy of a file. For example:

```bash
cp bar foo
```

Will make an exact copy of `bar` and name it `foo`.

* The `mv` command will move a file to a different location or will rename a file. For example:

```bash
mv bar foo
```

Will rename the file `bar` to `foo`. `mv foo ~/Downloads` will move the file `foo` to the `Downloads` directory, but it will not rename it.

* The `rm` command removes a file. For example:

```bash
rm foo
```

Will remove a file named foo in the current directory.

* The `rmdir` command will delete an empty directory. To delete a directory and all of its contents recursively, use `rm -r` instead.

* The mkdir command creates a new directory. For example:

```bash
mkdir music
```

will create a new directory called `Music`.

### Opening Files

To open a file (such as a text file) to view its contents, type the name of the app you would like to use to open it. For example, we will use a text editor called **vim** to open a text file:

```bash
vim foo.js
```

**Vim** is a modal editor. This means that it has different modes. When opened, Vim will be in **normal** mode. Hold the `shift` and `;` (colon)keys to open the vim command line. Now type `q` and press `enter` to exit. To save the first type `w` and press enter. To exit without saving changes type `q!`. To go back to navigating the text press the `escape` key. When navigating the file, you can start inserting text by pressing the `i` key. This will switch to the **insert** mode. In insert mode you can type text freely. Navigate the text using the **arrow keys**. Start a new line by pressing `enter`. To go back to normal mode press the `escape` key. You can only get to the command line from the normal mode (if you wish to save, exit, etc.).

### Tips

* Use tab to autocomplete. for example, if the current folder has subfolders titled `games`, `photos` and `photography`, typing `pho` and pressing the tab key will result in displaying `photo` and `photography`. If we then type the letter `g` to get `photog`,and press the tab key - the command will be autocomplete to `photography`.

* You can also use the up and down keys to step through the commands typed before.

## Exercises

1. * Navigate to your `Desktop` directory.
* Create a directory called `terminal_exercise`.
* Inside `terminal_exercise`, create a file called `foo.js`.
* Inside `terminal_exercise`, create a directory called `blank_dir`.
* Move `foo.js` into `blank_dir`.
