/*global angular,Firebase*/

angular.module('pieologyApp')
    .factory('vlnUpdateManager', ['$firebase', 'vlnConfig',
        function ($firebase, vlnConfig) {
            'use strict';

            // var fbObj = new Firebase('https://brilliant-fire-5600.firebaseio.com/');
            var fbUrl = vlnConfig.getFirebaseUrl();

            function getFBReferenceFn(endpoint) {
                /**
                        @function
                        @name firebaseReference
                        @description create a $firebase object with the app global firebase url and endpoint provided
                        @param {String} endpoint
                        @return $firebase
                     */
                // console.log('vlnConfig fbbase', vlnConfig.getFirebaseUrl());
                // console.log('fb product url: ', fbUrl + endpoint);
                return $firebase(new Firebase(fbUrl + '/' + endpoint));
            }

            function productListFn() {
                /**
                @function
                @name productListFn
                @description return a list of products wraped in a $firebase object
                @param none
                @return $firebase object
             */
                return $firebase(new Firebase('https://brilliant-fire-5600.firebaseio.com/products/'));
            }

            // Public API here
            return {
                productList: productListFn,
                getFBReference: getFBReferenceFn
            };
        }
    ]);