
/*global angular*/

angular.module('pieologyApp')
    .directive('appActionBucket', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            templateUrl: 'views/action-bucket.html',
            restrict   : 'A',
            replace    : true,
            link       : function postLink(scope) {

                scope.displayClass = '-screen';

                $rootScope.$on('vlnDisplay.change', function (evt, params) {
                    scope.displayClass = '-' + params.display;
                });

            }
        };
    }]);
