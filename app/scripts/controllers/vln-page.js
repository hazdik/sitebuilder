'use strict';

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$scope', 'vlnUpdateManager', function ($scope, vlnUpdateManager) {

        // Gets the product list from firebase and updates there when change happens
        vlnUpdateManager.productList().$bind($scope, 'products');

    }]);