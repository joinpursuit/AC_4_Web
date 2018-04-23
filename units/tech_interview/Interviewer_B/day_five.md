# Interviewer B Questions

* Have you ever made a risky decision? Why? How did you handle it?

* Assume you have a class LinkedList, with a property LinkedList.head which has the class Node. Implement a function that accepts two arguments, a LinkedList instance and an integer `n`. This function should find the value of the `n`th node of the LinkedList. If you'd like, you may use helper functions.
  * *If they ask:* If the LinkedList's length is smaller than `n`, including in the case that the LinkedList is empty, the function should return `false`. Otherwise it should return the node's value. The list is singly-linked.

**Solution**

```js
function findNthNode(list, int) {
  if (list.head) {
    return cycleThroughNodes(head, int);
  } else {
    return false;
  }
}

function cycleThroughNodes(node, int) {
  if (node === null) {
    return false;
  } else if (int === 1) {
    return node.value;
  }

  return cycleThroughNodes(node.next, int - 1);
}
```

* Implement a function that accepts a binary tree's root node and checks whether it is a binary search tree. You may use variables outside of the function. You may use helper functions.
  * *If they ask:* Assume the tree is full of integers and follows the standard binary search tree schema (larger on the right, smaller on the left). Assume the tree has no duplicate values.

**Solution**
```js
let counterArr = [];

function pushToArr(node) {
  if (node) {
    pushToArr(node.left);
    counterArr.push(node);
    pushToArr(node.right);
  }
}

function isBST(node) {
  pushToArr(node);
  let sorted = counterArr.sort();
  let index = 0;
  let answer = true;

  while (index < counterArr.length) {
    if (counterArr[index] !== sorted[index]) {
      answer = false;
    }
    index += 1;
  }

  return answer;
}
```

* Diagram the database structure of a messaging platform. Include tables for users, messages, and threads. In a graph representation of this structure, are threads between users an undirected or directed connection? What about messages?

**Solution**
```js
USERS
  -id

THREADS
  -id
  -user_1_id
  -user_2_id

MESSAGES
  -id
  -thread_id
  -sender_id
  -message_text
```

  * Threads are undirected, in that both users are equal participants in the thread.
  * Messages are directed, in that there is a clear sender and receiver.
