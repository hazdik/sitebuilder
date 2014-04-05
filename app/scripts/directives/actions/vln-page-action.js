

angular.module('pieologyApp')
    .directive('vlnPageAction', ['$rootScope', 'vlnPageFactory',
        function ($rootScope, vlnPageFactory) {

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

                    scope.loadIframe = function(item) {
                        /*
                            @Input: url string to be loaded
                            @Output: return nothing
                            @Description: the function takes a url string and sends it to the workspace service to update the iFrame url of customers site.
                        */

                        $rootScope.$broadcast('vlnWorkspaceUrl.change', { url: item.pageUrl });
                    };

                    scope.addPage = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-page-form
                        */
                        console.log('animate in the add page form');
                    };

                    scope.addCategory = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-category-form
                        */
                        console.log('animate in the add category form');
                    };

                    scope.addProduct = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-product-form
                        */
                        console.log('animate in the add product form');
                    };
                }
            };
    }]);