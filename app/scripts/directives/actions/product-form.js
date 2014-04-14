'use strict';

angular.module('pieologyApp')
    .directive('vlnProductForm', function ($parse) {
        return {
            templateUrl: 'views/actions/product-form.html',
            restrict: 'A',
            scope: {
                prodId: '=',
                currentProduct: '='
            },
            link: function postLink(scope, element, attrs) {

//                attrs.$observe('prodId', function(value) {
//                    console.log('prodId value: ', value);
//                });
//
//                attrs.$watch(attrs.currentProduct, function(value) {
//                    console.log('Current Product: ', value);
//                });

                scope.hideForm = function() {
                    scope.$emit('vlnPageAction.hideProductForm');
                };

                element.on('$destroy', function() {
                // Add directive reset/cleanup tasks here
                console.log('product-form-directive was destroyed');
                });
            }
        };
    });