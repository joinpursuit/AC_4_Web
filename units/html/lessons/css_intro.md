# Intro to CSS

## Goals
* Understand what Cascading Style Sheets (CSS) is and how it is used to style HTML web pages
* Use CSS to style an HTML page

## Keywords
* Cascading Style Sheets (CSS)
* Styling
* Selectors
* Properties
* `style` and `link` tags

## Resources

* [How CSS Works - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
* [CSS Intro - W3Schools](https://www.w3schools.com/css/css_intro.asp)

## Lesson

## Cascading Style Sheets (CSS)

In previous lessons we created a pretty basic website that didn't look so nice. While the functionality was all there, it only used the default styles which are quite boring. In order to make websites look nice, web developers use **Cascading Style Sheets**, or CSS, to specify how the page is displayed to users. Using CSS involves using _selectors_ and _properties_ that determine which elements you want to modify and how you want them to look.

**Selectors** select the element(s) on the page that you would like to style, for example paragraphs or lists. <br>
**Properties** are what about the element you want to change, for example making the background red or increasing font size.

### Styling a Page

Typically when you style a page, you do so in a separate css file. You _can_ add a `<style>` tag to the `head` of your HTML document and write your CSS in there, but that's considered bad practice. Instead we will **import** our stylesheet.

To better understand how CSS files and styling works, let's create a CSS file for our bland HTML page we made. Go to the same folder where your test.html file lives and create a new file called "test.css". After you've created your file, update the `head` of your test.html document to match the example below:

```html
<head>
    <title>My first web page</title>
    <link rel="stylesheet" href="test.css">
</head>
```

The `link` tag is how we can connect our document to an outside source. The `stylesheet` attribute in the `link` tag tells the browser to use that file for the styles on the page and **NOT** the default styles. The `href` is the location of the file on the computer (just like when we were using the `a` tag for links). Since we have our CSS file in the same folder as our HTML, we just need to put the name of the file for it to work appropriately. In the following lessons we will edit the test.css file in order to update the styling of our test.html page.

