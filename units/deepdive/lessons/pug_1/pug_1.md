# The Pug Template Engine - Part 1

## Resources

* [Express Tutorial Part 5, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
* [Using Template Engines With Express](https://expressjs.com/en/guide/using-template-engines.html)
* [A Jade Tutorial For Beginners](https://www.sitepoint.com/jade-tutorial-for-beginners/)
* [Pug - Getting Started](https://pugjs.org/api/getting-started.html)

## Lesson

## Introduction to Web Template Engines

One problem with writing html for web content is that we have to hardcode information. Take for example a website that displays a list of puppies, where each puppy has a name, breed, age, gender, and a url for an image.

![recipe list screenshot](assets/screenshot_1.png?raw=true)

Below is the HTML for a single puppy:

```html
<div class="ui fluid card">
  <div class="content">
      <a class="header" href="/puppies/1">Tyler</a>
      <img class="ui medium image" src="http://www.petsworld.in/blog/wp-content/uploads/2015/03/How-To-Make-Your-Puppy-Gain-Weight.jpg" alt="image"/>
      <div class="meta">breed</div>
      <div class="description">Retrieved</div>
      <div class="meta">sex: </div>
      <div class="description">M</div>
      <div class="meta">age:</div>
      <div class="description">3</div>
  </div>
</div>no
```

What we want is a way to generate this html from existing data. We want to be able to get the recipe data from a database or `JSON` file, and use that data to create our html.

It is possible to do the above in pure javascript. Once we have the recipe data as an array of objects:

```js
[
  {
    id: 1,
    name: "Tyler",
    breed: "Retriever",
    sex: "M",
    age: 3,
    imageURL: "http://www.petsworld.in/blog/wp-content/uploads/2015/03/How-To-Make-Your-Puppy-Gain-Weight.jpg"
  },
  {
    id: 2,
    name: "Snuffles",
    breed: "Labrador",
    sex: "F",
    age: 2,
    imageURL: "https://www.labradortraininghq.com/wp-content/uploads/2014/02/how-to-crate-train-a-puppy-happy-lab-1.jpg"
  }
```

We can loop over it and use _DOM_ methods such as `createElement` and `appendChild` to create the corresponding html.

We can also create html by using template literals. We have discussed this for simple cases, such as:

```js
const createHTML = (name) => `
<html>
  <head>
  </head>
  <body>
    <p> hello ${name}!</p>
  </body>
</html>
`
```

Web templates are more like the latter approach, but provide additional benefits over template literals.

A template engine is similar to a programming language - each engine has its own syntax
Template engines generates html from _template_ files.  Templates file define the layout of an HTML document, with variables  where data to be inserted at a later point. (when the template is _rendered_).

We will be using [Pug](https://pugjs.org/api/getting-started.html) (formerly known as _Jade_) for our templates.

Different template languages use different approaches for defining the layout and marking variables — some use HTML to define the layout while, others use different markup formats that can be compiled to HTML. Pug is of the second type; it uses a _representation_ of HTML where the first word in a line usually represents an HTML element, and indentation on subsequent lines is used to represent any content nested within those elements.

Here is an example of a [simple pug template](http://pug.surge.sh/#hello):

```pug
doctype html
html(lang="en")
  head
    title Hello World
  body
    h1 Pug - node template engine
    div(class="container")
      h2 Hello #{name}
```

### Online Editor

We will be using the online pug testing tool: [http://pug.surge.sh/](http://pug.surge.sh/).

While in `express` we pass javascript values as variables to pug,  the online tool relies on JSON data.

Most of the examples in the lesson link to it directly.

![online render screenshot](assets/screenshot_2.png?raw=true)

### Template syntax

The first thing to notice is that the file maps the structure of a typical HTML file, with the first word in (almost) every line being an HTML element, and indentation being used to indicate nested elements. So for example, the `body` element is inside an `html` element, and paragraph elements (`p`) are within the `body` element, etc. Non-nested elements (e.g. individual paragraphs) are on separate lines.

Above you can see some features of pug:

* no opening/closing tags. The indentation dictates where tags will open and close.
* Parentheses for attributes.
* Interpolation: this is similar to the JS template literal syntax `${...}`. Pug will expect a variable `name` and will inject the value in place of `#{name}`.

Let's say the above template is in a file named `hello.pug`. We can then use it in our _express_ server to generate an HTML document and send it to the client:

```js
res.render('hello', {name: 'Mike'})
```

Which will lead the client to receive the following HTML:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Hello</title>
</head>

<body>
  <h1>Pug - node template engine</h1>
  <div class="container">
    <h2>Hello Mike</h2>
  </div>
</body>

</html>
```

Using the online render tool, we will instead supply data in a json format into the middle textarea:

```json
{ "name" : "Mike" }
```

### Setting Up Pug with Express

To use pug, we will first set up an express server:

1. `npm init`
2. `npm install --save express morgan body-parser`
3. `npm install --save-dev nodemon`

Once we have the above, we will install pug: `npm install --save pug` (we could have installed it in step 2).

Your `package.json` should look similar to this:

```json
{
  "name": "..",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "morgan": "^1.9.0",
    "pug": "^2.0.0-rc.4"
  },
  "devDependencies": {
    "nodemon": "^1.12.1"
  }
}
```

Now we will tell _express_ that we're using pug as the view (i.e. template) engine, and that it should search for templates in the **/views** subdirectory.

```js
const express = require('express');
const app = express();
const path = require('path')

// Set express to use pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

Now we can create a `views/` folder and inside it the mentioned above `hello.pug` file. Your code should be syntax-highlighted. You can also install extensions such as _Pug / Jade Snippets_ (available for [vscode](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-jade-snippets), [atom](https://atom.io/packages/jade), etc.)

Your folder structure should look like this:

![folder structure](assets/dir_structure.png?raw=true)

Now we can add the code in `index.js` for express to start a server and render the template.

```js
...

const port = 3000;

app.get('/', (req, res) => {
  res.render('hello', { name: 'Nick' })
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
```

> Ex. Create an express server that will listen to the route `/:name` and generate a pug template with a greeting for the given name.

### Passing objects

We can pass larger pieces of information to a pug template. Given the arrays of puppies above,  we can pass each puppy object, eg:

```js
const puppy = {
  id: 1,
  name: "Tyler",
  breed: "Retriever",
  sex: "M",
  age: 3
}
```

As a variable to a [pug template](http://pug.surge.sh/#puppy) called `puppy.pug`.

```js
res.render('puppy', { puppy: puppy })
```

```pug
div(class='ui fluid')
    div(class='content')
      a(class='header') #{puppy.name}
      img(src=imageurl, alt="image")
      div breed #{puppy.breed}
      div sex: #{puppy.sex}
      div age: #{puppy.age}
```

Ex. Create an express server with a route `/puppies/:id` that renders the puppy with the given id. Use the following array:

```js
[{ id: 1, name: 'Goliath', breed: 'Westie', sex: 'M', age: 2},
{ id: 2, name: 'Agatha', breed: 'Scnauzer', sex: 'F', age: 1},
{ id: 3, name: 'Furry McShedpants', breed: 'Pomeranian', sex: 'M', age: 4}, { id: 4, name: 'Splenda', breed: 'Maltese', sex: 'F', age: 2}]
```

### Iteration

Pug has a unique syntax for iteration. We can pass an array as argument to a pug template:

```js
['dog', 'cat', 'giraffe']
```

And use pug to [construct a list](http://pug.surge.sh/#iteration):

```pug
ul
  each animal in animals
    li #{animal}
```

### Iterating over arrays of objects

It is equally possible to iterate over arrays that contain objects.

Given the following array of nobel laureates:

```js
const laureates = [
 { firstName: "Hendrik Antoon", lastName: "Lorentz" },
 { firstName: "Pieter", lastName: "Zeeman" },
 { firstName: "Antoine Henri", lastName: "Becquerel"},
 { firstName: "Marie", lastName: "Curie, née Sklodowska"}
]
```

We can write the [following pug template](http://pug.surge.sh/#object_iteration):

```pug
ul
  each laureate in laureates
    li
      div First name: #{ laureate.firstName }
      div Last Name: #{ laureate.lastName }
```

To render the array in javascript, we would need to provide an object with a key `laureates` and the array as the value.

```js
res.render('laureates', {laureates: laureates})
```

> Ex. Given the array of puppies from before, build a pug template `puppyList.pug` that will render the entire array of puppies.

```js
app.get('/puppies', (req, res) => {
  ...
})
```

### Going farther

Some Standout features of pug that we haven't covered today are:

* [mixins](https://pugjs.org/language/mixins.html)
* [inheritance](https://pugjs.org/language/inheritance.html)
* [code](https://pugjs.org/language/code.html)

These make pug more complex, but also more powerful.