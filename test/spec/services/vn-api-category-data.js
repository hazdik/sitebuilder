'use strict';

describe('Service: vnApiCategoryData', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnApiCategoryData;
    beforeEach(inject(function (_vnApiCategoryData_) {
        vnApiCategoryData = _vnApiCategoryData_;
    }));

    it('should do something', function () {
        expect(!!vnApiCategoryData).toBe(true);
    });

});
