## Mad Libs

Today's project is a serious review of:

* React component structure
* React routing
* API calls and lifecycle methods

You will be grouped **into pairs** to accomplish this - it's a pretty big undertaking, so utilize your partner and do your best.

In short, you'll be making an auto-generated Mad Libs app. You'll create the story structure beforehand - it'll look something like this:

"Mary went to the ____ to get some ____. On the way, she encountered a big ____ and ____ to her ____."

Each blank should correspond to a part of speech. For example, the first blank in the above snippet should be a noun. There should be a button on the page, called "generate", that fills in each blank with a random word corresponding to the part of speech you've outlined. In true Mad Libs form, this should be pretty silly.

So, the above example might look something like this:

"Mary went to the table to get some rectangles. On the way, she encountered a big boat and screamed to her eggplant."

In order to fetch random words, you'll be using the [Wordnik API](http://developer.wordnik.com/docs.html#!/words/getRandomWord_get_4). We'll go over how to use this API in class together.

A few other requirements and things to consider:

* How can you use state and API calls to your advantage here?
* Once you've got one working, create a few different routes with different Mad Libs stories.
* Create a route that uses lifecycle methods to automatically fill in the blanks when the page loads.
* Finally, create a route where the user inputs their own words first (without rendering the story). Then, when they submit their words, the story should populate properly and display to the user. This is just classic Mad Libs.
