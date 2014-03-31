/*global angular, console */

angular.module('pieologyApp')
    .directive('appNavigation', ['$rootScope', '$animate', 'vlnConfig',
        function ($rootScope, $animate, vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-navigation.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope, element, attrs) {
                // element.text('this is the appNavigation directive');
                scope.isVisible = vlnConfig.getGlobalNavState();
                $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                    scope.isVisible = params.state;
                });

                console.log('animate is: ', $animate);
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    }]);
