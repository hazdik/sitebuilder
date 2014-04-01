/*global angular, console */

angular.module('pieologyApp')
    .directive('appNavigation', ['$rootScope', 'vlnConfig', function ($rootScope) {

        'use strict';

        return {
            templateUrl: 'views/app-navigation.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope) {
                $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                    scope.isVisible = params.state;
                });

                /* Public methods */

                scope.loadDesignTools = function() {
                    console.log('load the design view into the action container');
                };

                scope.loadPageTools = function() {
                    console.log('load the pages view into the action container');
                };
            }
        };
    }]);
