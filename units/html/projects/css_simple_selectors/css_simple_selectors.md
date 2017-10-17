# CSS: Simple Selectors Exercises

[Source: Simple selectors, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors#Active_learning_Handling_multiple_classes)

## Instructions

### Ex. 1

Change the single CSS rule so that it applies to three elements at the same time: `h1`, `p` and `ul`.

HTML:

```html
<h1>Hello World!</h1>

<p>This is a paragraph.</p>

<ul>
  <li>This is</li>
  <li>A list</li>
</ul>
```

CSS:

```css
p {
  color: red;
  text-shadow: 1px 1px 1px black;
  padding: 3px;
  text-align: center;
}
```

### Ex. 2

Change the `class` attributes on the `p` elements to apply multiple separate effects.  Apply the `base-box` class plus one of the three other classes on each element.

HTML:

```html
<p class="base-box warning important">My first paragraph.</p>

<p class="">My second paragraph.</p>

<p class="">My third paragraph</p>
```

CSS:

```css
.base-box {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
  padding: 3px 3px 3px 7px;
}

.important {
  font-weight: bold;
}

.editor-note {
  background-color: #9999ff;
  border-left: 6px solid #333399;
}

.warning {
  background-color: #ff9999;
  border-left: 6px solid #993333;
}
```

## Ex. 3

Give the winner, second and third place in the competition an appropriate gold, silver and bronze color by giving CSS rules 2–4 appropriate selectors that select the relevant elements based on their ID..

```html
<p id="first"><strong>Winner</strong>: Velma Victory</p>
<p id="second"><strong>2nd</strong>: Colin Contender</p>
<p id="third"><strong>3rd</strong>: Phoebe Player</p>
```

```css
p {
  text-transform: uppercase;
  padding: 5px;
}

 {
  background-color: goldenrod;
}

 {
  background-color: silver;
}

 {
  background-color: #CD7F32;
}
```
