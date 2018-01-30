# STANDARD Git, GitHub and GitHub pages Workflow

# Creating a New GitHub repository and working on a local copy

1 Make a new public repository on GitHub (or select one you are already working on)
	GitHub.com > + > New Repository

Make sure Initialize with a README is unchecked.

2 Open up your Terminal app. If you have a folder on your computer already to hold this project, then go to that folder. Otherwise, make a new folder first ```mkdir project-folder```. Once the folder exists, go to it ```cd project-folder```. 

3 Once inside this folder you need to connect this local repository to the remote one on GitHub. The exact url and command is given to you in step 1 after you've created the GitHub repo on github.com. ```git remote add origin http://github.com/username/projectname.git``` If the repo already exists, then go to the project on github and click the green *Clone or download* button and you can copy the URL from there. Use the same git remote add origin command.

4 In your project folder on your computer, you are working on a local copy. You will work on this local copy, saving like normal. When you get to a moment that you want to preserve all code in memory, then save like normal in your program. Go back to the Terminal. Add all changed files to be staged to be committed locally. ```git add filename``` You can add multiple files at once ```git add file1 file2 file3``` 

5 Commit your files on your local repository, with a commit save message. ```git commit -m 'initial save of my files'

6 You can push these saved commits to your remote version of your project repository on GitHub anytime. It's common practice to do this each time you commit. ```git push```

7 And that's it for the basics of git and GitHub. You should now have a local and remote copy of your project repository.


# GitHub Pages Workflow

1 Now that you have a repository setup locally and on GitHub you can have your project hosted as a free website with GitHub pages. It will update everytime you push from your local repository to the remote GitHub repository.

2 Add and commit an index.html page to the root (your project folder). Make sure it's a lowercase ```i``` You can also have a ```css``` stylesheet as normal and javascript, jquery, etc.

3 ```git add index.html``` and ```git commit -m 'created a project site page``` and ```git push``` to push this to the GitHub repository.

4 Go back to the GitHub page for the project in your web browser. Click settings. Scroll down to GitHub pages. Under source click *none* and switch it to *master branch*. It will now build your site in just a minute or two.

5 You can now visit your new project site at yourGitHubName.github.io/projectname

6 Anytime you want to make changes you can edit your files normally then git add them and git commit them and git push them and they will be added and updated on your new site.
