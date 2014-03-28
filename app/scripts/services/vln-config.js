'use strict';

angular.module('pieologyApp')
.factory('vlnConfig', function () {

    var meaningOfLife = 42; // Keep this until testing is realized.
    meaningOfLife = 'happy water'; // Keep this until testing is realized.

    var globalNavState = true; // true is shown and default

    function getGlobalNavState () {
        return globalNavState;
    }

    function setGlobalNavState (state) {
        globalNavState = state;
    }


    // Public API here
    return {
        getGlobalNavState: getGlobalNavState,
        setGlobalNavState: setGlobalNavState
    };
});
