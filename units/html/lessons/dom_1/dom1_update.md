# Document Object Model

## Goals
* Know what the DOM is. 
* Know the window and what alert and prompt do. 
* Understand how to use a script tag. 
* Know how to grab an html element with document. 
* Be able to change the inside of an html element.

## Terms

- DOM, aka "Document Object Model"
- Window
- window.alert()
- window.prompt()
- Document
- document.getElementById()
- Element
- Element.innerText
- Element.innerHTML


## Lesson

### Context

A web page is a document. The Document Object Model (DOM) is a programming
interface for HTML and XML documents. 
It represents the page so that programs can change the document structure, style, and content.
The DOM represents the document as nodes and objects. That way, programming languages can connect to the page to make things happen.

If you're having a hard time imagining an HTML page as _nodes_ try to think of them in terms of this picture:

![](./dom_tree.jpg)

The document has a root element (node). Each proceeding element is a _child_ of that node. We continue to build out a webpage in this way. 

### Using JavaScript in an HTML Page

There are two primary ways to utilize JavaScript in an HTML page:

1. Enclose it in a 
`<script> //JS code goes in here </script>`tag in the `<head>` section of a document.

2. Link an external JavaScript file path with code like `<script src="./main.js"></script>`.

### The Window Object

`window` is the top level object in browser-side JavaScript. It represents a browser window and
contains the DOM document. It also has many of its own properties, such as `.innerWidth`, `.innerHeight`, and `.localStorage`. Today we'll use two window methods:
`window.alert()` and `\ window.prompt()`.

### `window.alert()`

`window.alert([message])` will display a message in a popup window, or alert. In general, it should only be used as a quick and dirty debugging tool, or before you've learned alternative ways to create output. You've probably only seen these as really annoying pop ups on sketchy websites. Let's write out first alert together. 
Inside your 

### `window.prompt()`

`window.prompt([message])` will display message in a popup window, along with a text input field. `window.prompt()` will return the value in the input field (as a string) when the form is submitted.

> Example: upperCase It! In a bare web page, use `window.prompt()` to ask the user to "type a string". Then, use `window.alert()` to display a fully capitalized version of the string.

---

> Example:​ ​timesTwo​ ​It! In​ ​a​ ​bare​ ​web​ ​page,​ ​use​ `​window.prompt()​​` ​to​ ​ask​ ​the​ ​user​ ​to​ ​"enter​ ​a​ ​number".​ ​Then,​ ​use
`​window.alert()​​` ​to​ ​display​ ​that​ ​number​ ​times​ ​two.​ ​You​ ​will​ ​have​ ​to​ ​convert​ ​the​ ​user's​ ​input
from​ ​a​ ​string​ ​to​ ​a​ ​number.​ ​If​ ​the​ ​input​ ​cannot​ ​be​ ​converted​ ​to​ ​a​ ​real​ ​number,​ ​instead​ ​use
`​window.alert()​​` ​to​ ​display​ ​`"Please​ ​enter​ ​a​ ​NUMBER​ ​next​ ​time."`

### The​ ​Document​ ​Object

`document`​​ ​is​ ​the​ ​object​ ​that​ ​represents​ ​the​ ​content​ ​of​ ​a​ ​page.​ ​It​ ​serves​ ​as​ ​the​ ​entry​ ​point​ ​into
the​ ​content.​ ​Everything​ ​begins​ with ​the​ ​document.​ ​(Except​ ​the​ ​window.)
We'll​ ​only​ ​use​ ​a​ ​single​ ​`document`​​ ​method​ ​this​ ​session,​ ​the​ `document.getElementById()`
selector.

### `document.getElementById()`

`document.getElementById([id])​​` ​takes​ ​a​ ​string​ `​id`​​ ​as​ ​an​ ​argument​ ​and​ ​returns​ ​an​ ​Element object​ ​which​ ​can​ ​be​ ​selected​ ​by​ ​id​.​ ​Another​ ​way​ ​of​ ​saying​ ​this​ ​is​ ​that
`document.getElementById([id])`​​ ​fetches​ ​the​ ​same​ ​element​ ​as​ ​the​ ​`#id`​​ ​CSS​ ​selector,​ ​but
returns​ ​it​ ​as​ ​a​ ​JavaScript​ ​object.
You​ ​should​ ​bind​ ​the​ ​return​ ​value​ ​to​ ​a​ ​variable.​ ​For​ ​example:

```js
var​ ​navbar​ ​=​ ​document.getElementById('navbar')​.
```

### The​ ​Element​ ​Object

An​ ​Element​ ​object​ ​is…​ ​an​ ​element!​ ​An​ ​HTML​ ​element​ ​(usually).​ ​We​ ​use​ ​this​ ​object​ ​to​ ​access
important​ ​properties​ ​of​ ​an​ ​element,​ ​such​ ​as​ ​`.innerHTML`​,​ ​`.innerText`​​ ​(inherited​ ​from​ ​the
Node​ ​object)​ ​and​ ​`.classList`​.
Today​ ​we​ ​are​ ​only​ ​concerned​ ​with​ `​.innerHTML`​​ ​and​ `​.innerText​`.

### Element.innerHTML​ ​and​ ​Element.innerText

`.innerText`​ ​gets​ ​and​ ​sets​ ​the​ ​text​ ​of​ ​an​ ​HTML​ ​Element.​ ​It​ ​is​ ​used​ ​via​ ​JavaScript's​ ​standard
object​ ​dot​ ​notation.​ ​For​ ​example,​ ​`myH1.innerText​ ​=​ ​"Hey!"​​` ​will​ ​change​ ​the​ ​text​ ​of​ ​the
HTML​ ​Element​ ​reference​d ​by​ ​the​ ​variable​ `​myH1`​ ​to​ `​"Hey!"`.

`.innerHTML​`​ ​works​ ​the​ ​same​ ​way​ ​as​ ​`.innerText​`,​ ​but​ ​gets​ ​and​ ​sets​ ​HTML​ ​instead​ ​of​ ​text.
This​ ​is​ ​a​ ​sometimes-useful​ ​shortcut​ ​to​ ​building​ ​nested​ ​elements.

> Example:​ ​You​ ​Typed​ ​______​ ​. <br>
Build​ ​a​ ​page​ ​containing​ ​an​ ​`h1`​ ​element​ ​with​ ​the​ ​`id​` ​attribute​ ​`youTyped`​ ​and​ ​the​ ​text​ ​`You​ ​typed
______​`.​ ​In​ ​an​ ​infinite​ ​loop,​ ​prompt​ ​the​ ​user​ ​to​ ​enter​ ​a​ ​string.​ ​Every​ ​time​ ​the​ ​user​ ​submits​ ​a
string,​ ​update​ ​the​ ​header​ ​text​ ​appropriately.

## Resources

- [MDN​ ​-​ ​Introduction​ ​to​ ​the​ ​DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN​ ​-​ ​Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [MDN​ ​-​ ​Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [MDN​ ​-​ ​Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN​ ​-​ ​Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
