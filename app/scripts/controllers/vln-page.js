'use strict';

angular.module('pieologyApp')
    .controller('vlnPageCtrl', ['$firebase', '$scope', function ($firebase, $scope) {
        // console.log('updateMgr  print: ', vlnUpdateManager.testFirebase());
        var fbProducts = new Firebase('https://brilliant-fire-5600.firebaseio.com/products');
        $scope.data = $firebase(fbProducts);

        fbProducts.on('value', function(snapshot) {
            console.log('the data was changed: ', snapshot.val());
        });

        console.log('product ctrl loaded');
        console.log($scope.data);
        console.log('site name: ', $scope.data.siteName);
    }]);