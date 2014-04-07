

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

                    /* Scope variables */
                    scope.showPageForm = false;
                    scope.showProductForm = false;
                    scope.showCategoryForm = false;

                    /* Scope functionlity */

                    scope.hideForm = function(formName) {
                        if ('page' === formName) {
                            scope.showPageForm = false;
                            console.log('hiding page form');
                        } else if ('product' === formName) {
                            scope.showProductForm = false;
                            console.log('hiding product form');
                        } else if ('category' === formName) {
                            scope.showCategoryForm = false;
                            console.log('hiding category form');
                        }
                    }

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
                        scope.showPageForm = true;
                        console.log('animate in the add page form');
                    };

                    scope.addCategory = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-category-form
                        */
                        scope.showCategoryForm = true;
                        console.log('animate in the add category form');
                    };

                    scope.addProduct = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-product-form
                        */
                        scope.showProductForm = true;
                        console.log('animate in the add product form');
                    };
                }
            };
    }]);