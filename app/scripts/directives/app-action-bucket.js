
/*global angular, console */

angular.module('pieologyApp')
    .directive('appActionBucket', function () {

        'use strict';

        return {
            templateUrl: 'views/action-bucket.html',
            restrict   : 'A',
            link       : function postLink(scope, element, attrs) {
                // element.text('this is the appActionBucket directive');
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    });
