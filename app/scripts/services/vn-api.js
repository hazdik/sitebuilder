/*global SiteBuilder*/

SiteBuilder.Services
    .factory('vnApi', ['$resource', function ($resource) {
        'use strict';
        /**
         @function
         @name vnApi
         @description Create a $resource that maps to the Volusion resources for various api endpoints
         @param {}
         @return $resource
         */

        return {
            Article        : $resource('http://www.samplestore.io/api/v1/articles'),
            Category       : $resource('http://www.samplestore.io/api/v1/categories'),
            Cart           : $resource('http://www.samplestore.io/api/v1/carts'),
            Configuration  : $resource('http://www.samplestore.io/api/v1/config'),
            Country        : $resource('http://www.samplestore.io/api/v1/countries'),
            Nav            : $resource('http://www.samplestore.io/api/v1/navs'),
            Product        : $resource('http://www.samplestore.io/api/v1/products/')
        };
    }]);
