+++
title = "Linux on Windows 10"
description = "Run a Linux subsystem on Windows 10"
date = "2018-03-04"
location = "Los Angeles, CA"
categories = [
  "",
  "V"
]
type = "post"
+++

![Ubuntu Terminal](/images/ubuntu.png)

There are various approaches to running a Linux shell on a Windows computer. One option is to Dual Boot your computer so that there are multiple operating systems. Another option is to use a container or Virtual Machine to boot a containerized Linux operating system on your Windows Machine.

The newest (as of 2016) option is to actually install a Linux subsystem on your Windows machine.

## Install Linux subsystem

1. Open Windows Powershell as Administrator
2. Run ```Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux```
3. When complete, hit Return to restart computer and finish install.
4. Open the Store. Search for and select your Linux distribution of choice. I chose Ubuntu. Click Get.
5. After downloading, choose Launch. It will finish installing. Afterwards, it will prompt you to enter a Linux account name and password. Once entered, you are now ready to use Linux on Windows.

* Optionally, you may want to download the Cmder terminal replacement. Info on running Windows Ubuntu Bash in Cmder can be found [here](https://gingter.org/2016/11/16/running-windows-10-ubuntu-bash-in-cmder/).

### Resources

* Additional [info](https://docs.microsoft.com/en-us/windows/wsl/about) from Microsoft about installing and troubleshooting Windows Subsystem for Linux
