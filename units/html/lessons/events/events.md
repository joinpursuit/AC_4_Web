# Events 1

## Keywords

* .addeventListener()
* DOMContentLoaded
* submit
* .preventDefault()
* keyup, keydown, keypress
* mousemove, click

## External Resources

* [MDN - DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
* [MDN - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [MDN - Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
* [MDN - Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
* [MDN - keypress](https://developer.mozilla.org/en-US/docs/Web/Events/keypress)
* [MDN - click](https://developer.mozilla.org/en-US/docs/Web/Events/click)

## Lesson

*Events *are the superior way to allow a user to interact with a web page. Elements may bind a handler function to an event property directly, or add an event handler function with the method `.addEventListener(event, callback)`.

An event *listener* is basically an infinite loop with a callback function, and when it "hears" an event, it triggers the callback function.

### **DOMContentLoaded**

*DOMContentLoaded* is the event fired every time the HTML document has been completely loaded and parsed. Much of our code will always be sandwiched in a callback to this function because we can't manipulate the DOM until the *document* object has been fully built.

### **.addEventListener(event, callback)**

Every Element has the method `.addEventListener()` to hear event triggers. When the event is fired, the element will execute the callback function.

The callback function automatically receives an argument that is typically given the parameter name *event*. This references the event object. The event objects contains many properties that are both general to all events and specific to the triggering event.

### click

The *clicked* event is fired when an element is clicked. We can

```html
<input type="button" value="Click me" id="btn">

<script>
  var btn = document.querySelector('#btn')
  btn.addEventListener('click', function(event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  });
</script>
```

### **submit**

The *submit* event is fired when a form is submitted.

```html
<form id="myForm">
    name: <input type="text"><br>
    <input type="submit" value="Submit">
</form>
<script>
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        alert('form submitted');
    })
</script>
```

### **.preventDefault()**

`.preventDefault()` is a method available to every event object to prevent the event from doing any action it would normally do. It is often paired with a *submit* event to prevent the form submission from reloading the page.

### Example: .preventDefault() on Submit

Build a page with a form element that contains a text input field and a submit button. Use `.addEventListener('submit' …)`, and then `.preventDefault()` with the event, to prevent the page from refreshing when the user submits the form.

### keypress, mousemove

### Example: Mouse Coordinate Tracker

Build a blank page containing a single div with id="coords". Using `document.addEventListener('mousemove', …)`, update the text of the div with the x and y coordinates of the mouse cursor.

You will need to nest your code in a callback to a `DOMContentLoaded` event listener.