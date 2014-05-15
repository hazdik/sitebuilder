/*global SiteBuilder */

SiteBuilder.Services
    .factory('vnFirebase', function () {
        'use strict';
        // Service logic
        // ...

        function fbObjectFn() {
            return {
                accountData: {},
                articles: {},
                categories: {},
                carts: {},
                components: {},
                config: {},
                countries: {},
                nav: {},
                products: {}
            };
        }

        // Public API here
        return {
            fbObject: fbObjectFn
        };
    });
