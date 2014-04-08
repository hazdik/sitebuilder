
angular.module('pieologyApp')
    .factory('vlnThemeFactory', ['$http', '$q',
        function($http, $q) {

            'use strict';

            function getThemesFn() {


                var deferred = $q.defer();
                $http.get('images/themes.json')
                .then(function (themes) {
                    console.log(themes);
                    deferred.resolve(themes);
                });
                return deferred.promise;
            }

            // Public API here
            return {
                getThemes: getThemesFn
            };
        }
    ]);