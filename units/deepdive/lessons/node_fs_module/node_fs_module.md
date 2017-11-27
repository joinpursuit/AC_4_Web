# The Node `fs` Module and the Process Object

## Resources

- [Official Documentation](https://nodejs.org/api/fs.html)
- [Node fs Module](http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)

## Lesson

## The `process` object

`process` is a global object in node.js that gives you helpful information about what your program or script is doing behind the scenes.

The `process` object has a lot of properties but the one we will focus on is `process.argv`. The `process.argv` property returns an array of all the arguments you type into the command line when you run a script.

For example, if you create a `main.js` file that just contains the following code:

```js
console.log(process.argv);
```

And then type the following into your command line:

```bash
$ node main.js hello world
```

The following would be logged to the console. The first two element of the array are always the file paths for `node` and `main.js`:

```js
[ '/usr/local/bin/node',
  '/home/lev/AC_4.1/main.js',
  'hello',
  'world' ]
```

## Intro to core node.js modules

Node.js comes prepackaged with several of built-in modules. These include:

- `fs` for manipulating the file system
- `path` for parsing and dealing with file paths
- `http` for creating node.js servers

You can see a list of more core node.js modules [here](http://www.tutorialsteacher.com/nodejs/nodejs-modules).

Today we are going to look at the `fs` module.

### The `fs` module

The `fs` module lets you interact with your computer's file system directly. It lets you do things like read and write text files, create new folders, and reorganize folders.

```js
const fs = require('fs');
```

### Reading files

The `readFile` method takes as arguments a filename, optionally the encoding (use `utf8` for text files) and a callback function to execute once the file has been read. If no encoding is specified, the raw binary data of the file will be returned.

```js
fs.readFile('new-file-2.txt', function(err, data) {
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile('new-file-2.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

*Writing files:*

```js
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) {
    throw err;
  }
  console.log('The file has been saved!');
});
```

*Reading directories:*

```js
fs.readdir('.', (err, data) => {
  if(err) {
    console.log('Error!', err);
  }
  console.log(data);
});
```

*Making directories:*

```js
fs.mkdir('another-new-repo', () => {
  console.log('Created another new repo!')
});
```

*Removing directories:*

```js
//Without a callback
fs.rmdir('new-repo');
//With a callback
fs.rmdir('another-new-repo', (err, data) => {
  if(err) console.log('Error!', err);
  console.log('Deleted another new repo!')
});
```

*Renaming files and folders:*

```js
fs.rename('not-a-new-file.txt', 'new-file-2.txt');
```

*Watching files:*

```js
fs.watch('new-file.txt', (eventType, filename) => {
  console.log(eventType + ' in ' + filename);
})
```

## `__dirname` variable

`__dirname` is a special variable in node.js that contains the path for the directory that you are currently in.

## Sync vs Async

A lot of `fs` methods come in two flavors - async, and sync. Most node methods are executed asynchronously by default. Sync blocks execution - no other code will be executed until the operation is completed. Async (which stands for asynchronous) means that execution is not blocked. Javascript will continue to the next code and the callback will be invoked later.

Synchronously read a file:

```js
const text = fs.readFileSync('myFile', 'utf8')
console.log(`contents of the file: ${text}`)
```

Asynchronously read a file:

```js
fs.readFile('README.md', 'utf8', (err, text) => {
  console.log(`contents of the file: ${text}`)
})
console.log('not read the file yet');
```

### Exercises

- [Node `fs` Module Exercises](../../exercises/node_fs_module/node_fs_module.md)
