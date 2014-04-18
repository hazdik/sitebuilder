/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnPageCtrl', ['$rootScope', '$scope', 'vlnFireRef', 'vlnConfig',
        function ($rootScope, $scope, vlnFireRef, vlnConfig) {
            'use strict';

            /* Bind to Firebase.io */
            vlnFireRef.products().$bind($scope, 'products');

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

            $scope.elementHeight = vlnConfig.getWorkspaceDimensions().height - 55;


            $scope.editProduct = function (product, index) {
                /**
                 @function
                 @name editProduct
                 @description sets up the app to edit a product and show live changes to iframe app
                 @param {Object,String} product,index
                 @return nothing is returned from this
                 */
                    // $scope.currentProductIndex = index;
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

                var srcPath = vlnConfig.getIframePathBase() + '/product/' + index;

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

                var srcPath = vlnConfig.getIframePathBase() + item.path;

                $rootScope.$broadcast('vlnWorkspaceUrl.change', {
                    url: srcPath
                });
            };

            $scope.$on('vlnPageAction.hideProductForm', function () {
                toggleProductForm();
                toggleAssetList();
            });

            $scope.$on('vlnWorkspace.resize', function () {
                $scope.elementHeight = vlnConfig.getWorkspaceDimensions().height - 55;
            });
        }
    ]);