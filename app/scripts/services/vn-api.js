/*global SiteBuilder*/

SiteBuilder.Services
    .factory('vnApi', ['$resource', 'vnDataEndpoint', function ($resource, vnDataEndpoint) {
        'use strict';
        /**
         @function
         @name vnApi
         @description Create a $resource that maps to the Volusion resources for various api endpoints
         @param {}
         @return $resource
         */

        return {
            Article        : $resource(vnDataEndpoint.apiUrl + '/articles'),
            Category       : $resource(vnDataEndpoint.apiUrl + '/categories'),
            Cart           : $resource(vnDataEndpoint.apiUrl + '/carts'),
            Configuration  : $resource(vnDataEndpoint.apiUrl + '/config'),
            Country        : $resource(vnDataEndpoint.apiUrl + '/countries'),
            Nav            : $resource(vnDataEndpoint.apiUrl + '/navs'),
            Product        : $resource(vnDataEndpoint.apiUrl + '/products/')
        };
    }]);
