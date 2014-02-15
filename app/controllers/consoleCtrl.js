angular.module('goopsApp')

.controller('consoleCtrl', ['$scope', 'configService', 'MsgService',
    function ($scope, configService, MsgService) {

        
        $scope.appPackage = configService.getAppPackage();
        
        MsgService.getServerMessages(function (data, result) {
            $scope.$apply(function () {
                $scope.version = result;
            });
        });

    }]);