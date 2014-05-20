/*globals SiteBuilder*/

// API ENDPOINTS FOR GETTING DATA
//        return {
//            Article        : $resource(vnDataEndpoint.apiUrl + '/articles'),
//            Category       : $resource(vnDataEndpoint.apiUrl + '/categories'),
//            Cart           : $resource(vnDataEndpoint.apiUrl + '/carts'),
//            Configuration  : $resource(vnDataEndpoint.apiUrl + '/config'),
//            Country        : $resource(vnDataEndpoint.apiUrl + '/countries'),
//            Nav            : $resource(vnDataEndpoint.apiUrl + '/navs'),
//            Product        : $resource(vnDataEndpoint.apiUrl + '/products/')
//        };

SiteBuilder.Services
    .factory('vnDataSrc', ['$q', 'vnEnvironmentContext', 'vnApi', 'vnFirebase', 'vnApiArticleData', 'vnApiCategoryData', 'vnApiProductData',
        function ($q, vnEnvironmentContext, vnApi, vnFirebase, vnApiArticleData, vnApiCategoryData, vnApiProductData) {
            'use strict';

            var environmentContext = vnEnvironmentContext;

            function getContextFn() {
                return environmentContext;
            }

            function getArticlesFn() {
                if ('Production' !== environmentContext) {
                    return vnFirebase.getFirebaseData('articles');  // is an object
                } else {
                    vnApi.Article.get()
                        .$promise.then(function (results) {
                            angular.forEach(results.data, function (r) {
                                var aid = r.id;
                                vnApiArticleData[aid] = r;
                            });
                        });
                    return vnApiArticleData;
                }
            }

            function getCategoriesFn() {
                if ('Production' !== environmentContext) {
                    return vnFirebase.getFirebaseData('categories');
                } else {
                    vnApi.Category.get()
                        .$promise.then(function (results) {
                            angular.forEach(results.data, function (r) {
                                var cid = r.id;
                                vnApiCategoryData[cid] = r;
                            });
                        });
                    return vnApiCategoryData;
                }
            }

            function getProductsFn() {
                if ('Production' !== environmentContext) {
                    return vnFirebase.getFirebaseData('products');
                } else {
                    vnApi.Product.get()
                        .$promise.then(function (results) {
                            angular.forEach(results.data, function (r) {
                                var pid = r.id;
                                vnApiProductData[pid] = r;
                            });
                        });
                    return vnApiProductData;
                }
            }

            return {
                getArticles  : getArticlesFn,
                getCategories: getCategoriesFn,
                getContext   : getContextFn,
                getProducts  : getProductsFn
            };
        }]);
