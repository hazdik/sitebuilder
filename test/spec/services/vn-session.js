'use strict';

describe('Service: vnSession', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vnSession;
    beforeEach(inject(function (_vnSession_) {
        vnSession = _vnSession_;
    }));

    it('should do something', function () {
        expect(!!vnSession).toBe(true);
    });

    it('should do something else', function () {
        expect(!!vnSession).toBe(true);
    });
});
