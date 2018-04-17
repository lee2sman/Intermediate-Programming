+++
title = "Intro to NodeJS"
description = "Intro to NodeJS"
date = "2018-02-19"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

![NodeJS logo](/images/node.png)

## Intro to NodeJS
* NodeJS (aka Node) is a version of Javascript that works outside the browser. It can run on the command line and on servers.
* Node was originally used for writing backend applications without a browser, though it can be used to manage the server in addition to the software you write for a browser
* Download [Node](https://nodejs.org/en/) or on Mac ```brew install node```

## Differences from P5JS
* P5 has a preload, setup and draw loop
* Node has no draw loop. Statements happen in order and then exit.
* Node apps are run from the command line

## Running Node in the command line
* After installing, you can launch node by typing ```node```
* Enter javascript commands one at a time
* Exit with *Control-D* or *Control-C*
* You can edit node files (javascript files run with node) in any text editor/IDE
* You can run your program in the Terminal with ```node filename.js```

## NPM
* NPM is the Node Package Manager
* A package manager is a kind of *app store* for the command line, sometimes for a particular operating system, such as [Homebrew](http://brew.sh) for Mac, or for a specific programming language.
* NPM is the package manager for Node software
* Each node program you write that will also use NPM software needs a ```package.json``` file to list the NPM packages you want to include and use
* Go to the directory of your program and type ```npm init --yes``` and the wizard will walk you throw setting up your node packages for your project
* To install a package you'll use ```npm install <module_name> --save```
* This package will be installed and added in the ```package.json``` file for your program
* To install a node package globally so that all of your programs can use it ```npm install -g <module>```
