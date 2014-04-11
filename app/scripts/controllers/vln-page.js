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
                 // console.log('in edit form fn with product', product);
                 // console.log('firebase endpoint: ', 'products/' + product.id);
                 // vlnUpdateManager.getFBReference('products/' + product.id).$bind($scope, 'currentProduct');
            };

            $scope.loadIframe = function (item) {
                /**
                    @function
                    @name loadIframe
                    @description sends an url sctring to the workspace service to upate the ifram src url
                    @param {Object} item (must have item.path)
                    @return nothing is returned from this
                 */

                // var srcPath = scope.basePath + item.path + '/' +item.id;
                var srcPath = $scope.basePath + item.path;
                $rootScope.$broadcast('vlnWorkspaceUrl.change', {
                    url: srcPath
                });
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
                // $scope.visibleProductForm = true;
                toggleProductForm();
                // $scope.currentProduct = product;
                // $scope.loadProduct(product);
            };

            function toggleProductForm() {
                if ($scope.visibleProductForm) {
                    $scope.visibleProductForm = false;
                    console.log("form should be hidden", $scope.visibleProductForm);
                    return;
                }
                $scope.visibleProductForm = true;
                console.log("form should be visible", $scope.visibleProductForm);
            }
        }
    ]);