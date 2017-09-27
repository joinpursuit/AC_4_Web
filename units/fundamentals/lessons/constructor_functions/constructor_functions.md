# Constructor Functions

## Links

* [A Dript Of Javascript - Constructors in JavaScript](http://adripofjavascript.com/blog/drips/constructors-in-javascript.html)
* [CSS-Tricks - Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/)
* [Eloquent Javascript - The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)

## Lesson

In this lesson we will explore constructors in detail, and see how JavaScript utilizes them to make objects.

A constructor i an ordinary function that is used with the `new` keyword to produce a specialized type of object.

```js
function Color(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
}

var red = new Color(255, 0, 0);
```

In the example av, red is a new "Color" object.

### Determining the Type of an Instance

An object created with new is said to be an instance of its constructor. To find out whether an object is an instance of a constructor, we use the `instanceof` operator:

```js
myCar instanceof Car    // true
myCar instanceof String  // false
```