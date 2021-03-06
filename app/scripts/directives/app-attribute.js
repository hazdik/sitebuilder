/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('appAttribute', ['$rootScope', 'vnConfig', function ($rootScope, vnConfig) {
        'use strict';

        return {
            templateUrl: 'views/app-attribute.html',
            restrict   : 'A',
            replace    : true,
            //transclude : true,
            scope      : {},
            link       : function postLink(scope) {

                scope.isVisible = vnConfig.getGlobalAttrBucketState();

                $rootScope.$on('vlnGlobalAttrBucketState.change', function (evt, params) {
                    scope.isVisible = params.state; // Relates to the global app nav menu state.
                });
            }
        };
    }]);
