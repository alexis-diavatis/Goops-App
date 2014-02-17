<h1>Goops-App</h1>


Goops is an application for using the theme service for GNOME3. Theme service is not yet deployed, therefore we use the concept of bundles for now.



<h2>Installation</h2>

In next versions installation and updates will be automated. 

Instructions are made for installing Goops under

```bash
~/Goops
```
`~/` means `$HOME` or else `/home/your-username/`.  

Adjust accordingly.

<h3>1. Download</h3>

Download the client and data from http://worldofgnome.org:3000

Unzip the application and Unzip the data

Inside the root directory `~/Goops` add "data" folder.
```bash
~/Goops/data
```

<h3>2. Set GOOPS_PATH</h3>

It is important before you start Goops to set `$GOOPS_PATH` env variable correctly. It should always point to Goops installation directory `~/Goops`.

1. Open `.bashrc` with gedit.
```bash
$ gedit ~/.bashrc
```

In the end of the file add.
```bash
export GOOPS_PATH=/home/your-username/Goops/
```
Path must end with `/`!

Open a new terminal and test your changes.
```bash
$ echo $GOOPS_PATH
```
The output should be
```bash
/home/your-username/Goops/
```

<h3>Run</h3>
You can now run Goops. Enter into Goops directory.
```bash
$ cd ~/Goops
```
and run it.
```bash
$ ./goops
```
<h2>Known Issues</h2>

This is under development and there are many bugs, but nothing bad won't happen in your box. Goops will never ask you root. 

<h4>1. Goops doesn't start in Antergos</h4>

Goops crashes under Antergos and probably under Arch Linux and any Arch derivative.




