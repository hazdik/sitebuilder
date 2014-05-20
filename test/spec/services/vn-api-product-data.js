'use strict';

describe('Service: vnApiProductData', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnApiProductData;
    beforeEach(inject(function (_vnApiProductData_) {
        vnApiProductData = _vnApiProductData_;
    }));

    it('should do something', function () {
        expect(!!vnApiProductData).toBe(true);
    });

});
