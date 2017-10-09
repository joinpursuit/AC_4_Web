# File I/O



## Objectives

Learn how to use read, write files. Text files, binary and JSON as well.


## Vocabulary

* Binary versus text file
* `fs` module
* asynchronous API
* JSON


## RTFM (Read The Manual)

1. [fs module documentation](https://nodejs.org/api/fs.html)

## Lesson

### Async/sync versions

Asynchronous means to execute in parallel. It relies on callbacks to handle success or failure of the operation, once it is completed.

Synchronous means to block the execution until the operation is finished.

```javascript
// the async api
const fs = require('fs')

fs.unlink('/tmp/hello', (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('successfully deleted /tmp/hello')
})
```

Always use asynchronous in production code, otherwise your program will be very slow.

```javascript
// the sync api
const fs = require('fs')

try {
  fs.unlinkSync('/tmp/hello')
} catch (ex) {
  console.log(ex)
}

console.log('successfully deleted /tmp/hello');
```

### Writing files

An example that creates a blank file `/tmp/fs.tmp`:

```javascript
// touch.js
var fs = require('fs');

fs.writeFile('/tmp/fs.tmp', '', function(err) {
  if (err) throw err;
});
```

If I want to write more at the end of the file:

```javascript
// apendfile.js
var fs = require('fs');

fs.appendFile('/tmp/fs.tmp', 'appended', function(err) {
  if (err) throw err;
});
```

Another way of getting the same thing done is:

```javascript
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
 if (err) throw err;
 console.log('Saved!');
});
```

Notice that `'w'` stands for writing. Other values are possible:

- `'r'` - Open file for reading. An exception occurs if the file does not exist.
- `'r+'` - Open file for reading and writing. An exception occurs if the file does not exist.
- `'w'` - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
- `'wx'` - Like `'w'` but fails if path exists.
- `'w+'` - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
- `'wx+'` - Like `'w+'` but fails if path exists.
- `'a'` - Open file for appending. The file is created if it does not exist.
- `'ax'` - Like `'a'` but fails if path exists.
- `'a+'` - Open file for reading and appending. The file is created if it does not exist.
- `'ax+'` - Like `'a+'` but fails if path exists


### Reading files

How to load the contents of a file into a string variable? This is how:

```javascript
// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('./some_example.txt', function (err, logData) {

  // If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) throw err;

  // logData is a Buffer, convert to string.
  var text = logData.toString();
});
```


### Reading JSON files

One of the best ways to exchange information between applications written in different languages is to use the JSON (JavaScript Object Notation) format.

Example:

```JSON
{
    "name": "Sara",
    "age": 23,
    "gender": "Female",
    "department": "History",
    "car": "Honda"
}
```

Copy and paste the above to a new text file and save it to `student.json` file.

```javascript
const fs = require('fs');

fs.readFile('student.json', (err, data) => {  
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call, but executed FIRST!');
```

Another approach is to use the global require method to read and parse JSON files. This is the same method you use to load Node modules, but it can also be used to load JSON.

```javascript
let jsonData = require('./student.json');

console.log(jsonData);  
```

It works exactly like the readFile code above, but it is a globally available method that you can use anywhere, which has its advantages.

However there are a few drawbacks of require function:

* Require is _synchronous_ function and is called only once, which means the calls receive a cached result. If the file is updated you **can't re-read it** using this method
* Your file must have `'.json'` extension, so it can't be as flexible. Without the proper extension require doesn't treat the file as JSON file.


### Writing JSON files

```javascript
const fs = require('fs');

let student = {  
    name: 'Mike',
    age: 23,
    gender: 'Male',
    department: 'English',
    car: 'Honda'
};

let data = JSON.stringify(student, null, 2);

fs.writeFile('student-3.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');

// This is after the write call  
// Data written to file  
```

Were we using `JSON.stringify(student);` we would see this in the file:

```json
{"name":"Mike","age":23,"gender":"Male","department":"English","car":"Honda"}
```

Although this is the data that we wanted to write, the data is in the form of one line of string, which is difficult for us to read. If you'd like the serialized JSON to be human readable, then change the `JSON.stringify` function as follows:

```javascript
let data = JSON.stringify(student, null, 2);  
```

Here we are telling the method to add newlines and a couple of indentations to the serialized JSON. Now if you open the file, you should see the text in following format:

```JSON
{
  "name": "Mike",
  "age": 23,
  "gender": "Male",
  "department": "English",
  "car": "Honda"
}
```




## Exercises

1. List out the files in your current working directory, one file per line, into a file with: `ls -la > dirlist.txt`. Verify you have a new file `dirlist.txt`, that has something analog in it:

    ```
    drwxr-xr-x  10 peterlada  staff    340 Sep 20 23:32 .
    drwxr-xr-x  14 peterlada  staff    476 Oct  9 10:55 ..
    -rw-r--r--@  1 peterlada  staff   6148 Sep 18 22:16 .DS_Store
    drwxr-xr-x  16 peterlada  staff    544 Oct  9 11:52 .git
    -rw-r--r--   1 peterlada  staff     37 Sep 14 21:17 .gitignore
    ...
    ```

    Write code that loads this file into a string and console logs out all the filenames, after splitting the rows and the columns.

2. Modify the `airbnb.js` to store the rooms in a file, use JSON format.
