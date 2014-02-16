angular.module('goopsApp')

.factory('MsgService', ['$rootScope',
    function ($rootScope) {
        return {

            getServerUpdates: function (cb) {
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
            },
            addClient: function (user) {
                socket.on('connect', function (data) {
                    socket.emit('adduser', user);
                });
            }
        }

}]);