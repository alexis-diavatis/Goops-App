angular.module('ilgApp')

.controller('HelpCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        $scope.launchDefaultBrowser = function (link) {
            configService.launchDefaultBrowser(link);
        }

        }]);