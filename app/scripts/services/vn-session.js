/*globals SiteBuilder*/

SiteBuilder.Services
    .factory('vnSession', ['vnApi',  function (vnApi) {
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
