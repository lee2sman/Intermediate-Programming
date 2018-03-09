# Week 8

This week we are reviewing our Twitter bots and deploying them to Amazon AWS.

# Critique of the bots
* Our class bots can be found [here](https://twitter.com/2sman2sman/lists/woodbury-bots/)
* The list is [here](https://twitter.com/2sman2sman/lists/woodbury-bots/members)


# Deploying to Amazon - Choosing Web Services

Amazon's web store relies on a huge server infrastructure. Beginning in 2006 they launched a subsidary company Amazon Web Services to provide on-demand cloud computing (servers)

Amazon Web Services run on [server farms](https://arstechnica.com/uncategorized/2012/03/cracking-the-cloud-an-amazon-web-services-primer/).

There are several options: 

**Elastic Cloud Compute** - these are virtual machines that can run an *instance* of Linux or Windows, and left continuously running. It scales based on a user's needs.It uses Elastic Load Balancing around the world and manages where your data is served depending on your user location. Choose this option when you need a continously running server and persistent data saving and retrieval.

You can get up to 750 hours of EC2 service over 1 year for free [here](https://aws.amazon.com/ec2/).

**AWS Lambda** - Lambda provides similar services to EC2 but you are not provisioning your own server. Your code runs in response to events rather than continuously, which makes this ideally used for API calls, and running scripts in response to called events. Technically, AWS user code is on shared machines in isolated environments. Code you run on AWS Lambda is called a *Lambda function*. Your code is not tied to a specific machine; it must be *stateless*, meaning that anything done on the filesystem should not be saved for later use/retrieval. Each Lambda function has 500mb of temporary storage space ```/tmp```. 

You can get 1million requests and 400,000 GB-seconds of compute time a month indefinitely on Amazon AWS.Additional pricing [info](https://aws.amazon.com/lambda/pricing/). Your bot would have to post more than 20 times a minute to hit the limits of the free tier.

# Deploying to Amazon AWS

1 [Sign up](https://portal.aws.amazon.com/billing/signup) for AWS by creating an account
2 Enter billing information! **Warning**: It asks for a credit card to be on file in case you exceed the free tier.
3 It will then call your phone number on file and you have to type in a 4 digit pin to confirm.
4 Choose *Basic Plan* Free. 
5 Go to the Amazon AWS [console](https://console.aws.amazon.com/iam/)
6 Go to **Roles** 
7 Make sure AWS Service is selected and click Lamba
8 Select **Next: Permissions** 
9 Type in a search for *basic* and select **AWSLambdaBasicExecutionRole**
10 Accept and give it a name for this role, like *basic_bot*
11 Go to your [web console](https://console.aws.amazon.com/lambda/home)
12 Create a function 
13 Author from scratch
14 Choose an existing role
15 There's a drop-down. Select your existing role you made earlier.
16 Create function
17 Choose Cloudwatch Event trigger






Studio time and feedback on Twitter Bots
In-class or stream interview with Bot creators
Voice command/assistance as a “verbal command line”
Working with the Amazon Alexa Node package
Project: Creating a Alexa “Skill” application
Studio time for Alexa skill project
User testing
1-on-1 meetings
Week 8
Data persistence
Hosting and deploying web applications with Firebase
Authentication
Creating your own API with Node and Express
CORS
Express routes
Student Presentation: Twitter Bots
o


# Video tutorials
* A twitter bot that [replies](https://www.youtube.com/watch?v=ovOtQxLwSzQ)
