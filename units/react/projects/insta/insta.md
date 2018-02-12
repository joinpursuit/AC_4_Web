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

## Images

First thing: **don't try to host your own images** at first. Grab direct links to Imgur or other image sites and use those image URLs as seed data. We recommend [reddit](https://www.reddit.com/r/EarthPorn/) for inspiration.

Images should be connected to accounts, and should also render in a main feed for a user based on the accounts that that user is following. They should be the same size and aspect ratio (**Hint**: CSS can do a lot).

As we are not yet hosting images, don't add a full-on "Upload Image" functionality - simply provide a field for a user to enter an image URL.

## Likes

You can see that we aren't implementing comments on this project - wait until the Bonus section for that. These likes are only connected to images. Each image should have many likes, and clicking an image's heart icon should add a like to that image from the logged-in user's account.

## Styling

Either look at the Instagram web app on your own account for reference, or look at this image:

![interface](https://s.aolcdn.com/hss/storage/midas/a1b70f587a8d2cbe0add93f30f05e96a/203589385/instagramfeat.jpg)

Use the [Dimensions](https://chrome.google.com/webstore/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj?hl=en) Chrome extension to measure the height and width of different parts of the page, and proportion your interface accordingly. Here are a few other specifications:

* While the app does not have to be mobile-friendly, it does have to support different laptop screen sizes and pixel densities. That means that whenever possible you should avoid using fixed pixel-precise widths for elements on the page that appear to adjust when you change the size of your window. Make use of whatever you need to accomplish this - I recommend using Flexbox and using percentages instead of pixel-based sizing whenever possible.

* Your color scheme can be whatever you want - you don't have to use the classic blue-black-white of Insta. Get creative!

* Icons. If you are handy with Photoshop, this may not apply to you. If you aren't, there are many generators online that help you create serviceable icons. Here's an [example](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher).


