# Photo Sharing Site

This month, you'll be working independently to create a version of the web app [Instagram](https://www.instagram.com/?hl=en). Don't worry - we won't be cloning all of Insta's features. You don't have to make it mobile-friendly, nor do you have to implement Moments, DMs, or other features Instagram has added over the past few years. It also does NOT have to be an exact replica of Instagram--you can make it your own **or** it can be an exact clone. Up to you!

Regardless of your decision, you will implementing what's known in developer-parlance as **MVPs**, or Minimum Viable Product. For Instagram, that means you need to implement:

* User accounts, authentication, and following (e.g. a user follows many users, and has many followers).
* Images - connected to accounts and rendering in a centralized feed.
* Image 'likes'.

Let's talk through each of these core features.

## User Accounts

This will require authentication. Your users will have usernames and passwords, but this isn't the only thing connected to those accounts - these aren't the only columns in your `users` table. You should also keep track of:

* User emails.
* User descriptions (the little personal bios on the top of a user's page).
* User follows (in other words, the accounts the user is following).
* User followers (the accounts following the user).

Remember - this isn't like Facebook. A user can follow someone that **isn't following them back**. How will you manage this on the database side? This is not an insignificant task, and might require a little creative thinking (**Hint**: Rather than keeping track of follows in the `users` table, you might want a separate table called `follows`).

Of course, please fully implement proper user **registration and authentication**, including session management, hashing and salting passwords, etc.

## Images

First thing: **don't try to host your own images** at first. Grab direct links to Imgur or other image sites and use those image URLs as seed data. We recommend [reddit](https://www.reddit.com/r/EarthPorn/) for inspiration.

Images should be connected to accounts, and should also render in a main feed for a user based on the accounts that that user is following. They should be the same size and aspect ratio (**Hint**: CSS can do a lot).

As we are not yet hosting images, don't add a full-on "Upload Image" functionality - simply provide a field for a user to enter an image URL. You can save this for last if you have time.

## Likes

You can see that we aren't implementing comments on this project - wait until the Bonus section for that. These likes are only connected to **images**. Each image should have many likes, and clicking an image's heart icon should add a like to that image from the logged-in user's account.

## Styling

Either look at the Instagram web app on your own account for reference, or look at this image:

![interface](https://s.aolcdn.com/hss/storage/midas/a1b70f587a8d2cbe0add93f30f05e96a/203589385/instagramfeat.jpg)

Use the [Dimensions](https://chrome.google.com/webstore/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj?hl=en) Chrome extension to measure the height and width of different parts of the page, and proportion your interface accordingly. Here are a few other specifications:

* While the app does not have to be mobile-friendly, it does have to support **different laptop screen sizes and pixel densities**. That means that whenever possible you should avoid using fixed pixel-precise widths for elements on the page that appear to adjust when you change the size of your window. Make use of whatever you need to accomplish this - I recommend using **Flexbox** and using **percentages** instead of pixel-based sizing whenever possible.

* Your **color scheme** can be whatever you want - you don't have to use the classic blue-black-white of Insta. Get creative!

* **Icons**. [Fontawesome](https://fontawesome.com/) is a great resource for adding icons to your projects! You can also use small images.

## Schedule + Grading

We will be keeping track of your progress throughout this process. Generally, your project should be broken out into **three phases**:

* **Week 1**: Planning, creating the skeleton project, pushing to GitHub. (10 points)
* **Week 2**: Get the backend of the project functioning. All routes are working and pictures can be added/removed, liked, etc. (20 points)
* **Week 3**: Get the frontend of the project functioning. Users can interface with your app to add/remove pictures, like, etc. (20 points)
* **Week 4**: Styling, refactoring code, deploying, presenting. **Final completed project will be worth 50 points** (in addition to the points for each week), so the entire project will be worth 100 points.

## Other Notes

You will be working independently but everyone will be doing the same project, so you are all expected to be communicating with one another and helping each other out. Not everyone can meet in person because they are in different states, but for those of you in NYC, we **expect** you to be meeting in person and helping each other.

**I will not be the main source of information while you work!** You *must* help each other and try to figure things out ***on your own***. This will be most helpful for your learning and also getting you career ready.

## Bonuses

There are a few bonus features that you are welcome to implement, if you are curious and motivated (which you **should** be since you're trying to get that J-O-B)

### Image Hosting

Use [Cloudinary](https://cloudinary.com/) to host images, let users upload images directly to your Cloudinary-based image database, and get image URLs for your backend.

### Comments

Let users add comments to images.

### Captions, Tagging, and Search

Let users add captions to their images, hashtag them, and search for images that correspond to particular hashtags.

### Infinite Scroll

Only render a certain number of images on the homepage. When the user reaches the bottom of the page, get more from your database and render them underneath.
