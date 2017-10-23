# Exercise: Web Fonts

[Source: Web Fonts, by Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)

## Instructions

Use the following files:

* [web-font-start.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.html)
* [web-font-start.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.css)

Make a copy of these files in a new directory on your computer now. In the `web-font-start.css` file, you'll find some minimal CSS to deal with the basic layout and typesetting of the example.

### Finding fonts

For this example, we'll use two web fonts, one for the headings, and one for the body text. To start with, we need to find the font files that contain the fonts. Fonts are created by font foundries, and are stored in different file formats. There are generally three types of sites where you can obtain fonts:

* A free font distributor: This is a site that makes free fonts available for download (there may still be some license conditions, such as crediting the font creator). Examples include [Font Squirrel](https://www.fontsquirrel.com/), [dafont](http://www.dafont.com/), and [Everything Fonts](https://everythingfonts.com/).
* A paid font distributor: This is a site that makes fonts available for a charge, such as [fonts.com](http://www.fonts.com/) or [myfonts.com](http://www.myfonts.com/). You can also buy fonts directly from font foundaries, for example [Linotype](https://www.linotype.com/), [Monotype](http://www.monotype.com), or [Exljbris](http://www.exljbris.com/).
* An online font service: This is a site that stores and serves the fonts for you, making the whole process easier. See the [Using an online font service](#Using_an_online_font_service) section for more details.

Let's find some fonts! Go to [Font Squirrel](https://www.fontsquirrel.com/) and choose two fonts — a nice interesting font for the headings (maybe a nice display or slab serif font), and slightly less flashy and more readable font for the paragraphs. When you find each font, press on the download button, and save the file inside the same directory as the HTML and CSS files you saved earlier. It doesn't matter whether they are TTF (True Type Fonts) or OTF (Open Type Fonts).

In each case, unzip the font package (Web fonts are usually distributed in ZIP files containing the font file(s) and licensing information.) You may find multiple font files in the package — some fonts are distributed as a family with different variants available, for example thin, medium, bold, italic, thin italic, etc. For this example, we just want you to concern yourself with a single font file for each choice.

<div class="note">

**Note**: Under the "Find fonts" section in the right hand column, you can click on the different tags and classifications to filter the displayed choices.

</div>

### Generating the required code

Now you'll need to generate the required code (and font formats). For each font, follow these steps:

1. Make sure you have satisfied any licensing requirement, if you are going to use this in a commercial and/or Web project.
2. Go to the Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. Upload your two font files using the _Upload Fonts_ button.
4. Check the checkbox labelled "Yes, the fonts I'm uploading are legally eligible for web embedding."
5. Click _Download your kit_.

After the generator has finished processing, you should get a ZIP file to download — save it in the same directory as your HTML and CSS.

### Implementing the code in your demo

At this point, unzip the webfont kit you just generated. Inside the unzipped directory you'll see three useful items:

* Multiple versions of each font: (for example `.ttf`, `.woff`, `.woff2`, etc.; the exact fonts provided will be updated over time as browser support requirements change.) As mentioned above, multiple fonts are needed for cross browser support — this is Fontsquirrel's way of making sure you've got everything you need.
* A demo HTML file for each font — load these in your browser to see what the font will look like in different usage contexts.
* A `stylesheet.css` file, which contains the generated @font-face code you'll need.

To implement these fonts in your demo, follow these steps:

1. Rename the unzipped directory to something easy and simple, like `fonts`.
2. Open up the `stylesheet.css` file, and copy both the `@font-face` blocks contained inside into your `web-font-start.css` file — you need to put them at the very top, before any of your CSS, as the fonts need to be imported before you can use them on your site.
3. Each of the `url()` functions points to a font file that we want to import into our CSS — we need to make sure the paths to the files are correct, so add `fonts/` to the start of each path (adjust as necessary.)
4. Now you can use these fonts in your font stacks, just like any web safe or default system font. For example:

    <pre class="brush: css">font-family: 'zantrokeregular', serif;</pre>

You should end up with a demo page with some nice fonts implemented on them. Because different fonts are created at different sizes, you may have to adjust the size, spacing, etc., to sort out the look and feel.

![](https://mdn.mozillademos.org/files/12984/web-font-example.png)