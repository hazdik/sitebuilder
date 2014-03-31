/*global angular, console */

angular.module('pieologyApp')
    .directive('appActionContainer', ['$rootScope', 'vlnConfig',
        function ($rootScope, vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-action-container.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope, element, attrs) {
                // element.text('this is the appActionContainer directive');

                scope.isVisible = vlnConfig.getGlobalNavState();
                $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                    scope.isVisible = params.state;
                });
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    }]);
