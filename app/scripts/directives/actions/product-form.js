'use strict';

angular.module('siteBuilder')
    .directive('vlnProductForm', ['vlnUpdateManager', function (vlnUpdateManager) {
        return {
            templateUrl: 'views/actions/product-form.html',
            restrict: 'A',
            scope: {
                currentProduct: '='
            },
            link: function postLink(scope, element, attrs) {

                scope.hideForm = function() {
                    scope.updatedProduct = null;
                    scope.$emit('vlnPageAction.hideProductForm');
                };

                element.on('$destroy', function() {
                    // Add directive reset/cleanup tasks here
//                    console.log('product-form-directive was destroyed');
                });
            }
        };
    }]);