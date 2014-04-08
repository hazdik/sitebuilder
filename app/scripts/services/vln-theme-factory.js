
angular.module('pieologyApp')
    .factory('vlnThemeFactory', ['$resource', '$q',
        function($resource, $q) {

            'use strict';

            /*
                TODO: Restructure the json response to include the current theme data
            */
            var themes = [
                {
                    'name': 'Theme 1',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 2',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 3',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 4',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 5',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 6',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 7',
                    'url': 'http://localhost:9778',
                    'thumbnail': 'http://lorempixel.com/200/200/'
                }, {
                    'name': 'Theme 8',
                    'url': 'http://localhost:9778',
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