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
            // $scope.products = vlnFireRef.products();
            vlnFireRef.products().$bind($scope, 'products');

            /* Scope functionlity */

            $scope.editProduct = function (product) {
                // $scope.currentProductIndex = index;
                $scope.currentProduct = product;
                toggleAssetList();
                toggleProductForm();
            };

            $scope.loadFramePage = function (item) {
                /**
                    @function
                    @name loadFramePage
                    @description sends an url sctring to the workspace service to upate the ifram src url
                    @param {Object} item (must have item.path)
                    @return nothing is returned from this
                 */

                var srcPath = vlnConfig.getIframePathBase() + item.path;
                // console.log(item);
                // var srcPath = $scope.basePath + item.path;
                console.log(item);
                console.log(vlnConfig.getIframePathBase())
                console.log(srcPath);
                $rootScope.$broadcast('vlnWorkspaceUrl.change', {
                    url: srcPath
                });
            };

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