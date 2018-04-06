Last login: Tue Mar 20 16:31:10 on ttys000
m209-imac-inst:~ tusmanl$ sudo
usage: sudo -h | -K | -k | -V
usage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user]
            [command]
usage: sudo [-AbEHknPS] [-C num] [-g group] [-h host] [-p prompt] [-u user]
            [VAR=value] [-i|-s] [<command>]
usage: sudo -e [-AknS] [-C num] [-g group] [-h host] [-p prompt] [-u user] file
            ...
m209-imac-inst:~ tusmanl$ clear













m209-imac-inst:~ tusmanl$ 























  [Restored Mar 27, 2018, 4:04:21 PM]
Last login: Tue Mar 27 16:04:18 on console
Restored session: Thu Mar 22 18:30:03 PDT 2018
m209-imac-inst:~ tusmanl$ 
  [Restored Mar 29, 2018, 3:59:26 PM]
Last login: Thu Mar 29 15:59:25 on console
m209-imac-inst:~ tusmanl$ cd
m209-imac-inst:~ tusmanl$ pwd
/Users/tusmanl
m209-imac-inst:~ tusmanl$ git clone https://github.com/alexa/skill-sample-nodejs-fact.git
Cloning into 'skill-sample-nodejs-fact'...
remote: Counting objects: 439, done.
remote: Compressing objects: 100% (24/24), done.
remote: Total 439 (delta 6), reused 1 (delta 0), pack-reused 415
Receiving objects: 100% (439/439), 176.13 KiB | 230.00 KiB/s, done.
Resolving deltas: 100% (200/200), done.
m209-imac-inst:~ tusmanl$ cd skill-sample-nodejs-fact/
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ ls
InteractionModel.json	instructions		skill.json
LICENSE.txt		lambda
README.md		models
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ open .
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ ls
InteractionModel.json	instructions		skill.json
LICENSE.txt		lambda
README.md		models
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ open .
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ 
  [Restored Apr 3, 2018, 4:02:24 PM]
Last login: Tue Apr  3 16:02:18 on console
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ node
-bash: node: command not found
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ clear

m209-imac-inst:skill-sample-nodejs-fact tusmanl$ ssh
usage: ssh [-1246AaCfGgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec]
           [-D [bind_address:]port] [-E log_file] [-e escape_char]
           [-F configfile] [-I pkcs11] [-i identity_file]
           [-J [user@]host[:port]] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-p port] [-Q query_option] [-R address]
           [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           [user@]hostname [command]
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ ssh -i "Woodbury.pem" ubuntu@ec2-18-188-84-216.us-east-2.compute.amazonaws.com
Warning: Identity file Woodbury.pem not accessible: No such file or directory.
ssh: connect to host ec2-18-188-84-216.us-east-2.compute.amazonaws.com port 22: Connection refused
m209-imac-inst:skill-sample-nodejs-fact tusmanl$ cd /Volumes/
m209-imac-inst:Volumes tusmanl$ ls
BOOTCAMP	GANELAINE	Macintosh HD1
m209-imac-inst:Volumes tusmanl$ cd GANELAINE/
m209-imac-inst:GANELAINE tusmanl$ ls
AAA-ATEG-with-instructions.pdf	clock-present
Woodbury.pem			fungal-clock-proposal.pdf
m209-imac-inst:GANELAINE tusmanl$ ssh -i "Woodbury.pem" ubuntu@ec2-18-188-84-216.us-east-2.compute.amazonaws.com
ssh: connect to host ec2-18-188-84-216.us-east-2.compute.amazonaws.com port 22: Connection refused
m209-imac-inst:GANELAINE tusmanl$ chmod 400 Woodbury.pem 
m209-imac-inst:GANELAINE tusmanl$ ssh -i "Woodbury.pem" ubuntu@ec2-18-188-84-216.us-east-2.compute.amazonaws.com
ssh: connect to host ec2-18-188-84-216.us-east-2.compute.amazonaws.com port 22: Connection refused
m209-imac-inst:GANELAINE tusmanl$ 
  [Restored Apr 5, 2018, 4:09:40 PM]
## cd /Volumes/GANELAINE ##
Last login: Thu Apr  5 16:09:38 on console
m209-imac-inst:~ tusmanl$ clear

m209-imac-inst:~ tusmanl$ cd
m209-imac-inst:~ tusmanl$ ls
Applications			Network Shares
Desktop				Pictures
Documents			Public
Downloads			installnode.sh
Library				local
Movies				node-latest-install
Music				skill-sample-nodejs-fact
m209-imac-inst:~ tusmanl$ cd Desktop/
m209-imac-inst:Desktop tusmanl$ ls
Network Shares
m209-imac-inst:Desktop tusmanl$ cd Network\ Shares/
m209-imac-inst:Network Shares tusmanl$ ls
courses
m209-imac-inst:Network Shares tusmanl$ 
m209-imac-inst:Network Shares tusmanl$ cd /Users/tusmanl/Downloads/intermediate-programming-master 
m209-imac-inst:intermediate-programming-master tusmanl$ git status
fatal: Not a git repository (or any of the parent directories): .git
m209-imac-inst:intermediate-programming-master tusmanl$ ls
README.md	assignments	classes		projects
m209-imac-inst:intermediate-programming-master tusmanl$ vim classes/languages.md 

# Languages
 
* C#
* Javascript
* HTML
* CSS
* Python
* Java
* C++
* Scratch
* Bash
* GML (Game Maker Language)
* Lua
* ActionScript 3
* Ruby
* Haskell
* Perl
* Swift
 
# Frameworks/Libraries
 
* Processing (Java)
* JQuery (Library)
* P5JS (Javascript)
* Arduino (C/C++)
* Unity (C#)
* Unreal (C++)
* Touch Designer (Python)
* Pico8 (Lua)
* CANVAS
* OpenGL
* TensorFlow
* Minecraft Command Blocks/Redstone
 
# Data Format
* XML
* JSON
* YAML, HAML, TOML
 
# IDE
 
* PyCharm
* XCode
* Brackets
* Atom
* Android Studio
* Vim/Neovim or Emacs
* Eclipse
* NetBeans
 
# Tools
 
* Node (Javascript)
* Express (Javascript Node Package)
* Browserfy
* Gulp
* Git
 
# Programming Games
 
* Human Resource Machine (Assembly)
* TIS-100 (Assembly)
* Hack N Slash
 
# Esolang (Esoteric Languages)
 
* [COW](https://esolangs.org/wiki/COW)
* ...
 
# Package Manager
* Homebrew (Mac)
* NPM (node)

