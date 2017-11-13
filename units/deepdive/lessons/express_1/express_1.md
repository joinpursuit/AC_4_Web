# Express - Part 1

## Resources

* [Express](https://expressjs.com/)
* [MDN - Server-side web frameworks](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks)
* [MDN - Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
* [MDN - Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
* [MDN - Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
* [Marcus Node Bits: Express is best without generators](http://www.marcusoft.net/2014/02/mnb-express.html)

## Lesson

### Server-Side Web Frameworks

Express is a server-side web framework for nodeJS.

Server-side web frameworks are software that make it easier to write, maintain and scale web applications. They provide tools and libraries that simplify common web development tasks, including:

* Routing URLs to appropriate handlers (e.g. showing you cats when you're on mysite.com/cats and dogs when you're on mysite.com/dogs).
* Interacting with databases to save and sort data on the server side.
* Supporting sessions and user authorization  (e.g. logging you in, keeping you logged in, and keeping your password and identity safe).
* Formatting output (e.g. HTML, JSON, XML).
* Improving security against web attacks.

### Getting Started with Express

### Adding dependencies

We will use npm to install and set up our express app.

1. We create a directory for our new application and navigate into it:

```bash
mkdir myapp
cd myapp
```

2. We use the npm "`init`" command to create a **package.json** file for our application. This command prompts us for a number of things, including the name and version of the application and the name of the initial entry point file (by default this is **index.js**). For now, we will just accept the defaults:

```bash
npm init
```

When we open the **package.json** file, we will see the defaults that we accepted, ending with the license.

```json
{
"name": "myapp",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC"
}
```

3. Now we  install the _Express_ library in the **myapp** directory. The package will automatically be saved to the dependencies list in our **package.json** file.

```bash
npm install --save express
```

The dependencies section of our **package.json** will now appear at the end of the **package.json** file and will include _Express_.

```json
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2"
  }
}
```

4. We create a file named **index.js** in the root of the *myapp* application directory. In this file we import `express` and start a minimal web server:

```js
const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/', (req, res) => {
  res.send('Hello World!')
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
```

The code above a minimal "HelloWorld" Express web application. This imports the "express" module and uses it to create a server (`app`) that listens for HTTP requests on port 8000 and prints a message to the console explaining what browser URL you can use to test the server. The `app.get()` function only responds to HTTP `GET` requests with the specified URL path ('/'), in this case by calling a function to send our _Hello World!_ message.

5. You can start the server by calling node with the script in your command prompt:

```bash
node index.js
Example app listening on port 8000
```

6. We can now navigate to the URL [http://localhost:8000/](http://localhost:8000). If everything is working, the browser should display the string `"Hello World!"`.


### Nodemon - Automatic Server Restarts

We will use [nodemon](https://github.com/remy/nodemon) while we develop our node/express apps. Nodemon will monitor the files in our app directory and automatically restart the server on any file change. If we didn't do this, we'd have to manually close the server process (`<ctrl>+c`) and restart the server every time we wanted our changes to be reflected in the browser.

To install nodemon:

```bash
npm install --save-dev nodemon
```

We use `--save-dev` because nodemon is only needed for development purposes. Once our server is running in the real world we will no longer want it to restart automatically.

Finally we will add a `start` script in  `package.json`:

```json
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2",
    "morgan":  "^1.9.0"
  },
  "devDependencies": {
    "nodemon": "^1.12.1"
  }
}
```

Now, if we navigate to the root folder of the app, we can start the server with the following command:

```js
npm start
```

### No Exercises for this Lesson
