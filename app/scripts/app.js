'use strict';

angular.module('pieologyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/app-container.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


// angular.module('myApp', ['ngRoute']).
//   config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//   $locationProvider.html5Mode(true);

//   $routeProvider
//     .when("/home", {templateUrl:'home.html', controller:'homeController'})
//     // other routes are defined here..
//     .otherwise({redirectTo: '/home'});
//   }]);