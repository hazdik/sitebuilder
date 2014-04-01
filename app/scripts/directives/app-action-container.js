/*global angular    */

angular.module('pieologyApp')
    .directive('appActionContainer', ['$rootScope', 'vlnConfig', 'vlnThemeFactory',
        function ($rootScope, vlnConfig, vlnThemeFactory) {

        'use strict';

        return {
            templateUrl: 'views/app-action-container.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope) {
                // element.text('this is the appActionContainer directive');

                scope.isVisible = vlnConfig.getGlobalNavState();
                $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                    scope.isVisible = params.state; // Relates to the global app nav menu state.
                });

                scope.currentAction = vlnConfig.getCurrentAction();
                $rootScope.$on('vlnCurrentAction.change', function (evt, params) {
                    console.log(params);
                    scope.currentAction = params.action;
                });

                vlnThemeFactory.getThemes()
                    .then(function (promise) {
                        scope.themes = promise;
                    })
                    .catch(function(promise){
                        throw new Error('Error fetching themes: ', promise);
                    });
            }
        };
    }]);
