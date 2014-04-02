/*global angular    */

angular.module('pieologyApp')
    .directive('appAction', ['$rootScope', 'vlnConfig', 'vlnThemeFactory',
        function ($rootScope, vlnConfig, vlnThemeFactory) {

        'use strict';

        return {
            templateUrl: '../../views/app-action.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope) {
                // element.text('this is the appActionContainer directive');

                scope.isVisible = vlnConfig.getGlobalNavState();
                $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                    scope.isVisible = params.state; // Relates to the global app nav menu state.
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
