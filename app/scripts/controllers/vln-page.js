/*global angular*/

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$rootScope', '$scope', 'vlnUpdateManager', 'vlnConfig',
        function ($rootScope, $scope, vlnUpdateManager, vlnConfig) {
            'use strict';

            $scope.visiblePageForm = false;
            $scope.visibleProductForm = false;
            $scope.visibleCategoryForm = false;
            $scope.visibleAssetList= true;
            $scope.currentProduct = null;
            $scope.currentCategory = null;
            $scope.currentPage = null;
            $scope.currentProduct = null;
            $scope.basePath = vlnConfig.getIframePathBase();

            // Gets the product list from firebase and updates there when change happens
            vlnUpdateManager.productList().$bind($scope, 'products');

            /* Scope functionlity */

            $scope.loadProduct = function(product) {
                /**
                    @function
                    @name loadProduct
                    @description us an existing product to load and bind a product for updates
                    @param {Object} product
                    @return nothing to return
                 */
                 console.log('in edit form fn with product', product);
                 console.log('firebase endpoint: ', 'products/' + product.id);
                 // vlnUpdateManager.getFBReference('products/' + product.id).$bind($scope, 'currentProduct');
            };

            $scope.hideForm = function(formName) {
                console.log('hideform called', formName);
                if ('page' === formName) {
                    console.log('visible page form', $scope.visiblePageForm);
                    $scope.visiblePageForm = false;
                    $scope.visibleList= true;
                } else if ('product' === formName) {
                    console.log('its type product')
                    $scope.visibleProductForm = false;
                    $scope.visibleList= true;
                    $scope.currentProduct = null;
                } else if ('category' === formName) {
                    $scope.visibleCategoryForm = false;
                    $scope.visibleList= true;
                }
            };

            $scope.loadIframe = function (item) {
                /*
                            @Input: url string to be loaded
                            @Output: return nothing
                            @Description: the function takes a url string and sends it to the workspace service to update the iFrame url of customers site.
                        */

                // var srcPath = scope.basePath + item.path + '/' +item.id;
                var srcPath = $scope.basePath + item.path;
                $rootScope.$broadcast('vlnWorkspaceUrl.change', {
                    url: srcPath
                });
            };

            /**
                scope level functions for working with site data: pages, categories and products
             */
            $scope.addPage = function () {
                /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-page-form
                        */
                $scope.visibleList= false;
                $scope.visiblePageForm = true;
            };

            $scope.addCategory = function () {
                /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-category-form
                        */
                $scope.visibleList= false;
                $scope.visibleCategoryForm = true;
            };

            $scope.addProduct = function () {
                /*
                            @Input: none
                            @Output: return nothing
                            @Description: update the directive template with a value that will animate in the add-product-form
                        */
                $scope.visibleList= false;
                $scope.visibleProductForm = true;
            };

            $scope.editProduct = function (product) {
                $scope.loadIframe(product);
                $scope.visibleAssetList = false;
                $scope.visibleProductForm = true;
                // $scope.currentProduct = product;
                $scope.loadProduct(product);
            };
        }
    ]);