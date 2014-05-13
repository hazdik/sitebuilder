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
            Articles: $resource('http://www.samplestore.io/api/v1/articles')
        };
    }]);
