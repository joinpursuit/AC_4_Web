# Node.js

## Objectives

Students will understand what a REPL is, how to open it and use it to write some basic code. Students will also understand how to use node to execute javascript files.

## Keywords

* Read-Eval-Print-Loop (REPL)
* node scripts
* `node` - start a node REPL
* `node [filename]` - execute a javascript file

### Lesson

### REPL

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

What happens if you try to type two numbers?

```js
> 2 2
```

### Running Scripts

We can use node to run code written in javascript. If our javascript file is `foo.js`, simply type:

```shell
node foo.js
```

In the command line.