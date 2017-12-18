# AJAX Exercises

## Dogs by Breed

Using the [Dog API](https://dog.ceo/dog-api/), specifically the route for random dog images by breed (`/api/breed/{breed name}/images/random`), create a React component with a `select` input that allows the user to specify a breed.

**Thing to consider: How are you going to figure out all the breeds that the Dog API is capable of fetching?**

Once the user selects a breed, enable a `submit` button that, when clicked, gets a random dog image from that breed using Axios. Once a breed is selected, the user should be able to continue clicking `submit` for more random images.

### Bonus

Create a button, `random`, that selects a random breed. On re-rendering, this should:

* Update your state keeping track of the selected breed.
* Update the `select` input to reflect the random breed chosen.
* Get a random image from that breed using the Dog API.

## Saving Cats

Y'all like saving cats, right? I mean, look at them. They're so cute and aloof.

Anyways.

Take a look at the docs for the [Cat API](http://thecatapi.com/docs.html). You'll notice that this is the first app you need an **API Key** for. API keys are there as a small security measure for APIs. If a user is making too many requests to an API and is wasting bandwidth, the API owner can simply reject their API key. Fill out the form up top to get one instantly and for free. Don't worry, we won't be doing anything uncouth.

This API is a bit more full-featured than the Dog API. You'll notice that there are many different routes you can query, with many different URL parameters.

For example, there's the ability to set, and get, favorite images. These favorites can be connected to the API key itself, for private use, or they can be connected to what the API calls a `sub_id`, which is a parameter provided so that you can have multiple users on your site storing favorites independently.

In order for us to have favorite images, images need an ID, themselves- and, lo, they do.

Do you see where I'm going here?

Create a React component with a `state` that keeps track of favorited images. Provide a button for a user to request a random image, a button for that user to favorite the current image, and a list below the image of the stored favorites in your state.

That list should be comprised of links. When the user clicks a link, it should trigger an API request for that specific image and re-render the component.

**Note: There is no need, currently, to store favorite images anywhere on the client side. The API stores favorites by itself. Play around with the API's responses (!!console_log!!) to figure out where, and how, those favorites are stored.**
