
/*global angular*/

angular.module('pieologyApp')
    .directive('appWorkspace', ['$rootScope', 'vlnConfig', function ($rootScope, vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-workspace.html',
            restrict   : 'A',
            replace    : true,
            scope      : {},
            link       : function postLink(scope) {

                scope.displayClass = '-screen';
                scope.isFullSize = !vlnConfig.getGlobalAttrBucketState();

                $rootScope.$on('vlnGlobalAttrBucketState.change', function (evt, params) {
                    scope.isFullSize = !params.state; // Relates to the global app nav menu state.
                });

                $rootScope.$on('vlnDisplay.change', function (evt, params) {
                    scope.displayClass = '-' + params.display;
                });

            }
        };
    }]);
