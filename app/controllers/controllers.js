var ilgApp = angular.module('ilgApp', ["ngAnimate"])

.factory('configService', function () {
    return {
        appPath: function () {
            return process.env.ILG_CLIENT_PATH;
        },
        openTweakTool: function () {
            var exec = require('child_process').exec,
                child;
            cmd = "gnome-tweak-tool";
            child = exec(cmd, function (error, stdout, stderr) {
                //console.log('stdout: ' + stdout);
                //console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
        },
        
        getAppPackage : function () {
            var package = fs.readFileSync('package.json', 'utf-8', function (err, data) {
  			if (err) throw err;
  				console.log(data);
		});

      	return JSON.parse(package);
    
        },

        launchDefaultBrowser: function (link) {
            var exec = require('child_process').exec,
                child,
                myBrowser;

            var getBrowser = function (stdout) {
                myBrowser = stdout.slice(0, stdout.length - 1); //Trim /n

                cmd = "gtk-launch " + myBrowser + " " + link;                
                child = exec(cmd, function (error, stdout, stderr) {

                    //console.log('stdout: ' + stdout);
                    //console.log('stderr: ' + stderr);                

                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }


                });

            }

            cmd = "xdg-mime query default x-scheme-handler/http";
            child = exec(cmd, function (error, stdout, stderr) {

                //console.log('stdout: ' + stdout);
                //console.log('stderr: ' + stderr);                

                if (error !== null) {
                    console.log('exec error: ' + error);
                } else {
                    getBrowser(stdout);
                }

            });


        }
    }

});