
/*global angular, console */

angular.module('pieologyApp')
    .directive('appActionBucket', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            templateUrl: 'views/action-bucket.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope, element, attrs) {
//                element.text('this is the appActionBucket directive');
                console.log(attrs);
                console.log(scope);
                console.log(element);

                scope.displayClass = '-screen';

                $rootScope.$on('vlnDisplay.change', function (evt, params) {
                    scope.displayClass = '-' + params.display;
                });

            }
        };
    }]);
