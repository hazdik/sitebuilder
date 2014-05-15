/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('vlnPageAction', ['$rootScope', 'vnConfig',
        function ($rootScope, vnConfig) {

            'use strict';

            return {
                templateUrl: 'views/actions/page-action.html',
                restrict   : 'A',
                scope      : {
                    products: '='
                },
                link       : function postLink(scope) {

                }
            };
        }]);
