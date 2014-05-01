/*global SiteBuilder, console*/

SiteBuilder.Directives
    .directive('appHeader',
    ['$rootScope', 'vlnConfig', 'vlnSiteFactory', 'vlnFireRef',

        function ($rootScope, vlnConfig, vlnSiteFactory, vlnFireRef) {

            'use strict';

            return {
                templateUrl: 'views/app-header.html',
                restrict   : 'A',
                replace    : true,
                link       : function postLink(scope) {

                    scope.screenMode = vlnConfig.getScreenMode();

                    scope.previewMode = vlnConfig.getPreviewMode();
                    vlnFireRef.modeCurrent().$bind(scope, 'previewMode');

                    scope.switchStyle = 'vln-slider';

                    scope.toggleAppNavigation = function () {
                        if (vlnConfig.getGlobalNavState()) {
                            return vlnConfig.setGlobalNavState(false);
                        }
                        return vlnConfig.setGlobalNavState(true);
                    };

                    scope.setDisplayTo = function (display) {
                        scope.screenMode = display;
                        $rootScope.$broadcast('vlnDisplay.change', { display : display });
                    };

                    scope.publishChanges = function () {
                        vlnSiteFactory.publish()
                            .then(function (response) {
                                console.log(response);
                            });
                    };
                }
            };
        }]);
