# Playing With Colors Exercise

[Source: Introduction to CSS: Values and Units, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)

## Instructions

This exercise has no "right" answers. Alter the background color values of the three boxes below that are slightly overlaid on top of one another. Try keywords, hex, RGB/HSL/RGBA/HSLA, and the opacity property.

HTML:

```html
<div class="first">
</div>
<div class="second">
</div>
<div class="third">
</div>
```

CSS:

```css
.first {
  background-color: red;
  width: 400px;
  height: 200px;
  top: 0;
  left: 100px;
}

.second {
  background-color: blue;
  width: 200px;
  height: 200px;
  top: -150px;
  left: 125px;
}

.third {
  background-color: pink;
  width: 200px;
  height: 300px;
  top: -375px;
  left: 250px;
}

.first, .second, .third {
  position: relative;
}
```