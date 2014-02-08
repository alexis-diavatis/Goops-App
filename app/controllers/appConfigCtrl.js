angular.module('ilgApp')

.controller('AppConfigCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        var shellThemesDest = ilg_json.getHomePath() + '/.themes',
            gtkThemesDest = ilg_json.getHomePath() + '/.local/share/themes',
            iconThemesDest = ilg_json.getHomePath() + '/.local/share/icons';


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

            var exec = require('child_process').exec,
                child;
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

        $scope.ilgAppSyncData = function () {

            var exec = require('child_process').exec,
                child;

            /* Create directories if not exist, no need to check with stat */

            var shellThemesDest = ilg_json.getHomePath() + '/.themes',
                gtkThemesDest = ilg_json.getHomePath() + '/.local/share/themes',
                iconsThemesDest = ilg_json.getHomePath() + '/.local/share/icons';

            fse.mkdirsSync(shellThemesDest);
            fse.mkdirsSync(gtkThemesDest);
            fse.mkdirsSync(iconThemesDest);


            /* COPY SHELL THEMES IN APPR FOLDERS ~/.themes */


            var shellThemesSrc = ilg_json.getDataPath() + 'shell/*';
            cmd = "cp -r " + shellThemesSrc + " " + shellThemesDest;

            child = exec(cmd, function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

            /* COPY GTK THEMES IN APPR FOLDERS ~/.themes & ~/.local/share/themes/*/

            var gtkThemesSrc = ilg_json.getDataPath() + 'gtk/*';
            cmd = "cp -r " + gtkThemesSrc + " " + gtkThemesDest;
            child = exec(cmd, function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

            //Additionally copy inside themes for gtk2 support


            cmd = "cp -r " + gtkThemesSrc + " " + shellThemesDest;
            child = exec(cmd, function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

            /* COPY Icons THEMES IN APPR FOLDERS  ~/.local/share/icons/ */

            var iconsThemesSrc = ilg_json.getDataPath() + 'icons/*';

            cmd = "cp -r " + iconsThemesSrc + " " + iconsThemesDest;
            child = exec(cmd, function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }

            });

        }


   }]);