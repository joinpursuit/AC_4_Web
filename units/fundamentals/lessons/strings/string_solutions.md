# String Solutions

1. console.log(str[0]);

2. console.log(str.length);

3. console.log(str[str.length - 1]);

4. 
```js
let str = "jimmy"
let result = str.slice(0, str.length - 1)
result += str[str.length - 1].toUpperCase()
console.log(result)

```

5. 
```js
let amount = 1000000;

if(amount === 1000000) {
  console.log(amount + " dollars (pinky)")
} else {
  console.log(`${amount} dollars`)
}
```

6. 
```js

let str = "swimming"

if(str.length < 3) {
  console.log(str)
} else {
  if(str.slice(str.length - 3) === "ing") {
    console.log(str + "ly")
  } else {
    console.log(str + "ing")
  }
}
```

7. 

```js
let str = 'jimmy';
console.log(str.slice(0, str.length - 1));
```
8. 
```js
let str = 'jimmy'
console.log(str.slice(str.length - 1))
```
9.

```js
let str1 = 'mix';
let str2 = 'pod';

let firstTwoStr1 = str1.slice(0, 2)
let firstTwoStr2 = str2.slice(0, 2)
let restStr1 = str1.slice(2);
let restStr2 = str2.slice(2);

console.log(firstTwoStr2 + restStr1 + " " + firstTwoStr1 + restStr2)
```

10. 
```js
let xo = "ooxx"
let x = 0;
let o = 0;
for(let i = 0; i < xo.length; i++) {
  if(xo[i] === "o") {
    o++
  } else if(xo[i] === "x") {
    x++
  }
}
console.log(x === o)
```

11.
```js
let str = "dog says woof"
let vowelCount = 0;
for(let i = 0; i < str.length; i++) {
  if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" ) {
    vowelCount++
  }
}
console.log(vowelCount)

```
12. 
```js
let str = "racecar"
let backwards = str.split("").reverse().join("")
console.log(str === backwards)
```

13. 
```js

let str = "giraffe"
let startIdx = 2;
let endInx = 7;
let result = ""
for(let i = startIdx; i < endInx; i++) {
  result += str[i]
}
console.log(result)
```

14. 
```js
let str = "hello";
let letter = "e";
let contains = false;
for(let i = 0; i < str.length; i++) {
  if(str[i] === letter) {
    contains = true;
  }
}
console.log(contains)

```

15. 
```js
let num = 5; 
let hashes = ""
for(let i = 0; i <= num; i++) {
  console.log(hashes);
  hashes += "#"
}
```

