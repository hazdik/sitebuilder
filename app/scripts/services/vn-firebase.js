/*global SiteBuilder*/

SiteBuilder.Services
    .factory('vnFirebase', function () {
        'use strict';
        // service logic
        // ...

        function fbObjectfn() {
            return {
                accountdata: {},
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

        // public api here
        return {
            fbObject: fbObjectfn
        };
    });
