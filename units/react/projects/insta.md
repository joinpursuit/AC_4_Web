# Instagram Clone

This week, we'll be working in groups to create a clone of the web app [Instagram](https://www.instagram.com/?hl=en). Don't worry - we won't be cloning all of Insta's features. You don't have to make it mobile-friendly, nor do you have to implement Moments, DMs, or other features Instagram has added over the past few years.

What we'll be doing is implementing what's known in developer-parlance as **MVPs**, or Minimum Viable Product. For Instagram, that means we need to implement:

* User accounts, authentication, and following (e.g. a user follows many users, and has many followers).
* Images - connected to accounts and rendering in a centralized feed.
* Image 'likes'.

Let's talk through each of these core features.

## User Accounts

This will be both similar to, and different from, your user authentication learnings thus far. Your users will have usernames and passwords, but this isn't the only thing connected to those accounts - these aren't the only columns in your `users` table. You should also keep track of:

* User emails.
* User descriptions (the little personal bios on the top of a user's page).
* User follows (in other words, the accounts the user is following).
* User followers (the accounts following the user).

Remember - this isn't like Facebook. A user can follow someone that isn't following them back. How will you manage this on the database side? This is not an insignificant task, and might require a little creative thinking (**Hint**: Rather than keeping track of follows in the `users` table, you might want a separate table called `follows`).

Of course, please fully implement proper user registration and authentication, including session management, hashing and salting passwords, etc.
