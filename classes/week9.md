# How to deploy your Twitter Bot to Amazon EC2

### Summary

1. Sign up for Amazon EC2 (an online virtual server space). We are going to create an *instance*, which is a single computer in a *cloud* computing space. We will choose a Ubuntu Linux instance.
2. Create a public and private key pair. Great [tutorial](https://www.youtube.com/watch?v=ZghMPWGXexs) video explaining what this key pair is 
4. We can connect to this remote server (computer) in our Terminal with a program called ssh (secure shell), using our key pair. Our remote server will be empty when it is created
5. Using Secure FTP (aka SSH FTP) we will upload our bot, config.js and packages.json files. I recommend the free ftp program Filezilla.
6. We need to install node on our remote server and npm, the node package manager. A package manager is a program that has access to lots of software repositories for different tasks. We do this inside our terminal connected to the remote server instance using ssh.
7. We then use ```npm install``` to install the latest versions of Twit (a Twitter program) and any other needed npm node packages.
8. We test our node file by running it on the server. If it works, quit. If it doesn't, quit and debug.
. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.. If it works, quit. If it doesn't, quit and debug.
9. We use npm to install *forever*, a program that can manage our forever-running bot. We then use forever to start our bot. Our bot is now deployed. Congratulations! Phew!

Here are the steps in more detail.

# Step-by-Step: Deploying to Amazon EC2

1. Go to Amazon EC2

2. Sign up

3. Launch an Instance

4. Choose Ubuntu Server *Free tier eligible*.
	* Choose General Purpose. Free Tier.

5. Review and Launch. Now Launch.

6. Now you need to authenticate! 
	* Create a new key pair
	* Download key pair. 
	* Save it somewhere on your computer where you won't lose it!

7. Now you can Launch Instances

8. let's use our key file to log in to our instance.

9. Let's give ourselves permission to work with the file.

10. Open the command line. Go to the directory where you've saved your key pair. Type ```chmod 400 filename.pem``` *Chmod* is a command to change permissions on a file. *400*  will make it so that others cannot read our private info.

11. We are going to ssh (secure shell) to our remote instance on Amazon EC2. We will be typing in our own computer's Terminal but executing the commands on the remote server EC2 instance.

12. Click connect. It will give you the full ssh command to enter in your Terminal.

13. Enter it. Say yes you trust it. The Terminal will now change its prompt to show you are in the logged-in Ubuntu remote instance.

14. Let's get our bot to the remote server. Many ways to do this. One option is [FileZilla](https://filezilla-project.org/) for Mac, PC, Linux.

15. Open your FTP software. There are 2 large windows. One window will show your own computer's files. The other window shows the remote server's files once you connect. You'll notice it asks for your host server, username and password. We don't have that. Instead, we are going to use our key pair..

16. Open the Site Manager. Create a New site. Enter your host from Amazon's connect info. Choose Protocol SFTP (ssh ftp). Logon type is Key file. User is *ubuntu*. Choose the Key file you saved on your computer previously. Then choose connect. If successful, your files on the server will load.

17. You can now upload your files for your bot. Drag the files from your computer to the server folder. Drag over: sketch.js (or whatever your js file is called), config.js, and modules.json

18. Go back to your Terminal where you're logged into your Ubuntu instance.

19. If you ```ls``` you'll see your files there now. 

20. You need to install node and get this server configured with your needed software.

21.

```
sudo apt-get update
sudo apt-get install nodejs-legacy
sudo apt-get install npm
```

22. Check that everything is working. Type ```node``` and make sure it drops into node on the server. To get out of node, you'll type ```.exit``` or Control-C.

23. Let's now install our needed node modules. ```npm install``` and it will download your needed modules onto the server. It knows what modules to install based on your modules.json file you transferred over before through ftp.

24. You should be able to run your code on the server now. ```node sketch.js``` Note that node-legacy does not like if you use ```let``` instead of ```var``` and will give you an error. If this happens to you force it to accept it. Open up your sketch.js or whatever you called your file. Add the line ```use strict;``` at the beginning of the file. Save and re-upload with Filezilla.

25. Try it again on the server. ```node sketch.js``` If it works, let's make it permanently run. ```sudo npm install forever -g```. This installs the tool *forever* globally so all node packages can use it. 

26. We can now run this *forever* with ```forever start sketch.js```

27. To test what bots are running in the future if you login you can type ```forever list``` to see what's running on the instance. Note that some students found that posting every five minutes causes Twitter to flag you and turn you off. I run my bots once an hour and haven't had an issue. To post once an hour, change this line to ```setInterval(tweeter, 3600000);``` so that it posts once every 3600000 milliseconds (aka 1 hour).

28. If you want to stop your bots you can type ```forever stopall``` and restart with ```forever start```

# Tutorial

Video [tutorial](https://www.youtube.com/watch?v=26bajyD4fLg) by Dan Shiffman on deploying to EC2. 

# Homework

* Deploy your bot to Amazon EC2
* Make sure you don't go over the free tier limits!

# Intro to Alexa Skills

Note: Chatbots: Principles, Methods, Ethics - a Noncomprehensive Reading List I've posted previously [here](http://leetusman.com/nosebook/programming/art/teaching/2018/02/16/chatbots-a-reading-list.html)

# Creating an Alexa Skill with NodeJS

## Overview
* What is Alexa? Amazon marketing [video](https://www.youtube.com/watch?v=UOEIH2l9z7c)
* Echo simulated [online](https://echosim.io/)

## Language Definitions

Programming --> Alexa

Alexa = Computer

Skill = App

Intent = Function

Utterance = call a function

slot = variable

## Tutorial

We are going to use Amazon's [tutorial](https://github.com/alexa/skill-sample-nodejs-howto) on Building a How-To Skill

[Tutorial page](https://developer.amazon.com/alexa-skills-kit/tutorials) for Amazon Alexa Skills Kit sample Skills


## Technical Overview
* Alexa Skills Kit Developer Console: Overview [video](https://www.youtube.com/watch?v=6YwBxpZpRDo&feature=youtu.be)
* Amazon Alexa Skills Kit - [Learn](https://developer.amazon.com/alexa-skills-kit/learn)
* Alexa Gaming Skills [site](https://developer.amazon.com/alexa-skills-kit/gaming)

## Homework

* Brainstorm your Alexa how-to skill
* Concept
	* What are you teaching?
	* What questions will people have? List all of these questions and their answers
	* Does voice assistance suit this?
* Set-up your development environment
	* Sign up for all needed accounts
	* Begin building your Skill

### Bonus: Interactive Story-Games

* [The Magic Door](https://www.amazon.com/The-Magic-Door-LLC/dp/B01BMUU6JQ)
* [Dungeon Adventure](https://www.amazon.com/Fangtastico-Dungeon-Adventure/dp/B01K457ZUS)
* [Yes Sire](https://www.amazon.com/gp/product/B071ZR5HKR?)
* [The Wayne Investigation](https://www.amazon.com/Warner-Bros-The-Wayne-Investigation/dp/B01C9AX5VY)

# Homework

Plan your first Alexa skill. 
	* What is the concept/purpose for the Skill?
	* What is the invocation name?
	* what are your intents (functions)?
	* What are the utterances to trigger your intents?


