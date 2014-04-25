/*global SiteBuilder, Firebase, SiteDNA */

SiteBuilder.Services
    .factory('vlnFireRef', ['$firebase', 'vlnConfig',
        function ($firebase, vlnConfig) {
            'use strict';

            var fbUrl = vlnConfig.getFirebaseUrl();
            // var _products = {} || products // dont re init

            function productsFn() {
                /**
                 @function
                 @name productsFn
                 @description return a firebase object initilaized with a list of products resource using the SIteDNA object
                 @param non
                 @return Firebase reference object
                 */
//                return $firebase(new Firebase(fbUrl + '/products'));
                 return $firebase( SiteDNA.getProducts() );
            }

//            function productFn(id) {
//                /**
//                 @function
//                 @name productFn
//                 @description given a product id return a firebase reference to the data for that product
//                 @param {String} id
//                 @return Firebase reference object
//                 */
//                return $firebase(new Firebase(fbUrl + '/products/' + id));
//            }

            function themesFn() {
                /**
                 @function
                 @name themesFn
                 @description return a firebase object initilaized with a list of themes resource
                 @param non
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/themes'));
            }

            function themeCurrentFn() {
                /**
                 @function
                 @name themeCurrentFn
                 @description return a firebase reference to the name for current theme
                 @param {String} id
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/siteTheme'));
            }

            function themeFn(id) {
                /**
                 @function
                 @name themeFn
                 @description given a theme id return a firebase reference to the data for that theme
                 @param {String} id
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/themes/' + id));
            }

            // Public API here
            return {
                products    : productsFn,
//                product     : productFn,
                themes      : themesFn,
                theme       : themeFn,
                themeCurrent: themeCurrentFn
            };
        }
    ]);

// angular.module('siteBuilder')
//     .factory('vlnUpdateManager', ['$firebase', 'vlnConfig',
//         function ($firebase, vlnConfig) {
//             'use strict';

//             // var fbObj = new Firebase('https://brilliant-fire-5600.firebaseio.com/');
//             var fbUrl = vlnConfig.getFirebaseUrl();

//             function getFBReferenceFn(endpoint) {
//                 /**
//                         @function
//                         @name firebaseReference
//                         @description create a $firebase object with the app global firebase url and endpoint provided
//                         @param {String} endpoint
//                         @return $firebase
//                      */
//                 // console.log('vlnConfig fbbase', vlnConfig.getFirebaseUrl());
//                 console.log('fb product url: ', fbUrl + endpoint);
//                 return $firebase(new Firebase(fbUrl + '/' + endpoint));
//             }

//             function productListFn() {
//                 /**
//                 @function
//                 @name productListFn
//                 @description return a list of products wraped in a $firebase object
//                 @param none
//                 @return $firebase object
//              */
//                 return $firebase(new Firebase('https://brilliant-fire-5600.firebaseio.com/products/'));
//             }

//             // Public API here
//             return {
//                 productList: productListFn,
//                 getFBReference: getFBReferenceFn
//             };
//         }
//     ]);