# HTML Forms

Forms​ ​are​ ​the​ ​original​ ​way​ ​for​ ​a​ ​browser​ ​user​ ​to​ ​communicate​ information​ ​to​ ​a​ ​server.​ ​We​ ​often see​ ​them​ ​used​ ​to​ ​collect​ ​user​ ​registration​ ​and​ ​password​ ​information.

## Syntax

```html
<form>
    <input>
    <input​ ​type=”submit”>
</form>
```

## `<form>`

Everything​ ​in​ ​a​ ​form​ ​is​ ​nested​ ​in​ ​a​ ​`<form>​` ​tag.​

## `<input>`

`<input>`​ ​creates​ ​an​ ​interactive​ ​widget​ ​for​ ​the​ ​user​ ​to​ ​enter​ data.​ ​The​ ​`type​` ​attribute​ ​specifies​ the type​ ​of​ ​widget.

- `type=”text”`
- `type=”submit”`
- `type=”radio”`
- `type=”email”`

## `<input​ ​type=”text”>`

Attribute​ `​type=”text”`​​ ​will​ ​create​ ​a​ ​simple​ ​text​ ​input​ ​box.​ ​A​ `placeholder`​ ​attribute​ ​in​ ​a​ ​text​ ​input will​ ​display​ the ​text​ in ​a​ ​field​ ​with​ ​no​ ​user​ ​input.

## `<input​ ​type=”submit”>`

Attribute​ ​`type=”submit”`​​ ​will​ build​ ​a​ ​button​ ​that​ ​allows​  form​ ​submission​ ​on​ ​click,​ ​or​ ​when​ ​the user​ ​presses​ ​Enter.

## Other​ ​Input​ ​Types

- `radio`​ ​for​ ​buttons
- `password`​ ​is​ ​a​ ​text​ ​field​ ​with​ ​*********
- `email`​ ​takes​ ​an​ ​email​ ​address

## Validation

Form ​inputs​ ​have​ ​built​ ​in​ validation​ ​attributes​ ​to​ ​ensure​ ​that​ ​the​ ​user​ ​submits​ correct data.​ ​They​ ​work​ ​with​ ​CSS​ ​pseudo-classes​ ​`:valid`​,​ `​:invalid​`,​ ​and​ `​:required`​.

### Validation:​ ​`required`

`required​` ​​will​ ​prevent​ ​the​ ​form​ ​submission​ ​if​ ​a​ ​field​ ​does​ ​not​ ​have​ ​user
input.

```html
<input​ ​type=”password”​ ​required>
```

### Validation:​ ​`pattern`

You​ ​can​ ​use​ ​the​ `​pattern`​ ​attribute​ ​to​ ​validate​ ​input​ ​against​ ​a​ ​regular​ ​expression.

```html
<input​ ​type=”number”​ ​placeholder=”​ ​phone​ ​number”​ ​pattern=”^\d\d\d”>
```