# Node HTTP Part 2

## Resources

* [Node.js Foundation: Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* [Node.js URL module](https://nodejs.org/api/url.html#url_url)
* [Node.js http message url](https://nodejs.org/api/http.html#http_message_url)
* [MDN: NodeJS Without A Framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)
* [Wikipedia: Query Strings](https://en.wikipedia.org/wiki/Query_string)

## Lesson

### The Request Object

So far we have made a server and sent the same response on any request. In this lesson we will start using the request object to customize the response.

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200,  { 'Content-Type': 'text/plain' });
  res.send('Hello, World!\n')
  res.end();
});

server.listen(8000);
```

A url may contain parameters: these are the ones you see preceed by a question mark. For example, the following url has one parameter:

`https://www.google.com/search?q=dogs`

Following the question mark is `q=dogs` where `q` signifies the query, and `dogs` the contents of the query. A google server will parse the request url (i.e. separate the url into parts), and use the string following `q=` as the search query.

## The `url` module

The request object in the callback for `http.createServer` has a `url` property that contains the url string after the domain name (`/`) - if any. If the user typed `www.mynodewebsite.com/dogs` the request's `url` property will be `'/dogs'`. If the user typed `www.mynodewebsite.com` the request's `url` property will be `/`.

### Url Parameters

We can parse the url to get an easier access to its parameters. We do this using a module called `url`, which contains a `parse` method:

This will provide us with an object with helpful properties.

For example, in the node console, type:

```bash
> const url = require('url')
> url.parse('/search?q=dogs')
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?q=dogs',
  query: 'q=dogs',
  pathname: '/search',
  path: '/search?q=dogs',
  href: '/search?q=dogs' }
```

As we see above, everything prior to the `?` was assigned to the `pathname` property, and everything following it was assigned to the `query` property.

Full Documentation on the `url` module can be found [here](https://nodejs.org/api/url.html#url_url);

### Exercises

* [HTTP Part 2 - exercises](../../exercises/http_module_2/http_module_2.md)
