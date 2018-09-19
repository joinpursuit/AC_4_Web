# Array Solutions

1. console.log(array[array.length - 1])
2. array[0] = "something else"
3. fruits.push("mango")
4. fruits.unshift("blueberry")
5. fruits.pop()
6. console.log(fruits.length)
7. fruits.shift()
8. fruits.join("$")
9. 
```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

if(arr1.length === arr2.length) {
  console.log(null)
} else if(arr1.length > arr2.length) {
  console.log(arr1)
} else {
  console.log(arr2)
}
```

10. 
```js
let arr = ['dog', 'cat', 'bat', 'octopus', 'chinchilla'];
if(arr.length % 2 === 0) {
  console.log("Oop, there's no middle")
} else {
  let midIdx = Math.floor(arr.length / 2);
  console.log(arr[midIdx])
}
```

11. 
```js
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum)
```

12. 
```js
let min = 2;
let max = 6;
let result = [];
for(let i = min; i <= max; i++) {
  result.push(i)
}
console.log(result)
```
13. 
```js
let min = 4;
let max = 10;
let step = 2;
if(!step) {
  step = 1;
}
let result = [];
for(let i = min; i <= max; i += step) {
  result.push(i)
}
console.log(result)

```

14. 
```js
let arr = [1, 2, 3];
let result = [];
for(let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2)
}
console.log(result)

```
15. 
```js
let arr = [-1, 2, 3, 0, 1];
let target = 0;
let result = [];
for(let i = 0; i < arr.length; i++) {
  for(let j = i + 1; j < arr.length; j++) {
    if((arr[i] + arr[j]) === target) {
      result.push(i, j)
    }
  }
}
console.log(result)

```
