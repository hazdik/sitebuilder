/*global SiteBuilder*/

SiteBuilder.Services
    .factory('vlnConfig', ['$q', '$rootScope', 'vnApi', function ($q, $rootScope, vnApi) {

        /**
         * @function
         * @name vlnConfig
         * @param $rootScope, $http
         * @return an object with public api contract to get/set dynamic app configuation states.
         */


        'use strict';

        var globalNavState = true,          // Show the app navigation by default.
            currentAction = 'designAction', // Start them here but if conf is persisted turn this into a function.
            globalAttrBucketState = true, // Show the app attributes by default.
            iFramePathBase = '',
            firebaseUrl = '', // Matt
            screenMode = 'desktop',         // Initial screen mode.
            previewMode = false,            // Initial edit/preview mode
            workspaceDimensions = {
                width : 0,
                height: 0
            };               // Initial height (use in Action section ... etc.)

        function getFirebaseUrlFn() {

            /**
             @Input: null
             @Output: a string with the format https://YOURAPP.firebaseio.com
             @Description: a string with the correct firebase url for accessing real time data set
             */
            return firebaseUrl;
        }

        function initConfigFn() {
            /*
             @function initConfigFn
             @param - none
             @return - none
             @description - sets up the dynamic configuarion attributes for the app (iframe url base, firebase url, etc)
             */

            var mockResponse = {
                api     : 'http://www.samplestore.io/api/v1',
                account : 'asdf123',
                context : 'SiteBuilder',
                firebase: 'https://brilliant-fire-5600.firebaseio.com/accounts',
                fbToken : ']idk - this comes from node server[',
                apiToken: ']idk - how do I know if I am logging into edit[',
                sandbox : 'http://localhost:8080'
            };

            //Simulate a admin login response
            iFramePathBase = mockResponse.sandbox;
            firebaseUrl = mockResponse.firebase;

            // Kick of the data retrieval from api
            getNewSessionData();
        }

        function getNewSessionData() {
            /**
             @function
             @name setupSessionData
             @description get api data merge it into a firebase object and update firebase
             @param {}
             @return Boolean
             */
            console.log('setupSession data called');

            var apiResources = [vnApi.Articles.get().$promise,
                                vnApi.Products.get().$promise,
                                vnApi.Categories.get().$promise],
                returnData = [];

            $q.all(apiResources)
                .then(function(response) {
                    angular.forEach(response, function(result) {
                        returnData.push(result.data);
                    });

                    // Merge it all together

                    // Push it up to firebase
                }, function(failure) {
                    console.log(new Error('api requests failed: ', failure));
                });
        }

        function getIframePathBaseFn() {
            if ('' === iFramePathBase) {
                initConfigFn();
            }
            return iFramePathBase;
        }

        function getGlobalNavStateFn() {
            return globalNavState;
        }

        function setGlobalNavStateFn(state) {
            globalNavState = state;
            $rootScope.$broadcast('vlnGlobalNavState.change', { state: state });
        }

        function setCurrentActionFn(action) {
            /*
             @Input a string
             @Output broadcast a message (nothing returned)
             @Purpose - update the string value of the currentAction for tha application

             */
            currentAction = action;
            $rootScope.$broadcast('vlnCurrentAction.change', {action: action });
        }

        function getCurrentActionFn() {
            /*
             @Input - none
             @Output - string value of currentAction
             @Purpose - return the current value of the string currentAction
             */
            return currentAction;
        }

        function getGlobalAttrBucketStateFn() {
            return globalAttrBucketState;
        }

        function setGlobalAttrBucketStateFn(state) {
            globalAttrBucketState = state;
            $rootScope.$broadcast('vlnGlobalAttrBucketState.change', { state: state });
        }

        function getScreenModeFn() {
            return screenMode;
        }

        function setScreenModeFn(mode) {
            screenMode = mode;
        }

        function getPreviewModeFn() {
            return previewMode ? 'on' : 'off';
        }

        function setPreviewModeFn(mode) {
            previewMode = mode;
        }

        function getWorkspaceDimensionsFn() {
            return workspaceDimensions;
        }

        function setWorkspaceDimensionsFn(width, height) {
            workspaceDimensions.height = height;
            workspaceDimensions.widht = width;
        }

        // Public API here
        return {
            getGlobalNavState       : getGlobalNavStateFn,
            setGlobalNavState       : setGlobalNavStateFn,
            getCurrentAction        : getCurrentActionFn,
            setCurrentAction        : setCurrentActionFn,
            getGlobalAttrBucketState: getGlobalAttrBucketStateFn,
            setGlobalAttrBucketState: setGlobalAttrBucketStateFn,
            getIframePathBase       : getIframePathBaseFn,
            initConfig              : initConfigFn,
            getFirebaseUrl          : getFirebaseUrlFn,
            getScreenMode           : getScreenModeFn,
            setScreenMode           : setScreenModeFn,
            getPreviewMode          : getPreviewModeFn,
            setPreviewMode          : setPreviewModeFn,
            getWorkspaceDimensions  : getWorkspaceDimensionsFn,
            setWorkspaceDimensions  : setWorkspaceDimensionsFn
        };
    }]);
