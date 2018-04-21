# Interviewer A Questions

* Have you ever not met your goals? Why? What were the circumstances?

* Assume you have a class LinkedList, with a property LinkedList.head which has the class Node. Assuming that these nodes are not ordered, implement a function accepts a LinkedList instance as an argument and removes all nodes containing duplicate values.
  * *If they ask:* The list is singly-linked. The LinkedList implementation has all the standard methods, including remove.

**Solution**
```js
const deleteDups = (list) => {
  let tracker = {};
  let currentNode = list.head;

  while (currentNode) {
    if (tracker[currentNode.value]) {
      let toBeDeleted = currentNode;
      currentNode = currentNode.next;
      list.remove(toBeDeleted)
    } else {
      tracker[currentNode.value] = true;
      currentNode = currentNode.next;
    }
  }

  return list;
}
```

* Implement a function that accepts an integer `n` and a binary search tree's root node. This function should traverse the binary tree, find the leaf node that would be `n`'s parent, and replace the node's value with `n`. For example, given the integer 32 and the following tree:

![treez](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_tree.jpg)

32 would replace the value currently occupied by 31.
  * *If they ask:* The tree is a standard binary search tree, exclusively occupied by nodes containing integers. Assume that the integer inputted as an argument does not exist in any of the BST's existing nodes. The function does not have to return anything.

**Solution**
```js
function replaceLeaf(node, int) {
  let currentNode = node;

  while (currentNode) {
    if (int < node.value) {
      if (node.left) {
        currentNode = node.left;
      } else {
        currentNode.value = int;
        currentNode = null;
      }
    } else {
      if (node.right) {
        currentNode = node.right
      } else {
        currentNode.value = int;
        currentNode = null;
      }
    }
  }
}
```

* Explain the difference between an undirected and a directed graph. Provide real-world examples if possible. If you'd like, you may use the whiteboard to help illustrate the difference.

**Solution**
  * An undirected graph connects nodes to each other in both directions. Nodes contain associations to one another, and can be traversed in any direction. For example, Facebook friendships are undirected because they are mutual connections - a friend request must be submitted and approved for the connection to be made.
  * A directed graph connects nodes to each other in one direction. Nodes can only be traversed one-way. For example, Instagram follows represent a directed graph, in that there is a distinct follower and followee in any given connection.
