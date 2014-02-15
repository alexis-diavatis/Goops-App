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

            child = exec(cmd, function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

        }


        /** Sync and create folders **/
        //** This need to be hardly optimized! **//
        $scope.goopsAppSyncData = function () {

            var shellThemesDest = goopsReadDB.getHomePath() + '/.themes',
                gtkThemesDest = goopsReadDB.getHomePath() + '/.local/share/themes',
                iconsThemesDest = goopsReadDB.getHomePath() + '/.local/share/icons';

            async.series([

                function (callback) {

                    var exec = require('child_process').exec,
                        child;

                    /* Create directories if not exist, no need to check with stat */

                    fse.mkdirsSync(shellThemesDest);
                    fse.mkdirsSync(gtkThemesDest);
                    fse.mkdirsSync(iconThemesDest);

                    callback(null, 'create paths');
                },

                function (callback) {
                    /* COPY SHELL THEMES IN APPR FOLDERS ~/.themes */

                    var shellThemesSrc = goopsReadDB.getDataPath() + 'shell/*';
                    cmd = "cp -r " + shellThemesSrc + " " + shellThemesDest;

                    child = exec(cmd, function (error, stdout, stderr) {
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    });

                    callback(null, 'copy shell themes');
                },

                function (callback) {
                    /* COPY GTK THEMES IN APPR FOLDERS ~/.themes & ~/.local/share/themes/*/

                    var gtkThemesSrc = goopsReadDB.getDataPath() + 'gtk/*';
                    cmd = "cp -r " + gtkThemesSrc + " " + gtkThemesDest;
                    child = exec(cmd, function (error, stdout, stderr) {
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    });

                    //Additionally copy inside themes for gtk2 support


                    cmd = "cp -r " + gtkThemesSrc + " " + shellThemesDest;
                    child = exec(cmd, function (error, stdout, stderr) {
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    });

                    callback(null, 'copy gtk themes');
                },

                function (callback) {
                    /* COPY Icons THEMES IN APPR FOLDERS  ~/.local/share/icons/ */

                    var iconsThemesSrc = goopsReadDB.getDataPath() + 'icons/*';

                    cmd = "cp -r " + iconsThemesSrc + " " + iconsThemesDest;
                    child = exec(cmd, function (error, stdout, stderr) {
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }

                    });

                    callback(null, 'copy icons themes');
                },
                function (callback) {
                    cmd = "notify-send 'Goops finished syncing succesfully!'";
                    child = exec(cmd, function (error, stdout, stderr) {
                        console.log('stderr: ' + stderr);
                        if (error !== null) {
                            console.log('exec error: ' + error);
                        }
                    });

                    callback(null, 'pop a notification');
                }

            ], function (err, results) {
                if (err) return console.error(err);
                console.log(results);

            });
        }


   }]);