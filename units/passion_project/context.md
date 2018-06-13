# Context

## Resources
* [App for this lecture](https://github.com/crymall/Sourcey)
* [React's new Context API](https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b)
* [Video](https://www.youtube.com/watch?v=XLJN4JfniH4&t=2s)

## Introduction

Let's talk about Context. Context, previously an experimental feature, is now standard with the newest version of React. It solves the same problem as Redux, only better. Let's remind ourselves what that problem is - I heard it called **prop drilling** somewhere recently, and I think that describes it perfectly.

## Prop Drilling and Confusion

Alright. So. State vs. props. In a regular React app, you might be holding several parts of state across several different components. This is OK until components actually have to communicate information consistently to the user. Then it gets hard.

For example, I'm running a fruit stand app. I have 10 pineapples left. My `FruitStand` component has a part of state called `pineappleInventory`, which has the value 10. My `FruitItem` child component, which holds information about the fruit and renders if the user clicks on a fruit's name, also holds a part of state, called `amount`, which is also 10.

What do I have to do if the user buys a fruit from the `FruitItem` component?

Well, the obvious answer here is to subtract 1 from the `amount` part of state in `FruitItem`. This would work, but now when I return to the `FruitStand` component, it still shows that I have 10 pineapples remaining. What gives?
