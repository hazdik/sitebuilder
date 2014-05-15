/*global Firebase, SiteBuilder*/

SiteBuilder.Services
    .factory('vnFirebase', ['$firebase', function ($firebase) {
        'use strict';

        /**
         * typical fb paths are as follows:
         * https://brilliant-fire-5600.firebaseio.com
         * /account_articles/<ACCOUNT_IDENTITY>/{ data }
         * /account_carts/<ACCOUNT_IDENTITY>/{ data }
         * /account_config/<ACCOUNT_IDENTITY>/{ data }
         * /account_categories/<ACCOUNT_IDENTITY>/{ data }
         * /account_countries/<ACCOUNT_IDENTITY>/{ data }
         * /account_navs/<ACCOUNT_IDENTITY>/{ data }
         * /account_products/<ACCOUNT_IDENTITY>/{ data }
         * /account_sitebuilder/<ACCOUNT_IDENTITY>/{ data }
         */
        function SiteBuilderDefaults() {
            /**
             @function
             @name SiteBuilderDefaults
             @description Return an object with the SiteBuilder Default settings for Firebase
             @param {}
             @return Object
             */

            // Note this will get more complicated when we want to start remembering things
            // like current theme, state etc ...
            return {
                component: {
                    id: 'uniq id/code for the item',
                    typeDesc: 'thing.attribute',
                    typeId: '9999 - each component/widget has a type to id it, thereby enabling bideirectional communication between sitebuilder and workspace '
                },
                product: '',
                category: '',
                page: '',
                theme: {
                    id: '1',
                    name: 'default',
                    thumbnail: 'http://localhost:8090/default.png',
                    cssRef: 'http://localhost:8090/default.css'
                },
                previewMode: 'on',
                preferredLanguge: 'en-us'
            };
        }

        function resetSiteBuilderFn() {
            /**
             @function
             @name resetSiteBuilderFn
             @description reset the SiteBuilder App state to default settings.
             @param {}
             @return Boolean
             */
            // Remember: /account_{path}/<accountIdenity>/{path} is the pattern
            // Also may need to iterate through only children that are desireable to update.

            var sbRef = $firebase( new Firebase('https://brilliant-fire-5600.firebaseio.com/account_sitebuilder/asdf123') );
            var sbd = new SiteBuilderDefaults();
            sbRef.$set( sbd );

            return true;
        }

        function resetDataForPathFn(path, data) {
            /**
             @function
             @name resetDataForPathFn
             @description Given a string path, create a firebase reference and update the data for that path
             @param {String, Object || Array of Objects} path, data
             @return Boolean
             */

            // Remember: /account_{path}/<accountIdenity>/{path} is the pattern

            console.log('path: ', path);
            if ( path && path === typeof String() ){
                console.log('the path', path);
            }
        }

        // public api here
        return {
            resetSiteBuilder: resetSiteBuilderFn,
            resetDataForPath: resetDataForPathFn
        };
    }]);
