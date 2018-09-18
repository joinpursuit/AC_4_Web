# Function Solutions

1. The code will log 'bye'. This is because we did not redeclare our variable inside the function. Because of this we are referring 
to the greeting variable that we declared before. When we call our hello() function we reassign it's value. 

2. 
```js
function largest(num1, num2) {
  return num1 > num2 ? num1 : num2
}

```
3. 
```js
const getDogAge = (humanYr) => {
  return humanYr * 7
}

// OR

const getDogAge = (humanYr) => humanYr * 7

console.log(getDogAge(3));

```

4. 
```js
const calcCircumfrence = (radius) => {
  return 2 * radius * Math.PI;
}

const calcArea = (radius) => {
  return Math.PI * radius * radius;
}

const circleProps = (radius) => {
  console.log(`The circumference is ${calcCircumfrence(radius)}`);
  console.log(`The area is ${calcArea(radius)}`)
}

circleProps(5)
```
5. 
```js
function celciusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}

function fahrenheitToCelcius(temp) {
  return (temp - 32)/ 1.8;
}

function convertTemperature(temp, scale) {
  if(scale === "C") {
    return fahrenheitToCelcius(temp)
  } else {
    return celciusToFahrenheit(temp)
  }
}

convertTemperature(100, "F")

```

6. 
```js
const square = num => num * num; 

const half = num => num / 2;

const percentOf = (num1, num2) => {
  return((num1 / num2) * 100).toFixed(2) + "%"
}

const areaOfCircle = (radius) => {
  return (Math.PI * radius * radius).toFixed(2);
}

const doStuff = (num) => {
  return  percentOf(square(num), areaOfCircle(half(square(num)))); 
}


```

7.
```js
function arraySum(arr) {
  let sum = 0; 
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

```







