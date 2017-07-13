1.
```javascript
function product(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    return -1
  } 

  return num1 * num2
}
```

2. 
```javascript
function contains(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true
    }
  }

  return false
}
```
Recursive:
```javascript
function contains(arr, element, index = 0) {
  if (index >= arr.length) {
    return false
  } else if (arr[index] === element){
    return true
  } else {
    return contains(arr, element, index + 1)
  }
}
```
3. 
```javascript
function upperOrLowerCase(string) {
  if (string.length % 2 === 0){
    return string[0].toUpperCase() + string.slice(1)
  } else {
    return string[0].toLowerCase() + string.slice(1)
  }
}
```

5. 
```javascript
function triangleArea(base, height){
  return (base * height) / 2
}

function squareArea(base){
  return base * base
}

function calcArea(shape){
  if (shape.type === "triangle"){
    return triangleArea(shape.base, shape.height)
  } else if (shape.type === "square") {
    return squareArea(base)
  } else {
    return -1
  }
}
```

6.
