# CSS Media Queries

## Links

- [MDN - Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

## Objectives

A student will be able to:

- Make unique stylesheets for print and screen.
- Emulate mobile devices using Chrome Dev Tools.
- Build styles with media queries targeting various pixel widths.

## Lesson

### Why use media queries

Media queries are useful when you want to apply CSS styles based on a device's type (such as print vs. screen), specific characteristics (such as the width of the browser viewport), or environment (such as ambient light conditions).

## Targeting media types

[Media types](/en-US/docs/CSS/@media#Media_types) describe the general category of a given device. Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screenreaders. For example, this CSS targets printers:

```css
@media print {
    p {
        padding: 1em;
    }
}
```

> Ex. Build a web page with a white background. Use `@media print` to give it a purple background when the user attempts to print the page.

## Targeting media features

[Media features](/en-US/docs/CSS/@media#Media_features) describe the specific characteristics of an output device or environment. For instance, you can apply specific styles to screens of different sizes.

Many media features are _range features_, which means they can be prefixed with `min-` or `max-` to express "minimum condition" or "maximum condition" constraints. For example, this CSS will apply styles only if your browser's [viewport](/en-US/docs/Glossary/viewport) width is equal to or smaller than `450px`:

```css
@media (max-width: 450px) {
    body {
        font-family: monospace;
    }
 }
 ```

> Ex. make a web page where the font size is `18px` on large screens and `12px` on small screens.

## Creating complex media queries

Sometimes you may want to create a media query that depends on multiple conditions. This is where the _logical operators_ come in: `not`, `and`, and `only`.

The `and` operator can combine multiple media features into a single media query. The `not` operator, meanwhile, negates a media query. The `only` operator prevents older browsers from applying the styles.

### `and`

The `and` keyword combines a media feature with a media type _or_ other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least `100px` and at most `300px`:

```css

@media (min-width: 100px) and (max-width: 300px) {
    ...
}

```



