# Combinators

## Sources

- [MDN - Combinators and multiple selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

## Objectives

Students ​will​ ​learn​ ​the​ ​five​ ​CSS​ ​combinators​ ​and​ ​continue​ ​practicing​ ​front​ ​end​ ​coding​ ​and​ ​design​ ​with HTML​ ​and​ ​CSS.

## Lesson

Combinators​ ​are​ ​used​ ​to​ ​select​ ​elements​ ​in​ ​relation​ ​to​ ​other​ ​elements.​ ​They​ ​are​ ​especially
useful​ ​when​ ​you​ ​want​ ​to​ ​target​ ​elements​ ​in​ ​only​ ​one​ ​section​ ​of​ ​a​ ​page​ ​that​ ​have​ ​identical​ ​type
and​ ​class​ ​in​ ​other​ ​sections​ ​of​ ​the​ ​page.

There​ ​are​ ​five​ ​combinators​:

- `A,​ ​B`​ ​matching
- `A​ ​B​` ​descendant
- `A​ ​>​ ​B​` ​child
- `A​ ​+​ ​B​` ​adjacent​ ​sibling
- `A​ ​~​ ​B`​ ​general​ ​sibling

### ​`A,​ ​B`​ ​(Matching)

Put​ ​multiple​ ​selectors​ ​in​ ​one​ ​rule​ ​using​ ​a​ ​comma,​ ​the​ ​matching​ ​combinator.

```css
h1, h2, h3​ ​{
    background-color:​ ​goldenrod;
}
```

> Ex. Build​ ​a​ ​page​ ​about​ ​dragons​ ​with​ ​an​ ​h1​ ​element​ ​and​ ​a​ ​p​ ​element.​ ​Build​ ​a​ ​single​ ​rule​ ​to​ ​assign
identical​ ​padding​ ​and​ ​margins​ ​to​ ​the​ ​h1​ ​and​ ​p​ ​elements.
>
> Sample:
> ```css
> h1,​ ​p​ ​{​
>   padding:​ ___;​
>   ​margin:​ ___
> ​​}
> ```

### `A B` (Descendant)

Putting​ ​a​ ​space​ ​between​ ​selectors​ ​is​ ​called​ ​a​ ​descendant​ ​combinator,​ ​which​ ​selects​ ​all​
elements​ `​B`​ ​that​ ​are​ ​nested​ ​in​ ​an​ ​element​ `​A`.

```css
#content​ ​p​ ​{
  font-variant:​ ​small-caps;
}
```

### `​A​ ​>​ ​B`​ ​(Child)

Putting​ ​a​ ​*greater​ ​than*​ (`>`) ​sign​ ​between​ ​selectors​ ​is​ ​the​ *​child​ ​combinator*,​ ​which​ ​selects​ ​all​
element​s ​B​ ​that​ ​are​ ​direct​ ​children​ ​of​ ​an​ ​element​ ​A.

```css
#nav​ ​>​ ​li​ ​{
  list-style-type:​ ​none;
}
```

> Ex. ​ ​Nested​ ​Lists: Write​ ​a​ ​list​ ​of​ ​sportsball​ ​teams​ ​with​ ​the​ ​`id`​ ​teams​, ​and​ ​within​ ​each​ ​list​ ​item,​ ​a​ ​list​ ​of​ ​players.​ ​Color
each​ ​team​ ​name​ ​red​ ​and​ ​each​ ​player​ ​name​ ​blue​ ​with​ ​a​ ​descendant​ ​selector​ ​and​ ​a​ ​direct​ ​child selector.

### `​A​ ​+​ ​B`​ ​(Adjacent​ ​Sibling)

The​ *​plus*​ ​sign,​ ​or​ ​*adjacent​ ​sibling​ ​operator*,​ ​will​ ​match​ ​two​ children​ of​ ​the​ ​same​ ​parent.

```css
li​ ​+​ ​li​ ​{
    color:​ ​blue;
}
```

### `​A​ ​~​ ​B`​ ​(General​ ​Sibling)

```css
li​ ​~​ ​li​ ​{
  color:​ ​red;
}
```