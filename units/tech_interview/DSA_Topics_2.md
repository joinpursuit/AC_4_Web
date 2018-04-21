# DSA Topics for Technical Interviewing: Part 2

* [Lecture Deck](https://docs.google.com/presentation/d/1k21iewQ8hZNkmnPNyMQFth4IJ-ox7Veha5Aj0v64CG4/edit?ts=5ada0de3#slide=id.g367c8a2290_0_0)

## Topic 4: Trees

Trees, like linked lists (more on that later), are a series of **nodes**. Think of nodes like indices in an array, or key-value pairs in an object. In JavaScript, nodes are usually implemented these days with ES6 classes. There is always a **root node**, and each node has zero or more **child nodes**.

Regular old trees don't follow any other rules, really. Nodes can have any number of children. **Binary trees** are a bit more limited. Each node can only have a maximum of two children. **Binary search trees** are even more limited. Child nodes must adhere to rules that we dictate in advance.

The classic example of this is a binary search tree with nodes containing integers. Each left child node must contain an integer less than it's parent, and each right child must contain a greater integer. Like so:

![Trees](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/2000px-Binary_search_tree.svg.png)

## Topic 5: Graphs

Now we're really blowing the door open. Trees are a type of **graph**, although not all graphs are trees. Graphs are like trees, in that they have nodes and *edges* (connections). However, they don't have most of the rules of trees. They don't have to have a parent node, and a node has no limit to the connections it can make - nodes can be connected however they want.

There are two main types of graph - **undirected** (think Facebook friendships, a two-way street) and **directed** (think Twitter follows, YouTube subscriptions, etc. - a one-way street).

Traversing graphs and trees (to, for example, search for something) can be sort of tricky, but there are two main ways to do it. You can do a **depth-first search**, which is where you traverse node-by-node in one direction until you reach your destination or until all nodes are checked. You can also do a **breadth-first search**, which is where you check each child/relationship a node has before moving on.

Each of these types of traversal have their own advantages and disadvantages. If you suspect your node is far down one of the first chains you'll check, frequently a depth-first search is good. If you're not sure, breadth-first search is pretty efficient.

## Topic 6: Linked Lists

Here we go from blowing the door open to shutting it right up! Linked lists are a series of nodes where "parent" nodes have only one "child." It is, for all intents and purposes, a chain. If you'd like, it's a un-ary tree.

There are two types of linked lists: **Singly-linked lists**, where the "parent" node contains a reference to its "child" (but not vice-versa), and **doubly-linked lists**, where there aren't "parents" or "children," really, as nodes contain references to both their preceding and succeeding nodes.

This means that, when searching a singly-linked list, you can only go in one direction (from the "head" to the "tail"), whereas in doubly-linked lists, you can traverse either way.
