/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('appNavigation', ['$rootScope', 'vnConfig', function ($rootScope, vnConfig) {

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
                    vnConfig.setCurrentAction('designAction');
                };

                scope.loadPageTools = function() {
                    /*
                        @Input - none
                        @Output - none
                        @Purpose - update the config attribute currentAction for page
                    */
                    vnConfig.setCurrentAction('pageAction');
                };

                scope.loadStatTools = function() {
                    /*
                     @Input - none
                     @Output - none
                     @Purpose - update the config attribute currentAction for page
                     */
                    vnConfig.setCurrentAction('pageStats');
                };
            }
        };
    }]);
