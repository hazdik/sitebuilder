/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('vlnPageAction', [
        function () {

            'use strict';

            return {
                templateUrl: 'views/actions/page-action.html',
                restrict   : 'A',
                scope      : {
                    products: '='
                },
                link       : function postLink() {

                }
            };
        }]);
