
#### [Computed Property Values](https://codesandbox.io/s/9l7q1n459o)

As we've seen avoe, When we added a new `Select` component to our `render` function, we also needed to add a new `handle____Select` function to deal with a user's selection. But there is a shortcut that allows us to keep a single `handleSelect` function for all of our `select`s. We will For this to work We will need to assign a name to to each of our select components.

```jsx
render() {
    const { favColor, favAnimal } = this.state;

    return (
      <div>
        <p>
          Favorite color: {" "}
          <Select
            name='favColor'
            values={this.colors}
            selectedValue={favColor}
            handleSelect={this.hadnleSelect}
          />
        </p>
        <p>
          Favorite animal: {" "}
          <Select
            name='favAnimal'
            values={this.animals}
            selectedValue={favAnimal}
            handleSelect={this.handleSelect}
          />
        </p>
      </div>
    );
  }
}
```

Note that `name` is assigned to each component is just an attribute, not a `prop`, and it will be assigned to the rendered `html` element.