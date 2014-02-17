<h1>Goops-App</h1>


Goops is an application for using the theme service for GNOME3. Theme service is not yet deployed, therefore we use the concept of bundles for now.



<h2>Installation</h2>


In next versions installation and updates will be automated. Instructions are made for installing Goops under 
```bash
~/Goops ie /home/your-username/Goops
```
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


