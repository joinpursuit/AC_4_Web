# React Router 2 - Favorite Movies

## Level 1

Use what we've learned so in the _react 2_ lesson and follow the patterns used in the [My Pet's Website](https://codesandbox.io/s/8yq0ly3708).

Create a website of your favorite movies. The page must include a navbar with at least two links: `Home` and `Movies`. The movies page will show a list of all your favorite movies, with the name and a year for each one. When a movie is clicked, show a page with more information about it: include at least the director, some of the main actors, an image of the movie, and a link to an external website like IMDB.

**important**: all the information about each movie needs to be contained in a single `movies` array.

## Level 2: Genres

Add a genre propety for each movie, which a string. Add a navbar link to a `Genres` page. On that page, put a `select` element with all the genres from all the movies. When a genre get selected, display a list of `Link`s to all the movies of that genre.

## Level 3: Genre Lists

Change the genre propety to be an array of strings, so that each movie can have one or more genres. When a genre is selected on the `Genres` pages display a `Link` to all movies that have that genre as an element in their `genres` array.
