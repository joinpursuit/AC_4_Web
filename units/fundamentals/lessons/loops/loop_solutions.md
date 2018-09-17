# Loop Solutions
1. 
```js
let num = 20;

while(num > 0) {
  console.log(num)
  num--
}

for(let i = num; i > 0; i--) {
  console.log(i)
}
```
2. 
```js
let num = 20;
let i = 0;
while(i < num) {
  let evenOrOdd = i % 2 ? "odd" : "even";
  console.log(i + " is " + evenOrOdd)
  i++
}

for(let i = 0; i < num; i++) {
    let evenOrOdd = i % 2 ? "odd" : "even";
  console.log(i + " is " + evenOrOdd)
}
```

3. 
```js
let num = 10;
let i = 0;
while(i < num) {
  console.log(i + " * 9 = " + (i * 9));
  i++
}

let num = 10;

for(let i = 0; i < num; i++) {
 console.log(i + " * 9 = " + (i * 9));
}

//bonus

for(let i = 0; i < num * 9; i += 9) {
 console.log(i);
}
```

4. 
```js
for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0) {
    console.log("Fizz")
  } else if(i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}
```

5.
```js
for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 ===0) {
    console.log("FizzBuzz")
  } else if(i % 3 === 0) {
    console.log("Fizz")
  } else if(i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}
```
