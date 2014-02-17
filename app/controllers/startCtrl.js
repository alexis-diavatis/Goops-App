angular.module('goopsApp')

.controller('StartCtrl', ['$scope', 'configService', 'MsgService',
    function ($scope, configService, MsgService) {
        
        var tray;
        
        var addStatusIcon = function () {
            tray = new gui.Tray({ title: 'Status Icon', tooltip: 'xaxa', icon: 'logo.png' });
        }
         
        var removeStatusIcon = function () {
            tray.remove();
            tray=null;
        }
        addStatusIcon();
       
}]);