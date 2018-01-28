# Authentication

### Sessions
Richie compared a session token to a wristband at a concert.

At a concert, an attendee will present their ticket and be given
a wristband. If security personnel see the wristband, they may
safely assume that the attendee at some point presented a ticket.

Sessions behave similarly. When a user is logs in to a service,
they're given a token that indicates that at some point in the
past, they successfully presented a username and password.

With session tokens and wristbands, site users and concert goers
do not need to constantly present their passwords and tickets.

### express-session
A commonly used session library for ExpressJS is simply called
[express-session](https://www.npmjs.com/package/express-session).

### Exercise: Fact Rememberer
Write an full stack web application with a single get route,
_/rememberer_.

_/rememberer_ will have a single input form with a text
input field called `thisuser` and a submit button.

_/rememberer_ will also have a post route to accept the form
submission and set a session cookie with the value of the form.

Every time a user visits the page, the back-end of the app
should log the name of that user.
