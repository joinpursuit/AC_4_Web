# Object Solutions

1. console.log(cat.species)
2. cat.color = "orange";
3. cat.hasOwnProperty('texture');
4. 
```js
for(let i = 0; i < films.length; i++) {
  console.log(films[i]['director'])
}

```
5. false 

#### Recipe
```js
let recipe = {
  name: "Mole",
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

for (let key in recipe) {
  console.log(key + ": " + recipe[key])
}
```

#### getProps 

```js
let recipe = {
  name: "Mole",
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log(Object.keys(recipe))
```

### getValues
```js
let recipe = {
  name: "Mole",
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log(Object.values(recipe))

```
#### getObjLength
```js
console.log(Object.keys(obj).length);
```

#### WatchList
```js
let films = [
 {
   title: 'Psycho',
   director: 'Alfred Hitchcock',
   released: 1960,
   watched: true
 }, {
   title: 'Citizen Kane',
   director: 'Orson Welles',
   released: 1941,
   watched: false
 }, {
   title: 'The Usual Suspects',
   director: 'Bryan Singer',
   released: 1995,
   watched: true
 }
]

for(let i = 0; i < films.length; i++) {
  if(films[i].watched) {
    console.log(`You already watched ${films[i].title} directed by ${films[i].director}`)
  } else {
        console.log(`You still need to watch ${films[i].title} by director ${films[i].director}`)
  }
}

```
