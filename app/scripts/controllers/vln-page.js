/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnPageCtrl', ['$rootScope', '$scope', 'vnConfig',
        function ($rootScope, $scope, vnConfig) {
            'use strict';

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

            /* Scope functionlity */
            $scope.visiblePageForm = false;
            $scope.visibleProductForm = false;
            $scope.visibleCategoryForm = false;
            $scope.visibleAssetList = true;
            $scope.currentProductIndex = null;
            $scope.currentCategory = null;
            $scope.currentPage = null;

            $scope.elementHeight = vnConfig.getWorkspaceDimensions().height - 55;


            $scope.editProduct = function (product, index) {
                /**
                 @function
                 @name editProduct
                 @description sets up the app to edit a product and show live changes to iframe app
                 @param {Object,String} product,index
                 @return nothing is returned from this
                 */

                $scope.currentProduct = product;
                toggleAssetList();
                toggleProductForm();
                $scope.loadFrameProduct(index);
            };

            $scope.loadFrameProduct = function (index) {
                /**
                 @function
                 @name loadFrameProduct
                 @description sends a product url string to the workspace service to upate the ifram src url
                 @param {Object,String} product,index
                 @return nothing is returned from this
                 */

                var srcPath = vnConfig.getIframePathBase() + '/product/' + index;

                $rootScope.$broadcast('vlnWorkspaceUrl.change', {
                    url: srcPath
                });
            };


            $scope.loadFramePage = function (item) {
                /**
                 @function
                 @name loadFramePage
                 @description sends a page url string to the workspace service to upate the ifram src url
                 @param {Object} item (must have item.path)
                 @return nothing is returned from this
                 */

                var srcPath = vnConfig.getIframePathBase() + item;
                $rootScope.$broadcast('vlnWorkspaceUrl.change', {
                    url: srcPath
                });
            };

            $scope.$on('vlnPageAction.hideProductForm', function () {
                toggleProductForm();
                toggleAssetList();
            });

            $scope.$on('vlnWorkspace.resize', function () {
                $scope.elementHeight = vnConfig.getWorkspaceDimensions().height - 55;
            });
        }
    ]);
