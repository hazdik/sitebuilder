
/*global angular, console */

angular.module('pieologyApp')
    .directive('appActionContainer', function () {

        'use strict';

        return {
            templateUrl: 'views/app-action-container.html',
            restrict   : 'E',
            link       : function postLink(scope, element, attrs) {
                // element.text('this is the appActionContainer directive');
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    });
