/*global angular */

angular.module('pieologyApp', [
    // Angular Modules
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
])
    .config(['$locationProvider', '$routeProvider', '$sceDelegateProvider',
        function ($locationProvider, $routeProvider, $sceDelegateProvider) {

            'use strict';

            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'views/app-container.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'self',
                // 'http://localhost:9778'
                'http://localhost:8001/**'
            ]);
        }]);