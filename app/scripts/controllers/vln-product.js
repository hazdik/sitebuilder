angular.module('pieologyApp')
    .controller('vlnProductCtrl', ['$scope', 'vlnUpdateManager', function ($scope, vlnUpdateManager) {
        'use strict';

        console.log('id is: ', $scope.currentProduct);
        scope.updatedProduct = {};
        // $scope.currentProduct = vlnUpdateManager.getFBReference('products/' + product.id);

        $scope.getCurrentProduct = function (id) {
            vlnUpdateManager.getFBReference(currentProduct.id).$bind(scope, 'updatedProduct');
            console.log('directive level currentProduct: ', scope.currentProduct);
        }

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);