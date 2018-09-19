1. 
```js
Array.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

let arr = [1, 2, 3];

arr.myForEach(el => {
  console.log(el)
})
```

2. 
```js
Array.prototype.myMap = function(callback) {
  let output = [];
  this.myForEach(el => {
    output.push(callback(el))
  })
  return output
}

let arr = [1, 2, 3];

arr.myMap(el => {
  return el * 2
})

```

3. 
```js
Array.prototype.myFilter = function(callback) {
  let output = [];
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      output.push(this[i])
    }
  }
  return output
}
```

4. 
```js
Array.prototype.myEvery = function(callback) {
  for(let i = 0; i < this.length; i++) {
    if(!callback(this[i])) {
      return false;
    }
  }
  return true;
}
```

5. 
```js
let arr = [1, 2, 3, 4]

Array.prototype.myReduce = function(callback, initialValue) {
    let counter = 0;
    let accumulator;
    if (initialValue === undefined) {
        accumulator = this[0];
        counter = 1;
    } else {
        accumulator = initialValue;
    }
    for (let i = counter; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }

    return accumulator;
}

arr.myReduce((acc, el) => {
  return acc + el
}, 5)
```

6. 
```js
Array.prototype.myTranspose = function() {
  let grid = [];
  for(let col = 0; col < this[0].length; col++) {
    grid[col] = [];
    for(let row = 0; row < this.length; row++) {
      grid[col][row] = this[row][col]
    }
  }
  return grid
}
```
7. 
```js
let arr = [1, 2, 3, 4, 5];

arr.myMap(el => {
  return el + 10
})
```

8. 
```js
let arr = [1, "2", "mango", 4, "pasta"];

arr.myMap(el => {
  if(typeof el !== 'string') {
    el = ''
  }
  return el 
})
```

9.
```js
let arr = [1, 2, 3, 4, 5];

arr.myFilter(el => {
  return el % 2 === 0
})
```

10. 
```js
arr.myEvery( el => {
  return el === arr[0]
})
```
11. 
```js
let arr = [1, 2, 3, 4, 5];

arr.myReduce((acc, el) => {
  return acc + el 
})
```

12. 
```js
let arr = [1, 2, 3, 4, 5];

arr.myMap(el => {
  return el * 2
})
  .myReduce((acc, el) => {
  return acc * el 
})
```

13. 
```js
let arr = [1, 2, 12, 4, 5];

arr.myReduce((acc, el) => {
  if(el > acc) {
    return el
  } else {
    return acc
  }
})
```

14. 
```js
function elementDivisibleBy(divisor, arr) {
  return arr.myFilter((el) => {
    return el % divisor === 0
  })
}
```

15.
```js
Array.prototype.myJoin = function(joiner = ""){
  output = "";
  for(let i = 0; i < this.length; i++) {
    output += this[i]
    if(i !== this.length - 1) {
      output += joiner
    }
  }
  return output
}

```

16. 
```js
String.prototype.mySlice = function(start, end) {
  let slice = "";

  if (typeof end === 'undefined') {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i];
  }
  return slice;
};

```

17. 
```js
let arr = [1, 2, 5, 4, 0];

function countZeros(arr) {
  return arr.reduce((acc, el) => {
    if(el === 0) {
      acc++
    } 
    return acc
  }, 0)
}

countZeros(arr)

```


18. 
```js
function numberTimesIdx(arr) {
  return arr.map((el, i) => {
    return el * i
  })
}

```

_Bonus:_

```js
Array.prototype.myFlatten = function() {
  let output = [];
  for(let i = 0; i < this.length; i++) {
    if(Array.isArray(this[i])) {
      output =  output.concat(this[i].myFlatten())
    } else {
      output.push(this[i])
    }
  }
  return output
}

```





























