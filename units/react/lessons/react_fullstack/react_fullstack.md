# Express, Postgres, and React

Today, we'll finally be building a full stack app, tip to toe. This is a little scary and a little difficult to get your head around at first - it is for everyone. Bear with us, brush up on your SQL and Express, and don't forget React - we'll be bringing all of that knowledge to bear today.

## Postgres issues?

The database integration part of these notes assumes you have an instance of Postgres running.

We know that some of you are still having trouble setting up Postgres on your computers. Don't worry about that for right now. Refer to our tutorial here to set up Sequelite on your machine. It's a little less powerful, but way easier and very popular, so don't feel like you're getting short-changed. We'll make sure everyone has a Postgres server running by hackathon.

With that out of the way, **let's get started**.

## File Organization

Take a look at the [example project](https://github.com/crymall/express_fullstack_example/tree/master/react-backend). This is an app that renders a list of users, lets you add new users, and lets you edit existing users. That's it. By and large, it should look fairly similar to the Express apps you were working with before break. However, you'll notice two additional folders: **'client'** and **'db'**.

Looking inside the client folder might be a bit troubling. You have a separate `package.json` file in there, which means that this sub-folder has its own npm installation! What??

Don't fret. Let's break it down. There are two main places you'll want to pay attention to:

  * The **main folder** ('react-backend') is for the Express/SQL side of your app. It includes database methods (inside 'db') and backend routing (inside `app.js`). Without the 'client' folder, this would be virtually **identical** to the other Express apps that you've already made. By itself, it serves JSON objects - it is, literally, an API connected to a database.
    - In the 'bin' folder, you'll notice that we changed the default port our app is running on from `3000` to `3100`. This is because we're running our app on **two distinct ports**. More on this later.
  * The **client folder** ('client'), which handles all elements of frontend presentation using React. It makes database calls to our backend API (from lifecycle methods and form submissions), updates our state to reflect those changes, and makes our data all pretty. Critically, our React files have **no idea** what data to render without the backend. Without the backend, they're just scaffolding, much like what you see before `componentDidMount` runs in your Codesandbox apps. However, they're set up to process and represent information in the specific way our backend grabs data from columns and serves it up as JSON.
    - By default, our React apps run on port `3000`. This app is no different. However, in the `package.json` file, you'll notice an unusual key, `proxy`, pointing to port `3100` - the port our Express app is running on. This sets the default URL that we query in our AJAX requests to `http://localhost:3100/`, so that instead of saying:


    ```js
    fetch('http://localhost:3100/users')
    ```

    We can just say:

    ```js
    fetch('/users')
    ```

    And grab the result of our database query from our Express route.

## Backend Routing vs. Frontend Routing

Proxy? Backend routing? Two ports? What do we mean?

This is basically **the same thing** as running two apps at once. One that returns JSON from its routes, and one that renders HTML/CSS to the user. These apps work together to render a website.

What does this mean? Well, it means we `npm start` twice to start this app up - once in the 'client' folder, and once in our main folder. If we query the port for our Express app (not React!), we get plain JSON - just like any other API. Take a look in Postman:

![screenshot](./assets/screen1.jpg)

This is what our *backend routing* gives us when we query the route '/users'. This is our frontend:

![screenshot](./assets/screen2.jpg)

Same data, different package. That's what our frontend routing does for us.

At this point, you might be asking: How? How is data passed around, and how is it finally rendered for our user?
