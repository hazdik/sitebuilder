angular.module('pieologyApp')
    .controller('vlnProductCtrl', ['$scope', 'vlnUpdateManager', function ($scope, vlnUpdateManager) {
        'use strict';

        // $scope.currentProduct = vlnUpdateManager.getFBReference('products/' + product.id);

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);