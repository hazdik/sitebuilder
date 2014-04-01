/*global angular */

angular.module('pieologyApp')
    .factory('vlnConfig', ['$rootScope', function ($rootScope) {

        'use strict';
        var globalNavState = true,          // Show the app navigation by default.
            currentAction = 'designAction'; // Start them here but if conf is persisted turn this into a function.

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

        // Public API here
        return {
            getGlobalNavState: getGlobalNavStateFn,
            setGlobalNavState: setGlobalNavStateFn,
            getCurrentAction: getCurrentActionFn,
            setCurrentAction: setCurrentActionFn
        };
    }]);
