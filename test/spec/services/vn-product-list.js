'use strict';

describe('Service: vnProductList', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnProductList;
    beforeEach(inject(function (_vnProductList_) {
        vnProductList = _vnProductList_;
    }));

    it('should do something', function () {
        expect(!!vnProductList).toBe(true);
    });

});
