# Solutions
1.
```js
const double = num => num * 2;
const square = num => num * num;
const doubleSquare = num => square(double(num));
doubleSquare(5)
```

2. 
```js
const classyGreeting = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}`
}

const yell = str => str.toUpperCase();

const yellGreeting = (firstName, lastName) => {
  return yell(classyGreeting(firstName, lastName))
}

yellGreeting("corey", "ladovsky")
```

3. 
```js
const removeDupes = (arr) => {
  let set1 = new Set(arr);
  return [... set1]
}

const concatAndRemoveDupes = (arr1, arr2) => {
  return removeDupes([...arr1, ...arr2])
}

```

4. 
```js
const sort = arr => {
  return arr.sort((a, b) => a - b)
}

const middleElemnt = arr => {
  if(arr.length % 2) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    let midIdx = arr.length / 2;
     return (arr[midIdx - 1] + arr[midIdx]) / 2
  }
}

const median = arr => (
  middleElemnt(sort(arr))
)

```

5. 
```js
const repeat = (str, numberOfTimes = 2) => {
  for(let i = 0; i < numberOfTimes; i++) {
    console.log(str)
  }
}
```

6. 
```js
const getSum = (...arg) => {
  let sum = 0;
  for(let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
}

```

7. 
```js
const adder = num1 => {
  return (num2) => {
    return num1 + num2;
  }
}

const add5 = adder(5);
const add9 = adder(9);
```









