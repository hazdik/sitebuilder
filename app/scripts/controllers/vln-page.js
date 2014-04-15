/*global angular*/

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$rootScope', '$scope', '$firebase', 'vlnFireRef', 'vlnConfig',
        function ($rootScope, $scope, $firebase, vlnFireRef, vlnConfig) {
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
            // $scope.products = vlnUpdateManager.productList();

            // Bind this firebase list example to sync changes up as they happen
            // vlnUpdateManager.productList().$bind($scope, 'products');
            $scope.products = $firebase(vlnFireRef.products());

            /* Scope functionlity */

            $scope.editProduct = function (product) {
                console.log(product);
                // $scope.currentProduct = $scope.products.$child(product.id);
                // console.log($scope.products);
                // console.log($scope.products.$child(product.id));
                // $scope.loadIframe(product);

                // $scope.currentProduct = $scope.products.$child()
                // $scope.currentProductId = product.id;
                // $scope.currentProduct = product;
                // // console.log($scope.getProduct(product.id));
                toggleAssetList();
                toggleProductForm();
                // console.log('editProd id value: ', $scope.currentProductId);
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