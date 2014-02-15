angular.module('goopsApp')

.controller('IconThemesCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        iconThemesPath = goopsReadDB.getDataPath() + 'db/icons.json';

        $scope.iconThemes = goopsReadDB.getThemesDB(iconThemesPath, 'icons');

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