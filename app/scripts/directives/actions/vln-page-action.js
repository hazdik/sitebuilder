/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('vlnPageAction', ['$rootScope', 'vlnConfig',
        function ($rootScope, vlnConfig) {

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