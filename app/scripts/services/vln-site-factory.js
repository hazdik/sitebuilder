/*global SiteBuilder */

SiteBuilder.Services
    .factory('vlnSiteFactory', ['$http', '$q', 'vnConfig', function vlnSiteFactory($http, $q) {

        'use strict';

        function publishFn() {
            // var params = {}, deferred = $q.defer(),
            //     config = {};
            var deferred = $q.defer();

//            $http.post(vnConfig.get(''), params, config)
//                .success(function (response, status, headers, config) {
//                    if ('true' === response.success) {
//                        deferred.resolve(response);
//                    } else {
//                        //TODO - error handling
//                        deferred.reject(response);
//                    }
//                })
//                .error(function (response, status, headers, config) {
//                    //TODO - error handling
//                    deferred.reject('Unable to publish site');
//                });

            deferred.resolve('{success : true}');

            return deferred.promise;
        }

        return {
            publish: publishFn
        };
    }]);
