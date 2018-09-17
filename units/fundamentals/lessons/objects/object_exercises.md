# Object Exercises

1. Log the cats species. 
```js 
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
2. Add a color quality to the cat from the previous question. 
3. How do you check if our cat object has the propery texture? 
4. Loop through the following object and log all of directors.
``` js
let films = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   released: 1960
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   released: 1941
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   released: 1995
 }
]

```
5. What will this code log? 
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

```

#### Watch List

1. Create an array of films, where each film has the following properties: `title`, `director`, and `watched` (a boolean indicating if you started watching it).
2. Create a loop that iterates over the array and logs the title and director for each film. (e.g. 'Wonder Woman, directed by Patty Jenkins').
3. Now change the output depending on whether the film was watched. If it was watched, log a string like 'You watched "Wonder Woman" directed by Patty Jenkins', and if not, log 'You still need to watch "Wonder Woman" by director Patty Jenkins.'

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `title`, `numberOfServings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients:
cinnamon
cumin
cocoa
```

* **Bonus**: change the loop to log ingredients on the same line:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

#### getProps 
Write a code block that takes an object variable and logs all the keys. 


#### getValues
Write a code block that takes an object variable and logs all the values. 

#### getObjLength 
Write a code block the logs the number of properties an object has. 

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it. 
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `
