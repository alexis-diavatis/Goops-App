angular.module('goopsApp')

.controller('AppConfigCtrl', ['$scope', 'configService', 'MsgService',
    function ($scope, configService, MsgService) {

        var shellThemesDest = goopsReadDB.getHomePath() + '/.themes',
            gtkThemesDest = goopsReadDB.getHomePath() + '/.local/share/themes',
            iconThemesDest = goopsReadDB.getHomePath() + '/.local/share/icons';
        var exec = require('child_process').exec,
            child;

        $scope.appPath = configService.appPath();


        $scope.getFolder = function (folder) {
            switch (folder) {
            case "shell":
                openFolder(shellThemesDest);
                break;

            case "gtk":
                openFolder(gtkThemesDest);
                break;

            case "icons":
                openFolder(iconThemesDest);
                break;
            case "app":
                openFolder(configService.appPath());
                break;
            }
        }

        var openFolder = function (path) {


            cmd = "gtk-launch nautilus " + path;
            //gui.Shell.showItemInFolder(path);

            child = exec(cmd, function (error, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

        }


        /** Sync and create folders **/
        //** This need to be hardly optimized! **//
        $scope.goopsAppSyncData = function () {
            AppSyncData();
        }

        var shellThemesDest = goopsReadDB.getHomePath() + '/.themes',
            gtkThemesDest = goopsReadDB.getHomePath() + '/.local/share/themes',
            iconsThemesDest = goopsReadDB.getHomePath() + '/.local/share/icons';

        var createDirectories = function () {

            fse.mkdirsSync(shellThemesDest);
            fse.mkdirsSync(gtkThemesDest);
            fse.mkdirsSync(iconThemesDest);

        }

        var copyShellThemes = function () {
            var shellThemesSrc = goopsReadDB.getDataPath() + 'shell/';

            fse.copySync(shellThemesSrc, shellThemesDest, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Copied: " + shellThemesSrc + " to " + shellThemesDest);
            });
        }

        var copyGtkThemes = function (callback) {
            var shellThemesSrc = goopsReadDB.getDataPath() + 'shell/';
            var gtkThemesSrc = goopsReadDB.getDataPath() + 'gtk/';

            fse.copySync(gtkThemesSrc, gtkThemesDest, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Copied: " + shellThemesSrc + " to " + shellThemesDest);
            });

            //Additionally copy inside themes for gtk2 support

            fse.copySync(gtkThemesSrc, shellThemesDest, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Copied: " + gtkThemesSrc + " to " + shellThemesDest);
            });
        }

        var copyIconThemes = function () {
            var iconsThemesSrc = goopsReadDB.getDataPath() + 'icons/';

            fse.copySync(iconsThemesSrc, iconsThemesDest, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Copied: " + iconsThemesSrc + " to " + iconsThemesDest);
            });

        }

        var sendShellNotification = function (msg) {
            var exec = require('child_process').exec,
                child;
            cmd = "notify-send " + msg;
            child = exec(cmd, function (error, stdout, stderr) {

                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
        }
        
        // Make this Async!!
        
        //var t = process.hrtime(); t = process.hrtime(t);
        // t = process.hrtime(); reset
        
        var AppSyncData = function () {
           
            
            async.series([  
                
                // Create directories if not exist, no need to check with stat 
                 
                function (callback) {
                     setTimeout(function(){
                        createDirectories();                        
                        callback(null, 'Create Directories');
                      }, 1);     
                },

                function (callback) {
                    setTimeout(function(){
                        copyShellThemes();
                        callback(null, 'Copy Shell Themes');
                     }, 1);   
                },

                function (callback) {
                      setTimeout(function(){ 
                        copyGtkThemes();
                        callback(null, 'Copy GTK Themes');
                     }, 1);
                },

                function (callback) {
                    setTimeout(function(){ 
                        copyIconThemes();
                        callback(null, 'Copy Icon Themes');
                    }, 1);
                },

                function (callback) {
                    setTimeout(function(){
                        sendShellNotification("'Goops synced data succesfully!'");                        
                        callback(null, 'Done!');
                    }, 10);
                }
            ],
                function (err, results) {
                    if (err)
                        return console.log(err)
                    console.log("Synced data succesfully");                
                     
                }); //End of async series
        }


 }]);