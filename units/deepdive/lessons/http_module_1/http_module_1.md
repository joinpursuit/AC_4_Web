# Node `http` Module - Part 1

## Objectives

- Be able to build a simple server that responds with a static `index.html` page
- Understand the basics of request and response

## Resources

- [MDN: What is a Web Server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
- [Write Your First Node.js HTTP Server](http://blog.modulus.io/build-your-first-http-server-in-nodejs)
- [HTTP: The Protocol Every Web Developer Must Know - Part 1](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
- [HTTP Headers for Dummies](http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039)
- [What is TCP/IP and How Does It Make the Internet Work?](http://www.hostingadvice.com/blog/tcpip-make-internet-work/)
- [Software Developer's Guide to HTTP](http://odetocode.com/articles/743.aspx)

## Lesson

The `http` module allows us to us to create a web server.

### What is a Web Server

- Source: [What is a Web Server by Mozilla contributors](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)

1. On the hardware side, a web server is a computer that stores a website's component files (e.g. HTML documents, images, CSS stylesheets, and JavaScript files) and delivers them to the end-user's device. It is connected to the Internet and can be accessed through a domain name like `mozilla.org`.
2. On the software side, a web server includes several parts that control how web users access hosted files, at minimum an _HTTP server._ An HTTP server is a piece of software that understands [URLs](/en-US/docs/Glossary/URL) (web addresses) and [HTTP](/en-US/docs/Glossary/HTTP) (the protocol your browser uses to view webpages).

Whenever a browser needs a file hosted on a web server, the browser requests the file via `HTTP`. When the request reaches the correct web server (hardware), the _HTTP server_ (software) sends the requested document back, also through HTTP.

![Basic representation of a client/server connection through HTTP](https://mdn.mozillademos.org/files/8659/web-server.svg)

## The `http` module

The node `http` module allow you to interact with the web. Using the `http` module, you do things like:

- make requests to websites and get code and/or data in return.
- create a simple web server to host your own web apps.

Here is an example of a simple server built using the `http` module:

```js
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at on http://localhost:${port}`);
});
```

### Activity

Create a file named `app.js` with the code above. Run the server using `node app.js` and navigate to `http://localhost:3000`. You should now see the text `"Hello World"` in your browser.

### Communicating through HTTP

A web server provides support for [HTTP](/en-US/docs/Glossary/HTTP) (*Hyper Text Transfer Protocol*).

A _protocol_ is a set of rules for communication between two computers. HTTP is a textual, stateless protocol.

<dl>

<dt>Textual</dt>

<dd>All commands are plain-text and human-readable.</dd>

<dt>Stateless</dt>

<dd>Neither the server nor the client remember previous communications. For example, relying on HTTP alone, a server cannot remember a password you typed or what step you're on in a transaction. (We'll cover these tasks in future lessons)</dd>

</dl>

Be aware of the following:

- Only _clients_ can make HTTP requests, and then only _to servers._ Servers can only _respond_ to a _client's_ HTTP request.
- When requesting a file via HTTP, clients must provide the file's [URL](/en-US/docs/Glossary/URL).
- The web server _must answer_ every HTTP request, at least with an error message.

[![Sample 404 Page](https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png)]

On a web server, the HTTP server is responsible for processing and answering incoming requests.

## Headers, Methods, and URL

- Headers are the core part of HTTP requests and responses, and carry information about the request and response.
- Methods tell us the type of request, for example, "GET", "POST", "PUT", and "DELETE".
- The URL tells us what is being requested, and is the key for communicating between clients and servers.

## Request and response

Our client and server can talk with each other through requests and responses. Basically, the client sends out a request, and the server sends back a response.

The request object contains helpful properties, including the `header`, `method`, and `url`.

Here are some of the key `request` and `response` methods:

Use `response.writeHead` to send back a header:

```js
response.writeHead(200, {"Content-Type": "text/html"});
```

Use `response.write` to send text, html, or a file back as a response:

```js
response.write("<h1>Response goes here</h1>");
```

Use `response.end` to signal the end of the response.

```js
response.end();
```

The `response.end` method can also be used to send data.

```js
response.end("end of response");
```

### Port Number

Finally,  we start the server using the `server.listen` command and specifying the port number (the address of the process that will run the server). Recall the chrome network tab - the server's ip and the port are separated by a semicolon.

![Eloquent Javascript Network Screenshot](assets/ejs-screenshot-port.png)

#### Activity 2

Try to navigate to the following address in your browser:

`http://eloquentjavascript.net:80`

The number specified after the semicolon is the *port number*. If not specified, it is automatically discovered and assigned.

1. Try entering a different port number following eloquent javascript's url.
2. Find the port number for google.com and enter it following the google url.

### Exercises

- [HTTP Part 1 - exercises](../../exercises/http_module_1/http_module_1.md)
