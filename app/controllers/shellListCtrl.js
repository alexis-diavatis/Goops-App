angular.module('ilgApp')

.controller('ShellThemesListCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        shellThemesPath = ilg_json.getDataPath() + 'db/shell.json';

        $scope.shellThemes = ilg_json.getThemesDB(shellThemesPath, 'shell');
        
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
                //console.log('stdout: ' + stdout);
                //console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
        }

}]);