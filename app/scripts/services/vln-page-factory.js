
angular.module('pieologyApp')
    .factory('vlnPageFactory', ['$q', function ($q) {

        'use strict';

        var pages = {
            'siteName': 'RunwayClothing.com',
            'siteUrl': 'http://localhost:9778',
            'pages': [
                {
                    'name': 'Home',
                    'pageUrl': 'http://localhost:9778/pages/company'
                },
                {
                    'name': 'About Us',
                    'pageUrl': 'http://localhost:9778/pages/resources'
                },
                {
                    'name': 'Contact Us',
                    'pageUrl': 'http://localhost:9778/pages/partners'
                },
                {
                    'name': 'FAQ\'s',
                    'pageUrl': 'http://localhost:9778/pages/developers'
                },
                {
                    'name': 'Terms',
                    'pageUrl': 'http://localhost:9778/pages/services'
                }
            ],
            'categories': [
                {
                    'name': 'Shirts',
                    'pageUrl': 'http://localhost:9778/pages/company'
                },
                {
                    'name': 'Dresses',
                    'pageUrl': 'http://localhost:9778/pages/resources'
                },
                {
                    'name': 'Hats',
                    'pageUrl': 'http://localhost:9778/pages/partners'
                },
                {
                    'name': 'Shoes',
                    'pageUrl': 'http://localhost:9778/pages/developers'
                }
            ],
            'products': [
                {
                    'name': 'Summer Shirt 1',
                    'pageUrl': 'http://localhost:9778/pages/company',
                    'images': [
                        ''
                    ],
                    'price': '129.99',
                    'currency': '$',
                    'options': [
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/'
                    ],
                    'description': 'A great shirt after surfing all day.'
                },
                {
                    'name': 'Summer Shirt 2',
                    'pageUrl': 'http://localhost:9778/pages/resources',
                    'images': [
                        ''
                    ],
                    'price': '129.99',
                    'currency': '$',
                    'options': [
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/'
                    ],
                    'description': 'A great shirt after surfing all day.'
                },
                {
                    'name': 'Summer Shirt 3',
                    'pageUrl': 'http://localhost:9778/pages/partners',
                    'images': [
                        ''
                    ],
                    'price': '129.99',
                    'currency': '$',
                    'options': [
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/'
                    ],
                    'description': 'A great shirt after surfing all day.'
                },
                {
                    'name': 'Summer Shirt 4',
                    'pageUrl': 'http://localhost:9778/pages/developers',
                    'images': [
                        ''
                    ],
                    'price': '129.99',
                    'currency': '$',
                    'options': [
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/',
                        'http://lorempixel.com/100/100/'
                    ],
                    'description': 'A great shirt after surfing all day.'
                }
            ]
        };

        function getPagesFn() {
            var deferred = $q.defer();
            deferred.resolve(pages);
            return deferred.promise;
        }

        // Public API here
        return {
            getPages: getPagesFn
        };
    }]);