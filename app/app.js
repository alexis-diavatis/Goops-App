'use strict';

angular.module('ilgApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/themes/shell.html',
        controller: 'ShellThemesListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
