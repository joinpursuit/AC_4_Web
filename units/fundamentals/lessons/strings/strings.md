# Strings I

## Objectives

## Vocabulary

* string
* sequence
* character
* index number
* methods
  * toUpperCase, toLowerCase, slice
* immutability

## Sources

* Eloquent Javascript: [Chapter 1, Under **Strings**](http://eloquentjavascript.net/01_values.html)
* Speaking JS: [Chapter 12](http://speakingjs.com/es5/ch12.html)

## Lesson

### Introduction

In the previos lesson on loops, we have been dealing with a lot of numbers. That can get quite boring sometimes. Strings can provide a refreshing change. We have seen string values already. Just type a string value with either single or double quotes.

<sup> A string value is also called a *string literal* </sup>

```js
var sentence = 'I am a string!'

console.log(sentence)
```

A string is really a list of character. A character is either a letter, number, punctuation mark, or white space. There are also a some special characters, two of whice are quotation marks and new lines. If we are using single quotation marks, and want these inside our string, we must use a backslash (`\`). Say we want a string with the value: `so he said to me, 'hello there'`. We will need quotation marks for the outside, and inside we will use backslah - followed by a quotation mark:

```js
var str = 'So he said to me, \' hello there \''
```

To make part of a string begin on a new line, use \'n.

> Ex make a string variable. Part of it must begin on a new line.

### String Index

Each characters in a string has its own **index number** - these start at **0** and increase by `1` for every subsequent character. We can access each single character in a string by using square brackets in which we write that character's index number.

```js
var word  = 'spring'
// let's print the `s`
console.log(word[0])
// let's print the `p`
console.log(word[1])
// let's pring the `g`
console.log(word[5])
```

To see how many characters we have in a string, we can use the string length **propery**. For now, it is sufficient to think of a property as a magic thing that is a part of a variable. We access a property using a dot (**.**) followed by the property name. All string variables have a property called **length** that holds the number of characters in that string.

```js
var myString = 'spring'
// The length of myString is 6
console.log(spring.length)
```

Here is an illustration of what a string looks like:

![string elements](assets/string_elements.jpg)

## Modifying Strings

As in number variables, we can modify string variables after declaring them. We can add characters to the end of a string by using the `+` operator. This is called concatenation. The sorthand `+=` works the same for strings as it does for numbers.

```js
var str = 'hello'
// let's concatenate something to str
str += ' there'
console.log(str)
```

We can use concatenation inside a loop to keep adding stuff  to a string. For example, let's say we want to print all the numbers between **1** and **5**, in the same line, seperated by commas. We start by creating an empty string using `''` or `""`. We need javascript to know our variable is a string, otherwise it wouldn't know what do make of the `+` or `+=` operator.

```js
var str = ''
var num = 5
for (var i = 1; i <= num; i++) {
  str += i + ', '
}

console.log(i)
```

Let's write a table like we did in the last lesson:

|i   | str                |
|:--:|:-----:             |
| 1  | '1, '              |
| 2  | '1, 2, '           |
| 3  | '1, 2, 3'          |
| 4  | '1, 2, 3, 4'       |
| 5  | '1, 2, 3, 4, 5, '  |

> Ex 1. How can we rewrite the code above so that we would not have a comma after the `5`? What can we check about the variable `i` to know that we are going to print the `5`?

### Last Character

How do we access the last character of a string? That depends on the length of that string.

```js
var str = 'dog'
console.log(str[2])

var str2 = 'animal'
console.log(str2[5])
```

Once we know the length, we simply substract `1` from it and get the last element. This is because strings start at index `0`. Since we have the string `length` property at hand, all we have to do is substract `1` from it, and use the result as the index we wish to access.

```js
var str = 'dog'
// substracting 1 from the length to get last character
console.log(str[str.length - 1])

var str2 = 'animal'
console.log(str2[str.length - 1])
```

### Number to String

When using the `+` operator between a number and a string, the number will automatically convert to a string.

```js
var str = 'My favorite number is: '
var num = 42
var sentence = str + num
console.log(sentence)
console.log(typeof(sentence))
```

### toUpperCase

In addition to the `length` property, strings also have some properties that are functions. To call them, we use the dot notation, and follow the function name with parentheses. One string method is `toUpperCase`: when called for for a particular string, it will return the string value, but with letters in uppercase.

```js
var name = 'jane'
var upperName = name.toUpperCase()
// upperName is 'JANE'
console.log(upperName)
```

Properties that are functions are called `methods`. We can apply the same methods to any character in the string (using its index number). This is because each character is also of type string - a string with the length of `1`.

```js
name = 'jane'
// print the first letter of name capitalized
console.log(name[0].toUpperCase())
```

---

# Strings II

### Immutability

If we want to capitalize the first letter of a string variable, we may naturaly want to do the following:

```js
var name = 'jane'
// This will not work as expected
name[0] = name[0].toUpperCase()
// name will still return 'jane'
console.log(name)
```

However, it will not work as expected. There will not be an error, but name will still hold the value `'jane'`. This is because strings in javascript canot be modified. Variable types that cannot be changed are called `immutable` (can't be mutated - more on this term in later lessons).

### Slice

It is still possible to do what we were trying above, but we will need a different way. Here is one way that is **not** recommended:

```js
var name = 'cat'
name = name[0].toUpperCase() + name[1] + name[2]
console.log(name)
```

What we did above was capitalizing the first letter, and then concatenating the second and the third. But this required knowing that the string length is exactly   `3`. If we change the length the code will be broken.

Another way is using the `slice` method: We provide as arguments a beginning index and (optional) ending index, and it will return a copy of the string between the two indices. The end index will not be part of the copy.

```js
var name = 'alice'
var copy = name.slice(1,3)
// copy holds the string 'li'
```

If we do not provide an ending index, we will get a copy from the starting index to the end of the string.

```js
var name = 'alice'
var copy = name.slice(1)
// copy holds the string 'lice'
```

We need to take the character at the `0` index, capitalize it, and concatenate the rest of the string to it.

```js
var name = 'alice'
var capitalized = name[0].toUpperCase() + name.concat().slice(1)
// capitalized has the string 'Alice'
```

## Exercises

1. Create a function called `capitalLast` that takes a single argument, a string, and returns a copy of the string with the last letter capitalized. For example:

```js
capitalLast('jimmy')
// => 'jimmY'
```

2. Create a function called `DrEvil`. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

```js
drEvil(10)
// => 10 dollars
drEvil(1000000)
// =>  1000000 dollars (pinky)
```

3. Create a function called `verbing`. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```

4. Create a function called `withoutLast` that takes a single argument, a string, and returns a copy of the string without the  last letter. For example:

```js
capitalLast('jimmy')
// => 'jimm'
```

5. Create a function called `getLast` that takes a single argument, a string, and returns the last letter of the string. For example:

```js
getLast('jimmy')
// => 'y'
```

### Bonus

6. Using 'withoutLast' and  `getLast`, create a function called `capitalLast` that takes a single argument, a string, and returns a copy of the string with the last letter capitalized. For example:

```js
capitalLast('jimmy')
// => 'jimmY'
```

7. Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

```js
mixUp('mix', 'pod')
// => 'pox mid'
mixUp('dog', 'dinner')
// => 'dig donner'
```
