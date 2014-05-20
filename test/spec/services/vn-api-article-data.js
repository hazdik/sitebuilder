'use strict';

describe('Service: vnApiArticleData', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnApiArticleData;
    beforeEach(inject(function (_vnApiArticleData_) {
        vnApiArticleData = _vnApiArticleData_;
    }));

    it('should do something', function () {
        expect(!!vnApiArticleData).toBe(true);
    });

});
