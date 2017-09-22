# Arrays - I

## Objectives

## Vocabulary

* data type
* collection
* index
* mutable
* array element
* array join
* string split

## Lesson

An array provides a convenient way to store a collection of things. Say we want to keep the numbers `2`, `3`, `5`, `7`, and `11` - all in one place. Instead of creating five separate variables we can crate an array to story all these values. To create an array, we use the `[` and `]` brackets, and in between put whatever values we need.

```js
var arr = [2, 3, 5, 7, 11]
```

Arrays can be accessed like strings. They also have indexes and a `length` property.

![array](assets/array_elements.jpg)

We can put any type of variables as elements of an array. We can even mix different types in a single array.

```js
var animals = ['cat', 'dog', 'racoon']
var mixedArray = [2, 5, 'zebra']
```

We access the first element of the array by using index `0`, and the last by using index `array.length - 1`

```js
var animals = ['cat', 'dog', 'racoon', 'giraffe']

// this will print 'cat'
console.log(animals[0])

// this will print 'giraffe'
console.log(animals[animals.length -1])
```

### Adding, Removing and Modifying Elements

Unlike with strings, we can modify array elements:

```js
var animals = ['cat', 'dog', 'racoon', 'giraffe']
// changing the first element to 'zebra'
animals[0] = 'zebra'
```

We can also add elements to the end of an array by using the `push` method

```js
var numbers = [2, 4, 6]
// adding the numbers 8 and 10 to the array
numbers.push(8,10)
// now array will be: [2, 4, 6, 8, 10]
```

And remove an element from the end of an array by using the `pop` method:

```js
var numbers = [2, 4, 6]
// removing the last element in the  array
numbers.pop()
// now array will be: [2, 4]
```

### Slicing and Splicing

Arrays have a `slice` method that works just like the same-named string method.

```js
var arr = [4, 6, 8, 10, 12]
// getting [6, 8, 10]. arr will still be the same.
var sliceOfArr = arr.slice(1, 4)
```

A method we have in arrays but not in strings is `splice`. This method takes a starting index as an argument an removes all array elements starting from that index.

```js
var arr = ['dog', 'cat', 'mouse']
arr.splice(1)
// arr contains ['dog']
```

We can specify a *delete count* as  a second argument:

```js
var arr = ['dog', 'cat', 'mouse']
arr.splice(1, 1)
// arr contains ['dog', 'mouse']
```

Any additional arguments to `splice` (after the first two) will be inserted into the array in place of the deleted ones.

```js
var arr = ['dog', 'cat', 'mouse', 'giraffe']
// removing 'cat' and 'mouse' and inserting 'fish'
arr.splice(1, 2, 'fish')
// arr contains ['dog', 'fish', 'giraffe']
```

`splice` **returns** an array containig the elements that were removed. The modification happens on the array that the method was called from.

### Array --> String

Arrays can be converted to strings by using the `join` method. This method does not change the array, instead it **returns** a string that  The string will contain the array element separated by a comma. We can also pass a separator as argument to `join`.

```js
var animals = ['cat', 'dog', 'llama']

console.log(animals.join())
// will log: 'cat,dog,llama'

console.log(animals.join(''))
// will log: 'catdogllama'

console.log(animals.join(' '))
// will log: 'cat dog llama'
```

### String --> Array

Strings can be converted to arrays, by using the `split` method. This method will separate the string based on the **separator** provided as argument. For example, if our string is `'hello world'` and we provide a single space as an argument, we will get an array with two elements: `'hello'` and `'world'`:

```js
var str = 'hello world'
var arr = str.split(' ')
// arr will be ['hello', 'world']
```

If we provide an empty string as an argument to `split`, we will get an array with as many elements as there are characters in the string.

```js
var str = 'hello'
var arr = str.split('')
// arr will be: ['h','e','l','l','o']
```

# Arrays - II

### Array Equality Test

When we were dealing with strings and numbers, we could compare them by simply using the `===` operator. With arrays this will not work as expected:

```js
var arr1 = [2, 3, 4]
var arr2 = [2, 3, 4]
console.log(arr1 === arr2)
// will log: false
```

### Array Variables as References

Each array is like a container. In javascript,  even if two containers hold the same values, they are still not considered equal to each other. These containers are located somewhere in the computer's memory. A variable defined as an array holds the address in which the array is located. This means that if we have a variable `firstArr` and set another varaible `secondArr` to be equal to `firstArr`, they will both have the address for the same array. When we modify either `firstArr` or `secondArr`, the same array will be modified.

```js
var firstArr = ['cat', 'dog', 'mouse']
var secondArr = firstArr
secondArr[0] = 'giraffe'
// firstArr[0] will also be 'giraffe'
console.log(firstArr[0])
```

The only case in which an equality test returns `true` for two array variables, is if the two variables hold the address of the same array.

```js
var arr1 = [1,  2, 3]
var arr2 = arr1
// equality test for arr1 and arr2 will return true
console.log(arr1 === arr2)
```

### Custom Comparison

So what if we did want to check if two arrays contain exactly the same elements? We would need to write our own code to test for that. Let's call this a **deep equality test** - since we have to go into each array and check the elements one-by-one.

```js
function deepEqualityTest(arr1, arr2){
  // we will assume they are equal
  var deeplyEqual = true
  // no we will iterate and check if there is a difference
  for (var i = 0; i < arr1.length; i++ ){
    if (arr1[i] !== arr2[i]){
      deeplyEqual = false
    }
  }
  return deeplyEqual
}
```

The function above is would compare the element in index `0` for both arrays, then the element at index `1` for both, up to the element at the end of the first array. This will work, but only if both arrays have the same number of elements. If, for example, `arr1` is `[1, 2, 3]` and `arr2` is `[1, 2, 3, 4]`, the function would return `true`, because we have only checked until the last element of `arr1` (and they were equal up to that point). To fix this problem, we will check first if the two arrays have different lengths. If that **is** the case, then the arrays are not deeply equal.

```js
function deepEqualityTest(arr1, arr2){
  // Check if arrays have the same number of elements
  if (arr1.length !== arr2.length){
    return false
  }
  // Check if elements in both arrays are the same
  for (var i = 0; i < arr1.length; i++ ){
    if (arr1[i] !== arr2[i]){
      // Why can we return `false` at this point
      return false
    }
  }
  // And why can we return `true` here?
  return true
}
```

### Exercises

1. Write a function that returns the last element of an array. If the array is empty, return `undefined`.
2. Write a function that takes an array and a value as arguments. The function returns `true` if the element is in the array, and `false` otherwise.
3. Write a function that takes an array and a value as arguments, and returns a new array without any element that are equal to that value.

```js
var arr = ['cat', 'dog', 'mouse', 'cat']
var newArr = removeFromArray(arr, 'cat')
// newArr is ['dog', 'mouse']
```

4. Write a functi4on that takes an array of numbers **and** a number as input, and returns a new array where each element is incremented by the number.

```js
var arr = [2, 4, 6]
var addArr = addToAll(arr, 2)
// addArr is [4, 6, 8]
```

5. Write a function `sortString` that takes a string as input and returns the string sorted alphabetically.
**hint**: start by convert the string to an array.

```js
console.log(sortString('cba'))
// will print 'abc'
```
