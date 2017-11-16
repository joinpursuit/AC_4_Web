# NODE http Module Part 2 -  Exercises

## Basic Routing

- Create an `html` page and call it `page2.html`. Add an `h1` tag into it that says `Welcome to Page 2`. Now create a `server-4.js` file that will serve up the `index.html` page if you go to `localhost:3000/`, and will serve the `page2.html` page if you go to `localhost:3000/page-2`
- Add an `a` tag to your `index.html` page, and give the `a` tag an `href` attribute of `href="/page-2"`. Add a similar `a` tag to your `page2.html` file that links back to `index.html`. Reload your `server-4.js` and check to make sure your links work
- Try adding 1-2 more HTML pages and adding links to each html page that lets you navigate to any page from any page. Create a `server-5.js` file that serves up all of your html pages.

## Greeter

In a file `greeter.js` create a node server that would respond to the `name` parameter in url queries. For example, if the url is: `localhost:3000/?name=ryan` the server will respond with the text 'hello ryan'. If there is no `name` parameter the server will respond with the text `'please provide a name'`.

## HTML Greeter

Repeat the above exercise, but this time return an html page. If the url is `localhost:3000/?name=michelle', respond with the following html page:

```html
<!doctype>
<head>
  <title>Greeter</title>
</head>
<body>
  <h1> Hello Michelle! </h1>
</body>
</html>
```

Use string literals to construct the html. Make sure to set the proper content type in the response head.

## Challenge

### Date Routing

Write an HTTP **server** that serves JSON data when it receives a GET request to the path `/api/parsetime`. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

`/api/parsetime?iso=2013-08-10T12:10:15.474Z`

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

```json
{ "unixtime": 1376136615474 }
```
