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
            // console.log($scope.products);

            /* Scope functionlity */

            $scope.editProduct = function (product) {
                $scope.currentProduct = $scope.products.$child(product.name);

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