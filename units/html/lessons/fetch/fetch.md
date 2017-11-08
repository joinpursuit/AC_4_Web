# Fetch

## Objectives

- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Context

Callbacks​ ​are​ ​yesterday's​ ​headlines,​ ​and​ [​​promises​​](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) ​are​ ​the​ ​next​ ​big​ ​thing.​ ​​`fetch()​​` ​is​ ​the way​ ​to​ ​make​ ​an​ ​ajax​ ​request​ ​with​ ​promises.​ It's ​a​ ​clean,​ ​organized​ ​interface​ ​to​ ​ajax.

## Promises

A​ ​​ _promise_ ​ ​ _chain_ ​​ ​is​ ​a​ ​function​ ​followed​ ​by​ ​a​ ​series​ ​of​ ​​`.then()​​` ​methods​ ​which​ ​accept
callback​ ​functions​ ​as​ ​arguments.​ ​The​ ​​`.then()​​` ​callbacks​ ​are​ ​executed​ ​​ _after_ ​​ ​the​ ​original
function​ ​succeeds​ ​(or​ ​fails).​ ​We​ ​use​ ​this​ ​to​ ​lend​ ​a​ ​bit​ ​of​ ​​ _synchronous_ ​​ ​programming​ ​to
our​ ​JavaScript.​ ​​ _SYNCHRONICITY_ ​.

## fetch()

Fetch,​ ​in​ ​its​ ​simplest​ ​form,​ ​takes​ ​a​ ​single​ ​argument​ ​--​ ​the​ ​URL​ ​you​ ​are​ ​requesting.​ ​The first​ ​​`.then()`​ ​​uses​ ​the​ ​response​ ​object​ ​as​ ​an​ ​argument​ ​to​ ​its​ ​callback​ ​function.​ ​You'll manipulate​ ​it​ ​to​ ​return​ ​something​ ​more​ ​useful,​ ​which​ ​is​ ​used​ ​as​ ​an​ ​argument​ ​to​ ​the callback​ ​function​ ​in​ ​a​ ​second​ ​​`.then()​`.

```js
fetch('http://api.example.com')
.then(function(response)​ ​{
    return​ ​response.json();
})
.then(function(obj)​ ​{
});
```

Your​ ​manipulation​ ​of​ ​the​ ​response​ ​object​ ​will​ ​very​ ​often​ ​be​ ​to

```js
return​ ​response.json()​.
```

## Example: ​Gotta ​Catch ​One

With​ ​the​ ​file​ ​​ _exCatch.html_ ​,​ ​use​ `​​fetch()` ​​​and​ ​the​ ​​[Pokeapi](http://pokeapi.co/)​​ ​to​ ​build​ ​a​ ​page​ ​with​ ​a​ ​text
input​ ​field​ ​and​ ​a​ ​search​ ​button.​ ​When​ ​the​ ​button​ ​is​ ​clicked,​ ​get​ ​data​ ​for​ ​the​ ​pokemon that​ ​has​ ​been​ ​typed​ ​in​ ​the​ ​input​ ​field​ ​and​ ​insert​ ​the​ ​height​ ​and​ ​weight​ ​of​  that​ ​pokemon into​ ​the​ ​DOM.