
angular.module('pieologyApp')
    .factory('vlnThemeFactory', ['$resource', '$q',
        function($resource, $q) {

            'use strict';

            var themes = [
                {
                    'name': 'Theme 1',
                    'url': 'https://www.google.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 2',
                    'url': 'https://www.yahoo.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 3',
                    'url': 'https://www.bing.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 4',
                    'url': 'https://www.duckduckgo.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 1',
                    'url': 'https://www.google.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 2',
                    'url': 'https://www.yahoo.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 3',
                    'url': 'https://www.bing.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 4',
                    'url': 'https://www.duckduckgo.com',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }
            ];

            function getThemesFn() {
                // Optimization thought: create my own custom theme objects
                // cache them here or in the config
                // only make the network request if no cache
                // pre load the images

                var deferred = $q.defer();
                deferred.resolve(themes);
                return deferred.promise;
            }

            // Public API here
            return {
                getThemes: getThemesFn
            };
        }
    ]);