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

        //$resource('/user/:userId', {userId:'@id'});

        return {
            Articles: $resource('http://www.samplestore.io/api/v1/articles'),
            Categories: $resource('http://www.samplestore.io/api/v1/categories'),
            Products: $resource('http://www.samplestore.io/api/v1/products/', {productCode: '@productCode'})
        };
    }]);
