/*global angular */

angular.module('pieologyApp')
    .factory('vlnConfig', ['$rootScope', '$http', function ($rootScope, $http) {

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
            firebaseUrl = 'https://brilliant-fire-5600.firebaseio.com',
            screenMode = 'desktop',         // Initial screen mode.
            previewMode = false;            // Initial edit/preview mode

        function getFirebaseUrlFn() {

            /**
                @Input: null
                @Output: a string with the format https://YOURAPP.firebaseio.com
                @Description: a string with the correct firebase url for accessing real time data set
             */
            return firebaseUrl;
        }

        function initConfigFn () {
            /*
                @function initConfigFn
                @param - none
                @return - none
                @description - sets up the dynamic configuarion attributes for the app (iframe url base, firebase url, etc)
            */

            /* This is the setter for the iFrameBasePath */
            $http.get('images/account-data.json')
            .then(function(promise) {
                iFramePathBase = promise.data.siteUrl;
            });
        }

        function getIframePathBaseFn() {
            /*
                @Input - none
                @Output - iFramePathBase
                @Description - return the current value of iFrameBasePath
            */

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

        function getScreenModeFn () {
            return screenMode;
        }

        function setScreenModeFn (mode) {
            screenMode = mode;
        }

        function getPreviewModeFn () {
            return previewMode ? 'on' : 'off';
        }

        function setPreviewModeFn (mode) {
            previewMode = mode;
        }

        // Public API here
        return {
            getGlobalNavState        : getGlobalNavStateFn,
            setGlobalNavState        : setGlobalNavStateFn,
            getCurrentAction         : getCurrentActionFn,
            setCurrentAction         : setCurrentActionFn,
            getGlobalAttrBucketState : getGlobalAttrBucketStateFn,
            setGlobalAttrBucketState : setGlobalAttrBucketStateFn,
            getIframePathBase        : getIframePathBaseFn,
            initConfig               : initConfigFn,
            getFirebaseUrl           : getFirebaseUrlFn,
            getScreenMode            : getScreenModeFn,
            setScreenMode            : setScreenModeFn,
            getPreviewMode           : getPreviewModeFn,
            setPreviewMode           : setPreviewModeFn
        };
    }]);
