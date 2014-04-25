/* global Firebase*/
var SiteDNA = SiteDNA || {};

SiteDNA = (function () {
    'use strict';

    // The cached instance and other SiteDNA state variables
    var authStatus = false,
        authToken,
        context,
        firebaseLocation,
        hostLocation,
        instance;

    function configFn(response) {
        /**
         @function
         @name configFn
         @description configure/init the initial state for SiteDNA enforces our singleton
         @param { Object } response
         @return Boolean
         */

        if (!instance && response.authToken) {
            // Hardcodeing for development, needs to come form our servers
            setAuthStatus(response.authToken);
            setLocation(response.host);
            setFirebaseLocation(response.fbRef);
            // if localhost:9000 SiteBuilder context
            // if localhost:8080 Workspace context
            // else production context

            context = setContext(hostLocation);
        }

        // Kill the SiteDNA session if the token is not there.
        if (!response.authToken) {
            logoutFn(response);
        }

        // reset SiteDNA to default state


        return instance;


        /** DEV NOTES
         States for this data object:
         1) In sitebuilder it will need to talk to volusion api and Firebase
         2) In workspace app it will only need to talk to Firebase
         3) In production it will only need to talk to Volusion API
         **/

    }

    function getFirebaseRefFn() {
        /**
         @function
         @name getFirebaseRef
         @description given a firebase url return a firebase reference (object)
         @param { String } url
         @return Firebase object
         */
        return new Firebase(firebaseLocation);
    }

    function getNavFn() {
        /**
         @function
         @name getNavFn
         @description decide to use either Volusion api or Firebase to get the nav items data
         @param {none} none
         @return Firebase obj with nav items || generic object with items
         */
        if (!authStatus) {
            return false;
        }

        // use the correct enpoint here and either get data from vln api or set up Firebase for
        if ('production' === context) {
            // DEV NOTE: how to handle the actual response
            // might be something like
            // $.get('path').then(function(response) {
            //     return response.data;
            // });
            return {
                'data': {
                    'navmenu1': [
                        {
                            'name'  : 'Apparel',
                            'link'  : '/SearchResults.asp?Cat=1814',
                            'title' : null,
                            'active': '',
                            'subnav': [
                                {
                                    'name'  : 'Women',
                                    'link'  : '/SearchResults.asp?Cat=1815',
                                    'title' : null,
                                    'active': ''
                                },
                                {
                                    'name'  : 'Men',
                                    'link'  : '/SearchResults.asp?Cat=1816',
                                    'title' : null,
                                    'active': ''
                                }
                            ]
                        },
                        {
                            'name'  : 'Home Decor',
                            'link'  : '/SearchResults.asp?Cat=1477',
                            'title' : null,
                            'active': '',
                            'subnav': [
                                {
                                    'name'  : 'Furniture',
                                    'link'  : '/SearchResults.asp?Cat=1516',
                                    'title' : null,
                                    'active': ''
                                },
                                {
                                    'name'  : 'Home Accessories',
                                    'link'  : '/SearchResults.asp?Cat=1517',
                                    'title' : null,
                                    'active': ''
                                }
                            ]
                        },
                        {
                            'name'  : 'Beauty',
                            'link'  : '/SearchResults.asp?Cat=1513',
                            'title' : null,
                            'active': '',
                            'subnav': [
                                {
                                    'name'  : 'Bath and Body',
                                    'link'  : '/SearchResults.asp?Cat=1553',
                                    'title' : null,
                                    'active': ''
                                },
                                {
                                    'name'  : 'Hair Care',
                                    'link'  : '/SearchResults.asp?Cat=1554',
                                    'title' : 'Hair Care',
                                    'active': ''
                                }
                            ]
                        },
                        {
                            'name'  : 'Gourmet Food',
                            'link'  : '/SearchResults.asp?Cat=1514',
                            'title' : null,
                            'active': '',
                            'subnav': [
                                {
                                    'name'  : 'Specialty Items',
                                    'link'  : '/SearchResults.asp?Cat=1632',
                                    'title' : null,
                                    'active': ''
                                },
                                {
                                    'name'  : 'Sweets',
                                    'link'  : '/SearchResults.asp?Cat=1673',
                                    'title' : null,
                                    'active': ''
                                }
                            ]
                        }
                    ],
                    'navmenu2': [
                        {
                            'name'  : 'About Us',
                            'link'  : 'aboutus.asp',
                            'title' : null,
                            'active': ''
                        },
                        {
                            'name'  : 'Returns',
                            'link'  : '/returns.asp',
                            'title' : null,
                            'active': ''
                        },
                        {
                            'name'  : 'Shipping',
                            'link'  : '/articles.asp?ID=57',
                            'title' : null,
                            'active': ''
                        },
                        {
                            'name'  : 'Site Help / FAQ',
                            'link'  : '/help.asp',
                            'title' : null,
                            'active': ''
                        }
                    ]
                }
            };
        } else {
            return new Firebase(firebaseLocation + '/nav');
        }
//        return {};
    }

    function getArticlesFn() {
        /**
         @function
         @name getArticlesFn
         @description decide to use either firebase or volusion api to get the pages data
         @param {none} none
         @return Object containing a list of pages for the account
         */
        console.log('getting articles');
        if (!authStatus) {
            return false;
        }

        if ('production' === context) {
            // DEV NOTE: how to handle the actual response
            // might be something like
            // $.get('path').then(function(response) {
            //     return response.data;
            // });
            return {
                'data': {
                    'articles': [
                        {
                            'id'   : 1,
                            'title': 'Page three',
                            'body' : '<b>Home Page</b><br /><i>Front page</i><br /><br />History of company, mission statement, etc.',
                            'seo'  : {
                                'metaTagTitle'      : null,
                                'metaTagKeywords'   : null,
                                'metaTagDescription': null,
                                'metaTagsOverride'  : null
                            }
                        },
                        {
                            'id'   : 2,
                            'title': 'Page two',
                            'body' : '<b>Page Two</b><br /><i>Not as good as page one</i><br /><br />History of company, mission statement, etc.',
                            'seo'  : {
                                'metaTagTitle'      : null,
                                'metaTagKeywords'   : null,
                                'metaTagDescription': null,
                                'metaTagsOverride'  : null
                            }
                        }
                    ]
                }
            };
        } else {
            console.log('returning firebase for: ', firebaseLocation + '/articles');
            console.log(new Firebase(firebaseLocation + '/articles'));
            return new Firebase(firebaseLocation + '/articles');
        }
    }

    function getProductsFn() {
        /**
         @function
         @name getProductsFn
         @description decide to use either firebase or volusion api to get the product data
         @param {none} none
         @return Object containing a list of products
         */
        if (!authStatus) {
            return false;
        }
        if ('production' === context) {
            // DEV NOTE: how to handle the actual response
            // might be something like
            // $.get('path').then(function(response) {
            //     return response.data;
            // });
            return {
                'data': {}
            };
        } else {
            return new Firebase(firebaseLocation + '/products');
        }
    }

    function isAuthenticatedFn() {
        /**
         @function
         @name isAuthenticated
         @description returns the authenticated private variable
         @param { None } none
         @return Boolean
         */
        return authStatus;
    }

    function logoutFn(response) {
        /**
         @function
         @name logoutFn
         @description use this to manage the state that configures object
         @param {Object} response with paramters we use to set states
         @return non
         */
        setAuthStatus(response.authToken);
        setLocation(response.host);
        setFirebaseLocation(response.fbRef);
        context = setContext(hostLocation);
    }

    function setAuthStatus(token) {
        /**
         @function
         @name setAuthStatus
         @description uses the response.authToken to set the authToken and authStatus
         @param {response} response is an object
         @return Boolean
         */
        if (token) {
            authToken = token;
            authStatus = true;
        } else {
            authToken = '';
            authStatus = false;
        }
        return;
    }

    function setFirebaseLocation(loc) {
        /**
         @function
         @name setFirebaseLocation
         @description given a https url as a string set the SiteDNA firebaseLocation Variable for later use
         @param { String } loc
         @return none
         */

            // Do any validation of the url to ensure its valid here
        firebaseLocation = loc;
    }

    function setContext(location) {
        /**
         @function
         @name setContext
         @description given the location string set the current context for SiteDNA
         @param {String} location
         @return String
         */
        if ('' !== location) {
            return 'NO CONTEXT';
        } else if ('localhost:9000' === location) {
            return 'sitebuilder';
        } else if ('localhost:8080' === location) {
            return 'production';
        } else {
            return 'workspace';
        }
    }

    function setLocation(loc) {
        /**
         @function
         @name setLocation
         @description given a string loc, if hostLocation is not set, set it and return
         @param {String} location
         @return none
         */
        if (!hostLocation) {
            hostLocation = loc;
        }
        return;
    }

    return {
        // Return the public api for this object
        config         : configFn,
        isAuthenticated: isAuthenticatedFn,
        getFirebaseRef : getFirebaseRefFn,
        getArticles    : getArticlesFn,
        getNav         : getNavFn,
        getProducts    : getProductsFn,
        logout         : logoutFn
    };

})();

