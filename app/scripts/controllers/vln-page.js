/*global angular*/

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$rootScope', '$scope', 'vlnUpdateManager', 'vlnConfig',
        function ($rootScope, $scope, vlnUpdateManager, vlnConfig) {
            'use strict';

            $scope.visiblePageForm = false;
            $scope.visibleProductForm = false;
            $scope.visibleCategoryForm = false;
            $scope.visibleAssetList = true;
            $scope.currentProductId = null;
            $scope.currentCategory = null;
            $scope.currentPage = null;
            $scope.currentProduct = null;
            $scope.basePath = vlnConfig.getIframePathBase();

            // Gets the product list from firebase
            $scope.products = vlnUpdateManager.productList();
            // vlnUpdateManager.productList().$bind($scope, 'products');

            // $scope.getProduct = function (id) {
            //     return vlnUpdateManager.getFBReference('products/2');
            // };

            /* Scope functionlity */

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

            $scope.editProduct = function (product) {
                // console.log(product);
                $scope.loadIframe(product);
                $scope.currentProductId = product.id;
                $scope.currentProduct = product;
                // console.log($scope.getProduct(product.id));
                toggleAssetList();
                toggleProductForm();
                console.log('editProd id value: ', $scope.currentProductId);
            };

            // This listens for the click on the directive (product form)
            $scope.$on('vlnPageAction.hideProductForm', function(event) {
                toggleProductForm();
                toggleAssetList();
            });

            function toggleAssetList() {
                if ($scope.visibleAssetList) {
                    $scope.visibleAssetList = false;
                    return;
                }
                $scope.visibleAssetList = true;
            }

            function toggleProductForm() {
                if ($scope.visibleProductForm) {
                    $scope.visibleProductForm = false;
                    return;
                }
                $scope.visibleProductForm = true;
            }
        }
    ]);