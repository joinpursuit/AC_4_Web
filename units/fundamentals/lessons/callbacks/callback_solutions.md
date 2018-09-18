# Callback Soltions

1. 
```js
function forEachElem(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i])
  }
}
```
2. 
```js
const logEachElem = arr => {
  forEachElem(arr, (el) => {
    console.log(el); 
  })
}
```
3. 
```js
const logArrTypes = arr => {
  forEachElem(arr, el => {
    console.log(`${el} is a ${typeof el}`)
  })
}
```
4. 
```js
function myMap(arr, cb) {
  let result = [];
  forEachElem(arr, el => {
    result.push(cb(el))
  })
  return result;
}

myMap([1, 2, 3], (el) => {
  return el * 2
})

```

5. 
```js
function allCaps(arr) {
  return myMap(arr, (el) => {
    return el.toUpperCase();
  })
}

allCaps(["corey", "ladovsky"])

```
6. 
```js
function shouldIBuyThis(balance, cb) {
  if(cb(balance)) {
    return "Sure! I've got the money!"
  }
  return "Nope! Gotta keep my savings up!"
}

```
