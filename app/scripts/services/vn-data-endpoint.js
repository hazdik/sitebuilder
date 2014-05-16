/*globals SiteBuilder*/

SiteBuilder.Constants
  .constant('vnDataEndpoint', (function() {
        'use strict';
        var firebase = 'https://brilliant-fire-5600.firebaseio.com',
            apibase = 'http://www.samplestore.io/api/v1';

        return {
            fbUrl: firebase,
            apiUrl: apibase
        };
    })());
