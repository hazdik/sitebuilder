/*globals SiteBuilder*/

SiteBuilder.Services
    .factory('vnSession', ['$q', 'vnApi',  function ($q, vnApi) {
        'use strict';
        // Service logic
        // ...

        var meaningOfLife = 42;

        console.log('added vnApi', vnApi);
        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    }]);
