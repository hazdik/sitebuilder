/*global SiteBuilder, console*/

SiteBuilder.Directives
    .directive('appHeader',
    ['$rootScope', 'vnConfig', 'vlnSiteFactory',
        function ($rootScope, vnConfig, vlnSiteFactory) {

            'use strict';

            return {
                templateUrl: 'views/app-header.html',
                restrict   : 'A',
                replace    : true,
                link       : function postLink(scope) {

                    scope.screenMode = vnConfig.getScreenMode();

                    scope.previewMode = vnConfig.getPreviewMode();
//                    vlnFireRef.modeCurrent().$bind(scope, 'previewMode');
                    console.log('SiteDNA removed current mode is not bound');

                    scope.switchStyle = 'vln-slider';

                    scope.toggleAppNavigation = function () {
                        if (vnConfig.getGlobalNavState()) {
                            return vnConfig.setGlobalNavState(false);
                        }
                        return vnConfig.setGlobalNavState(true);
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
