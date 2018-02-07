# Week 4

# Working with JSON, continued!

# Callbacks
* used in asynchronous programming
* when data is finally loaded, THEN call (run) another function

# Accessing JSON locally and via URLs


# JSONP to solve 

Sometimes when working with JSON APIs you can get the following error

'''
XMLHttpRequest cannot load http://external-domain/service. No ‘Access-Control-Allow-Origin’ header is present on the requested resource. Origin ‘http://my-domain’ is therefore not allowed access.
'''

* a web browser may only allow scripts on page A to access data on page B if these two pages have the same origin
* determined by url and port number
* It prevents scripts from reading data from your domain and sending it to their servers
* JSONP helps by pinging the server and returning JSON data wrapped in a function call with callback
* much more detailed info can be found [here](https://www.sitepoint.com/jsonp-examples/)

# API

* API = application programming interface
* an interface for different pieces of software to communicate together over networks
* created by orgs, programmers, companies to access their data
* there are open APIs and those requiring authorization
* start out by using APIs that have tutorials or sample code and consider trying out ones that don't require an API

Example 5
* using the [OpenWeatherMap](https://openweathermap.org/api) API
* Sign up and make a new account
* Get your private API key

**IMPORTANT**

Do not post your API key online anywhere publicly! This includes on GitHub.

When working with APIs, they often have a specific way of constructing a URL to access specific data.

Example

```website.org/?city=London``` 

Multiple query values

```website.org/?city=London&?date=today```

These are name-value pairs.

## How to access OpenWeatherMap

Construct the URL properly

```api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4```

* Note: replace the APPID with your own ID

You can put this URL in your browser to see this data.

* You may want to use the JSON Formatter Chrome extension to format this data and make it easier to read.
* Or use Code Beautify [JSON Viewer](https://codebeautify.org/jsonviewer)
