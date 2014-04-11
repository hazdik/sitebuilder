/*global angular */

angular.module('pieologyApp')
    .directive('appAction', ['$rootScope', 'vlnConfig',
        function ($rootScope, vlnConfig) {

            'use strict';

            return {
                templateUrl: 'views/app-action.html',
                restrict   : 'A',
                replace    : true,
                scope      : {},
                link       : function postLink(scope) {
                    // element.text('this is the appActionContainer directive');

                    scope.isVisible = vlnConfig.getGlobalNavState();
                    $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                        scope.isVisible = params.state; // Relates to the global app nav menu state.
                    });

                    scope.currentAction = vlnConfig.getCurrentAction();
                    $rootScope.$on('vlnCurrentAction.change', function (evt, params) {
                        scope.currentAction = params.action;
                    });
                }
            };
        }]);
