# Week 1

# Editors and IDEs

* A text editor is software to write and modify plain text files. They are used to write code. As opposed to word processing software they do not normally allow formatting.

* An IDE is an integrated development environment, software that provides a number of tools in combination with a text editor and usually a compiler. There are a number of free and open source IDEs available. For this course, you can use whatever text editor or IDE you would like. Some editors and IDEs have good standard defaults (*with batteries*) for particular languages or use cases.

* [Brackets](http://brackets.io) - A contemporary UI with good defaults and support for Javascript. Excellent for coding web projects. Not many options for other languages.

* [Sublime](https://www.sublimetext.com/) (SublimeText) - a great minimal and powerful text editor with a history of plugins that combine to make it a powerful editor. Sublime costs $80 to remove the *nagware* pop-up that reminds you to pay. The software is fully functional regardless.

* [Atom](https://atom.io/) - A large project that appears to emulate Sublime at first but is built on Javascript/electron. It is young but sophisticated, with a large number of themes and plugins. You can build it into a custom editor for your coding needs.

* [Vim](http://www.vim.org/) and [Neovim](https://neovim.io/) and their *rival* [Emacs](https://www.gnu.org/software/emacs/) - Vi/Vim/Neovim are *ubiquitous* minimalist text editors built on a concept of using keybindings in combination to build up powerful text editing capabilities. They can be customized extensively and made to work like an IDE with plugins. Extremely high learning curve. Emacs is a text editor and environment with mail, debugger, calendar and many more features. It is technically an editor for the Emacs lisp language with extensions to make it work as an individually customized text editor.

* [Codepen](https://codepen.io/) - an online-based web IDE, particularly built for HTML/CSS/Javascript

* [Glitch](https://glitch.com/) - The new kid on the block. Glitch has a friendly UI and allows you to code a website or many other languages and deploy them to the web. It combines a web editor with version control like GitHub.

# HTML/CSS/Javascript environment

### HTML

* HTML - Hypertext Markup Language
  * aka *The content*
  * Hypertext - directional *hyper* links. Words are associated with another file. By clicking on the link you jump to the other file.
  * Markup - language used to describe formatting and placement. Other markup languages include [Wikimarkup](https://en.wikipedia.org/wiki/Wiki#Editing)
  * Language - self-explanatory!
  * [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### CSS

* CSS - Cascading Style Sheets
  * aka *The Style*
  * Where HTML is said to be your *content*, your CSS describes its *style*. CSS is used to describe colors, placement, fonts, size of objects, and more.
  * CSS has a specific format. You specify what elements on your website you want to modify, then give rules for how to style those elements.
  * CSS [reference](http://cssreference.io/)

### Javascript
  * For *Interaction*
  * Javascript was created by Brendan Eich in 1995 over a rushed time period for Netscape/Mozilla in order to compete with other web browsers (Internet Explorer) that were developing competing language for interactive content.
  * Javascript as a name was selected because the Java language was popular at the time. They are not really related.
  * Over time Javascript was adopted by all browsers though each browser/engine may have its own implementation. Standards for JavaScript are maintained by an international committee and codified as EcmaScript.
  * Javascript is a multiparadigm language, meaning there are many approaches to coding with it.
  * Javascript is *weakly* typed, meaning that the language does not have built in safety checks for memory and variable types
  * Javascript as a language has evolved signficantly over time. New language features have been implemented and adopted at varying times by different browsers. Ecmascript2015 aka ES6 brought significant changes to syntax for classes, types, functions and loops, among other changes.
  * Javascript includes support for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM

# Intro to HTML and CSS from P5JS

[Notes](https://github.com/processing/p5.js/wiki/Intro-to-HTML-and-CSS) on HTML and CSS coming from a background in P5JS (but without P5JS)

# Structure

## Working with the DOM

* DOM - The Document Object Model - tree structure where each node is an object representing a part of the document
* Web browsers use an internal DOM model in this tree structure with the topmost node named as "Document object". When an HTML page is rendered in browsers, the browser downloads the HTML into local memory and automatically parses it to display the page on screen.
* The DOM acts as an interface between your webpage and Javascript
* JavaScript can add, change, and remove all of the HTML elements and attributes in the page.
* JavaScript can change all of the CSS styles in the page
* JavaScript can react to all of the existing events in the page
* JavaScript can create new events within the page
* There are libraries that make it easier to work with the DOM. We will cover JQuery, the most common library, as well as P5DOM that works with P5JS
* [Intro](https://github.com/processing/p5.js/wiki/Intro-to-DOM-manipulation-and-events) to DOM manipulation and events with P5JS
* [Info](https://github.com/processing/p5.js/wiki/Beyond-the-canvas) on working with the Dom in P5JS with the P5Dom library
* [Event Listeners](https://github.com/processing/p5.js/wiki/Beyond-the-canvas#element-specific-listeners) with P5Dom
* Working with [DOM events in Javascript](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/) without libraries using Javascript event listeners
* [Video tutoral](https://javascriptforwp.com/intro-to-events/) on Events in the DOM with JavaScript

# Homework
  * Review HTML, CSS
  * Watch [Intro to HTML, CSS and DOM with P5Dom](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX)
  * Read [Intro](https://github.com/processing/p5.js/wiki/Intro-to-DOM-manipulation-and-events) to DOM manipulation and events with P5JS

# CSS

# Warm-up
* Building a Text Editor in the browser - [starter code](https://gist.github.com/lee2sman/0c3fe0e05ed6f340102a6899ea04221e)

### CSS units and box model tutorial
* tutorial - [Inline Block](http://dustwell.com/div-span-inline-block.html)
* Do [this](http://www.barelyfitz.com/screencast/html-training/css/positioning/) CSS positioning tutorial

# Intro to DOM with Javascript
* Examples

# Intro to the DOM with Jquery  
* Examples

# Homework
