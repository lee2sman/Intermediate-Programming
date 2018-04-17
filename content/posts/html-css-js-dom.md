+++
title = "HTML/CSS/JS and the DOM"
description = "Editors and IDEs"
date = "2018-01-09"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

![html page](/images/html.png)

## HTML/CSS/Javascript environment and the DOM

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
  * CSS has a specific format. Each part of your website from the largest to smallest detail is an *element*. With CSS, you specify what elements on your website you want to modify, then give rules for how to style those elements.
  * You specify placement on the page with CSS. Although one *could* specify exact placement (like specifying x,y position exactly), you must keep in mind the wide variety of screen sizes from phone to desktop browser size. Therefore, spend some time learning various approaches to positioning.
  * CSS [reference](http://cssreference.io/)
  * Inline Block [tutorial](http://dustwell.com/div-span-inline-block.html)
  * CSS position [tutorial](http://www.barelyfitz.com/screencast/html-training/css/positioning/)

### Javascript
  * For *Interaction*, events and more
  * Javascript was created by Brendan Eich in 1995 over a rapid time period for Netscape/Mozilla in order to compete with other web browsers (Internet Explorer) that were developing competing language for interactive content.
  * Javascript as a name was selected because the Java language was popular at the time. They are not really related.
  * Over time Javascript was adopted by all browsers though each browser/engine may have its own implementation. Standards for JavaScript are maintained by an international committee and codified as EcmaScript.
  * Javascript is a multiparadigm language, meaning there are many approaches to coding with it.
  * Javascript is *weakly* typed, meaning that the language does not have built in safety checks for memory and variable types
  * Javascript as a language has evolved signficantly over time. New language features have been implemented and adopted at varying times by different browsers. Ecmascript2015 aka ES6 brought significant changes to syntax for classes, types, functions and loops, among other changes.
  * Javascript includes support for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM

# Intro to HTML and CSS from P5JS

[Notes](https://github.com/processing/p5.js/wiki/Intro-to-HTML-and-CSS) on HTML and CSS coming from a background in P5JS/Processing

# Structure

## Working with the DOM

* DOM stands for The Document Object Model. Imagine your webpage is a tree structure where each element is a node on that tree representing a part of the document
* Web browsers use an internal DOM model in this tree structure with the topmost node named as "Document object". When an HTML page is rendered in browsers, the browser downloads the HTML into local memory and automatically parses it to display the page on screen.
* The DOM acts as an interface between your webpage and Javascript
* JavaScript can add, change, and remove all of the HTML elements and attributes in the page.
* JavaScript can change all of the CSS styles in the page
* JavaScript can react to all of the existing events in the page
* JavaScript can create new events within the page
* There are libraries that make it easier to work with the DOM. These include jQuery as well as P5DOM that works with the P5JS library
* [Intro](https://github.com/processing/p5.js/wiki/Intro-to-DOM-manipulation-and-events) to DOM manipulation and events with P5JS
* [Info](https://github.com/processing/p5.js/wiki/Beyond-the-canvas) on working with the Dom in P5JS with the P5Dom library
* [Event Listeners](https://github.com/processing/p5.js/wiki/Beyond-the-canvas#element-specific-listeners) with P5Dom
* Working with [DOM events in Javascript](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/) without libraries using Javascript event listeners
* [Video tutoral](https://javascriptforwp.com/intro-to-events/) on Events in the DOM with JavaScript

# Warm-up Project ideas
* Building a Text Editor in the browser - [starter code](https://gist.github.com/lee2sman/0c3fe0e05ed6f340102a6899ea04221e)
* You can build a basic text editor, styling your text (color, size, etc) with CSS

# Additional Javascript Resources
* [Javascript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) tutorial on W3Schools
* [Jquery](https://www.w3schools.com/jquery/) tutorial on W3Schools
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)
