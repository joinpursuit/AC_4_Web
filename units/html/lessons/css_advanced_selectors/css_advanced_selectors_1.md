# CSS:Advanced Selectors I

## Instructions

Advanced​ ​selectors​ ​target​ ​elements​ ​that​ ​are​ ​not​ ​easily​ ​specified​ ​by​ ​type,​ ​id,​ ​and​ ​class.

### Universal​ ​Selectors

The​ ​universal​ ​selector​,​ `​*`,​ ​matches​ ​elements​ ​of​ ​any​ ​type.​ ​It​ ​matches​ ​everything.

```css
*​ ​{
    margin:​ ​0;
    padding:​ ​0;
}
```

### Attribute​ ​Selectors

You​ ​can​ ​also​ ​select​ ​elements​ ​based​ ​on​ ​a​ ​given​ ​attribute​ ​with​ ​an​ attribute​ ​selector​.​ ​There​ ​is​ ​the standard​  attribute​ ​selector​ ​as​ ​well​ ​as​ ​RegEx-style​ ​attribute​ ​selectors.

```css
a[title]​ ​{
color:​ ​purple;
}
```

#### Attribute​ ​Selector:​ ​=​ ​(exact)

Use​ `​=`​ ​to​ ​select​ ​every​ ​attribute​ ​exactly​ ​matching​ ​a​ ​value.

```css
a[href=”http://google.com”]​ ​{
color:​ ​purple;
}
```

#### Attribute​ ​Selector:​ ​^=​ ​(begins​ ​with)

Use​ `​^=`​ ​to​ ​select​ ​every​ ​attribute​ ​beginning​ ​with​ ​a​ ​value.

```css
a[href^=”http://”]​ ​{
    color:​ ​blue;
}
```

#### Attribute​ ​Selector:​ ​$=​ ​(ends​ ​with)

Use​ `​$=`​ ​to​ ​select​ ​every​ ​attribute​ ​ending​ ​with​ ​a​ ​value.

```css
a[href$=”.org”]​ ​{
    color:​ ​green;
}
```

#### Attribute​ ​Selector:​ ​*=​ ​(global)

Use​ `​*=`​ ​to​ ​select​ ​every​ ​attribute​ ​matching​ ​a​ ​value​ ​anywhere.

```css
a[href*=”static”]​ ​{
    color:​ ​blue;
}
```

#### Pseudo-Classes

A​ ​pseudo​ ​class​ ​selects​ ​an​ ​element​ ​only​ ​when​ ​it​ ​is​ ​in​ ​a​ ​specified​ ​state.

```css
a:hover​ ​{
    text-decoration:​ ​underline;
}
```

#### Pseudo-Elements

A​ ​pseudo-element​ ​styles​ ​only​ ​part​ ​of​ ​an​ ​element.

```css
p::first-line​ ​{
    text-transform:​ ​uppercase;
}
```

### Review

What​ ​elements​ ​will​ ​these​ ​snippets​ ​of​ ​code​ ​select?

```css
img[src^=http]​ ​{
    border:​ ​3px​ ​blue​ ​solid;
}
```

```css
a:visited​ ​{
    font-family:​ ​serif;
}
```

```css
p::first-letter​ {
    font-size:​ 3em;
}
```
