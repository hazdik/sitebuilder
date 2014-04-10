/*global angular,Firebase*/

angular.module('pieologyApp')
    .factory('vlnUpdateManager', ['$firebase', function ($firebase) {
        'use strict';

        var fbObj = new Firebase('https://brilliant-fire-5600.firebaseio.com/');

        function productListFn() {
            return $firebase ( new Firebase('https://brilliant-fire-5600.firebaseio.com/products/') );
        }

        function testFirebase() {
            return $firebase(fbObj);
        }

        // Public API here
        return {
            testFirebase: testFirebase,
            productList: productListFn
        };
    }]);