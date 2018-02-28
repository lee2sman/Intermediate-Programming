# Requirements

* [Nodejs](http://nodejs.org) installed - Install via brew  on Mac ```brew install node``` or from [here](http://nodejs.org). This will also install NPM.
* You will have to create a new [Twitter](http://twitter.com) account

# Overview

We will be writing our bot in Javascript. We will be using the Twit library and installing it via NPM, the Node Package Manager. Twit lets us tweet, stream and communicate with the Twitter API.

# Procedure

# Set up our files

```
npm init //this will be used to configure our web app 
```

Create a ```sketch.js``` file and ```config.js``` file in your project's directory. We will use our ```sketch.js``` file to write our Twitter bot. Open up and edit the main field in ```package.json``` with whatevery your javascript file will be called. I call mine ```sketch.js```. There are lots of fields, but make sure your main is properly named. For example, ```"main": "sketch.js",```

Our project folder should now contain:

```
project-folder
- sketch.js
- config.js
- package.json
```

## Set up our new Twitter account

1. Create a twitter account.
2. Create an app in your developer page. You need to connect a phone number. You can get a free Google voice or Twilio number. [https://apps.twitter.com/app/new](here).
3. Enter an app name, description, and website. Leave the “callback” field blank.
4. Go to *Keys and Access Tokens* to get your *Consumer Key (API Key)* and *Consumer Secret (API Secret)*
5. Click to *Generate Access Token* for your Access Token and Access Token Secret
6. Let's make our bot public but hide our own private keys and secrets. Open us ```config.js```

```
//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
module.exports = {
  consumer_key: '',  
  consumer_secret: '',
  access_token: '',  
  access_token_secret: ''
}
```

# Setting up our Node.js Twitter Bot

## Install and Setup Twit

1.

```
npm install twit --save
```

2. Let's hide our private keys/secrets/tokens in a file that we won't be posting so others can't snoop.

```
// Change this file to config.js
// Add your keys
// Add file .gitignore: config.js
// Load with 
// var config = require('./config.js');

module.exports = {
  consumer_key:         'YOURCONSUMERKEY',
  consumer_secret:      'YOURCONSUMERSECRET',
  access_token:         'YOURACCESSTOKEN',
  access_token_secret:  'YOURACCESSTOKENSECRET'
}
```


# Starter code!

```
// Using the Twit node package
// https://github.com/ttezel/twit
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');

// Making a Twit object for connection to the API
var T = new Twit(config);

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 60*5*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet = 'Here\'s a random number between 0 and 100: ' + Math.floor(Math.random()*100);

  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };

}
```

### More complex Starter Code
[Here](https://github.com/lee2sman/intermediate-programming/blob/master/classes/week7_code/1basicbot/sketch.js)

## Usage

To run our bot ```node sketch.js```

It will run and post every 5 minutes. To quit - Control-C.

**Our next step is to deploy this to a remote server!**

# Resources
* The Twit module has its own [documentation](https://www.npmjs.com/package/twit) on its API and starter code
* Darius Kazemi's [corpora](https://github.com/dariusk/corpora/) has TONS of lists of words
