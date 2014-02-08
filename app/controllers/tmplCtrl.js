angular.module('ilgApp')

    .controller('tmplCtrl',
        ['$scope', function($scope) {

        $scope.templates = [
        { name: 'startPage', url: 'views/start.html'},
        { name: 'gtkThemes', url: 'views/themes/gtk.html'},
        { name: 'iconThemes', url: 'views/themes/icons.html'},
        { name: 'packThemes', url: 'views/themes/packs.html'},
        { name: 'wallpapersThemes', url: 'views/themes/wallpapers.html'},
        { name: 'shellThemes', url: 'views/themes/shell.html'},
        { name: 'help', url: 'views/help.html'},
        { name: 'shellDetails', url: 'views/themes/_shellDetails.html'}];

         $scope.template = $scope.templates[0];


    /*******************************************************************************************************************/


    }]);


