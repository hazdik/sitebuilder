'use strict';

angular.module('pieologyApp')
    .directive('vlnProductForm', ['vlnUpdateManager', function (vlnUpdateManager) {
        return {
            templateUrl: 'views/actions/product-form.html',
            restrict: 'A',
            scope: {
                currentProduct: '='
            },
            link: function postLink(scope, element, attrs) {

                scope.$watch('currentProduct', function(value) {
                    console.log(value);
                    // if (null !== scope.currentProduct) {
                    //     // vlnUpdateManager.getFBReference('products/' + scope.currentProduct.id).$bind(scope, 'updatedProduct');
                    //     // vlnUpdateManager.getFBReference('products/' + scope.currentProduct.id).$bind(scope, 'updatedProductProduct');
                    //     // scope.updatedProduct = vlnUpdateManager.getFBReference('products/' + scope.currentProduct.id);
                    //     // console.log('in prod from direcive: ', scope.currentProduct);
                    //     // scope.updatedProduct.$bind(scope, 'updatedProduct');
                    //     // console.log(scope.updatedProduct);
                    //     // console.log(scope.updatedProduct);
                    //     // scope.currentProduct.$bind(scope, 'updatedProduct');
                    // }
                });

                scope.hideForm = function() {
                    scope.updatedProduct = null;
                    scope.$emit('vlnPageAction.hideProductForm');
                };

                element.on('$destroy', function() {
                // Add directive reset/cleanup tasks here
                console.log('product-form-directive was destroyed');
                });
            }
        };
    }]);