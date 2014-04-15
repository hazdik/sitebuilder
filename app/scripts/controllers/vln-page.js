/*global angular*/

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$rootScope', '$scope', 'vlnFireRef', 'vlnConfig',
        function ($rootScope, $scope, vlnFireRef, vlnConfig) {
            'use strict';

            $scope.visiblePageForm = false;
            $scope.visibleProductForm = false;
            $scope.visibleCategoryForm = false;
            $scope.visibleAssetList = true;
            $scope.currentProduct = null;
            $scope.currentCategory = null;
            $scope.currentPage = null;
            // $scope.basePath = vlnConfig.getIframePathBase();
            // Gets the product list from firebase
            // $scope.products = vlnUpdateManager.productList();

            // Bind this firebase list example to sync changes up as they happen
            // vlnUpdateManager.productList().$bind($scope, 'products');
            $scope.products = vlnFireRef.products();
            // vlnFireRef.products().$bind($scope, 'products');
            $scope.productKeys = vlnFireRef.products().$getIndex()
            $scope.products.$on('loaded', function() {
                $scope.productKeys = $scope.products.$getIndex();
            });
            // console.log('the index: ', $scope.productKeys);
            // console.log($scope.products);

            /* Scope functionlity */

            $scope.editProduct = function (product) {
                // $scope.currentProduct = $scope.products.$child(product.name);
                $scope.currentProduct = product;

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

            // This listens for things happeningin the directive (product form)
            $scope.$on('vlnPageAction.updateProduct', function(event){
                // angular.forEach($scope.productKeys, function(key) {
                //     var fbObj = $scope.products[key];
                //     if (fbObj.vlnId === $scope.currentProduct.vlnId) {
                //         console.log($scope.products[key]);
                //     }
                // });
                console.log($scope.currentProduct);
                $scope.products.$update($scope.currentProduct);
                console.log('saving changes to current product');
            });

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