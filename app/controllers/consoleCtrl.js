angular.module('ilgApp')

.controller('consoleCtrl', ['$scope', 'configService', 'MsgService',
    function ($scope, configService, MsgService) {
    
        $scope.testValue = MsgService.testValue;
      
    }]);