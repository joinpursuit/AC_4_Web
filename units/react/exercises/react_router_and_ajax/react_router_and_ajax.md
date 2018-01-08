# React Router And Ajax Exercises

Use [React Router - Dog Breeds](https://codesandbox.io/s/5ywlvw8n4l) as a starting point for the following exercises.

## Breed Search

Add a search bar that will filter the breeds as you type.

## Favorite Dogs

Add a `favorites` section that will be accessible through the navbar. Add a `add to favorites` button to any dog picture that will add the picture `url` to the favorites.

## (Un)Favorite Dogs

When a dog is in the `favorites`, show a `remove from favorites` button instead, that will remove the picture `url` from the favorites.

## **Advanced**: `DogWithBreedAndSub`

revise the `DogBreeds` component to fetch all breeds instead of only the master breed. Use the url: [https://dog.ceo/api/breeds/list/all](https://dog.ceo/api/breeds/list/all) to get and object that contain keys for the breeds and a corresponding array of zero or more sub-breeds. If a breed has sub-breeds, display the sub-breeds indented following the breed. For Example:

<pre>
Bulldog
  boston
  french
Bullterrier
  staffordshire
</pre>

Each sub-breed should be a link to `/dogs/breeds/:breed/:sub`, which will result in rendering a new component: `RandomDogWithBreedAndSub`. pass the `breed` and `sub` to this component. This component will be similar to `RandomDogWithBreed`, expect that it will cal a new method in `dogAPI` called `getRandomDogWithBreedAndSub` which will take two arguments: `breed` and `subBreed`, and will return an image of the breed and sub-breed using the following url: `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`.
