# DOM 1 - Exercises

## Exercises

1. String​ ​Repeater​ ​1

With​ ​the​ ​files​ ​string-repeater.html​ ​and​ ​string-repeater.js,​ ​ ​use​ `​window.prompt()` ​to​ ​query​ ​the user​ ​for​ ​a​ ​string.​ ​Use​ ​`​window.alert()​​` ​to​ ​display​ ​the​ ​same​ ​string,​ ​repeated​ ​3​ ​times.

2. String​ ​Repeater​ ​2

Now,​ ​use​ `​window.prompt()​​` ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string,​ ​and​ ​again​ ​to​ ​query​ ​the​ ​user
for​ ​a​ ​number,​ ​x.​ ​Use​ ​`​window.alert()​​` ​to​ ​display​ ​the​ ​same​ ​string,​ ​repeated​ ​x​ ​times.​ ​You​ ​may assume​ ​appropriate​ ​input.​ ​HINT:​ ​You​ ​must​ ​convert,​ ​or​ ​typecast,​ ​the​ ​user​ ​input​ ​into​ ​a​ ​number.

3. Odd​ ​or​ ​Even​ ​or​ ​NaN

With​ ​the​ ​files​ ​odd-even-nan.html​ ​and​ ​odd-even-nan.js​,​ ​use​ `​window.prompt()​​` ​to​ ​query​ ​the
user​ ​for​ ​a​ ​number.​ ​Use​ ​`​window.alert()​​` ​to​ ​tell​ ​the​ ​user​ ​`"that​ ​number​ ​is​ ​odd"`,​ `​"that​ ​number​ ​is even"`,​ ​or​ ​`"that​ ​is​ ​not​ ​a​ ​number"`,​ ​as​ ​is​ ​appropriate.

4. Build​ ​an​ ​Element

With​ ​the​ ​files​ `prompt-element.html`​ ​and​ ​`prompt-element.js`,​ ​ ​build​ ​a​ ​page​ ​with​ ​a​ ​centered​ ​`div​` ​that
has​ ​an​ ​`id`​ ​attribute​ ​container​.​ ​Use​ `​window.prompt()​​` ​to​ ​ask​ ​the​ ​user​ ​to​ ​write​ ​an​ ​entire​ ​HTML
element​ ​(opening​ ​tag,​ ​text,​ ​and​ ​closing​ ​tag),​ ​and​ ​change​ ​the​ ​container​ ​div​ ​to​ ​hold​ ​that​ ​tag.​ ​What happens​ ​when​ ​you​ ​use​ ​`.innerHTML​?​` ​What​ ​happens​ ​when​ ​you​ ​use​ `​.innerText​?`​ ​What
happens​ ​if​ ​the​ ​user​ ​types​ ​nested​ ​HTML​ ​elements?

5. Update​ ​List​ ​Items

With​ ​the​ ​files​ ​`update-list-items.html​` ​and​ ​`update-list-items.js​`,​ ​build​ ​a​ ​page​ ​with​ ​four​ ​list​ ​items,
each​ ​with​ ​an​ ​id​ ​attribute​ ​one​,​ ​two,​ ​ ​three​,​ ​or​ ​four​,​ ​and​ ​each​ ​with​ ​different​ ​text​ ​of​ ​your​ ​choosing.
Use​ `​window.prompt()​​` ​to​ ​query​ ​the​ ​user​ ​first​ ​for​ ​an​ ​id​ ​--​ ​one,​ ​two,​ ​three,​ ​or​ ​four​ ​--​ ​and​ ​then
prompt​ ​separately​ ​for​ ​a​ ​string.​ ​Use​ ​`document.getElementById()​​` ​to​ ​bind​ ​the​ ​list​ ​item
specified​ ​in​ ​the​ ​initial​ ​prompt,​ ​and​ ​change​ ​the​ ​text​ ​of​ ​that​ ​list​ ​item​ ​to​ ​the​ ​string​ ​input​ ​from​ ​the second​ ​prompt.​ ​If​ ​the​ ​user's​ ​first​ ​input​ ​is​ ​not​ ​`"one"`,​ `​"two"`,​ `​"three"`,​ ​or​ `​"four"`,​ ​then​ ​simply​ ​change
the​ ​text​ ​of​ ​the​ ​first​ ​list​ ​item.

6. Swap​ ​List​ ​Items

With​ ​the​ ​files​ `swap-list-items.html​` ​and​ `s​wap-list-items.js​`,​ ​build​ ​a​ ​page​ ​with​ ​four​ ​list​ ​items,​ ​each
with​ ​an​ ​`id​` ​attribute​ ​`one`​,​ `​two`​,​ `​three​`,​ ​or​ `​four`​,​ ​and​ ​each​ ​with​ ​different​ ​text​ ​of​ ​your​ ​choosing.​ ​Use `window.prompt()​​` ​to​ ​query​ ​the​ ​user​ ​for​ ​an​ id ​--​ ​one,​ ​two,​ ​three,​ ​or​ ​four​ ​--​ ​and​ ​then​ ​prompt again​ ​for​ ​another​ ​id​ ​--​ ​one,​ ​two,​ ​three,​ ​or​ ​four.​ ​Use​ `document.getElementById()​​` ​to​ ​bind the​ ​list​ ​items​ ​specified​ ​by​ ​the​ ​prompts,​ ​and​ ​then​ ​swap​ ​the​ ​text​ ​of​ ​each​ ​list​ ​item​ ​with​ ​the​ ​text​ ​of the​ ​other​ ​list​ ​item.