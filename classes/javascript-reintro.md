# Javascript fundamentals - reminders

* We won't be going into the details of Javascript fundamentals. For further resources:
  * W3Schools [tutorials](https://www.w3schools.com/js/default.asp)
  * The excellent overview, [A Re-Introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

# Where to use Javascript
* In the console
* Between <script> and </script> in your HTML page
* In an external file called by <script src="myfile.js"></script> on your HTML page
* And in the commandline/Terminal using NodeJs

# Javascript Output

JavaScript can "display" data in different ways:

* Writing into an HTML element, using innerHTML. [Example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_dom)
* Writing into the HTML output using document.write(). [Example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_write)
* Writing into an alert box, using window.alert(). [Example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_write_over)
* Writing into the browser console, using console.log(). [Example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_alert)

# JavaScript Statements

JavaScript statements are composed of:

* Values
* Operators
* Expressions
* Keywords
* Comments

# Single Line Comments
* Single line comments start with //

# Data Types

* JavaScript variables can hold many data types: numbers, strings, objects and more:

```
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
`


### Values
* Numbers - There's no such thing as an integer in Javascript!
* Strings - sequences of Unicode characters
* Strings can accessed like objects

```
'hello'.length; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"
```

* null - a non-value
* undefined - not yet initialized
* boolean - ```true``` or ```false```

### Operations
* Boolean operations such as ```&&``` (logical and), ```||``` (logical or), and ```!``` (logical not)

## Variables
* Javascript is a *weakly* typed language. You don't need to declare a variable's type and there is no error checking.
* *let* is the new *var* - '''let''' has *block scope* while '''var''' does not.
* '''const''' is a variable whose value will not change! Reassigning its value will throw an error. It also has block scope.

### Control Structures

* ```if```, ```else if```, ```else```

```
if (myvar === 0) {
    // then do this
}
```

* While loops for basic looping. Do-while for execution at least once.

```
while (true) {
  // an infinite loop!
}

VS

var input; // happens at least once!
do {
  input = get_input();
} while (inputIsNotValid(input));
```

## For loops

```
for (var i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
```

## Objects

* They are collections of name-value pairs.
* Two methods to declare

```var obj = new Object();```

OR

```var obj = {};``` - Object Literal Syntax - similar to JSON structure

* can be declared and initialized

#### Example

```
var obj = {
  name: 'refridgerator',
  details: {
    color: 'white',
    size: 64
  }
};
```

## Functions

```
function add(param1, param2) {
       return param1 + param2;
   }
```

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
var you = new Person('You', 24);
// We are creating a new person named "You" aged 24.
```

### ES6 arrow functions
* more concise
* they are anonymous and change the way ```this``` binds in functions.
* ```function (arguments) { expression }``` becomes ```arguments => expression```

```
const sayHello = () => {
  console.log("Hello");
}
```

* Video [Intro to Arrow Functions](https://www.youtube.com/watch?v=mrYMzpbFz18&index=3&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr)
with Dan Shiffman
