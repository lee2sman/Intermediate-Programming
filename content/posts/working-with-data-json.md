+++
title = "Working with JSON Data"
description = "Working with JSON Data"
date = "2018-02-17"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

![JSON data](/images/json.png)

## Data formats

Data can be saved in many kinds of formats.

* CSV - comma separated values
* XML - an older standard
* JSON - Javascript Object Notation
* text file - each line of the file containing a different data point
* a web page

## JSON

JSON is a good standard way of working with data files and is based on how Javascript literal objects are defined.

### JSON Type Examples

#### Basic Example

```
let car = {
  name: 'Saab',
  color: 'red'
  year: 2016
}
```

#### JSON String

```
{ "name":"Ricardo" }
```

#### JSON Number

```
{ "age":77 }
```

#### JSON Object

```
{
  "person":{ "name":"Shankar Patel", "age":40, "city":"Los Angeles" }
}
```

## Accessing JSON with Dot Notation

```
character = { "name":"Shredder", "age":30, "home":"TerrorDome" };

enemy = character.name;
```

## Accessing JSON with Bracket Notation

```
enemy = character["name"];
```

## Nested JSON

Very common!

Example

```
rappers = {
    "Migos": {
        "rapper1":"Offset",
        "rapper2":"Quavo",
        "rapper3":"Takeoff"
    }
 }
```

##### Access data with dot or bracket notation.

```
 let favoriteRapper = rappers.Migos.rapper2;
```

##### Change data value

```
rappers.Migos.rapper2 = "Nardwuar";
```

#### JSON Array

```
let class = {
  "students":[ "Mohammed", "Camille", "Joseph", "Ben", "Zane", "Kyro", "Kane", "Edi", "Tom", "Matthew", "Joab", "Sungmin Lee", "Brian" ]
}

let closestStudent = class.students[11]; // Sungmin Lee
```

#### Loading JSON with P5DOM

```
function preload(){
    catBreeds = loadJSON("catBreeds.json");
}

function setup(){
  fill(catBreeds.manx.col);
  text(catBreeds.manx.name, 100, 200);
}
```

# Resources
* [W3Schools JSON intro](https://www.w3schools.com/js/js_json_intro.asp)
* Darius Kazemi's [Corpora](https://github.com/dariusk/corpora) are mostly JSON files
