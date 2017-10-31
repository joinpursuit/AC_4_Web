# Document​ ​Object​ ​Model:​ ​Extended

## Sources

- [MDN​ ​-​ ​document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN​ ​-​ ​NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN​ ​-​ ​HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [MDN​ ​-​ ​Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## Keywords

- document.querySelector()
- document.querySelectorAll()
- document.getElementsByTagName()
- document.getElementsByClassName()
- HTMLElement.style
- Element.classList
- classList.add()
- classList.remove()

## Lesson

In​ ​this​ ​session​ ​we​ ​simply​ ​expand​ ​our​ ​toolkit.​ ​We​ ​use​ ​new​ ​document​ ​selector​ ​methods​ ​and​ ​more Element​ ​properties​ ​to​ ​advance​ ​our​ ​ability​ ​to​ ​manipulate​ ​a​ ​web​ ​page.

### document.querySelector()

document.querySelector(selector)​​ ​will​ ​return​ ​a​ ​single​ ​Element​ ​object​ ​according​ ​to​ ​its argument,​ ​which​ ​should​ ​be​ ​a​ ​string​ ​equivalent​ ​to​ ​a​ ​CSS​ ​selector.

```js
//​ ​bind​ ​the​ ​<body>​ ​element
var​ ​body​ ​=​ ​document.querySelector('body');
//​ ​bind​ ​the​ ​element​ ​with​ ​id='content'
var​ ​content​ ​= document.querySelector('#content');
```

### document.querySelectorAll()

document.querySelectorAll(selector)​​ ​returns​ ​a​ ​NodeList​ ​object​ ​of​ ​all​ ​elements matching​ ​its​ ​argument,​ ​where​ ​its​ ​argument​ ​is​ ​the​ ​string​ ​equivalent​ ​to​ ​a​ ​CSS​ ​selector.

```js
//​ ​bind​ ​all​ ​elements​ ​with​ ​class​ ​'centered'
var​ ​nlCentered​ ​=​ ​document.querySelectorAll('.centered');
//​ ​bind​ ​all​ ​paragraph​ ​(p)​ ​elements
var​ ​nlParagraph​ ​=​ ​document.querySelectorAll('p');
```

### Other​ ​Document​ ​Selectors

`document.getElementsByTagName([tag])`​​ ​and
`document.getElementsByClassName([class])`​​ ​work​ ​as​ ​you​ ​would​ ​expect.​ ​You'll​ ​see​ ​them often​ ​in​ ​sample​ ​code​ ​because​ ​querySelector​​ ​and​ ​queryselectorAll​,​ ​because​ ​the​ ​latter two​ ​methods​ ​have​ ​only​ ​recently​ ​been​ ​implemented​ ​in​ ​all​ ​major​ ​browsers.

### HTMLElement.style

The​ ​`.style`​ ​property​ ​of​ ​an​ ​HTMLElement​ ​has​ ​nested​ ​properties​ ​that​ ​allow​ ​you​ ​to​ ​directly manipulate​ ​the​ `​style​` ​of​ ​an​ ​element.​ ​Use​ ​dot​ ​notation​ ​and​ ​camel​ ​case​ ​to​ ​assign​ ​a​ ​value​ ​to​ ​a​ ​style property.

```js
//​ ​give​ ​an​ ​element​ ​purple​ ​text
el.style.color​ ​=​ ​'purple'
//​ ​give​ ​an​ ​element​ ​a​ s​mall-caps​ ​font-variant
el.style.fontVariant​ = ​'small-caps'
```

> Example:​ *Set​ ​Background​ ​Color​ ​with​ ​JavaScript*:
> Build​ ​a​ ​page​ ​with​ ​four​ `​lorem​ ​ipsum`​ ​paragraphs.​ ​Use​ ​`document.querySelector()​​` ​and​ ​the
`HTMLElement.style`​​ ​property​ ​to​ ​give​ ​a​ ​blue​ ​background​ ​to​ ​the​ ​body​ ​element.

---

> Example:​ ​*Every​ ​Other​ ​Thing​ ​is​ ​Purple*
> Build​ ​a​ ​page​ ​with​ ​an​ ​unordered​ ​list​ ​of​ ​types​ ​of​ ​candy​ ​bars.​ ​In​ ​a​ ​separate​ ​JavaScript​ ​file,​ ​use `document.querySelectorAll()`​,​ ​a​ ​`for​ ​loop`,​ ​and​ ​the​ `​HTMLElement.style`​​ ​property​ ​to
give​ ​purple​ ​text​ ​to​ ​every​ ​other​ ​list​ ​item.

### Element.classList

Use​ ​the​ `​.add()`​​ ​and​ ​`.remove()​​` ​methods​ ​of​ ​`Element.classList`​​ ​to​ ​reference​ ​and manipulate​ ​the​ ​classes​ ​of​ ​an​ `​Element​` ​object.​ ​This​ ​is​ ​more​ ​elegant​ ​than​ ​using
`HTMLElement.style​`.

```js
//​ ​add​ ​the​ ​'fgPurple'​ ​CSS​ ​class​ ​to​ ​an​ ​element
el.classList.add('fgPurple');
//​ ​remove​ ​the​ ​'centered'​ ​CSS​ ​class​ ​from​ ​an​ ​element
el.classList.remove('centered');
```

> Example:​ *​Delayed​ ​Blue​ ​Centered​ ​Small​ ​Caps​ ​Content* <br>
> Build​ ​an​ ​page​ ​where​ ​the​ ​body​ ​element​ ​has​ ​a​ `​class="fgPink"​​` ​attribute,​ ​and​ ​four​ ​lorem​ ​ipsum
paragraphs.​ ​Link​ ​to​ ​an​ ​external​ ​CSS​ ​file​ ​containing​ ​separate​ ​class​ ​rules​ ​for
`background-color:​ ​lightblue​,​ ​color:​ ​pink​,​ ​font-variant:​ ​small-caps​,
text-align:​ ​center​,​ ​width:​ ​20em​,​ ​and​ ​margin:​ ​0​ ​auto`​.
Use​ ​`document.querySelector()​​` ​to​ ​bind​ ​the​ ​body​ ​element,​ ​and​ ​then​ ​use `.classList.remove()`​​ ​and​ ​`.classList.add()`​​ ​to​ ​remove​ ​the​ `​fgPink​​` ​class​ ​from​ ​the
body​ ​element,​ ​and​ ​add​ ​your​ ​classes​ ​for​ ​the​ ​other​ ​properties.