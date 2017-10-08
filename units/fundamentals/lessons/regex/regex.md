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

The purpose of regular expressions is to extract information for strings.
Strings are a sequence of characters (this includes emojis too❗)

The regular expression is a pattern that is matched against the string.
The pattern provides a way to describe complex sequences, but in its
simplest form is just a few characters that need to match exactly.

```javascript
var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t';

var pattern = /may/;

pattern.exec(text);
// -> [ 'what', index: 31, input: ... ]
```
