/*global angular */

angular.module('pieologyApp')
    .factory('vlnConfig', ['$rootScope', function ($rootScope) {

        'use strict';

        var meaningOfLife = 'happy water', // Keep this until testing is realized.
            globalNavState = true, // Show the app navigation by default.
            globalAttrBucketState = true; // Show the app attributes by default.

        function getGlobalNavState() {
            return globalNavState;
        }

        function setGlobalNavState(state) {
            globalNavState = state;
            $rootScope.$broadcast('vlnGlobalNavState.change', { state: state });
        }

        function getGlobalAttrBucketStateFn() {
            return globalAttrBucketState;
        }

        function setGlobalAttrBucketStateFn(state) {
            globalAttrBucketState = state;
            $rootScope.$broadcast('vlnGlobalAttrBucketState.change', { state: state });
        }

        // Public API here
        return {
            getGlobalNavState       : getGlobalNavState,
            setGlobalNavState       : setGlobalNavState,
            getGlobalAttrBucketState: getGlobalAttrBucketStateFn,
            setGlobalAttrBucketState: setGlobalAttrBucketStateFn
        };
    }]);
