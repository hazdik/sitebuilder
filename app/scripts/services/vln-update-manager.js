'use strict';

angular.module('pieologyApp')
    .factory('vlnUpdateManager', ['vlnConfig', function () {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    }]);