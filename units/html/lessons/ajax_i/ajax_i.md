# Ajax 1

## Objectives

* GET and POST
* [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

## Lesson

Web pages can fetch data from another server and load it into themselves without refreshing. This process is colloquially called AJAX, which was backronymed to mean Asynchronous JavaScript and XML.

A very, very, very common use of the AJAX technique is to interact with RESTful APIs through a web app.

### API

API is an acronym for Application Programming Interface. An API is the list of directions necessary to utilize resources (usually someone else's) programmatically. Web applications typically deal with RESTful APIs.

### REST, aka GET and POST

REST, or Representational State Transfer, is another overly complex acronym. Simply put, it means you utilize an API through URLs (web addresses). A GET request is asking for a resource, and a POST request is used to send data to a server. You may remember these RESTful "verbs" from the method= attribute on HTML forms.

Other standardized, but unimplemented "verbs" include PUT and DELETE.

### Postman

[Postman](https://www.getpostman.com/) is a free tool that provides a visual interface to build HTTP requests and view the responses.

### Example: Random Joke

Use Postman to make a GET request to the [Random Joke API](https://github.com/15Dkatz/official_joke_api).

### Example: Bitcoin Price

Use Postman to make a GET request to the [Bitcoin Price Index API](https://www.coindesk.com/api/).

### XMLHttpRequest

Browsers provide the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)  object to make AJAX calls. The documentation is very helpful for this.

1. Create XMLHttpRequest an object and assign it to a variable
2. Give that object an event listener
3. Use the object's `.open()` method to specify a URL path
4. Use the object's `.send()` method to send the request

The _response_ object will be passed as the event object in your callback function.

### Example: Bacon Ipsum

Using the file _exBacon.html_, build a page with an `h1` element reading "Bacon" and a button reading "Add Paragraph". Every time the button is clicked, use XMLHttpRequest with the [Bacon Ipsum API](https://baconipsum.com/json-api/) to add a new bacon ipsum paragraph to the page.
