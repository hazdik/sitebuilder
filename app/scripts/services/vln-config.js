/*global angular */

angular.module('pieologyApp')
    .factory('vlnConfig', ['$rootScope', function ($rootScope) {

        'use strict';
        var globalNavState = true; // Show the app navigation by default.

        function getGlobalNavState() {
            return globalNavState;
        }

        function setGlobalNavState(state) {
            globalNavState = state;
            $rootScope.$broadcast('vlnGlobalNavState.change', { state: state });
        }

        // Public API here
        return {
            getGlobalNavState: getGlobalNavState,
            setGlobalNavState: setGlobalNavState
        };
    }]);
