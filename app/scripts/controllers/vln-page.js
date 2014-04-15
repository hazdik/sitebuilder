/*global angular*/

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$rootScope', '$scope', 'vlnFireRef', 'vlnConfig',
        function ($rootScope, $scope, vlnFireRef, vlnConfig) {
            'use strict';

            $scope.visiblePageForm = false;
            $scope.visibleProductForm = false;
            $scope.visibleCategoryForm = false;
            $scope.visibleAssetList = true;
            $scope.currentProductIndex = null;
            $scope.currentCategory = null;
            $scope.currentPage = null;
            // $scope.basePath = vlnConfig.getIframePathBase();
            // Gets the product list from firebase
            // $scope.products = vlnUpdateManager.productList();

            // Bind this firebase list example to sync changes up as they happen
            // vlnUpdateManager.productList().$bind($scope, 'products');
            $scope.products = vlnFireRef.products();
            // $scope.products.$on('child_changed', function(childSnapshot, prevChildName) {
            //     console.log('child_changed');
            //     console.log('childSnapshot: ', childSnapshot);
            //     console.log('prevChildName: ', prevChildName);
            // });
            // vlnFireRef.products().$bind($scope, 'products');
            $scope.productKeys = vlnFireRef.products().$getIndex()
            $scope.products.$on('loaded', function() {
                $scope.productKeys = $scope.products.$getIndex();
            });
            // console.log('the index: ', $scope.productKeys);
            // console.log($scope.products);

            /* Scope functionlity */

            $scope.editProduct = function (product) {
                // $scope.currentProductIndex = index;
                $scope.currentProduct = product;
                toggleAssetList();
                toggleProductForm();
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

                // var tempObj = vlnFireRef.product($scope.currentProductIndex);
                // tempObj.$update($scope.currentProduct);

                // var tempObj = $scope.products[$scope.currentProductIndex];
                // tempObj.name = $scope.currentProduct.name;
                // tempObj.price = $scope.currentProduct.price;
                // tempObj.description = $scope.currentProduct.description;
                // tempObj.images = $scope.currentProduct.images;
                // tempObj.currency = $scope.currentProduct.currency;
                // $scope.products.$update(tempObj);
                console.log($scope.currentProduct);
                $scope.products.$save();
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