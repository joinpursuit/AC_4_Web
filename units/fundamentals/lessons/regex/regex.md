# Regular Expression

## Objectives

Learn how to use regular expression to search, extract and replace in strings, efficiently.

## Helpful Links

- [RegexONE](https://regexone.com/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Vocabulary

* regex, regexp, regular expression
* characters
* match
* search
* flags
* replace
* translate?

## Lesson

### Matching

#### new RegExp and RegExp.exec

The purpose of regular expressions is to extract information for strings.
Strings are a sequence of characters (this includes emojis too❗)

The regular expression is a pattern that is matched against the string.
The pattern provides a way to describe complex sequences, but in its
simplest form is just a few characters that need to match exactly.

```javascript
var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

var pattern = /may/;

pattern.exec(text);
// -> [ 'what', index: 31, input: ... ]
```

Return value is an array with the match. It has `index` and `input` properties. `index` is the location os the match (staring from 0). and `input` is the original text.

```javascript
var text = 'The text does not have exwhyzee';

var pattern = new RegExp('xyz');

pattern.exec(text);
// -> null
```

It returns `null` if there is not match.


#### String.match

```javascript
var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

var pattern = /may/;

text.match(pattern);
// -> [ 'what', index: 31, input: ... ]
```

Above code behaves identical to writing it as `pattern.exec(text)`


#### Dots, question mark and escaping

Regular expressions would be anemic without powerful expressions, the most commonly used one is the dot `.`.

```javascript
/h..e/.exec('The text does not have exwhyzee');
// -> [ 'have', index: 18, input: ... ]
```

A dot stands for any single character. For exactly one of them.

If we do not if there is a character or not, we can _modify_ a character match with a question mark:

```javascript
/not/.test('The text does not have exwhyzee'); // true
/nt/.test('The text doesnt have exwhyzee'); // true

/not/.test('The text doesnt have exwhyzee'); // false
/nt/.test('The text does not have exwhyzee'); // false

// But one pattern to rule them all:
var pattern = /no?t/

pattern.test('The text doesnt have exwhyzee'); // true
pattern.test('The text does not have exwhyzee'); //true
```

Question mark stands for __1 match or 0 matches__.

Sometimes we need to search for the dot or question mark. In order to do that we need to escape it, otherwise it will have the special meaning:

```javascript
var text = 'We have 3 sentences here. Each one ends with a full stop. Which is a dot.';

var pattern = /\./;

/\./.exec(text);
// -> [ '.', index: 24, input: ... ]
```

#### Ranges, exclusion and multiplicity

Occasionally the dot character is too powerful as it matches any characters, in this case we can use the ranges. A range expression is in brackets, example `[aeiou]`. This will match any **one character** of the English vowels:

```javascript
/[aeiou]/.exec('The text does not have exwhyzee');
// -> [ 'e', index: 2, input: ... ]

// Try to just looks for an o or a u:

/[ou]/.exec('The text does not have exwhyzee');
// -> [ 'o', index: 10, input: ... ]
```

In case we want to include all letters (but not the digits, emojis, etc.), we could write: `[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]`, but that seems to be unwieldily, so we have a neat shortcut: `[a-zA-Z]`. Some trick can be used to find the digits:

```javascript
/[0-9]/.exec('The text does has a few numbers. 1 exactly.');
// -> [ '1', index: 33, input: ... ]
```

What if we want to include the dash character? We need to put that at the first spot right after the opening brackets. Also notice the lack of need to escape the dot charter when it is inside the range expression:

```javascript
var punctuation = /[-,.;:]/;

punctuation.exec('The text does has a few numbers. 1 exactly.');
// -> [ '.', index: 31, input: ... ]
```

When we need a character match that is NOT one of the listed one, we can use the exclusion range expression: `[^`...`]`:

```javascript
var notLetter = /[^a-zA-Z]/;

notLetter.exec('The text does has a few numbers. 1 exactly.');
// -> [ ' ', index: 3, input: ... ]
```

We learned about the question mark modifier which means _0 or 1 matches_. There are a few more of these:

* `*` -- 0 or more matches.
* `+` -- 1 or more matches.
* `{`_n_`}` -- exactly _n_ matches.
* `{`_n_`, }` -- _n_ or more matches.
* `{`_n_`, `_m_`}` -- exactly _n_ to _m_ matches.

Notice how the question mark, the plus sign and the star are just shortcuts and could be written as:

* `?` -- `{0, 1}`
* `*` -- `{0, }`
* `+` -- `{1, }`


This trick comes super handy:

```javascript
var aWord = /[a-zA-Z]+/;

aWord.exec('The text does has a few numbers. 1 exactly.');
// -> [ 'The', index: 0, input: ... ]
```

There are other shortcuts we can use, saving us lazy programmers from typing too much:

* `\d` -- stands for a digit `[0-9]`
* `\d` -- stands for *not* a digit
* `\s` -- stands for a space (and space-like) character `[ \t\r\n\f]`
* `\S` -- stands for *not* a space
* `\w` -- stands for a word character: `[A-Za-z0-9_]`

### Match on start and end, boundaries

* `^` -- matches on start of the string
* `$` -- matches at the end of the string
* `\b` -- matches at the boundaries of the word

Note that these all share a common trait: as opposed to every other one we learned before these do NOT match on a character, but on boundaries of characters.


### .test, .search, .replace, .split

Occasionally we just need to know if there is a match and we are not interested in the match or the location of it. We can use `RegExp.test(text)` in this case:

```javascript
var aDefiniteArticle = /[tT]he/;

aDefiniteArticle.test('The text does has a few numbers. 1 exactly.');
// -> true

aDefiniteArticle.test('Any text can have numbers.');
// -> false
```

`String.search(pattern)` returns only the location of the match, instead of the usual array.

```javascript
var aDefiniteArticle = /[tT]he/;

'The text does has a few numbers. 1 exactly.'.search(aDefiniteArticle);
// -> 0
```

`String.replace(pattern, newText)` replaces the match with the text supplied in the second argument and returns the new string.

```javascript
var aDefiniteArticle = /[tT]he/;

'The text does has a few numbers. 1 exactly.'.replace(aDefiniteArticle, 'A');
// -> 'A text does has a few numbers. 1 exactly.'
```

`String.split(pattern)` is our old friend but it does work great with patterns:

```javascript
var wordBoundary = /\b/;

'The text does has a few numbers. 1 exactly.'.split(wordBoundary);
// -> '[ 'The',
//   ' ',
//   'text',
//   ' ',
//   'does',
//   ' ',
//   'has',
//   ' ',
//   'a',
//   ' ',
//   'few',
//   ' ',
//   'numbers',
//   '. ',
//   '1',
//   ' ',
//   'exactly',
//   '.' ]
```

Notice how it preserves the whitespace between the words.

### Global, multiline, match-all, ignore case flags

```javascript
var aDefiniteArticle = /\b[tT]he\b/g;

'Make the thing do the thing. There is no try, just the done.'.replace(aDefiniteArticle, 'a');
// -> 'Make a thing do a thing. There is no try, just a done.'
```

Notice the g after the closing `/` of the regular expression. This is an example of a regex flag. This stands for _global_, as in find all instances of the match.

```javascript
var aDefiniteArticle = /\b[tT]he\b/g;

'Make the thing do the thing. There is no try, just the done.'.match(aDefiniteArticle);
// -> [ 'the', 'the', 'the' ]
```

This gives us a handy trick for counting occurrences of a word:

```javascript
var aDefiniteArticle = /\b[tT]he\b/g;

'Make the thing do the thing. There is no try, just the done.'.match(aDefiniteArticle).length;
// -> 3
```

Other useful flags:

* `//i` -- ingore case, letters match bot lower and uppercases.
* `//m` -- multiline, treat beginning and end characters (`^` and `$`) as working over multiple lines (i.e., match the beginning or end of each line (delimited by `\n` or `\r`), not only the very beginning or end of the whole input string)
* `//u` -- unicode; treat pattern as a sequence of unicode code points


### All the matches and match groups

Regular expressions allow us to not just match text but also to extract information for further processing. This is done by defining groups of characters and capturing them using the special parentheses ( and ) metacharacters. Any subpattern inside a pair of parentheses will be captured as a group. In practice, this can be used to extract information like phone numbers or emails from all sorts of data.

Imagine for example that you had a command line tool to list all the image files you have in the cloud. You could then use a pattern such as `^(IMG\d+\.png)$` to capture and extract the full filename, but if you only wanted to capture the filename without the extension, you could use the pattern `^(IMG\d+)\.png$` which only captures the part before the period.

```javascript
var ipAddress = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;

'10.1.14.41'.match(ipAddress);
// -> [ '10.1.14.41' ]

var ipAddressParts = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/;

var groups = '10.1.14.41'.match(ipAddressParts);
// -> [ '10.1.14.41',
//   '10',
//   '1',
//   '14',
//   '41',
//   index: 0,
//   input: '10.1.14.41' ]

groups[0]; // the whole match
groups[1]; // the first byte
// ...

```



#### Nested matches

When you are working with complex data, you can easily find yourself having to extract multiple layers of information, which can result in nested groups. Generally, the results of the captured groups are in the order in which they are defined (in order by open parenthesis).

Take the example from the previous lesson, of capturing the filenames of all the image files you have in a list. If each of these image files had a sequential picture number in the filename, you could extract both the filename and the picture number using the same pattern by writing an expression like `^(IMG(\d+))\.png$` (using a nested parenthesis to capture the digits).

The nested groups are read from left to right in the pattern, with the first capture group being the contents of the first parentheses group, etc.

For the following strings, write an expression that matches and captures both the full date, as well as the year of the date.



### The or `|` operator

### Boundaries

### Controlling greediness


## Exercises

1. Find the first three letter word in the text below:

  ```
  I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.
  ```

2. Find **ALL** the three letter words in the text below:

  ```
  I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.
  ```

3. Find the first capital letter in the text below:

  ```
  txtng: the Gr8 Db8
  ```

4. Find the first number in the text below:

  ```
  There are 300,000,000 Americans, give or take.
  ```

5. Find the first capitalized word in the text below:

  ```
  txting: the Great Debate
  ```

6. Match on hexadecimal numbers:

  ```
  This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't.
  ```

7. Find the first word in the text:

    ```
    var text = 'This is an example.';
    ```

8. Find the last word in the text:

    ```
    var text = 'This is an example.';
    ```

    Note that does not include the full stop. Also should work on sentences without the full stop:

    ```
    var text = 'This is also an example';
    ```
