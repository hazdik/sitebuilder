'use strict';

describe('Service: vnFirebase', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnFirebase;

    beforeEach(inject(function (_vnFirebase_) {
        vnFirebase = _vnFirebase_;
    }));

    it('should exist', function () {
        expect(!!vnFirebase).toBe(true);
        expect(typeof vnFirebase).toBe('object');
    });

    it('should accept strings for getFirebaseData', function(){
        var test = vnFirebase.getFirebaseData( {} );
        expect(test).toBe(false);
        var test2 = vnFirebase.getFirebaseData( 'navs' );
        expect(typeof test2).toBe('object');
    });

    it('should accept strings and objects for resetDataForPath', function(){
        var test = vnFirebase.resetDataForPath('navs', {} );
        expect(test).toBe(true);

        var test2 = vnFirebase.resetDataForPath( {} );
        expect(test2).toBe(false);

        var test3 = vnFirebase.resetDataForPath( 'navs' );
        expect(test3).toBe(false);

//        var test2 = vnFirebase.resetDataForPath( 'navs', {} );
//        expect(typeof test2).toBe('object');
    });
//
//    var fbItems = {
//            articles   : 'articles',
//            carts      : 'carts',
//            categories : 'categories',
//            config     : 'config',
//            countries  : 'countries',
//            navs       : 'navs',
//            products   : 'products',
//            sitebuilder: 'sitebuilder'
//        },
//        keys = Object.keys(fbItems);
//
//    it('should exist', function() {
//        for (var k in keys) {
//            var item = keys[k];
//            var fbObj = vnFirebase.getFirebaseData(item);
//            var fireRef = fbObj.$getRef();
//            console.log(fireRef.name());
//        }
//    });

//    describe('should return resources for firebase items', function () {
//        var fbItems = {
//                articles   : '/account_articles',
//                carts      : '/account_carts',
//                categories : '/account_categories',
//                config     : '/account_config',
//                countries  : '/accounts_countries',
//                navs       : '/account_navs',
//                products   : '/account_products',
//                sitebuilder: '/account_sitebuilder'
//            },
//            keys = Object.keys(fbItems);
//
//
//
//        it('should exist', function() {
//            console.log(vnFirebase);
//            for (var k in keys) {
//                var item = keys[k];
//                console.log(vnFirebase.getFirebaseData(item));
//            }
//        });
//
//    });

});
