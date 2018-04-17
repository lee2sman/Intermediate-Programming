+++
title = "A GitHub pages workflow"
description = "Editors and IDEs"
date = "2018-01-13"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

# Standard GitHub and GitHub Pages Workflow

We use Git to track files locally, and GitHub to store our code remotely and to collaborate with others. GitHub can also be used to host a website with GitHub Pages.

## Creating a New GitHub repository and pushing your local code to the remote repository

1. Make a new public repository on GitHub (or select one you are already working on).
Select GitHub.com > + > New Repository.
Make sure *Initialize with a README* is unchecked.
2. Open up your Terminal app. Make a new folder for your project ```mkdir project-folder```. If you already have a folder for this project, skip creating the folder. In either case go to it ```cd project-folder```.
3. Once inside this folder you need to connect this local repository to the remote one on GitHub. The exact url and command is given to you in step 1 after you've created the GitHub repo on github.com. ```git remote add origin http://github.com/username/projectname.git``` If the repo already existed, then go to the project page on github and click the green *Clone or download* button and you can copy the URL from there. Use the same git remote add origin command.
4. In your project folder on your computer, you are working on a local copy. You will work on this local copy, saving like normal. When you get to a moment that you want to preserve all code in memory, then save like normal in your program. Go back to the Terminal. Add all changed files to be staged to be committed locally. ```git add filename``` You can add multiple files at once ```git add file1 file2 file3``` Staging does not save a snapshot of the entire. It just prepares them.
5. After adding your files, now you must *commit* them to take a snapshot. Commit your files on your local repository, with a commit save message. ```git commit -m 'initial save of my files' ```
6. You can push these saved commits to your remote version of your project repository on GitHub anytime. It's common practice to do this each time you commit. ```git push```
7. And that's it for the basics of git and GitHub. You should now have a local and remote copy of your project repository.

## GitHub Pages Workflow For Hosting a Website on GitHub

1. Now that you have a repository setup locally and on GitHub you can have your project hosted as a free website with GitHub pages. It will update everytime you push from your local repository to the remote GitHub repository.
2. Add and commit an index.html page to the root (your project folder). Make sure it's a lowercase ```i``` You can also have a ```css``` stylesheet as normal and javascript, jquery, or any other file as long it's static.
3. ```git add index.html``` and ```git commit -m 'created a project site page``` and ```git push``` to push this to the GitHub repository.
4. Go back to the GitHub page for the project in your web browser. Click settings. Scroll down to GitHub pages. Under source click *none* and switch it to *master branch*. It will now build your site in just a minute or two.
5. You can now visit your new project site at *yourGitHubName.github.io/projectname*
6. Anytime you want to make changes you can edit your files normally then git add them and git commit them and git push them (essentially, repeating step 3) and they will be added and updated on your new site pretty much instantly.
