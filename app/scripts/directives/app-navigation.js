/*global angular, console */

angular.module('pieologyApp')
    .directive('appNavigation', function () {

        'use strict';

        return {
            templateUrl: 'views/app-navigation.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope, element, attrs) {
                // element.text('this is the appNavigation directive');
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    });
