<h1>Goops-App</h1>


Goops is an application for using the theme service for GNOME3. Theme service is not yet deployed, therefore we use the concept of bundles for now

<h2>Dependencies</h2>

Goops is depend-free for now, but you need user-gnome-shell-extension if you want to apply Shell Themes. It is also strongly recomented to install GNOME Tweak Tool, that adds user-gnome-shell-extension as a dependency

Ooh, you also need <strong>GNOME 3.10</strong> only!

<h2>Installation</h2>

In next versions installation and updates will be automated

Instructions are made for installing Goops under

```bash
~/Goops
```
`~/` means `$HOME` or else `/home/your-username/`.  

Adjust accordingly

<h3>1. Download</h3>

Download the client and data from http://worldofgnome.org:3000. Currently there are only 64bit binaries

Unzip the application and Unzip the data

Inside the root directory `~/Goops` add `data` folder
```bash
~/Goops/data
```

<h3>2. Set GOOPS_PATH</h3>

It is important before you start Goops to set `$GOOPS_PATH` env variable correctly. It should always point to Goops installation directory `~/Goops`

Open `.bashrc` with gedit
```bash
$ gedit ~/.bashrc
```

In the end of the file add
```bash
export GOOPS_PATH=/home/your-username/Goops/
```
Path must end with `/` !

Open a new terminal and test your changes
```bash
$ echo $GOOPS_PATH
```
The output should be
```bash
/home/your-username/Goops/
```

<h3>3. Run</h3>
You can now run Goops. Enter into Goops directory
```bash
$ cd ~/Goops
```
and run it
```bash
$ ./goops
```
Before anything else, go to `Update` Panel and press `Sync Themes`
<h2>Known Issues</h2>

This is under development and there are many bugs, but nothing bad won't happen in your box. Goops will never ask you root

<h4>1. Goops doesn't start in Antergos</h4>

Goops crashes under Antergos and probably under Arch Linux and any Arch derivative

<h4>2. Goops window is not resizable</h4>

Goops window dimensions are fixed 1200x850, and console is hidden in 1366x768 resolutions. That will be fixed soon.

<h4>3. libudev.so.0 is missing</h4>

When you will start Goops for first time you will possibly get a complaing about `libudev.so.0`

As a workaround you can make a symbolic link

Enter to your lib 64 bit folder
```bash
$ cd /usr/lib64
```
Notice that your `/lib64` path can be different depending your distro

Make a symbolic link
```bash
$ ln -s libudev.so.1 libudev.so.1
```

More about that issue: 
https://github.com/rogerwang/node-webkit/wiki/The-solution-of-lacking-libudev.so.0

<h4>4. Themes are dublicated in GNOME Tweak Tool</h4>

This is an upstream bug of Gtk2 theming for user-specific installations. The only way to solve this is Goops to use root access and install themes system-wide, under `/usr/..`, something that we don't really want

<h2>More</h2>

More to come soon!

You can file bugs about themes you want us to add. 

Data repo: https://github.com/alexis-diavatis/Goops-App-Data





