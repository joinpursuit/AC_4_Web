# Personal Sites

## Resources
* [Netlify](https://www.netlify.com/)
* [List of Static Site Generators](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/)
* [Moving a Static Site to S3](https://blog.hartleybrody.com/static-site-s3/)
* [Hosting a Static Site on Firebase](https://firebase.google.com/docs/hosting/deploying)
* [CSS Libraries](https://www.webdesigndegreecenter.org/ten-best-css-libraries-developers-designers/)
* [Google Domains](https://domains.google/#/)

So, personal sites are cool. But how do we make them? What's the best way? Here's an overview of a few strategies, alongside a few interesting tools to help you build a great looking site.

## Strategy 1: React and Netlify

Remember [this one](https://github.com/C4Q/AC_4_Web/blob/master/units/react/projects/deploy/deploy.md)? Netlify and React are still great choices for hosting a static site. All you have to do is nail the CSS, and this strategy will turn out great.

**Advantages**
* Easy: It's what we've been using.
* Fast: React loads everything in advance, so switching between pages is a breeze.

**Disadvantages**
* Opportunity: If you want to learn about other ways to deploy content on the Internet, this won't do.

## Strategy 2: HTML/CSS and S3/Firebase

Who needs JavaScript, anyways? [I sure didn't.](https://reedgaines.com/index.html). Using Firebase or S3 might be a little more involved, but it gives you the opportunity to explore how these platforms work. That's some resume-building stuff, guys.

The step-by-step instructions found above both work well.

**Advantages**
* Why use what you don't need? HTML/CSS is minimalist.
* Get experience using cutting-edge cloud storage platforms.

**Disadvantages**
* Not a single-page app: Each page has to load individually.
* Slightly more difficult than React/Netlify, if only because we aren't as familiar with this stuff.

## You've Got Options

Regardless of what strategy you employ, there are many interesting decisions you can make when you're building a personal website. You can use a CSS library, such as Bootstrap or Semantic, you can use a [template](https://www.w3schools.com/css/css_rwd_templates.asp) found in so many different places (do some research!), or you can take this opportunity to build your HTML/CSS skills by building your site from scratch.

There really isn't a right or wrong way to build a personal site. If it looks good and doesn't display errors in the console, you should be good.

## Domain Stuff

I recommend Google Domains for buying and managing domains you own. It's an easy, slick interface, and the prices are competitive.

Setting a domain name for a personal website depends on the way you deployed it. For example, if I hosted my site on S3, I would google "Google Domains Amazon S3 site" and find [this](https://medium.com/@limichelle21/connecting-google-domains-to-amazon-s3-d0d9da467650). The number one thing about this is to play around - don't get stuck, if something doesn't work, ask us or try something else!
