# Complete the Reddit App

For this project, clone the example repository and make sure you can run it locally.

You'll notice that, while our app can render links pretty well, we have no way to:

* Add a new link, or,
* Add and view comments on links.

It's your job to add that functionality to the app. Make sure that comments are a **separate part of your routing** - we want to make sure that your state is shared, and that's not feasible if you're doing it all in your Links component. Therefore, your routing should look something like this:

* `/links` - All links.
* `/links/:id` - One link.
* `/links/new` - Add a link.
* `/comments/:link_id` - All comments for a specific link.
* `/comments/:link_id/new` - Add a new comment for a specific link.

Remember to go about this **one feature at a time**. That means, focus on creating a new link, then rendering comments for a link (*hint: make up some sample comments in your default state*), then (and only then!) adding a new comment.
