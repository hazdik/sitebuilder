/*global angular*/

angular.module('pieologyApp')
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

                    // Fetch available themes
                    vlnPageFactory.getPages()
                        .then(function (promise) {
                            scope.pageData = promise;
                        })
                        .catch(function (error) {
                        throw new Error('Error fetching page data: ', error);
                    });
                }
            };
        }]);