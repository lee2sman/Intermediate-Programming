+++
title = "Working With Google Fonts"
description = "Editors and IDEs"
date = "2018-01-10"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

# Working with Google Fonts

1. Go to [http://fonts.google.com](http://fonts.google.com)
2. Click the + next to the font you want
3. In the tab at the bottom, grab the link for the font's stylesheet and place inside your HTML page's <head> section. Example: ```<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">```
4. Add the link to your own stylesheet after the google font stylesheet. Example: ```<link href="mystyle.css" rel="stylesheet">```
5. Grab the CSS code from the tab and implement it on your own stylesheet.

Example:

```
span {
    color: #e5147d;
    background-color: antiquewhite;
    font-family: 'Open Sans',sans-serif;
}
```
