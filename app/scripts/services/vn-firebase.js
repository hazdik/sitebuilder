/*global SiteBuilder */

SiteBuilder.Services
    .factory('vnFirebase', function () {
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
