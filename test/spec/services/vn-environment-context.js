'use strict';

describe('Service: vnEnvironmentContext', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnEnvironmentContext;
    beforeEach(inject(function (_vnEnvironmentContext_) {
        vnEnvironmentContext = _vnEnvironmentContext_;
    }));

    it('should do something', function () {
        expect(!!vnEnvironmentContext).toBe(true);
    });

});
