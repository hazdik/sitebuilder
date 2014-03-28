/*global angular, console */

angular.module('pieologyApp')
    .directive('appNavigation', ['vlnConfig', function (vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-navigation.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope, element, attrs) {
                // element.text('this is the appNavigation directive');
                // scope.isVisible = vlnConfig.getGlobalNavState();
                // console.log('appNav: ', vlnConfig.getGlobalNavState());
                // console.log('isVisible: ', scope.isVisible);
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    }]);
