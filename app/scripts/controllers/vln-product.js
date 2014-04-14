angular.module('pieologyApp')
    .controller('vlnProductCtrl', ['$scope', 'vlnUpdateManager', function ($scope, vlnUpdateManager) {
        'use strict';

        console.log('id is: ', $scope.currentProduct);

        // $scope.currentProduct = vlnUpdateManager.getFBReference('products/' + product.id);

        $scope.getCurrentProduct = function (id) {
            // vlnUpdateManager.getFBReference().$bind(scope, 'currentProduct');
            console.log('getting curr prod with id: ', id);
        }

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);