
angular.module('siteBuilder')
    .factory('vlnPageFactory', ['$http', '$q', function ($http, $q) {

        'use strict';

        function getPagesFn() {
            var deferred = $q.defer();

            $http.get('images/account-data.json')
            .then(function(promise) {
                deferred.resolve(promise.data);
            });

            return deferred.promise;
        }

        // Public API here
        return {
            getPages: getPagesFn
        };
    }]);