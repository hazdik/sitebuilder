/*global SiteBuilder*/

SiteBuilder.Services
    .factory('vnSession', ['$rootScope', '$q', 'vnApi',
        function ($rootScope, $q, vnApi) {
            'use strict';

            var accountData = {};

            $rootScope.$on('vnSession.init', function (event, args) {
                console.log('testing', {});
                initSessionFn(args);
            });

            function initFn() {
                // Pre authentication set up stuff goes here.
                return true;
            }

            function initSessionFn(response) {
                /**
                 @function
                 @name initSession
                 @description Takes the successful login response and uses it to set up the current edit session
                 @param {Object} response
                 @return
                 */

//                we only init once per session
                accountData = response;
                bootstrapSessionData();
            }

            function bootstrapSessionData() {
                /**
                 @function
                 @name bootstrapSessionData
                 @description Use the account info provided to pull all current data from api and put it into Firebase.
                 @param {}
                 @return Boolean
                 */

                var apiEndpoints = {
                    article : vnApi.Article.get().$promise,
                    category: vnApi.Category.get().$promise,
                    cart    : vnApi.Cart.get().$promise,
                    config  : vnApi.Configuration.get().$promise,
                    country : vnApi.Country.get().$promise,
                    nav     : vnApi.Nav.get().$promise,
                    product : vnApi.Product.get().$promise

                },
                keys = Object.keys(apiEndpoints);

                // Reset Firebase top levels for the endpoints


                // Grab the keys for api endpoints so we know what goes where in firebase¡
                angular.forEach(keys, function (k) {
                    setFirebaseData(k, apiEndpoints[k]);
                });
            }

            function setFirebaseData(path, promise) {
                /**
                 @function
                 @name setFirebaseData
                 @description Use the path string to make a fireRef, reset it to {}, and use the results of the promise to update it.
                 @param {String, $promise} path, promise
                 @return
                 */

                promise.then(function(result) {
                    console.log('api results for ',path, result.data);
                })

                //                // Grab all of the data from the api at once
//                angular.forEach(keys, function (k) {
//                    var promise = apiEndpoints[k];
//
//                    promise.then(function (result) {
//                        apiData[k] = result;
//                    });
//                });
            }

            function syncItemFn(item) {
                /**
                 @function
                 @name syncItem
                 @description Takes an item object (product, article, etc) and a type 'product' etc and syncs the data with correct api endpoint
                 @param {Object} item
                 @return Boolean
                 */
                console.log('Implement the sync endpoint for this item: ', item);
            }

            return {
                init       : initFn,
                initSession: initSessionFn,
                syncItem   : syncItemFn,
            };
        }]);
