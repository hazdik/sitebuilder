///*global SiteBuilder,SiteDNA */
//
//SiteBuilder.Services
//    .factory('vlnPageFactory', ['$firebase', '$http', '$q', function ($firebase, $http, $q) {
//
//        'use strict';
//
//        function getArticlesFn() {
//            /**
//             @function
//             @name getArticlesFn
//             @description uses the configured information and gets all article data either from Firebase or from Volusion API
//             @param {none} none
//             @return Either dataset from API or Firebase object.
//             */
//            return $firebase(SiteDNA.getArticles());
//        }
//        // Public API here
//        return {
//            getArticles: getArticlesFn
//        };
//    }]);