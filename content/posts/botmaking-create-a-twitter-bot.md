+++
title = "Create a Twitter Bot"
description = "Intro to Botmaking - Create a Twitter Bot"
date = "2018-02-21"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

![twitter bot](/images/bot.jpg)

## Making A Twitter Bot

1. Create a twitter account
2. Create an app in your developer page. You need to connect a phone number. You can get a free Google voice or Twilio number.
3. Enter an app name, description, and website. Leave the “callback” field blank.
4. Go to *Keys and Access Tokens* to get your *Consumer Key (API Key)* and *Consumer Secret (API Secret)*
5. Click to *Generate Access Token* for your Access Token and Access Token Secret

## Authenticate with Twit

1.

```
npm install Twit --save
```

2.

Put your keys in a private config.js file.

```
//config.js
module.exports = {
  consumer_key:         'YOURCONSUMERKEY',
  consumer_secret:      'YOURCONSUMERSECRET',
  access_token:         'YOURACCESSTOKEN',
  access_token_secret:  'YOURACCESSTOKENSECRET'
}
```

3.
//This will be our main JS file
//main.js

3. Access Twit and your config.js with the *require* command.

```
//use Twit node package
let Twit = require('twit');
//use our config.js file
let config = require('./config.js');

//make a Twit object to connect to the API
var T = new Twit(config);

// Start once
tweeter(); //this function is defined in the twit module

// Once every N milliseconds
setInterval(tweeter, 60*5*1000);

// Here is the bot!
function tweeter() {

name = ["Lee", "Brian", "Joseph", "Ben", "Matthew", "J", "Mohammed"];

let tweet = "I pick "+name[Math.floor((Math.random() * name.length))];

//post the tweet
T.post('statuses/update', {
  status: tweet
}, tweeted);

//callback when Tweet is sent.
function tweeted(err, data response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Success: '+data.text);
  }
 };
}
```
