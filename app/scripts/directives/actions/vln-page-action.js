/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('vlnPageAction', ['$rootScope', 'vlnPageFactory', 'vlnConfig',
        function ($rootScope, vlnPageFactory, vlnConfig) {

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