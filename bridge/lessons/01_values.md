# Values, Types, and Operators

## Objectives

Students will understand what values are in javascript. They will know some basic types of values (number, string, boolean, undefined) and how to check for types (`typeof`). They will understand what operators are and how to use them in conjunction with values to: peform arithmetics, modify string, compare boolean values. They will learn about expressions and order of evaluation.

## Vocabulary

* Types: number, string, boolean and undefined. Sources: [microsoft](https://docs.microsoft.com/en-us/scripting/javascript/data-types-javascript)
* Operators. Sources: [WhatIs](http://whatis.techtarget.com/definition/operator)
* Arithmetic operators, string concatenation, comparison operators,  the negation operator, the typeof operator.
* Logical Operators: [IBM](https://www.ibm.com/support/knowledgecenter/en/SSLVMB_20.0.0/com.ibm.spss.statistics.help/syn_transformation_expressions_and_or_logical_operators.htm)
* Literals: [wikipedia](https://en.wikipedia.org/wiki/Literal_%28computer_programming%29)
* Expressions: [wikipedia](https://en.wikipedia.org/wiki/Expression_(computer_science))
* Truth tables: [medium](https://medium.com/i-math/intro-to-truth-tables-boolean-algebra-73b331dd9b94)

## Resources

* Eloquent Javascript: [Chapter 1](http://eloquentjavascript.net/01_values.html)
* Microsoft: [JavaScript Fundamentals](https://docs.microsoft.com/en-us/scripting/javascript/javascript-fundamentals)
  * Data Types
  * Operators
  * Operator Presedence

## Lesson

In the computer's world, the only thing that exist is a sequence of bits: `1`s and `0`s. In javascript, these bits are separated  into things called values. Each value has a `type`, that determines its role in a program. The basic types of values in javascript are: number, string, boolean, object, function, and undefined. The easiest way to create a value is to <b>literally</b> write its name.

### <b> Numbers </b>

To create a number, we just type the value:

```js
> 42
42
```

### Operators

An **operator** is one of a predefined group of words and symbols. It takes one or two values, does some work behind the scenes, and returns the result of that work. For example, the `+` operator takes two numbers, add them, and the sum. In JavaScript, some operators - such as `+`, will take one value to their left and one value to their right. Some operators, such as `typeof` (discussed below) take only the value to their right.

### Arithmetic

We can do arithmetic operations using the  `+`, `-`, `*`, and `/` operators. We may also use parentheses `()` to affect the order of operations. Javascript will evaluate <b> expressions </b> and return a single number.

```js
> 2 + 2 * 4
10
```

Another useful operator is `modulo`, the remainer operator.

```js
> 24 % 12
0
```

### Special Numbers

Occasionaly we will come across special values that are of the number type, but do not look like numbers. Two of these are `Infinity` and `NaN` - <i> Not a Number</i>. For example, division of zero by zero has not defined value, and results in `NaN`:

```js
> 0 / 0
NaN
```

Division of a non-zero number by zero will result in `Infinity` (there is a mathematical basis for this but it's not crucial for our purpose)

```js
> 2 / 0
Infinity
```

## Strings

Strings are used to represent text. To create a string, write any text enclosed by either double quotes or single quotes (as long as the starting and ending ones match).

```js
> 'Hello there'
'Hello there'
```

The `+` Operator can be used to join two   strings together.

```js
> 'My name is Jo' + 'hn'
'My Name is John'
```

The is called string concatenation (verb: concatenate).

## The `typeof` Operator

The `typeof` operator returns a string with the type of the value that follows it.

```js
> typeof 2
'number'
> typeof 'John'
'string'
```

The earlier operators required two values - one to the left and one to the right.
In contrast, `typeof` only takes one value. The `-` (minus) operator can also take a single value, when placed to the left of a mathematical expression:

```js
> - (2 * 4)
-8
```

> note:  the left hand and right hand sides of an operator are called <b>operands</b>. We can say that the `-` and `typeof` operator take a single operand.

## <b>Booleans</b>

Boolean is a type that can only have one of two possible values: `true` or `false`. Boolean values are returned when using certain operators.

### Comparison Operators

Comparison operators inlcude `===`, `>`, `<`. These do not make a statement about values, but rather test the relationship between them. The test returns one of the two boolean values.

```js
> 2 === 2
true
> 2 === 3
false
> 2 > 1
true
```

String can also be compared:

```js
> 'Tom' === 'Jerry'
false
> 'cat' !== 'dog'
true
> 'cat' === 'cat'
true
```

### Creating and Comparing Booleans

A boolean type can be created by simply typing one of the values:

```js
> true
true
> false
false
```

Javascript knows what `true` and `false` means, but this is not the case for any arbitrary word. For example, attempting to evaluate `brroom`:

```js
> brroom
ReferenceError: brroom is not defined
```

We can also use `typeof` with boolean values:

```js
> typeof true
'boolean'
```

Boolean values can be compared, in the same way that we compare numbers and strings:

```js
> false === false
true
> true === false
false
> false !== true
true
```

### Logical Operators

The three logical operators are AND (`&&`) OR (`||`) and NOT (`!`). Logical operators can be applied to boolean values.

#### The AND  (&&) Operator

We use the `&&` operator to test if two statements are <b>both</b> true. For example,

> A: It will rain tomorrow.
> B: It did not rain today.

Each statment is either true or false, which corresponds to the boolean values in javascript. To check whether both are true, we would use `&&`.

```js
> 1 === 1 && 2 === 2
true
```

In the statement above, both right hand side and left hand side of the `&&` operator evaluate to `true`. So the above is equivalent to writing:

```js
> true && true
true
```

The `&&` operator will evaluate to `true` only if both left-hand and right-hand sides are true. Otherwise it will return `false`:

```js
> 1 === 1 && 2 === 3
false
```

We can write down all the possible results of an `&&` operator in a table. We use `A` and `B` to represent two expressions that are either trow or false. We write in each row a unique combination of the possible values of `A` and of `B`. Given those values, we write the result of providing `A` and `B` to the `&&` operator.  This is called a <b>truth-table</b>:

| A       | B             | A && B  |
|:-------:|:-------------:| -----:  |
| `false` | `false `      | `false` |
| `false` | `true `       | `false` |
| `true`  | `false`       | `false` |
| `true`  | `true`        | `true`  |

#### The OR  (||) Operator

We use the `||` operator to check if one of two statements is true:

```js
> 1 === 2 || 'cat' === 'cat'
true
> false || true
true
```

This will be `false` only if both left-hand side and right hand side are false:

```js
> 2 === 3 || 4 === 5
false
> false || false
false
```

> Exercise: create a truth-table for the `||` operator

#### The NOT (`!`) Operators

The `!` operator, like `typeof` takes a single boolean value to its right. It returns the opposite value - given `true`, it returns `false`; given `false`, it returns `true`

```js
> !true
false
> !(1 === 2)
true
```

### Expressions

All the code we've written in this lesson has consisted of <b>expressions</b>. An expression is anything that returns a value. `1 + 2` is an expression - it returns the value `3`. And `1 + 2 + 3 + 4` is also an expression, as well as `1 === 1`, which returns the boolean value `true`. The proccess of producing a value from an expression is called <b>evaluation</b>. This process can be simple, as in the case of `1 + 2` (simply add the two numbers). But in some cases the evaluation can take multiple steps. The computer can only perform operations on two values at a time. In the case of `1 + 2 + 3 + 4`, one and two will be added first, then their result will be added to `3`, etc. We will use the arrow  `->` as a symbol for <i>evaluates to</i>.

* `1 + 2 + 3 + 4`
* -> `3 + 3 + 4`
* -> `6 + 4`
* -> `10`

In the case of concatenating strings, a similar process will happen:

* `'af' + 'ter' + 'wards'`
* -> `'after' + 'wards'`
* -> `'afterwards'`

In the case of `1 === 2 || 3 === 3` the same process will happen. The computer will scan the expression and identify the OR operator. To evaluate this operator, we need to check if either the left hand or right hand side are the value `true`. We typically start by examining the left hand side. In this case, it is an expression, so we evaluate it. Since it returns the value `false`, we continue examine the right operand of the `||` operator. This is again an expression, which returns the value `true`. Now we can finally say that the entire expression, `1 === 2 || 3 === 3` returns `true`.

* `1 === 2 || 3 === 3`
* -> `false || 3 === 3`
* -> `false || true`
* -> `true`

The process outlined above is typical for evaluating expressions, both for javascript and for many other programming languages.
When evaluation expressions, logical operators come first, followed by the comparison operators, followed by the arithmetic operators.

## The Ternary Operator

The ternary operator works with three values. The value on the left of the question mark “picks” which of the other two values will come out. When it is true, the middle value is chosen, and when it is false, the value on the right comes out.

```js
> 1 === 1 ? 1 : 2
1
> 1 ==== 2 ? 1 : 2
2
```

## Type Conversion

Type conversions may occur in expressions that feature variables of different types. A common situation is when the `+` operator is used with a string and a number. In this case, the number will be converted to a string:

```js
> 'The number is ' + 42
'The number is 42'
```

This automatic conversion can lead to unexpected results:

```js
> '2' + 4
'24'
```

Since the number is converted to a string, the above was the same as writing `'2' + '4'` - like concatenating any two strings.

Another case of automatic conversion occurs when a non-boolean value appears instead of a boolean. In that case, most values will be converted to `true`. Exceptions include the number `0`, the empty string `''`, and a few others which we will discuss later. These evaluate to `false`. In those cases the `||` operator behaves in an unusual way: if the left-hand side evaluates to true, the original left-hand value will be returned (instead of `true`). If the left-hand side evaluates to ale, the right-hand value will be returned (regardless of whether it evaluates to `true` or to `false`).

```js
> false || 1
1
> '' || 0
0
> 'cat' || false
'cat'
> 0 || true
true
> false || ''
''
```

If the left-hand expression evaluates to false, the value in the right-hand side is returned:

```js
> 0 || 2
2
> '' || 'cat'
'cat'
```

### Operator Precedence

This higher precendence operator is evaluated first:

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

[microsoft](https://docs.microsoft.com/en-us/scripting/javascript/operator-subtractprecedence-javascript)

## <b> In class Exercises </b>

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
* `1 + 2 * 3 + 4`
* `800 / 80 / 8`
* `400 > 200`
* `1 !== 1`
* `true || false`
* `true && false`
* `true? true: false`
* `'%'`
* `'a' + 'b'`