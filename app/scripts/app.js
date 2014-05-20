/*global angular*/

var SiteBuilder = SiteBuilder || {};

SiteBuilder.Constants = angular.module('siteBuilder.constants', []);
SiteBuilder.Controllers = angular.module('siteBuilder.controllers', []);
SiteBuilder.Decorators = angular.module('siteBuilder.decorators', []);
SiteBuilder.Directives = angular.module('siteBuilder.directives', []);
SiteBuilder.Filters = angular.module('siteBuilder.filters', []);
SiteBuilder.Services = angular.module('siteBuilder.services', []);
SiteBuilder.Values = angular.module('siteBuilder.values', []);

angular.module('siteBuilder', [
    // Angular Modules
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'angular-carousel',
    'firebase',
    'textAngular',

    // SiteBuilder Modules
    'siteBuilder.constants',
    'siteBuilder.controllers',
    'siteBuilder.decorators',
    'siteBuilder.directives',
    'siteBuilder.filters',
    'siteBuilder.services',
    'siteBuilder.values'
])
    .config(['$locationProvider', '$routeProvider', '$sceDelegateProvider',
        function ($locationProvider, $routeProvider, $sceDelegateProvider) {

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

            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'self',
                // 'http://localhost:9778'
                'http://localhost:8001/**',
                'http://localhost/**',
                'http://localhost:8080/**'
            ]);
        }]);
