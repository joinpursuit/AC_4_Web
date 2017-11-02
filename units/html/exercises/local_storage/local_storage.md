# Local Storage - Exercises

## Local​ ​Storage​ ​Locker

Using​ ​the​ ​files​ ​`ls-locker.html​` ​and​ ​`ls-locker.js`​,​ ​build​ ​a​ ​page​ ​that​ ​includes​ ​a​ `​textarea` element.​ ​When​ ​a​ ​user​ ​types​ ​into​ ​the​ `​textarea​`,​ ​the​ ​value​ ​of​ ​the​ ​text​ ​should​ ​be​ ​saved with​ `​window.localStorage.setItem()​`.

Whenever​ ​the​ ​page​ ​is​ ​refreshed,​ ​the​ ​text​ ​inside​ ​the​ `​textarea​​` ​should​ ​be​ ​populated​ ​by the​ ​user's​ ​previous​ ​input​ ​with​ `​window.localStorage.getItem()​`.

HINT:​ ​When​ ​the​ ​value​ ​of​ ​a​ ​textarea​​ ​is​ ​changed,​ ​an​ ​event​ ​called​ *​input*​ ​is​ ​triggered.

## Muffin​ ​Cooking

Using​ ​the​ ​files​ ​`muffins.html`​ ​and​ ​`muffins.js`​,​ ​build​ ​a​ ​page​ ​with​ ​two​ ​buttons.​ ​One​ ​button that​ ​says​ **​"Eat​ ​a​ ​Muffin"**​ ​and​ ​another​ ​button​ ​that​ ​says​ ​**"Bake​ ​Muffins"**.​ ​Include​ ​an​ `​h1`
element​ ​that​ ​says​ ​**"Muffin​ ​Count:​ ​10"**. When​ ​a​ ​user​ ​clicks​ ​**"Eat​ ​a​ ​Muffin"**,​ ​the​ ​muffin​ ​count​ ​should​ ​be​ ​reduced​ ​by​ `​1`.​ ​When​ ​a
user​ ​clicks​ ​**"Bake​ ​Muffins"​** ​the​ ​muffin​ ​count​ ​should​ ​be​ ​increased​ ​by​ ​`5`.​ ​Every​ ​time​ ​the muffin​ ​count​ ​is​ ​changed,​ ​the​ ​count​ ​should​ ​be​ ​saved​ ​with `window.localStorage.setItem()​`.

Whenever​ ​the​ ​page​ ​is​ ​refreshed,​ ​the​ ​value​ ​of​ ​the​ ​muffin​ ​count​ ​header​ ​should​ ​be​ ​set​ ​to its​ ​previous​ ​value​ ​with​ `​window.localStorage.getItem()`​.