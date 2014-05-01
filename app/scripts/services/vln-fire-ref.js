/*global SiteBuilder, Firebase, SiteDNA */

SiteBuilder.Services
    .factory('vlnFireRef', ['$firebase', 'vlnConfig',
        function ($firebase, vlnConfig) {
            'use strict';

            var fbUrl = vlnConfig.getFirebaseUrl();
            // var _products = {} || products // dont re init

            function productsFn() {
                /**
                 @function
                 @name productsFn
                 @description return a firebase object initilaized with a list of products resource using the SIteDNA object
                 @param non
                 @return Firebase reference object
                 */
                return $firebase(SiteDNA.getProducts());
            }

            function articlesFn() {
                /**
                 @function
                 @name articlesFn
                 @description return the SiteDNA data for articles from correct data source
                 @param {none} none
                 @return $firebase object (willl need to modify for api data)
                 */
                return $firebase( SiteDNA.getArticles() );
            }

            function categoriesFn() {
                /**
                 @function
                 @name categoriesFn
                 @description return SiteDNA data for categories from correct data source
                 @param {none} none
                 @return $firebase object
                 */
                return $firebase( SiteDNA.getCategories() );
            }

            function themesFn() {
                /**
                 @function
                 @name themesFn
                 @description return a firebase object initilaized with a list of themes resource
                 @param non
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/themes'));
            }

            function themeCurrentFn() {
                /**
                 @function
                 @name themeCurrentFn
                 @description return a firebase reference to the name for current theme
                 @param {String} id
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/siteTheme'));
            }

            function themeFn(id) {
                /**
                 @function
                 @name themeFn
                 @description given a theme id return a firebase reference to the data for that theme
                 @param {String} id
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/themes/' + id));
            }

            function modeCurrentFn() {
                /**
                 @function
                 @name modeCurrentFn
                 @description \return a firebase reference to the current mode (EDIT / PREVIEW)
                 @param {none} none
                 @return Firebase reference object
                 */
                return $firebase(new Firebase(fbUrl + '/currentMode'));
            }

            // Public API here
            return {
                articles    : articlesFn,
                categories  : categoriesFn,
                products    : productsFn,
                themes      : themesFn,
                theme       : themeFn,
                themeCurrent: themeCurrentFn,
                modeCurrent : modeCurrentFn
            };
        }
    ]);