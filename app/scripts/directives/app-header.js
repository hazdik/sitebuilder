
/*global angular, console */

angular.module('pieologyApp')
    .directive('appHeader', function () {

        'use strict';

        return {
            templateUrl: 'views/app-header.html',
            restrict   : 'A',
            link       : function postLink(scope, element, attrs) {
                // element.html('<span class="icon-menu" onclick="alert(\'TEST\')"></span> ... this is the appHeader directive');
                console.log(attrs);
                console.log(scope);
                console.log(element);
            }
        };
    });
