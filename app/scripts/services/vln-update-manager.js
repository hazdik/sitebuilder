'use strict';

angular.module('pieologyApp')
    .factory('vlnUpdateManager', ['$firebase', 'vlnConfig', function ($firebase, vlnConfig) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        function testFirebase() {
            console.log($firebase);
        }

        // Public API here
        return {
            testFirebase: testFirebase
        };
    }]);