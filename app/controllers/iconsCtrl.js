angular.module('goopsApp')

.controller('IconsCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        iconThemesPath = ilg_json.getDataPath() + 'db/icons.json';

        $scope.iconThemes = ilg_json.getThemesDB(iconThemesPath, 'icons');

        $scope.iconThumb = configService.appPath() + "data/db/images/icons/";
        
        $scope.openTweakTool = function () {
            configService.openTweakTool();
        }


        $scope.launchDefaultBrowser = function (link) {
            configService.launchDefaultBrowser(link);
        }
        $scope.setTheme = function (themename) {

            var exec = require('child_process').exec,
                child;

            if (themename === "setDefault") {
             cmd = "gsettings reset org.gnome.desktop.interface icon-theme";
                child = exec(cmd, function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }
                });
            
            } else {

                cmd = "gsettings set org.gnome.desktop.interface icon-theme " + themename;
                child = exec(cmd, function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }
                });

            } //else
        }
}]);