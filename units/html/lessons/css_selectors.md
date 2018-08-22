# CSS Selectors

## Goals
* Understand how HTML elements are selected in CSS
* Select various elements based on type, class and id

## Keywords
* Selectors
* Type
* Class
* ID

## Resources

* [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
* [CSS Selectors Reference Sheet - W3Schools](https://www.w3schools.com/cssref/css_selectors.asp)
* [CSS Selector Tester - W3Schools](https://www.w3schools.com/cssref/trysel.asp)

## Lesson

## Selectors

As you've seen in previous lessons, we are able to style various components in our HTML file by _selecting_ them based on their type: `div`, `h1`, `p`, etc. This is great but what if we only want to change specific `div` elements or just the main `h1` on the page? CSS allows you to select HTML elements based on a number of properties which makes this kind of precision possible.

### Simple Selectors

_Simple selectors_ are those we have been working with so far. They directly match one or more elements of a document, based on the type of element, class, or id.

#### Type of Element

This is what we've been working with to style our pages. This selector is a case-insensitive match between the **selector name** and **a given HTML element name**. As we've seen, when you use this it affects _all_ of those HTML elements on the page without discretion.

When we adding CSS styling to our `div` elements in the test.html file, we saw that every single `div` was styled in the exact same way. Let's open up our test.html and test.css files now and style our `h2` elements, which are the headings for most of our sections, to be underlined red text:

```css
h2 {
    color: red;
    text-decoration: underline;
}
```

And we see that now all our `h2` elements are red and underlined. Perfect!

#### Class Selectors

We've made all our `h2` elements underlined and red but what if we don't want all the headings to look the same? We can use _Class Selectors_ to do that! All HTML elements have a `class` attribute that you can set to whatever you'd like. Any number of HTML elements can belong to the same class and one element can belong to multiple classes. You can assign multiple classes to one element by putting a space between class names and enclosing all classes inside the quotations, like so: `<div class="class-one class-two"> I have two classes! </div>`. If you want to have a class name that is more than word, you connect the words with a dash `-` otherwise it will be read as separate classes.

Let's give each of our `h2` headings classes. We will give each the class `heading` and also the class name associated with their text, like `heading-links`. Having specific class names is good practice and helps make styling _much_ easier for you in the long-run. For this reason, avoid using abbreviated class names like `hl` because it will be hard to remember what `hl` represents later on:

```html
<div>
  <h1 class="heading heading-title">This is my first web page.</h1>
    <p>How <em>exciting</em>!</p>
    <p><strong>Isn't it?</strong></p>
</div>

<div>
  <h2 class="heading heading-list">Let's make a list!</h2>
  <ul>
    ....
  </ul>
</div>

<div>
  <h2 class="heading heading-links">Links</h2>
    ....
</div>

<div>
  <h2 class="heading heading-images">Images</h2>
    ....
</div>

<div>
  <h2 class="heading heading-table">Table</h2>
  <table>
    ....
  </table>
</div>

<div>
  <h2 class="heading heading-form">Form</h2>
  <form>
    ....
  </form>
</div>
```

Now in our CSS, let's change our `h2` styling to be our `heading` styling and remove the `red` color. We'll keep all of our `heading` classes underlined. We can access class names in our CSS file by typing a dot `.` before the class name:

```css
.heading {
    text-decoration: underline;
}
```

Save and reload your page. Now you should see that all of our headings are underlined, whether they're an `h1` or an `h2`, because they all belong to the `heading` class. On your own, style each individual heading to have its own color, accessing each class using dot-notation (`.heading-list`). Save and reload your page after editing **each** heading.

#### ID Selectors

In addition to having a `class` attribute, HTML elements also have an `id` attribute. Unlike a `class`, an `id` **must be unique**! Every HTML element's `id` should be different! If you _do not_ give each HTML element a unique ID, it could result in unexpected consequences! The browser, however, will not alert you to this error so you must check your own code and create meaningful IDs carefully. This also means that you cannot give an element multiple IDs--no spaces

Using the ID selector is useful because it is the _best_ way to select and style **only one** element. It's also more specific than class, so if you assign any properties to an element by ID it will overwrite any styles assigned to that element by class. To illustrate this point, let's assign IDs to each of our unordered list items:

```html
<div>
  <h2 class="heading heading-list" id="list">Let's make a list!</h2>
  <ul>
    <li id="first">First item!</li>
    <li id="second">Second item!</li>
    <ol>
      <li>This is ordered</li>
      <li>So is this!</li>
    </ol>
    <li id="third">Third item!</li>
  </ul>
</div>
```

Now in our CSS file, we have the ability to target each `li` element individually. We also now have the ability to target our `h2` element and give it _different_ styles from the other `heading` elements. Let's edit our CSS file to style each of these!

```css
#list {
  text-decoration:overline;
  font-weight: lighter;
  color: purple;
}

#first {
  font-style: italic;
  font-family: cursive;
}

#second {
  font-weight: bold;
  background-color: silver;
}

#third {
  font-style: oblique;
  color: orange;
}
```

Save and reload the page _after_ styling **each** element. Now each un-ordered list item should have unique styling to match its unique ID :sunglasses: Using the ID selector is somewhat controversial--read about the [pros](https://2002-2012.mattwilcox.net/archive/entry/id/1054/) and [cons](http://oli.jp/2011/ids/) of using IDs with CSS. Either way, it is a tool that you must know and the decision to use IDs in projects will ultimately be yours to make (or your employer's!).

### Advanced Selectors

The "simple selectors" are all very useful and will be what you rely on a majority of the time for styling. There are more advanced selectors available as well that can be very useful. Below we will cover the more common advanced selectors. Advanced​ ​selectors​ ​target​ ​elements​ ​that​ ​are​ ​not​ ​easily​ ​specified​ ​by ​type,​ ​id,​ or ​class.

#### Pseudo-Classes

Pseudo-classes are very useful because you can have elements styled _only_ when they are in a specified state, such as `hover`, `checked`, `visited` or `active` to name a few. Read more about pseudo-classes [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) because you will likely find many uses for them!

```css
a:hover​ ​{
    text-decoration:​ ​underline;
}

a:visited {
    text-decoration: line-through;
}
```

#### Pseudo-Elements

A​ ​pseudo-element​ ​styles​ ​only​ ​part​ ​of​ ​an​ ​element and can also be useful because you select things like `first-line` or `first-letter`. These selectors use two colons (`::`) to indicate the pseudo-element you are selecting. Read more about pseudo-selectors [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Pseudo-elements).

```css
p::first-line​ ​{
    text-transform:​ ​uppercase;
}
```

#### Attribute​ ​Selectors

You​ ​can ​select​ ​elements​ ​based​ ​on​ ​a​ ​given​ ​attribute​ ​with​ ​an​ _attribute​ ​selector​_.​ ​There​ ​is​ ​the standard​  attribute​ ​selector​ ​as​ ​well​ ​as​ ​RegEx-style​ ​attribute​ ​selectors. The example below would look for any `a` (link) tags that have a `title` attribute and style the font of that link to be purple. Instead of using dots (`.`) or colons (`:`), these selectors use square brakets to find the `[attribute]`.

```css
a[title]​ ​{
  color:​ ​purple;
}
```

#### Exact Attribute​ ​Selector​ (​=​)

Use​ `​=`​ ​to​ ​select​ ​every​ ​attribute​ ​exactly​ ​matching​ ​a​ ​value. The example below would _only_ select `a` tags that point to http://google.com so unlike the example above, only links that go to Google would be purple.

```css
a[href=”http://google.com”]​ ​{
  color:​ ​purple;
}
```

#### Begins With Attribute​ ​Selector​ (​^=​)

Use​ `​^=`​ ​to​ ​select​ ​every​ ​attribute​ ​beginning​ ​with​ ​a​ ​value. The example below would make all links that go to _outside websites_ blue. If we had a link that pointed to another page or file on our computer, it would **not** be styled because those `href`s do not begin with http://.

```css
a[href^=”http://”]​ ​{
    color:​ ​blue;
}
```

#### Ends With Attribute​ ​Selector​ ​($=)

Use​ `​$=`​ ​to​ ​select​ ​every​ ​attribute​ ​ending​ ​with​ ​a​ specified ​value. In the example below, all links to .org would be green.

```css
a[href$=”.org”]​ ​{
    color:​ ​green;
}
```

#### Global Attribute​ ​Selector (*=)

This selector will select all elements with the attribute `href` for which the value contains the substring `static`. (A substring is simply part of a string, e.g. "cat" is a substring in the string "caterpillar".) 

```css
a[href*=”static”]​ ​{
    color:​ ​blue;
}
```

#### Universal​ ​Selector (*)

The​ ​universal​ ​selector​,​ `​*`, selects **ALL** elements and styles them **ALL** in the same way <br> :warning: This will _often_ result in unexpected consequences and should be used with discretion :warning:

```css
*​ ​{
    margin:​ ​0;
    padding:​ ​0;
}
```

### Advanced Selectors Review

What​ ​elements​ ​will​ ​these​ ​snippets​ ​of​ ​code​ ​select?

```css
img[src^=http]​ ​{
    border:​ ​3px​ ​blue​ ​solid;
}
```

```css
a:visited​ ​{
    font-family:​ ​serif;
}
```

```css
p::first-letter​ {
    font-size:​ 3em;
}
```
