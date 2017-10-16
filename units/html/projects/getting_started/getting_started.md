# Project - Getting Started

Open a text-editor and copy-paste the following text into a new file:

```html
<!DOCTYPE HTML>

<html>

  <head>

    <title>A short history of Mark-up and the WWW: Part 1</title>

  </head>

  <body>

    A short history of Mark-up and the WWW


    In the beginning...

    The Internet and email have both been around for some time now. 
    The initial Internet was actually developed by the US military 
    as a means of communication that was impossible to break! It was 
    thought that if there were thousands of communication points 
    (rather than just a few transmitters) then it would be possible 
    to transmit a message even when many communication points had 
    been destroyed. No-one imagined that the Internet would become 
    a house-hold tool for many people throughout the world!


    The World-Wide-Web

    Until 1989, the Internet was primarily used by computer geeks 
    who knew all the required tools and commands. But everything 
    changed when Tim Berners-Lee of the CERN nuclear research facility 
    near Geneva, Switzerland, introduced Hypertext documents.

    Hypertext documents made it very simple to follow links to related 
    information, regardless of which country the information is stored 
    in - all that was required was a single click of the mouse! Yet 
    these links also had an implication for the way people would read 
    the information...

</body>

</html>
```

Now, save the file with the name `webhistory.html` to a folder on your computer. Navigate to the folder where you saved the file and double-click on your new file (this should display the file in your web browser). You may need to right-click and choose "open with" and then choose the name of your browser.
How does your new HTML file display in your web browser? What do you notice? That's right! Your web browser ignores all the new-lines and extra spaces in your document! We need to add mark-up to our document to help our web browser understand which bits are headings, which bits are paragraphs, which bits should be emphasised, etc.

Come back to your webhistory.html file in Notepad where we can edit your file. We're going to have a go at using some simple HTML tags to mark-up our HTML document – remember, we're adding meaning without changing the actual content (the words).

To identify a piece of text in your document as the most important heading (a level-1 heading), enclose it in tags like this:

```html
<h1>A short history of Mark-up and the WWW</h1>
```

As you can see, the text has been surrounded by two tags, an opening tag (without the slash) and a closing tag (with the slash). This markup will affect just the text inside the two tags and ignore the rest of the text.

Once you've saved your changes in Notepad, reload 'webhistory.html' in your browser (if you've already got it open in a browser, you can just click on the refresh button to re-load the page with your changes). Can you see the effect of your markup?

See if you can find some other headings in the text and mark those up as well! (You should use `<h2>...</h2>` as these headings will be sub-headings of the first one). You can also specify which bits of text are paragraphs using paragraph tags

```html
<p>...</p>
```

While you're at it, try the following tags:

```html
<em>...</em>
```

to add emphasis to some words (displayed as italics in your browser)

```html
<strong>...</strong>
```

to add weight to some words (displayed as bold in your browser).