angular.module('goopsApp')

.controller('ShellThemesCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        shellThemesPath = goopsReadDB.getDataPath() + 'db/shell.json';

        $scope.shellThemes = goopsReadDB.getThemesDB(shellThemesPath, 'shell');
        
        $scope.openTweakTool = function() {
            configService.openTweakTool(); 
        }

        $scope.themeThumb = configService.appPath() + "data/db/images/shell/";
        
        $scope.launchDefaultBrowser = function (link) {
            configService.launchDefaultBrowser(link);
        }

        $scope.setTheme = function (themename) {

            var exec = require('child_process').exec,
                child;
            cmd = "gsettings set org.gnome.shell.extensions.user-theme name " + themename;
            child = exec(cmd, function (error, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
        }
        
       

}]);