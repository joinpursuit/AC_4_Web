# Promises

## Goals
* Understand what a promise is and why it's beneficial. 
* Know how to use a promise. 
* Know how to chain promises. 
* Be able to handle errors with our promises. 

## Keywords
* Promises
* then 
* catch
* Pending
* Fulfilled
* Rejected
* Settled
* Callback Hell
* Chaining
* Success and Failure 

## Promises 

### The What? 
A *Promise* is an object representing the eventual completion or failure of an asynchronous operation. This is most often seen 
when we make API calls. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into
a function.

### The Why?
Using promises allows us to wait for certain code to finish execution prior to running the next bit of code. But why do we need that? 
Pretend that you had a website that loads data from an API call, and then process that data to display for the user. If we tried to 
process the data before actually getting the data back we'd end up with a blank website 
