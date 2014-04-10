'use strict';

angular.module('pieologyApp')
    .factory('vlnUpdateManager', ['$firebase', 'vlnConfig', function ($firebase, vlnConfig) {

        var fbObj = new Firebase('https://brilliant-fire-5600.firebaseio.com');

        function testFirebase() {
            return $firebase(fbObj);
        }

        // Public API here
        return {
            testFirebase: testFirebase
        };
    }]);