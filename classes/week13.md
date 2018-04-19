# Week 13

# Plan

* Finish programming language/framework tutorial/cheatsheet presentations
* Learn data persistence with database as a service/Firebase
* Creating web extensions
  * using HTML/CSS/JS
  * HTML/CSS framework-styling

# Persistence

So far in this course we have created a local server on our own computer, using node and Express, or the built-in live servers on Brackets or Atom, for example. We have also deployed projects we've tested locally and pushed them to Amazon AWS, on EC2, or on Lambda.

## Firebase

1. Go to [firebase](http://firebase.google.com) and sign up for an account.
2. Click Go To Console.
3. Click *Databases* and choose *Realtime*
4. Start in test mode and click enable.


3. Create a new project and give it a name and click continue when  finished
4. Your authentication info will appear.
5. Copy the first line, which will link your project to the current Firebase CDN
6. Copy the tokens/passes and put it your setup function
7. Let's test it. ```console.log(firebase);``` will let us check in the browser console that everything worked.

## Writing to the Firebase server

We've published a simple app to firebase but our API keys are in our public code. Not secure.

1. Go back to the firebase site.
2. Choose Database.
3. Go to Rules. These are rules for who may read/write to the database.
4. Let's set it so anyone can read/write to the database.

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**NOTE: This is a bad idea for secure data! This is just for testing!**

## Let's connect to our database

```
let database = firebase.database();
```

Data is stored in tree structure. You use a reference *ref* very much like JSON.

```
let ref = database.ref('score');

var data = {
  name: "Lee",
  score: 43
}

ref.push(data);
```

This will reference and push to the database.
Run this on your project. Then go back to the Firebase site and click data and you should see your data saved in a data tree.

Let's add a name input.

```
initialInput = createInput('initials');
submitButton = createButton('submit');
```

Let's bind an event for clicking the button.

```
submitButton.mousePressed(submitScore);
```

and add a function

```
function submitScore() {
  let  data = {
    initials: initialInput, value(),
    score: score
  }  
}
```

Okay, let's test this. You should now be able to deploy to the Firebase database.

## Homework

* Watch [Retrieving Data](https://www.youtube.com/watch?v=NcewaPfFR6Y&list=PLRqwX-V7Uu6agS82Le9lLCBbeaW8inATT&index=3)
* Watch [saving images to Firebase](https://www.youtube.com/watch?v=RUSvMxxm_Jo&index=4&list=PLRqwX-V7Uu6agS82Le9lLCBbeaW8inATT)
