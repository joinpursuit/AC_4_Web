# Events 1

## Goals
  * Know what an event is in JS and how to create one. 
  * Understand what it means to be asynchronous. 

## Keywords

* .addeventListener()
* DOMContentLoaded
* asynchronous
* submit
* .preventDefault()
* keyup, keydown, keypress
* mousemove, click


## Lesson

*Events* are the superior way to allow a user to interact with a web page.
Elements may bind a handler function to an event property directly, or add an event handler function with the method 
`.addEventListener(event, callback)` on to an element.

An event *listener* is basically a _non-blocking_ infinite loop with a callback function, and when it "hears" an event, 
it triggers the callback function. It sits and waits until it's called. 

This leads us to the concept of _asychronosity_. 

### Asynchronous Programming

We traditionally think of code as being executed from top to bottom such that lower code waits 
for code higher up to complete before being executed.

Many programming languages operate this way but this is not always useful. 
For example, when you log into Facebook there is a lot of information being loaded to the page. 
As the different information loads on the page, it gets displayed. 
This might mean your buttons and side bar appear but the timeline takes longer to load. 
Imagine if you had to wait for _everything_ to be loaded before it was displayed on the page--this would not 
be a good user experience because you could be staring at a blank screen waiting for it to load for a while! 

**Asynchronous programming** solves this problem by starting a process and then moving on to the next 
process and starting that, regardless of whether or not the first process has completed. 
This is good because, like with our Facebook example, you can get multiple parts of the page loading without having to 
wait for any one part to finish first. Another way to think of asynchronous programming would be ordering at the deli. 
You place your sandwich order with one employee, another starts making your sandwich,
and the next person in line can place their order. If I order a bacon egg and cheese on a toasted everything bagel (yum) 
but the person after me orders a plain roll (less yum), it is likely the person behind me in line will get their order _first_
because it takes much less time than my order. That's exactly what happens with asynchronous programming--functions are called
**in order** but do not need to wait for the previous function to finish to be executed.

For this reason, JavaScript -- a language designed for the web -- heavily relies on **asynchronous** processes.
From StackOverflow: "When you execute something *synchronously*, you wait for it to finish before moving on to another task.
When you execute something *asynchronously*, you can move on to another task before it finishes." When we used window.prompt() or alert() 
we were required to wait for our user to interact before the rest of our code could run. This type of code that blocks all other 
code until complete is called _blocking code_. 


### **DOMContentLoaded**

If you recall from our previous lessons, we included our `script` tag before the closing `</body>` tag but mentioned that it's
generally placed inside the `<head>`. We had put it before the closing `</body>` because we were referring to elements that had not yet
been parsed by the browser. Now we can move our `<script>` tag back to the header, but add an Event Listener to our JS file 
that waits until all our content has loaded. 

*DOMContentLoaded* is the event fired every time the HTML document has been completely loaded and parsed. 
Much of our code will always be sandwiched in a callback to this function because we can't manipulate the DOM until 
the *document* object has been fully built.

### **.addEventListener(event, callback)** 

Let's see this event in action! 



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

##  Resources

* [MDN - DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
* [MDN - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [MDN - Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
* [MDN - Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
* [MDN - keypress](https://developer.mozilla.org/en-US/docs/Web/Events/keypress)
* [MDN - click](https://developer.mozilla.org/en-US/docs/Web/Events/click)
