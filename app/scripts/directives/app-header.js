
/*global angular, console */

angular.module('pieologyApp')
    .directive('appHeader', ['$rootScope', 'vlnConfig', 'vlnSiteFactory', function ($rootScope, vlnConfig, vlnSiteFactory) {
        'use strict';

        return {
            templateUrl: 'views/app-header.html',
            restrict   : 'A',
            replace    : true,
//            scope      : {},
            link       : function postLink(scope) {

                scope.toggleAppNavigation = function () {
                    if (vlnConfig.getGlobalNavState()) {
                        return vlnConfig.setGlobalNavState(false);
                    }
                    return vlnConfig.setGlobalNavState(true);
                };

                scope.setDisplayTo = function (display) {
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
