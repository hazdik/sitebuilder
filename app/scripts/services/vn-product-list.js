/*global SiteBuilder */

SiteBuilder.Services
    .factory('vnProductList', function () {
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
