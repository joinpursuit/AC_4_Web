# Events 2

## Keywords

- bubbling
- event.stopPropagation()
- event.target
- document.createElement()
- Node.appendChild()
- ChildNode.remove()

## **External Sources**

- [MDN - Event Bubbling and Capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [MDN - Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
- [MDN - Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN - ChildNode.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

### **Context**

*Bubbling* is the name for the way an event moves up the DOM, triggering
every *listener* that is a parent of its *target*, all the way to the
top of the DOM. An event's `.target` property points to the element on which the event occured.

### **Example: Yet Another Pokemon Example**

With the files *exYAPE.html* and *exYAPE.js*, build a page with a list
of Pokemon. Using `document.addEventListener()`, the *click* event, and
`console.log()`, log `event.target` whenever a list item (`li`) is clicked.
Use Dev Tools to read the output of `console.log()`.

### **document.createElement()**

To build a *new* HTML page element, use the `document.createElement(tag)`
method. This creates a new *HTMLElement* of type `tag`. This is identical
to the type of element object returned by `.getElementById()` or
`.querySelector()`, and you may modify this element by the same properties
and methods.

You may add this element into the DOM with `Node.appendChild()`.

### **Node.appendChild()**

The `.appendChild(node)` method of the *Node* object (and so inherited by
*Element*) will add a new element into the DOM as a child of the calling
element. This is best demonstrated by example.

### **Example: YAPE Duplicator**

Duplicate the files *exYAPE.html* and *exYAPE.js* as *exYAPE-d.html* and
*exYAPE-d.js*. With the new files, every time a list item is clicked,
duplicate that list item with `document.createElement()` and add it to the bottom of the list with `.appendChild()` on the *ul* element.

### **ChildNode.remove()**

You may call the .remove() method on any Node to remove it from the DOM.

### **Other DOM Manipulation Methods**

We won't use these today, but the many other DOM manipulation methods
include:

- `.replaceChild()`
- `.removeChild()`
- `.insertBefore()`
- `.cloneNode()`
