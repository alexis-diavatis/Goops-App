angular.module('ilgApp')

.controller('StartCtrl', ['$scope', 'configService',
    function ($scope, configService) {

        
            var getData = function (cb) {
                async.series([

            function (callback) {
                        socket.on('updates', function (data) {
                            callback(null, data)
                        });
            },
            function (callback) {
                        callback(null, 'Just a second callback')
            }
            ], function (err, result) {
                    if (err) return console.error(err);                    
                    cb(null, result);
                    //console.log(result);
                });
            }

    getData(function (data, result) { 
        $scope.$apply(function () {            
            $scope.version = result;
        });
    });
        
}]);