angular.module('goopsApp')

.controller('consoleCtrl', ['$scope', 'configService', 'MsgService',
    function ($scope, configService, MsgService) {

        
        $scope.appPackage = configService.getAppPackage();
        $scope.nwVersion = process.versions['node-webkit'];
        
        MsgService.addClient('username');
        
        MsgService.getServerUpdates(function (data, result) {
            $scope.$apply(function () {
                $scope.version = result;
            });
        });

    }]);