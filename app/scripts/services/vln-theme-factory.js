'use strict';

angular.module('pieologyApp')
    .factory('vlnThemeFactory', ['$resource', '$q',
            function($resource, $q) {
                var themes = [{
                    'name': 'Theme 1',
                    'url': 'https://www.google.com'
                }, {
                    'name': 'Theme 2',
                    'url': 'https://www.yahoo.com'
                }, {
                    'name': 'Theme 3',
                    'url': 'https://www.bing.com'
                }, {
                    'name': 'Theme 4',
                    'url': 'https://www.duckduckgo.com'
                }, ];

                function getThemes() {
                    var deferred = $q.defer();
                    deferred.resolve(themes);
                    return deferred.promise;
                }

                // Public API here
                return {
                    getThemes: getThemes
                };
            });