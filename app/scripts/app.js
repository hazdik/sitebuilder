
/*global angular */

angular.module('pieologyApp', [
    // Angular Modules
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

        'use strict';

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/app-container.html',
                controller : 'MainCtrl'
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