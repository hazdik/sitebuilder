

/*global angular */

angular.module('pieologyApp')
    .factory('updateService', function () {

        'use strict';

        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    });
