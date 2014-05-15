/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('appAction', ['$rootScope', 'vnConfig',
        function ($rootScope, vnConfig) {

            'use strict';

            return {
                templateUrl: 'views/app-action.html',
                restrict   : 'A',
                replace    : true,
                scope      : {},
                link       : function postLink(scope) {
                    // element.text('this is the appActionContainer directive');

                    scope.isVisible = vnConfig.getGlobalNavState();
                    $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                        scope.isVisible = params.state; // Relates to the global app nav menu state.
                    });

                    scope.currentAction = vnConfig.getCurrentAction();
                    $rootScope.$on('vlnCurrentAction.change', function (evt, params) {
                        scope.currentAction = params.action;
                    });
                }
            };
        }]);
