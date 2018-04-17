+++
title = "Botmaking - Deploying to Amazon"
description = "Intro to Botmaking - Deploying to Amazon"
date = "2018-02-23"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

![servers clean](/images/servers.png)
![servers mess](/images/servers.jpg)

This week we are reviewing our Twitter bots and deploying them to Amazon AWS.

## Critique of the bots
* Our class bots can be found [here](https://twitter.com/2sman2sman/lists/woodbury-bots/)
* The list of bots is [here](https://twitter.com/2sman2sman/lists/woodbury-bots/members)

## Deploying to Amazon - Choosing Web Services

Amazon's web store relies on a huge server infrastructure. Beginning in 2006 they launched a subsidiary company Amazon Web Services to provide on-demand cloud computing (servers).

Amazon Web Services run on [server farms](https://arstechnica.com/uncategorized/2012/03/cracking-the-cloud-an-amazon-web-services-primer/).

There are several options:

**Elastic Cloud Compute** - these are virtual machines that can run an *instance* of Linux or Windows, and left continuously running. It scales based on a user's needs.It uses Elastic Load Balancing around the world and manages where your data is served depending on your user location. Choose this option when you need a continously running server and persistent data saving and retrieval.

You can get up to 750 hours of EC2 service over 1 year for free [here](https://aws.amazon.com/ec2/).
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

1 Go to Amazon EC2

2 Sign up

3 Launch an Instance

4 Choose Ubuntu Server *Free tier eligible*.
Choose General Purpose. Free Tier.

5 Review and Launch. Now Launch.

6 Now you need to authenticate!
* Create a new key pair
* Download key pair.
* Save it somewhere on your computer where you won't lose it!

7 Now you can Launch Instances

8 let's use our key file to log in to our instance.

9 Let's give ourselves permission to work with the file.

10 Open the command line. Go to the directory where you've saved your key pair. Type ```chmod 400 filename.pem``` *Chmod* is a command to change permissions on a file. *400*  will make it so that others cannot read our private info.

11 We are going to ssh (secure shell) to our remote instance on Amazon EC2. We will be typing in our own computer's Terminal but executing the commands on the remote server EC2 instance.

12 Click connect. It will give you the full ssh command to enter in your Terminal.

13 Enter it. Say yes you trust it. The Terminal will now change its prompt to show you are in the logged-in Ubuntu remote instance.

14 Let's get our bot to the remote server. Many ways to do this. One option is [FileZilla](https://filezilla-project.org/) for Mac, PC, Linux.

15 Open your FTP software. There are 2 large windows. One window will show your own computer's files. The other window shows the remote server's files once you connect. You'll notice it asks for your host server, username and password. We don't have that. Instead, we are going to use our key pair..

16 Open the Site Manager. Create a New site. Enter your host from Amazon's connect info. Choose Protocol SFTP (ssh ftp). Logon type is Key file. User is *ubuntu*. Choose the Key file you saved on your computer previously. Then choose connect. If successful, your files on the server will load.

17 You can now upload your files for your bot. Drag the files from your computer to the server folder. Drag over: sketch.js (or whatever your js file is called), config.js, and modules.json

18 Go back to your Terminal where you're logged into your Ubuntu instance.

19 If you ```ls``` you'll see your files there now.

20 You need to install node and get this server configured with your needed software.

21

```
sudo apt-get update
sudo apt-get install nodejs-legacy
sudo apt-get install npm
```

22 Check that everything is working. Type ```node``` and make sure it drops into node on the server. To get out of node, you'll type ```.exit``` or Control-C.

23 Let's now install our needed node modules. ```npm install``` and it will download your needed modules onto the server. It knows what modules to install based on your modules.json file you transferred over before through ftp.

24 You should be able to run your code on the server now. ```node sketch.js``` Note that node-legacy does not like if you use ```let``` instead of ```var``` and will give you an error. If this happens to you force it to accept it. Open up your sketch.js or whatever you called your file. Add the line ```use strict;``` at the beginning of the file. Save and re-upload with Filezilla.

25 Try it again on the server. ```node sketch.js``` If it works, let's make it permanently run. ```sudo npm install forever -g```. This installs the tool *forever* globally so all node packages can use it.

26 We can now run this *forever* with ```forever start sketch.js```

27 To test what bots are running in the future if you login you can type ```forever list``` to see what's running on the instance. Note that some students found that posting every five minutes causes Twitter to flag you and turn you off. I run my bots once an hour and haven't had an issue. To post once an hour, change this line to ```setInterval(tweeter, 3600000);``` so that it posts once every 3600000 milliseconds (aka 1 hour).

28 If you want to stop your bots you can type ```forever stopall``` and restart with ```forever start```

# Tutorial

Video [tutorial](https://www.youtube.com/watch?v=26bajyD4fLg) by Dan Shiffman on deploying to EC2.
