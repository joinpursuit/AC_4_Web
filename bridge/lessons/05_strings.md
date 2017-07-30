# Strings

## Objectives

## Vocabulary

* string
* sequence
* character
* index number
* method

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

> Ex 1. How can we rewrite the code above so that we would not have a comma after the **5**? What can we check about the variable `i` to know that we are going to print the last number?