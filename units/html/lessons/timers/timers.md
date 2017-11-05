# Timers

## Keywords

- [.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
  - [.clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)
- [.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
  - [.clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

## Context

`.setTimeout()`​​ ​and​ ​​`.setInterval()​`​ ​are​ ​called​ ​​ _timers_ ​,​  and​ ​are​ ​used​ ​to​ ​add​ ​delays
to​ ​function​ ​execution.
They​ ​each​ ​take​ ​two​ ​arguments:​ ​a​ ​callback​ ​function​ ​and​ ​a​ ​measure​ ​of​ ​milliseconds.
They​ ​return​ ​numeric​ ​ids,​ ​which​ ​can​ ​be​ ​used​ ​with​ `​​.clearTimeout()`​​ ​and
`.clearInterval()` ​​​to​ ​halt​ ​the​ ​timer.

## .setTimeout(cb, ​ ​ t)

After​ ​​ _t_ ​​​milliseconds​ ​elapse,​ ​the​ ​callback​ ​function​ ​​ _cb_ ​​ ​of​ ​​.setTimeout()​​ ​executes.​ ​In
this​ ​way,​ ​you​ ​can​ ​delay​ ​the​ ​execution​ ​of​ ​a​ ​function.

## Example: PranknForm

With​ ​the​ ​file​ ​​ _exPrank.html_ ​,​ ​build​ ​a​ ​form​ ​with​ ​a​ ​single​ ​text​ ​input​ ​and​ ​an​ ​empty​ ​paragraph element.​ ​When​ ​the​ ​user​ ​submits​ ​the​ ​form,​ ​the​ ​paragraph's​ ​​`.innerText`​​ ​should​ ​read, *"You​ ​typed:​ ​I​ ​hate​ ​marshmallows!"*

After​ ​ 1000 ​ ​milliseconds,​ ​the​ ​paragraph's​ ​​`.innerText`​​ ​should​ ​change​ ​to​ ​read,​ *​"JK,​ ​you
typed:​ ​"*,​ followed by the ​user's​ ​actual​ ​input.

## .setInterval(cb, ​ ​ t)

`.setInterval()`​​ ​will​ ​run​ ​indefinitely,​ ​and​ ​will​ ​execute​ ​callback​ ​function​ ​​ _cb_ ​​ ​every​ ​​ _t_ milliseconds.​ ​In​ ​this​ ​way,​ ​you​ ​can​ ​run​ ​an​ ​infinite​ ​loop​ ​with​ ​a​ ​"pulse"​ ​or​ ​"heartbeat".

## .clearInterval(id) ​ ​ and ​ ​ .clearTimeout(id)

Both​ `​​.setInterval()` ​​​and​ ​​`.setTimeout()​​` ​immediately​ ​return​ ​a​ ​numeric​ ​id
referencing​ ​their​ ​unique​ ​instance​ ​that​ ​can​ ​be​ ​used​ ​to​ ​later​ ​halt​ ​their​ ​execution.
To​ ​halt​ ​the​ ​indefinite​ ​execution​ ​of​ ​​`.setInterval()​`,​ ​you​ ​must​ ​assign​ ​its​ ​return​ ​value to​ ​a​ ​variable​ ​and​ ​then​ ​use​ ​that​ ​variable​ ​as​ ​an​ ​argument​ ​to​ ​​`.clearInterval()​`.
Although​ ​it​ ​is​ ​less​ ​common,​ `​​.clearTimeout()​​` ​is​ ​used​ ​in​ ​the​ ​same​ ​way.

## Example: ​ ​ Stop ​ ​ Button

With​ ​the​ ​file​ ​​ _exStopButton.html_ ​,​ ​build​ ​a​ ​page​ ​with​ ​a​ ​single​ ​h1​ ​element​ ​with
`.innerText`​​ ​that​ ​counts​ ​upwards​ ​from​ ​the​ ​number​ ​0,​ ​by​ ​increments​ ​of​ ​1,​ ​every​ ​ 250 milliseconds.​ ​Use​ ​​`.setInterval()​`.

Include​ ​a​ ​button​ ​reading​ ​"Stop​ ​Counting".​ ​When​ ​the​ ​button​ ​is​ ​clicked,​ ​use `.clearInterval()​​` ​and​ ​stop​ ​the​ ​number​ ​in​ ​the​ ​h1​ ​element​ ​from​ ​incrementing.
