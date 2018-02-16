# Week 5

# Intro to NodeJS
* Node is a version of Javascript that works outside the browser. It can run on the command line and on servers
* Node is used for writing backend applications without a browser, though it can be used to manage the server in addition to the software you write for a browser
* Download [Node](https://nodejs.org/en/)

# Differences from P5JS
* P5 has a preload, setup and draw loop
* Node has no draw loop. Statements happen in order and then exit.
* Node apps are run from the command line

# Running Node in the command line
* After installing, you can launch node by typing ```node```
* Enter javascript commands one at a time
* Exit with *Control-D*
* You can edit node files (javascript files run with node) in any text editor
* You can append the node shebang ```#!/usr/bin/env node``` in the first line of the file. Save the file with a ```.js``` suffix.
* You can run your program in the Terminal with ```node filename.js```

# NPM
* NPM is the Node Package Manager
* A package manager is a kind of *app store* for the command line, sometimes for a particular operating system, such as [Homebrew](http://brew.sh) for Mac, or for a specific programming language.
* NPM is the package manager for Node software
* Each node program you write that will also use NPM software needs a ```package.json``` file to list the NPM packages you want to include and use
* Go to the directory of your program and type ```npm init --yes```
* To install a package you'll use ```npm install <module_name> --save```
* This package will be installed and added in the ```package.json``` file for your program

# Advanced API wrangling - OAuth

* Some APIs require a more robust form of authentication known as OAuth
* To use OAuth you need to use Node to perform authentication

# Express

* Express is a node package
* It is a simple web framework for node that can host files and get user input
* ```npm install express -save```

To use it in your program

```
var express = require('express');

//you can now create an 'app'
//This app holds an instance of express and can use its functionality

var app = express();

var server = app.listen(4000); //listens on port 4000. Triggers callback.

app.use(express.static('public'));
```

This means http://localhost:4000 will host the project

Runtime environment, library
Installing node, working with a server, working locally
NPM package manager

# Resources

* A very short [introduction](https://glitch.com/edit/#!/first-app-node?path=README.md:1:0) to Node
* [Intro to Node and p5](https://creative-coding.decontextualize.com/node/) from Allison Parrish

# Vizualizing Data With APIs

* [Best in Show: The Ultimate Data Dog](https://informationisbeautiful.net/visualizations/best-in-show-whats-the-top-data-dog/)
* [Drake Weather](https://vimeo.com/84629790)
* [White Collar Crimes Risk Zones](https://whitecollar.thenewinquiry.com/#dr5rukp)
* [A Day in the life of Americans](http://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/)
* [Listen To Wikipedia](http://listen.hatnote.com/)

## Maps
* [Every Active Satellite Orbiting Earth](https://qz.com/296941/interactive-graphic-every-active-satellite-orbiting-earth/)
* [World Population Density](http://luminocity3d.org/WorldPopDen/#3/24.37/-23.73)
* [Instagram Food Capitals](https://cewe-photoworld.com/instagram-food-capitals/)
* [Day in the life of CitiBike](http://toddwschneider.com/posts/a-tale-of-twenty-two-million-citi-bikes-analyzing-the-nyc-bike-share-system/)

# Resources
* [Impressive Data Visualizations](https://www.maptive.com/17-impressive-data-visualization-examples-need-see/)
