# Week 11

# Review Alexa apps
* Review student work
* critique

# Pre-requisites
* NodeJS
* NPM

# Express

## Writing your own webserver
Express is one of the most popular frameworks for Node. It acts as a web server, querying input, directing routing for mobile and web applications. You can use it to create your own API, aka your own interface between programs.

1. Start by creating a directory for your project ```mkdir project-title``` and enter that folder ```cd project-title```
2. Use ```npm init``` which will trigger a guide, asking you some questions, and generating a basic package.json file that will list all of your needed nodejs packages to be installed from npm and any other basic info relating to your project.
3. After this is completed, we need to tell npm to install the Express package. ```npm install express --save```.
4. Now we can create and open up our javascript file. Here I'll name it **main.js**.
5. Inside our main.js file we'll need to *require* Express so we can use it. ```const express = require('express');```.
6. Now that we've pulled in the Express framework, we can use it. We'll create an express *app* with ```const app = express();```
`` 
7. At this point, we have only added two lines to our file. We've created an app instance of Express and can now add functionality to that instance. Let's listen to connections on a specified port. ```const server = app.listen(3000);```
8. We can easily serve static files. If we have created a website (along with javascript file) we can place it in a sub-directory, eg ```sub/index.html``` and then visit this projec in our browser at ```localhost:3000/sub```. 

## Server reloading
* While you are developing you may make lots of changes to your code and it may be annoying to have to stop and restart your server constantly
* There are various npm packages to deal with this. One simple one is *nodemon* which will run a server and watch for changes to your code. If your code changes because you saved updated code in your text editor, nodemon will watch and re-serve the updated page.
* ```npm install nodemon -g``` to install this globally to use in all of your projects
* you can use this to replace the *node* command when running your programs, such as ```nodemon main.js```

## Routing

* Simplified explanation: A REST API stands for a REpresentational State Transfer. This allows you to create an API that accepts GET requests to serve information.
* Using Express, we can serve a *route*. By typing in a url such as *website.com/search/sriracha*, this route *search/sriracha* gets interpreted by our server through its API to search for our object and then send back particular data.
* When a user makes a request, we send back a response

Routing is particularly useful for executing specific code based on the user's specific route.

```
app.get('/this_route', specialFunction);
```

By adding this to our code, we trigger a function as a callback to run when a user hits our domain at *this_route*.

Our created function looks like:

```
function specialFunction(request, response) {
  response.send("Running our special function.");
}
```

We pass the parameters *request* and *response*, which references **http**'s *request-response protocol*. You can also pass html, either inside the send request, or more conveniently, as a passed variable containing your html.

```
function specialFunction(request, response) {
  let message = '<h1>Headline</h1><p>Some information on this topic.</p>';
  response.send(message);
}
```

# Resources
* HTTP Server With Express [tutorial](https://www.youtube.com/watch?v=6oiabY1xpBo&list=PLRqwX-V7Uu6Yyn-fBtGHfN0_xCtBwUkBp&index=2) by Dan Shiffman
* Creating Routes [tutorial](https://www.youtube.com/watch?v=e4qKBkwwkNg&index=3&list=PLRqwX-V7Uu6Yyn-fBtGHfN0_xCtBwUkBp)

## Tuesday Homework
* Review [Express](https://expressjs.com) framework
* Read about [routing](https://expressjs.com/en/guide/routing.html)
* Learn about ESLint through [video tutorial](https://www.youtube.com/watch?v=clzTwZgMlqE) by Dan Shiffman and/or through an article, [Why and How to use ESLint in your project](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7) and set up a global ESLint for your needs! 
* Another reference - [Setting up ESLint in Atom](https://hackernoon.com/what-is-eslint-how-do-i-set-it-up-on-atom-70f270f57296)

## Thursday Homework

* Watch [What Is Firebase?](https://www.youtube.com/watch?list=PLRqwX-V7Uu6agS82Le9lLCBbeaW8inATT&v=JrHT1iqSrAQ) and [Firebase: Saving Data](https://www.youtube.com/watch?v=7lEU1UEw3YI&index=2&list=PLRqwX-V7Uu6agS82Le9lLCBbeaW8inATT)
* Watch [Save P5JS Drawings to Firebase](https://www.youtube.com/watch?v=RUSvMxxm_Jo&list=PLRqwX-V7Uu6agS82Le9lLCBbeaW8inATT&index=4)
* Create your own Cheat Sheet for a language we have not covered in class
* [language selection sheet](languages.md)

## Cheat Sheet Components

### FOR LANGUAGES
	* Variables
		* Types
	* Functions
	* Classes
	* Operators
	* Lists, Arrays
	* Importing
	* Control, Program flow
		* loops, if/else, main, while, etc
	* Hello World
	* Special properties of the language

### Framework/Library/Tool cheat sheet/getting started

1. What does it do? Why use it?
2. How to install?
3. Getting Started/Quickstart
4. Main functions
5. Example code/programs
6. Additional notes


