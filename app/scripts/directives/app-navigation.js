/*global angulark*/

angular.module('pieologyApp')
    .directive('appNavigation', ['$rootScope', 'vlnConfig', function ($rootScope, vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-navigation.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope) {
                scope.currentAction = 'designAction'; // the default

                // Listen for messages that hide/show the app navigation
                $rootScope.$on('vlnGlobalNavState.change', function (evt, params) {
                    scope.isVisible = params.state;
                });

                // Listen for messages that update the currentAction
                $rootScope.$on('vlnCurrentAction.change', function (evt, params) {
                    scope.currentAction = params.action;
                });

                scope.loadDesignTools = function() {
                    /*
                        @Input - none
                        @Output - none
                        @Purpose - update the config attribute currentAction for design
                    */
                    vlnConfig.setCurrentAction('designAction');
                };

                scope.loadPageTools = function() {
                    /*
                        @Input - none
                        @Output - none
                        @Purpose - update the config attribute currentAction for page
                    */
                    vlnConfig.setCurrentAction('pageAction');
                };
            }
        };
    }]);
