# Node HTTP Module Part 1 - Exercises

## Setup

- Create a new folder called `node-server-exercises`.
- `cd` into that folder and run the specific server file by running `node <name-of-file>` from your command line. So if your server file is named `server-1.js`, run `node server-1.js`
- Once you start running your server it will keep running until you manually kill its process. To stop a server you can type in `<ctrl> + c` from your command line. You will need to stop a running server before you start a new server.

## Exercises

- Create a `server-1.js` file. In the file, create a server that serves the sentence "Hello World" in plain text on any request. Set your server to listen to port *3000*, and use port *3000* for the rest of your servers throughout the exercise
- Create a `server-2.js` file that serves two HTML elements: an h1 element, and a paragraph element. The `h1` element should say 'Welcome to My Site' and the `p` element should say 'Content coming soon...'. Both html elements should be included directly in your `server-2.js` file, not in separate files.
- Create a separate `index.html` file. In the `index.html` file create an `h1` element, a `p` element, and a `button` element, and add some text of your choosing to each element. Then create a `server-3.js` file that reads the `index.html` file using the `fs` module, converts it to a string, and serves up the string.
- Create a separate `template.js` file that exports a single function. Whenever that function is called, it will return a string with the following html:

```html
<!DOCTYPE html>
<head>
  <title> My Site </title>
</head>
<body>
  <h1> My Site </h1>
  <div> welcome to my site! </div>
</body>
</html>
```

Create a `server-4.js` that imports `template.js` and invokes the imported function to serve up the above html.
