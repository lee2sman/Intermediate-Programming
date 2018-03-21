# Deploying to Amazon EC2

1. Go to Amazon EC2

2. Sign up

3. Launch an Instance

4. Choose Ubuntu Server *Free tier eligible*.
	* Choose General Purpose. Free Tier.

5. Review and Launch. Now Launch.

6. Now you need to authenticate! 
	* Create a new key pair
	* Download key pair. 
	Save it somewhere where you won't lose it!

7. Now you can Launch Instances

8. let's use our key file to log in to our instance.

9. Let's give ourselves permission to work with the file.

10. Open the command line. Go to the directory where you've saved your key pair. Type ```chmod 400 filename.pem``` *Chmod* is a command to change permissions on a file. *400* gives us read/write permissions.

11. We are going to ssh (secure shell) to our remote instance on Amazon EC2. We will be typing in our own computer's Terminal but executing the commands on the remote server EC2 instance.

12. Click connect. It will give you the full ssh command to enter in your Terminal.

13. Enter it. Say yes you trust it. The Terminal will now change its prompt to show you are in the logged-in Ubuntu remote instance.

14. Let's get our bot to the remote server. Many ways to do this. One option is [FileZilla](https://filezilla-project.org/) for Mac, PC, Linux.

15. Open your FTP software. You'll notice it asks for your host server, username and password. We don't have that. Instead, we are going to use our key pair..

16. Open the Site Manager. Create a New site. Enter your host from Amazon's connect info. Choose Protocol SFTP. Logon type is Key file. User is ubuntu. Choose the Key file you saved on your computer previously. Then choose connect. If successful, your files on the server will load.

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

22. Check that everything is working. Type ``node``` and make sure it drops into node on the server. To get out of node, you'll type ```.exit``` or Control-C.

23. Let's now install our needed node modules. ```npm install``` and it will find our needed modules on the server. It knows what modules to install based on your modules.json file you transferred over before.

24. You should be able to run your code on the server now. ```node sketch.js``` Note that node-legacy does not like if you use ```let``` instead of ```var``` and will give you an error. If this happens to you force it to accept it. Open up your sketch.js or whatever you called your file. Add the line ```use strict;``` at the beginning of the file. Save and re-upload with Filezilla.

25. Try it again on the server. ```node sketch.js``` If it works, let's make it permanently run. ```sudo npm install forever -g```. This installs the tool *forever* globally so all node packages can use it. 

26. We can now run this *forever* with ```forever start sketch.js```

27. To test what bots are running in the future if you login you can type ```forever list``` to see what's running on the instance. Note that some students found that posting every five minutes causes Twitter to turn you off. I run my bots once an hour and haven't had an issue. To post once an hour, change this line to ```setInterval(tweeter, 3600000);``` so that it posts once every 3600000 milliseconds (aka 1 hour).

28. If you want to stop your bots you can type ```forever stopall``` and restart with ```forever start```

## Notes



# Tutorial
Video [tutorial](https://www.youtube.com/watch?v=26bajyD4fLg)

# Intro to Alexa Skills

# Homework

0. Deploy your Twitter bot.

1. Read [this](https://jordankasper.com/building-an-amazon-alexa-skill-with-node-js/) tutorial on building an Alexa skill with NodeJS.

2. Plan your first Alexa skill. Write out and post somewhere and send the link. Write your
	* concept/purpose for the Skill
	* functions
	* utterances


