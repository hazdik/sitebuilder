'use strict';

describe('Service: vnProduct', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnProduct;
    beforeEach(inject(function (_vnProduct_) {
        vnProduct = _vnProduct_;
    }));

    it('should do something', function () {
        console.log(typeof vnProduct);
        expect(!!vnProduct).toBe(true);
    });

});
