/*global angular*/

angular.module('pieologyApp')
    .directive('appAttribute', ['$rootScope', 'vlnConfig', function ($rootScope, vlnConfig) {
        'use strict';

        return {
            templateUrl: 'views/app-attribute.html',
            restrict   : 'A',
            replace    : true,
            scope      : {},
            link       : function postLink(scope) {

                scope.isVisible = vlnConfig.getGlobalAttrBucketState();

                $rootScope.$on('vlnGlobalAttrBucketState.change', function (evt, params) {
                    scope.isVisible = params.state; // Relates to the global app nav menu state.
                });
            }
        };
    }]);