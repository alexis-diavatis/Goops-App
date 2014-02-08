angular.module('ilgApp')

.controller('GtkThemesListCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        gtkThemesPath = ilg_json.getDataPath() + 'db/gtk.json';

        $scope.gtkThemes = ilg_json.getThemesDB(gtkThemesPath, 'gtk');

        $scope.gtkThumb = configService.appPath() + "data/db/images/gtk/";
        $scope.openTweakTool = function () {
            configService.openTweakTool();
        }

        $scope.openGtkFactory = function () {
            var exec = require('child_process').exec,
                child;

            cmd = "gtk3-widget-factory";
            child = exec(cmd, function (error, stdout, stderr) {
                //console.log('stdout: ' + stdout);
                //console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });


        }


        $scope.launchDefaultBrowser = function (link) {
            configService.launchDefaultBrowser(link);
        }
        $scope.setTheme = function (themename) {

            var exec = require('child_process').exec,
                child;

            cmd = "gsettings set org.gnome.desktop.interface gtk-theme " + themename;
            child = exec(cmd, function (error, stdout, stderr) {
                //console.log('stdout: ' + stdout);
                //console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });


            cmd = "gsettings set org.gnome.desktop.wm.preferences theme " + themename;
            child = exec(cmd, function (error, stdout, stderr) {
                //console.log('stdout: ' + stdout);
                //console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });

        }


}]);