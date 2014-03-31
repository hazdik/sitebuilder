
/*global angular, console */

angular.module('pieologyApp')
    .directive('appHeader', ['$rootScope', 'vlnConfig', function ($rootScope, vlnConfig) {
        'use strict';

        return {
            templateUrl: 'views/app-header.html',
            restrict   : 'A',
            replace    : true,
//            scope      : {},
            link       : function postLink(scope, element, attrs) {
               // element.html('<span class="icon-menu" onclick="alert(\'TEST\')"></span> ... this is the appHeader directive');
                console.log(attrs);
                console.log(scope);
                console.log(element);

                scope.toggleAppNavigation = function () {
                    if (vlnConfig.getGlobalNavState()) {
                        return vlnConfig.setGlobalNavState(false);
                    }
                    return vlnConfig.setGlobalNavState(true);
                };

                scope.setDisplayTo = function (display) {
                    $rootScope.$broadcast('vlnDisplay.change', { display : display });
                };
            }
        };
    }]);
