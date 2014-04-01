/*global angular */

angular.module('pieologyApp')
    .factory('vlnSiteFactory', ['$http', '$q', 'vlnConfig', function vlnSiteFactory($http, $q, vlnConfig) {

        'use strict';

        function publishFn() {
            var params = {}, deferred = $q.defer(),
                config = {};

//            $http.post(vlnConfig.get(''), params, config)
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