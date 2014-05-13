'use strict';

describe('Service: vnApi', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnApi;
    beforeEach(inject(function (_vnApi_) {
        vnApi = _vnApi_;
    }));

    it('should do something', function () {
        expect(!!vnApi).toBe(true);
        expect(true).toBe(true);
    });

});
