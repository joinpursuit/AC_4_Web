# The Pug Template Engine - Part 2

## Resources

* [pug](https://pugjs.org)
* [mixins](https://pugjs.org/language/mixins.html)
* [includes](https://pugjs.org/language/includes.html)
* [inheritance](https://pugjs.org/language/inheritance.html)
* [code](https://pugjs.org/language/code.html)

## Lesson

In this lesson we will discuss more advanced features of pug.

### Mixins

Mixins allow you to create reusable blocks of Pug. Mixins are are in essense functions that return pug markup.

Like functions, mixins need to be declared first. Once it has been declared, a mixin can be used any number of times using the `+` symbol.

Below is a [simple mixin exmaple](http://pug.surge.sh/#mixins_1):

(Comments in pug are marked with `//-`)

```pug
//- Declaration
mixin list
  ul
    li foo
    li bar
    li baz

//- Use
+list
+list
```

Like functions, mixins can take arguments. For example, if we want to create a pug template that renders two arrays as lists:

```js
const colors = ['red', 'blue', 'green']
const pets = ['cat', 'dog']

...
res.render('colorsAndPets', { colors, pets })
```

We can write the [following pug template](http://pug.surge.sh/#mixins_arguments):

```pug
mixin list(arr)
  ul
    each elem in arr
      li #{elem}

+list(pets)
+list(colors)
```

### Include

The `include` keyword allows us to insert the contents of one Pug file into another. For example, we could create a pug template called `showList.pug`:

```pug
mixin list(arr)
  ul
    each elem in arr
      li #{elem}
```

And then include and use it from our `colorsAndPets` template:

```pug
include showList.pug

+list(colors)
+list(pets)
```

What `include` really allows us to is create re-usable pieces of pug.

### Inheritance: `block` and `extends`

Inheritance works in a similar way to include, but with a different purpose. A pug template first sets itself up to be extended. It does so by defining one or more `block`s. For example, given a pug file called `layout.pug`.

```pug
doctype html
html(lang='en')
  head
    meta(charset="UTF-8")
    link(rel="stylesheet" href="style.css")
    title My site
  body
    div(class="ui text container")
      div(class="ui menu")
        a(class="item" href="/index") Home
      block content
```

Another pug template can then re-use the code above, only inserting new code in place of the block.

```pug
extends layout.pug

block content
  include showList.pug
  +list(colors)
  +list(pets)
```

This results in three pug template files:

* `showList.pug` - renders a list.
* `layout.pug` - layout with no content.
* `colorsAndPets.pug` - show colors and pets. Extends `layout` and includes `list.pug`.

### Code

It is possible to include javascript inside our pug templates. A line that contains javascript is defined with a single dash. Any variables defined in this fashion can then be used elsewhere in the pug template.

```pug
- const animals = ['cat', 'dog', 'giraffe']

each animal in animals
  div #{animal}
```

This can be especially useful when rendering arrays of objects. For example, given an `animals` array:

```js
const animals = [
    { name: 'Luna', species: 'dog' },
    { name: 'Whiskers', species: 'Cat' },
    { name: 'Gino', species: 'Jiraffe' }
  ]

...
res.render(`animalList`, { animals })
```

We can create the [following pug template](http://pug.surge.sh/#all_together):

```pug
mixin animalDetails(animal)
  - const { name, species } = animal
  div name: #{name}
  div species: #{species}

ul
  each animal in animals
    li
      +animalDetails(animal)
```
