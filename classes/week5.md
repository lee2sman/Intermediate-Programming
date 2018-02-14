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



Runtime environment, library
Installing node, working with a server, working locally
NPM package manager

# Resources

* A very short [introduction](https://glitch.com/edit/#!/first-app-node?path=README.md:1:0) to Node
* [Intro to Node and p5](https://creative-coding.decontextualize.com/node/) from Allison Parrish
