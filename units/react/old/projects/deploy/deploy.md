# Project - Deploy Your Site

## Links

* [Netlify](https://www.netlify.com/)
* [Example Project](https://github.com/lizraeli/react-netlify-example)
* [Redirects - Netlify Docs](https://www.netlify.com/docs/redirects/)

## Instructions

In this project you will deploy a site built with react to [Netlify](https://www.netlify.com/). Choose any of the sites you have been working on, as long as it uses react-router.

## Setting Up A Github Repo

Netlify will use a provided github repo, so the first step is to create one for your react project. We assume that you have either created your project using [create-react-app](https://github.com/facebookincubator/create-react-app) or downloaded an existing project from [CodeSandbox](https://codesandbox.io/) (which also uses `create-react-app`).

Once you have created a new public repo on github, initialize a local repository by running:

```bash
git init
```

Before making your first commit, you may want to create or modify the `Readme.md` file in your root directory, to contain some information about your project. Once you have done that, run:

```bash
git add .
git commit -m "first commit"
git remote add origin [https://github.com/[github username]/[project name].git]
git push -u origin master
```

Refresh the page on github to see the changes.

## Setting Up Netlify

Once the above is done, go to [https://www.netlify.com/](https://www.netlify.com/) and sign up using github. Once you have signed up, on signing-in you will reach the url [https://app.netlify.com/](https://app.netlify.com/). Click on _New Site From Git_ in the top-right corner. You should now see the following:

![nelify 1](assets/netlify_1.png?raw=true)

Click on the first option to the left: `github`. You should see your github username and below it a list of all your github repos. Choose the one you have created in the previous steps. You should now see the following:

![nelify 2](assets/netlify_2.png?raw=true)

Make sure of the following:

* **Branch to Deploy** is `master`
* **Build Command** is `npm run build`
* **Publish Directory** is `build`

Click on the `Deploy Site` button in the bottom of the window. You should now see this:

![nelify 3](assets/netlify_3.png?raw=true)

You can see more information about the deploy by clicking on `Deploys` in the top menu.

![nelify menu](assets/netlify_menu.png?raw=true)

You will see there a list of all deploys (currently just one). If you click on it you will see a _Deploy Log_ which looks quite similar to the output in the console when running `npm install`. Once the site is done deploying, the last messages in the log should look like this:

```bash
10:07:32 PM: Site is live
10:07:44 PM: Finished processing build request in 1m49.328667434s
```

Scrolling back to the top, click on `< Deploys` to return to go back. Now that your site is live, you will see the url assigned by Netlify. Clicking on it will bring you to the live site.

## More Settings

To change the name (and corresponding url) of the site, click on _Settings_ in the top menu. On scrolling down, you should see the following:

![Netlify Site Name](assets/netlify_site_name.png?raw=true)

Click on _Change site name_. A new window will pop up which will allow you to set a new name, as long as that name is not already taken. The new url of your site will be: `[site name].netlify.com`

## Routes & Redirects

The site will now work - almost. The default route and navigation will load correctly, but attempting to _directly_ navigate to any other route will result in a `Page Not Found` message. This will happens when you enter in your browser any url that is not just your website name (or the name followed by `/`). Since we want react-router to handle the routes, we will need instruct netlify to serve the `index.html` page no matter what route the browser requests. We do this by adding a file called `_redirects` to the `public/` folder and putting the following line inside the file:

```text
/*    /index.html   200
```

### Automatic Redeploy

Netlify will automatically redeploy your website every time you push changes to your github repo. You can go to _Deploys_ in the navigation menu to see all previous deploys.

## Custom Domains

It is possible to set a custom domain to your site, in addition to the one given by netlify. This requires you to own a domain name. These are pretty cheap nowadays. For example, a `.com` domain might cost you about `$10` a year. A good source for finding and registering domain names is [namecheap](https://www.namecheap.com). If you register a domain, or have one already and wish to connect it to your Netlify account, ask your instructor for further information on how to do so.
