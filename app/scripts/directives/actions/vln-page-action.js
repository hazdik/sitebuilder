

angular.module('pieologyApp')
    .directive('vlnPageAction', ['$rootScope', 'vlnPageFactory', 'vlnConfig',
        function ($rootScope, vlnPageFactory, vlnConfig) {

            'use strict';

            return {
                templateUrl: 'views/actions/page-action.html',
                restrict: 'A',
                link: function postLink(scope) {

                    // Fetch available themes
                    vlnPageFactory.getPages()
                    .then(function (promise) {
                        scope.pageData = promise;
                        console.log(scope.pageData);
                    })
                    .catch (function (error) {
                        throw new Error('Error fetching page data: ', error);
                    });

                    /* Scope variables/attributes */
                    scope.visiblePageForm = false;
                    scope.visibleProductForm = false;
                    scope.visibleCategoryForm = false;
                    scope.currentProduct = null;
                    scope.currentCategory = null;
                    scope.currentPage = null;
                    scope.basePath = vlnConfig.getIframePathBase();

                    /* Scope functionlity */

                    scope.hideForm = function(formName) {
                        if ('page' === formName) {
                            scope.visiblePageForm = false;
                        } else if ('product' === formName) {
                            scope.visibleProductForm = false;
                        } else if ('category' === formName) {
                            scope.visibleCategoryForm = false;
                        }
                    }

                    scope.loadIframe = function(item) {
                        /*
                            @Input: url string to be loaded
                            @Output: return nothing
                            @Description: the function takes a url string and sends it to the workspace service to update the iFrame url of customers site.
                        */

                        var srcPath = scope.basePath + item.path;
                        $rootScope.$broadcast('vlnWorkspaceUrl.change', { url: srcPath });
                    };

                    scope.addPage = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-page-form
                        */
                        scope.visiblePageForm = true;
                        console.log('animate in the add page form');
                    };

                    scope.addCategory = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-category-form
                        */
                        scope.visibleCategoryForm = true;
                        console.log('animate in the add category form');
                    };

                    scope.addProduct = function() {
                        /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-product-form
                        */
                        scope.visibleProductForm = true;
                        console.log('animate in the add product form');
                    };

                    scope.editProduct = function (product) {
                        console.log('need to show edit form and load the iframe iwth how it looks', product);
                    }
                }
            };
    }]);