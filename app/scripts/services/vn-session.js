/*global SiteBuilder*/

SiteBuilder.Services
    .factory('vnSession', ['$rootScope', '$q', 'vnApi', 'vnFirebase',
        function ($rootScope, $q, vnApi, vnFirebase) {
            'use strict';

            var accountData = {};

            $rootScope.$on('vnSession.init', function (event, args) {
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
                    articles  : vnApi.Article.get().$promise,
                    categories: vnApi.Category.get().$promise,
                    carts     : vnApi.Cart.get().$promise,
                    config    : vnApi.Configuration.get().$promise,
                    countries : vnApi.Country.get().$promise,
                    navs      : vnApi.Nav.get().$promise,
                    products  : vnApi.Product.get().$promise

                },
                keys = Object.keys(apiEndpoints);

                // Set up Firebase with fresh data for this session.
                vnFirebase.resetSiteBuilder();
                // Grab the keys for api endpoints so we know what goes where in firebase
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
                promise.then(function (result) {
//                    console.log('results data', result.data);
                    vnFirebase.resetDataForPath(path, result.data);
                });
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
                syncItem   : syncItemFn
            };
        }]);
