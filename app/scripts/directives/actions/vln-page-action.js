

angular.module('pieologyApp')
    .directive('vlnPageAction', ['vlnPageFactory',
        function (vlnPageFactory) {

            'use strict';

            return {
                templateUrl: 'views/actions/page-action.html',
                restrict: 'A',
                link: function postLink(scope) {

                    // Fetch available themes
                    vlnPageFactory.getPages()
                    .then(function (promise) {
                        scope.pageData = promise;
                        // console.log(scope.pageData);
                    })
                    .catch (function (error) {
                        throw new Error('Error fetching page data: ', error);
                    });

                    scope.loadIframe = function(page) {
                        /*
                            @Input: url string to be loaded
                            @Output: return nothing
                            @Description: the function takes a url string and sends it to the workspace service to update the iFrame url of customers site.
                        */
                        console.log('Pass me to the workspace controller so that it can load this: ', page);
                    };

                    scope.addPage = function() {
                        console.log('animate in the add page form');
                    };

                    scope.addCategory = function() {
                        console.log('animate in the add category form');
                    };

                    scope.addProduct = function() {
                        console.log('animate in the add product form');
                    };
                }
            };
    }]);