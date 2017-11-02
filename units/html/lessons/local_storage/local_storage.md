# Local​ ​Storage

## External Sources

- [HTTP​​ cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- ​​​[document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)

## Lesson

### window.localStorage

The​ ​WWW​ ​is​ ​*stateless*​ ​by​ ​default​ ​--​ ​every​ ​single​ ​page​ ​load​ ​is​ independent​ ​of​ ​the​ ​data​ ​in other​ ​page​ ​load.​ ​Nothing​ ​persists​,​ ​ie​ ​all​ ​data​ ​is​ ​lost​ ​on​ ​page​ ​reload. This​ ​problem​ ​is​ ​often​ ​solved​ ​on​ ​the​ ​server-side,​ ​where​ ​a​ ​web​ ​server​ ​will​ ​use​ ​session information​ ​to​ ​track​ ​a​ ​user's​ ​data.​ ​With​ ​HTML5,​ ​we​ ​can​ ​persist​ ​data​ ​with
`window.localStorage`​​ ​and​ ​JavaScript​ ​on​ ​the​ ​client-side.

### .setItem()​ ​and​ ​.getItem()

`localStorage​​` ​is​ ​almost​ ​a​ ​plain​ ​old-fashioned​ ​JavaScript​ ​object.​ ​All​ ​data​ ​is​ ​stored​ ​as key-value​ ​pairs,​ ​but​ ​is​ ​accessed​ ​through​ ​the​ ​*getter*​ ​and​ *​setter*​ ​methods `window.localStorage.getItem()`​​ ​and​ `window.localStorage.setItem()​`.

- `.setItem(k,v)​​` ​takes​ ​two​ ​arguments.​ ​The​ ​first​ ​argument​ ​is​ ​a​ ​key​ ​and​ ​the​ ​second argument​ ​is​ ​a​ ​value.​ ​The​ ​key​ ​will​ ​be​ ​used​ ​later​ ​to​ ​pull​ ​data​ ​back​ ​out​ ​of​ ​the​ ​storage object.

- `.getItem(k)​​` ​takes​ ​a​ ​single​ ​argument​ ​--​ ​a​ ​key​ ​--​ ​and​ ​returns​ ​the​ ​value​ ​associated​ ​with that​ ​key.

### Example:​ ​Builder-Saver

With​ ​the​ ​file​ `​builderSaver.html​`,​ ​build​ ​a​ ​form​ ​with​ ​a​ ​single​ ​text​ ​input​ ​that,​ ​on​ ​submit, appends​ ​the​ ​input​ ​to​ ​a​ ​paragraph​ ​element.​ ​Save​ ​that​ ​paragraph​ ​with `window.localStorage.setItem()`​.​ ​When​ ​the​ ​page​ ​is​ ​refreshed,​ ​reload​ ​the
paragraph​ ​with​ ​`window.localStorage.getItem()`​.

### `window.localStorage.clear()`

`window.localStorage.clear()`​​ ​empties​ ​the​ ​Storage​ ​object.

### Example:​ ​Builder-Saver-Clearer

Duplicate​ ​`builderSaver.html`​ ​as​ ​`builderSaverClearer.html​`.​ ​Add​ ​a​ ​button​ ​reading​ ​"clear". When​ ​the​ ​button​ ​is​ ​clicked,​ ​the​ ​.innerText​​ ​of​ ​the​ ​paragraph​ ​should​ ​be​ ​set​ ​to​ ​an empty​ ​string.

### Other​ ​window.localStorage​ ​Properties

- `.length`
- `.removeItem()`

### Cookies

Cookies​ ​and​ ​sessions​ ​are​ ​mentioned​ ​here​ ​only​ ​to​ ​say​ ​that​ ​we​ ​have​ ​not​ ​forgotten​ ​about them.​ ​They​ ​are​ ​another​ ​type​ ​of​ ​storage​ ​--​ ​the​ ​original​ ​way​ ​to​ ​persist​ ​user​ ​data​ ​between requests.​ ​Cookies/Sessions​ ​are​ ​often​ ​used​ ​to​ ​store​ ​user​ ​login/authentication information.​ ​They​ ​are​ ​outside​ ​the​ ​scope​ ​of​ ​today's​ ​exercises.

### IndexedDB

IndexedDB​​ ​is​ ​another​ ​storage​ ​method​ ​useful​ ​for​ ​storing​ ​significant​ ​amounts​ ​of​ ​complex data​ ​on​ ​the​ ​client.​ ​It​ ​replaced​ ​a​ ​technology​ ​called​ ​WebSQL.​ ​The​ ​API​ ​is​ ​quite​ ​low-level and​ ​is​ ​outside​ ​the​ ​scope​ ​of​ ​today's​ ​exercises.
